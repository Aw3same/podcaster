import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'
import { Entry } from '@/types/podcast';
import { getPodcastEpisodes, getPodcasts } from '@/services/podcastService';
import { PodcastEpisode } from '@/types/podcastEpisode';

export interface PodcastStore {
  podcasts: Entry[]
  filteredPodcasts: Entry[]
  filterText: string
  lastFetchDate: string | null
  podcastDetail: Entry | null
  podcastEpisodes: Record<string, { episodes: PodcastEpisode[], lastFetchDate: string }>
  episodeDetail: PodcastEpisode | null
  fetchPodcasts: () => Promise<void>
  setFilterText: (text: string) => void
  fetchPodcastDetail: (podcastId: string) => Promise<void>
  setPodcastDetail: (podcast: Entry | null) => void
  setEpisodeDetail: (episode: PodcastEpisode | null) => void
}

export const usePodcastStore = create(
  persist<PodcastStore>(
    (set, get) => ({
      podcasts: [],
      filteredPodcasts: [],
      filterText: '',
      lastFetchDate: null,
      podcastDetail: null,
      podcastEpisodes: {},
      episodeDetail: null,
      fetchPodcasts: async () => {
        const currentDate = new Date()
        const { lastFetchDate } = get()
        
        const lastFetchDateObj = lastFetchDate ? new Date(lastFetchDate) : null
        
        if (!lastFetchDateObj || currentDate.getTime() - lastFetchDateObj.getTime() > 24 * 60 * 60 * 1000) {
          const fetchedPodcasts = await getPodcasts()
          set({ 
            podcasts: fetchedPodcasts, 
            filteredPodcasts: fetchedPodcasts, 
            lastFetchDate: currentDate.toISOString()
          })
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
        const { podcastEpisodes } = get()
        const cachedEpisodes = podcastEpisodes[podcastId]
        
        const cachedDate = cachedEpisodes?.lastFetchDate ? new Date(cachedEpisodes.lastFetchDate) : null
        
        if (!cachedEpisodes || !cachedDate || currentDate.getTime() - cachedDate.getTime() > 24 * 60 * 60 * 1000) {
          const fetchedDetail = await getPodcastEpisodes(podcastId)
          set({ 
            podcastEpisodes: { 
              ...podcastEpisodes, 
              [podcastId]: { episodes: fetchedDetail, lastFetchDate: currentDate.toISOString() }
            } 
          })
        }
      },
      setPodcastDetail: (podcast) => {
        set({ podcastDetail: podcast })
      },
      setEpisodeDetail: (episode) => {
        set({ episodeDetail: episode })
      }
    }),
    {
      name: 'podcast-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)