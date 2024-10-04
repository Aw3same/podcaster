
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PodcastListItem } from '../../components/PodcastListItem';
import { PodcastStore, usePodcastStore } from '@/store/podcastStore';

jest.mock('@/store/podcastStore');

jest.mock('@/store/podcastStore', () => ({
    usePodcastStore: jest.fn(),
  }));
  
  const mockUsePodcastStore = usePodcastStore as jest.MockedFunction<typeof usePodcastStore>;

const mockPodcast = {
  id: { attributes: { 'im:id': '1' } },
  'im:image': [null, null, { label: 'test-image.jpg' }],
  title: { label: 'Test Podcast - Episode' },
  'im:artist': { label: 'Test Artist' },
} as any;

describe('PodcastListItem', () => {
    beforeEach(() => {
        mockUsePodcastStore.mockReturnValue({
          setPodcastDetail: jest.fn(),
        } as unknown as PodcastStore);
      });

  it('renders podcast information correctly', () => {
    render(
      <MemoryRouter>
        <PodcastListItem podcast={mockPodcast} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Podcast')).toBeInTheDocument();
    expect(screen.getByText('Autor: Test Artist')).toBeInTheDocument();
    expect(screen.getByAltText('Test Podcast - Episode')).toHaveAttribute('src', 'test-image.jpg');
  });

  it('calls setPodcastDetail when clicked', () => {
    const setPodcastDetail = jest.fn();
    mockUsePodcastStore.mockReturnValue({ setPodcastDetail } as unknown as PodcastStore);

    render(
      <MemoryRouter>
        <PodcastListItem podcast={mockPodcast} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('link'));
    expect(setPodcastDetail).toHaveBeenCalledWith(mockPodcast);
  });

  it('links to the correct podcast detail page', () => {
    render(
      <MemoryRouter>
        <PodcastListItem podcast={mockPodcast} />
      </MemoryRouter>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/podcast/1');
  });
});