import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { PodcastList } from "@/components/PodcastList";
import { MemoryRouter } from 'react-router-dom';
import { Entry } from '@/types/podcast';
import { usePodcastStore } from '@/store/podcastStore';
import { testPodcastList } from '../../../__mocks__/podcast';

// Mockeamos el módulo de Zustand
jest.mock('@/store/podcastStore');

// Mockeamos el componente PodcastListItem
jest.mock('@/components/PodcastListItem', () => ({
  PodcastListItem: ({ podcast }: { podcast: Entry }) => (
    <div data-testid="podcast-item">{podcast.title.label}</div>
  ),
}));

const mockUsePodcastStore = usePodcastStore as jest.MockedFunction<typeof usePodcastStore>;


const renderWithRouter = () => {
  return render(
    <MemoryRouter initialEntries={[`/`]}>
        <PodcastList />
    </MemoryRouter>
  );
}

describe("PodcastList", () => {

  const mockFetchPodcasts = jest.fn();
  const mockSetFilterText = jest.fn();

  beforeEach(() => {
    mockUsePodcastStore.mockReturnValue({
      filteredPodcasts: testPodcastList,
      filterText: '',
      fetchPodcasts: mockFetchPodcasts,
      setFilterText: mockSetFilterText,
    } as unknown as ReturnType<typeof usePodcastStore>);
  });

  it('renders the podcast list', async () => {
    renderWithRouter()

    await waitFor(() => {
      expect(mockFetchPodcasts).toHaveBeenCalled();
    });

    expect(screen.getByText('2')).toBeInTheDocument(); // Número de podcasts
    expect(screen.getAllByTestId('podcast-item')).toHaveLength(2);
    expect(screen.getByText('Podcast 1')).toBeInTheDocument();
    expect(screen.getByText('Podcast 2')).toBeInTheDocument();
  });

  it('filters podcasts when input changes', async () => {
    renderWithRouter()

    const input = screen.getByPlaceholderText('Filtrar podcasts...');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(mockSetFilterText).toHaveBeenCalledWith('test');
  });

  it('displays the correct number of filtered podcasts', () => {
    mockUsePodcastStore.mockReturnValue({
      filteredPodcasts: [testPodcastList[0]],
      filterText: 'Podcast 1',
      fetchPodcasts: mockFetchPodcasts,
      setFilterText: mockSetFilterText,
    } as unknown as ReturnType<typeof usePodcastStore>);

    renderWithRouter()

    expect(screen.getByText('1')).toBeInTheDocument(); // Número de podcasts filtrados
    expect(screen.getAllByTestId('podcast-item')).toHaveLength(1);
    expect(screen.getByText('Podcast 1')).toBeInTheDocument();
  });
});