

import { render, screen } from '@testing-library/react';
import { PodcastEpisodeInformation } from '@/components/PodcastEpisodeInformation';
import { MemoryRouter } from 'react-router-dom';
import { usePodcastStore } from '@/store/podcastStore';
import { testEpisode } from '../../../__mocks__/episodes';

jest.mock('@/store/podcastStore');
jest.mock('dompurify', () => ({
  sanitize: jest.fn((content) => content),
}));

const mockUsePodcastStore = usePodcastStore as jest.MockedFunction<typeof usePodcastStore>;

const renderWithRouter = () => {
  return render(
    <MemoryRouter initialEntries={[`/podcast/132154564`]}>
      <PodcastEpisodeInformation />
    </MemoryRouter>
  );
};

describe('PodcastEpisodeInformation', () => {
  beforeEach(() => {
    mockUsePodcastStore.mockReturnValue({
      episodeDetail: testEpisode,
    } as ReturnType<typeof usePodcastStore>);
  });

  it('renders episode details', () => {
    renderWithRouter();

    expect(screen.getByText(testEpisode.trackName)).toBeInTheDocument();
    expect(screen.getByText(testEpisode.description)).toBeInTheDocument();
    const audioElement = screen.getByTestId('audio-player');
    expect(audioElement).toBeInTheDocument();
    expect(audioElement.querySelector('source')).toHaveAttribute('src', testEpisode.episodeUrl);
  });

  it('shows default message when description is not available', () => {
    mockUsePodcastStore.mockReturnValue({
      episodeDetail: { ...testEpisode, description: '' },
    } as ReturnType<typeof usePodcastStore>);

    renderWithRouter();

    expect(screen.getByText('There is no description available.')).toBeInTheDocument();
  });

  it('renders nothing when episode detail is not available', () => {
    mockUsePodcastStore.mockReturnValue({
      episodeDetail: null,
    } as ReturnType<typeof usePodcastStore>);

    const { container } = renderWithRouter();

    expect(container.firstChild).toBeNull();
  });
});