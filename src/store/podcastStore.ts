import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'
import { Entry } from '@/types/podcast';
import { getPodcastDetail, getPodcasts } from '@/services/podcastService';
import { PodcastDetail } from '@/types/podcastDetail';
interface PodcastStore {
  podcasts: Entry[]
  filteredPodcasts: Entry[]
  filterText: string
  lastFetchDate: Date | null
  podcastDetails: Record<string, { detail: PodcastDetail, lastFetchDate: Date }>
  fetchPodcasts: () => Promise<void>
  setFilterText: (text: string) => void
  fetchPodcastDetail: (podcastId: string) => Promise<PodcastDetail>
}

export const usePodcastStore = create(
  persist<PodcastStore>(
    (set, get) => ({
      podcasts: [],
      filteredPodcasts: [],
      filterText: '',
      lastFetchDate: null,
      podcastDetails: {},
      fetchPodcasts: async () => {
        const currentDate = new Date()
        const { lastFetchDate } = get()
        
        if (!lastFetchDate || currentDate.getTime() - lastFetchDate?.getTime() > 24 * 60 * 60 * 1000) {
          const fetchedPodcasts = await getPodcasts()
          set({ podcasts: fetchedPodcasts, filteredPodcasts: fetchedPodcasts, lastFetchDate: currentDate })
        }
      },
      setFilterText: (text) => {
        const { podcasts } = get()
        const filtered = podcasts.filter(podcast => 
          podcast.title.label.toLowerCase().includes(text.toLowerCase()) ||
          podcast['im:artist'].label.toLowerCase().includes(text.toLowerCase()) ||
          podcast.summary.label.toLowerCase().includes(text.toLowerCase())
        )
        set({ filterText: text, filteredPodcasts: filtered })
      },
      fetchPodcastDetail: async (podcastId: string) => {
        const currentDate = new Date()
        const { podcastDetails } = get()
        const cachedDetail = podcastDetails[podcastId]
        
        // Verificar si cachedDetail existe y si lastFetchDate es una fecha válida
        const cachedDate = cachedDetail?.lastFetchDate ? new Date(cachedDetail.lastFetchDate) : null
        
        if (!cachedDetail || !cachedDate || currentDate.getTime() - cachedDate.getTime() > 24 * 60 * 60 * 1000) {
          const fetchedDetail = await getPodcastDetail(podcastId)
          set({ 
            podcastDetails: { 
              ...podcastDetails, 
              [podcastId]: { detail: fetchedDetail, lastFetchDate: currentDate } 
            } 
          })
          return fetchedDetail
        }
        return cachedDetail.detail
      }
    }),
    {
      name: 'podcast-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
