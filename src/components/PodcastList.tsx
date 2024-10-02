import {usePodcastStore} from '@/store/podcastStore';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function PodcastList() {
  const { filteredPodcasts, filterText, fetchPodcasts, setFilterText } = usePodcastStore();

  useEffect(() => {
    fetchPodcasts();
  }, []);

  return (
  <div>
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Filtrar podcasts..."
      />
      <ul>
        {filteredPodcasts.map((podcast) => (
          <li key={podcast.id.attributes['im:id']}>
            <Link to={`/podcast/${podcast.id.attributes['im:id']}`}>
              <img src={podcast['im:image'][0].label} alt={podcast.title.label} />
              <h3>{podcast.title.label}</h3>
              <p>Autor: {podcast['im:artist'].label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
