import { Entry } from '@/types/podcast';
import { Link } from 'react-router-dom';


export function PodcastListItem({podcast}: {podcast: Entry}) {
    return (
    <li className="relative flex flex-col items-center">
    <Link to={`/podcast/${podcast.id.attributes['im:id']}`} className="flex flex-col justify-center items-center w-full max-w-xs p-3 border border-gray-300 rounded-lg shadow-xl">
        <div className="relative -top-12">
        <img
            src={podcast['im:image'][2].label}
            alt={podcast.title.label}
            className="rounded-full size-32 object-cover border-2 border-gray-400 shadow-md"
        />
        </div>
        <div className="relative -top-8 text-center">
        <h3 className="uppercase font-bold">{podcast.title.label.split(' - ')[0]}</h3>
        <p className="text-sm text-gray-400">Autor: {podcast['im:artist'].label}</p>
        </div>
    </Link>
    </li>
    )
}