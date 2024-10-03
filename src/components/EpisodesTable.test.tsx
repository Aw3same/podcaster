import { render, screen } from '@testing-library/react';
import { EpisodesTable } from './EpisodesTable';
import { mockEpisodes } from '../../__mocks__/episodes';
import { usePodcastStore } from '@/store/podcastStore';

jest.mock('@/store/podcastStore');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '123' }),
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => <a href={to}>{children}</a>,
}));

const mockUsePodcastStore = usePodcastStore as jest.MockedFunction<typeof usePodcastStore>;

describe('EpisodesTable', () => {


  beforeEach(() => {
    mockUsePodcastStore.mockReturnValue({
      setSelectedEpisode: jest.fn(),
    } as unknown as ReturnType<typeof usePodcastStore>);
  });

  it('renders episodes table', () => {
    render(<EpisodesTable episodes={mockEpisodes} />);

    expect(screen.getByText('Test Episode 1')).toBeInTheDocument();
    expect(screen.getByText('Test Episode 2')).toBeInTheDocument();
  });

});