import { Episode } from '@/types/episode';
import { Link } from 'react-router-dom';

export function EpidodesTable({episodes}: { episodes: Episode[]}) {

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
            {episodes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((episode, index) => (
              <tr
                key={episode.id}
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                } hover:bg-blue-100 transition duration-200`}
              >
                <td className="px-6 py-3  text-blue-600 font-medium">
                  <Link to={`episode/${episode.id}`}>{episode.title}</Link>
                </td>
                <td className="px-6 py-3 font-normal text-gray-600">{episode.date}</td>
                <td className="px-6 py-3 font-normal text-gray-600">{episode.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }