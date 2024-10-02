import { Entry } from '@/types/podcast';
import { PodcastDetail } from '@/types/podcastDetail';
const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/'

export async function getPodcasts(): Promise<Entry[]> {
  const PODCAST_URL = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  const response = await fetch(PODCAST_URL)
  const podcasts = await response.json()
  return podcasts.feed.entry
}

export async function getPodcastDetail(podcastId: string): Promise<PodcastDetail> {
  const PODCAST_DETAIL_URL = CORS_PROXY_URL + `https://itunes.apple.com/lookup?id=${podcastId}`
  const response = await fetch(PODCAST_DETAIL_URL)
  const podcastDetails = await response.json()
  return podcastDetails.results[0]
}

