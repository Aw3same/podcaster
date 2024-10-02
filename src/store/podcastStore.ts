import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'
import { Entry } from '@/types/podcast';
import { getPodcasts } from '@/services/podcastService';

interface PodcastStore {
  podcasts: Entry[];
  filteredPodcasts: Entry[];
  filterText: string;
  lastFetchDate: Date | null;
  fetchPodcasts: () => Promise<void>;
  setFilterText: (text: string) => void;
}

export const usePodcastStore = create(
    persist<PodcastStore>(
      (set, get) => ({
        podcasts: [],
        filteredPodcasts: [],
        filterText: '',
        lastFetchDate: null,
        fetchPodcasts: async () => {
          const currentDate = new Date()
          const { lastFetchDate } = get()
          
          if (!lastFetchDate || currentDate.getTime() - lastFetchDate.getTime() > 24 * 60 * 60 * 1000) {
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
        }
      }),
      {
        name: 'podcast-storage', 
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
