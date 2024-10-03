import { PodcastEpisode } from '../src/types/podcastEpisode';

export const testEpisode: PodcastEpisode = {
    trackId: 1,
    trackName: 'Test Episode',
    description: 'Test Description',
    releaseDate: new Date('2023-01-01'),
    trackTimeMillis: 1800000,
    episodeUrl: 'http://test.com/episode.mp3',
    artistId: 1,
    artistName: 'Test Artist',
    trackCensoredName: 'Test Censored Track',
    collectionCensoredName: 'Test Censored Collection',
    genreIds: ['1', '2', '3'],
    genres: ['Genre 1', 'Genre 2', 'Genre 3'],
    contentAdvisoryRating: 'Clean',
    country: 'US',
    currency: 'USD',
    primaryGenreName: 'Genre 1',
    shortDescription: 'Test Short Description',
    artworkUrl60: 'http://test.com/artwork.jpg',
    artworkUrl100: 'http://test.com/artwork.jpg',
    artworkUrl600: 'http://test.com/artwork.jpg',
    artworkUrl30: 'http://test.com/artwork.jpg',
    artistViewUrl: 'http://test.com/artist.html',
    collectionViewUrl: 'http://test.com/collection.html',
    feedUrl: 'http://test.com/feed.xml',
    trackViewUrl: 'http://test.com/track.html',
    wrapperType: 'episode',
    kind: 'episode',
    collectionPrice: 1,
    trackPrice: 1,
    collectionHdPrice: 1,
    collectionExplicitness: 'Clean',
    trackExplicitness: 'Clean',
    trackCount: 1,
    collectionId: 1,
    collectionName: 'Test Collection'      
  };

export const mockEpisodes: PodcastEpisode[] = [
    {
        trackId: 1,
        trackName: 'Test Episode 1',
        description: 'Test Description',
        releaseDate: new Date('2023-01-01'),
        trackTimeMillis: 1800000,
        episodeUrl: 'http://test.com/episode.mp3',
        artistId: 1,
        artistName: 'Test Artist',
        trackCensoredName: 'Test Censored Track',
        collectionCensoredName: 'Test Censored Collection',
        genreIds: ['1', '2', '3'],
        genres: ['Genre 1', 'Genre 2', 'Genre 3'],
        contentAdvisoryRating: 'Clean',
        country: 'US',
        currency: 'USD',
        primaryGenreName: 'Genre 1',
        shortDescription: 'Test Short Description',
        artworkUrl60: 'http://test.com/artwork.jpg',
        artworkUrl100: 'http://test.com/artwork.jpg',
        artworkUrl600: 'http://test.com/artwork.jpg',
        artworkUrl30: 'http://test.com/artwork.jpg',
        artistViewUrl: 'http://test.com/artist.html',
        collectionViewUrl: 'http://test.com/collection.html',
        feedUrl: 'http://test.com/feed.xml',
        trackViewUrl: 'http://test.com/track.html',
        wrapperType: 'episode',
        kind: 'episode',
        collectionPrice: 1,
        trackPrice: 1,
        collectionHdPrice: 1,
        collectionExplicitness: 'Clean',
        trackExplicitness: 'Clean',
        trackCount: 1,
        collectionId: 1,
        collectionName: 'Test Collection'      
      },
      {
        trackId: 2,
        trackName: 'Test Episode 2',
        description: 'Test Description 2',
        releaseDate: new Date('2023-01-01'),
        trackTimeMillis: 1800000,
        episodeUrl: 'http://test.com/episode.mp3',
        artistId: 2,
        artistName: 'Test Artist',
        trackCensoredName: 'Test Censored Track',
        collectionCensoredName: 'Test Censored Collection',
        genreIds: ['1', '2', '3'],
        genres: ['Genre 1', 'Genre 2', 'Genre 3'],
        contentAdvisoryRating: 'Clean',
        country: 'US',
        currency: 'USD',
        primaryGenreName: 'Genre 1',
        shortDescription: 'Test Short Description',
        artworkUrl60: 'http://test.com/artwork.jpg',
        artworkUrl100: 'http://test.com/artwork.jpg',
        artworkUrl600: 'http://test.com/artwork.jpg',
        artworkUrl30: 'http://test.com/artwork.jpg',
        artistViewUrl: 'http://test.com/artist.html',
        collectionViewUrl: 'http://test.com/collection.html',
        feedUrl: 'http://test.com/feed.xml',
        trackViewUrl: 'http://test.com/track.html',
        wrapperType: 'episode',
        kind: 'episode',
        collectionPrice: 2,
        trackPrice: 2,
        collectionHdPrice: 2,
        collectionExplicitness: 'Clean',
        trackExplicitness: 'Clean',
        trackCount: 2,
        collectionId: 2,
        collectionName: 'Test Collection'      
      }

]