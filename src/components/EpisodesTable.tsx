import { usePodcastStore } from '@/store/podcastStore';
import { PodcastEpisode } from '@/types/podcastEpisode';
import { Link } from 'react-router-dom';

function convertMillisecondsToTime(ms: number) {
  const totalSeconds = Math.floor(ms / 1000); // 1 second = 1000 miliseconds
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  if (hours > 0) {
    const formattedHours = String(hours).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  } else {
    return `${formattedMinutes}:${formattedSeconds}`;
  }
}

export function EpisodesTable({episodes}: { episodes: PodcastEpisode[]}) {
  const { setEpisodeDetail } = usePodcastStore();
  const handleEpisodeClick = (episode: PodcastEpisode) => {
    setEpisodeDetail(episode);
  };
    return (
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="border-b border-gray-200 font-bold text-lg">
              <th className="px-6 py-3 text-left  font-semibold text-gray-700">Title</th>
              <th className="px-6 py-3 text-left  font-semibold text-gray-700">Date</th>
              <th className="px-6 py-3 text-left  font-semibold text-gray-700">Duration</th>
            </tr>
          </thead>
          <tbody>
            {episodes.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
            .map((episode, index) => (
              <tr
                key={episode.trackId}
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                } hover:bg-blue-100 transition duration-200`}
              >
                <td className="px-6 py-3  text-blue-600 font-medium">
                  <Link 
                    to={`episode/${episode.trackId}`}  
                    onClick={() => handleEpisodeClick(episode)}>
                      {episode.trackName}
                  </Link>
                </td>
                <td className="px-6 py-3 font-normal text-gray-600">{new Date(episode.releaseDate).toLocaleDateString()}</td>
                <td className="px-6 py-3 font-normal text-gray-600 text-right">{convertMillisecondsToTime(episode.trackTimeMillis)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }