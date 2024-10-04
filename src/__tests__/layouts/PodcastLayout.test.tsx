import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { PodcastLayout } from '@/layouts/PodcastLayout';
import { usePodcastStore } from '@/store/podcastStore';

jest.mock('@/store/podcastStore');

const mockUsePodcastStore = usePodcastStore as jest.MockedFunction<typeof usePodcastStore>;

describe('PodcastLayout', () => {
  const mockPodcastDetail = {
    'im:image': [null, null, { label: 'test-image.jpg' }],
    title: { label: 'Test Podcast - Episode' },
    'im:artist': { label: 'Test Artist' },
    summary: { label: 'Test summary' },
  };

  beforeEach(() => {
    mockUsePodcastStore.mockReturnValue({
      fetchPodcastDetail: jest.fn(),
      podcastDetail: mockPodcastDetail,
    } as any);
  });

  it('renders loading state when podcastDetail is not available', () => {
    mockUsePodcastStore.mockReturnValue({
      fetchPodcastDetail: jest.fn(),
      podcastDetail: null,
    } as any);

    render(
      <MemoryRouter initialEntries={['/podcast/123']}>
        <Routes>
          <Route path="/podcast/:id" element={<PodcastLayout />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders podcast details when available', async () => {
    render(
      <MemoryRouter initialEntries={['/podcast/123']}>
        <Routes>
          <Route path="/podcast/:id" element={<PodcastLayout />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Podcast')).toBeInTheDocument();
      expect(screen.getByText('by Test Artist')).toBeInTheDocument();
      expect(screen.getByText('Test summary')).toBeInTheDocument();
    });
  });

  it('calls fetchPodcastDetail on mount', () => {
    const fetchPodcastDetail = jest.fn();
    mockUsePodcastStore.mockReturnValue({
      fetchPodcastDetail,
      podcastDetail: mockPodcastDetail,
    } as any);

    render(
      <MemoryRouter initialEntries={['/podcast/123']}>
        <Routes>
          <Route path="/podcast/:id" element={<PodcastLayout />} />
        </Routes>
      </MemoryRouter>
    );

    expect(fetchPodcastDetail).toHaveBeenCalledWith('123');
  });
});