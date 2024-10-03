export interface PodcastEpisode {
  artistId: number
  artistName: string
  artistViewUrl: string
  artworkUrl100: string
  artworkUrl30: string
  artworkUrl60: string
  artworkUrl600: string
  collectionCensoredName: string
  collectionExplicitness: string
  collectionHdPrice: number
  collectionId: number
  collectionName: string
  collectionPrice: number
  collectionViewUrl: string
  contentAdvisoryRating: string
  country: string
  currency: string
  description: string
  episodeUrl: string
  feedUrl: string
  genreIds: string[],
  genres: string[]
  kind: string
  primaryGenreName: string
  releaseDate: Date,
  shortDescription: string
  trackCensoredName: string
  trackCount: number
  trackExplicitness: string
  trackId: number
  trackName: string
  trackPrice: number
  trackTimeMillis: number
  trackViewUrl: string
  wrapperType: string
}


