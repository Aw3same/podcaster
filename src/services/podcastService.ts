import { Entry } from '@/types/podcast';

const PODCAST_URL = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"

export async function getPodcasts(): Promise<Entry[]> {
  const response = await fetch(PODCAST_URL)
  const podcasts = await response.json()
  return podcasts.feed.entry
}