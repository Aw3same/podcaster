import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { PodcastInformation } from '@/components/PodcastInformation';
import { usePodcastStore } from '@/store/podcastStore';

jest.mock('@/store/podcastStore');
jest.mock('@/components/EpisodesTable', () => ({
  EpisodesTable: () => <div data-testid="episodes-table" />,
}));

const mockUsePodcastStore = usePodcastStore as jest.MockedFunction<typeof usePodcastStore>;

describe('PodcastInformation', () => {
  beforeEach(() => {
    mockUsePodcastStore.mockReturnValue({
      podcastEpisodes: {
        '123': {
          episodes: [{ id: '1' }, { id: '2' }],
        },
      },
    } as any);
  });

  it('renders loading state when id is not available', () => {
    render(
      <MemoryRouter initialEntries={['/podcast']}>
        <Routes>
          <Route path="/podcast" element={<PodcastInformation />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders episode count and EpisodesTable when id is available', () => {
    render(
      <MemoryRouter initialEntries={['/podcast/123']}>
        <Routes>
          <Route path="/podcast/:id" element={<PodcastInformation />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Epidodes: 2')).toBeInTheDocument();
    expect(screen.getByTestId('episodes-table')).toBeInTheDocument();
  });
});