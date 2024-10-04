import { getPodcasts, getPodcastEpisodes } from '../../services/podcastService';
import fetch from 'jest-fetch-mock';

beforeAll(() => {
  fetch.enableMocks();
});

afterEach(() => {
  fetch.resetMocks();
});

describe('podcastService', () => {
  describe('getPodcasts', () => {
    it('fetches podcasts successfully', async () => {
      const mockPodcasts = {
        feed: {
          entry: [
            { id: '1', title: { label: 'Podcast 1' } },
            { id: '2', title: { label: 'Podcast 2' } },
          ],
        },
      };

      fetch.mockResponseOnce(JSON.stringify(mockPodcasts));

      const result = await getPodcasts();

      expect(fetch).toHaveBeenCalledWith(
        'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
      );
      expect(result).toEqual(mockPodcasts.feed.entry);
    });

    it('handles fetch errors', async () => {
      fetch.mockRejectOnce(new Error('Network error'));

      await expect(getPodcasts()).rejects.toThrow('Network error');
    });
  });

  describe('getPodcastEpisodes', () => {
    const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

    it('fetches podcast episodes successfully', async () => {
      const mockEpisodes = {
        results: [
          { trackId: '1', trackName: 'Episode 1' },
          { trackId: '2', trackName: 'Episode 2' },
        ],
      };

      fetch.mockResponseOnce(JSON.stringify(mockEpisodes));

      const podcastId = '12345';
      const result = await getPodcastEpisodes(podcastId);

      expect(fetch).toHaveBeenCalledWith(
        `${CORS_PROXY_URL}https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`
      );
      expect(result).toEqual(mockEpisodes.results);
    });

    it('handles fetch errors for episodes', async () => {
      fetch.mockRejectOnce(new Error('Network error'));

      await expect(getPodcastEpisodes('12345')).rejects.toThrow('Network error');
    });
  });
});