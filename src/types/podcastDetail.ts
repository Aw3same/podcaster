export interface PodcastDetail {
  id: string
  title: string
  description: string
  image: string
  author: string
  episodes: Episode[]
}

export interface Episode {
  id: string
  title: string
  pubDate: string
  duration: string
}