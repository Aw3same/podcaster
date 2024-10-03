import {usePodcastStore} from '@/store/podcastStore';;
import { useEffect } from 'react';
import { PodcastListItem } from '@/components/PodcastListItem';

export function PodcastList() {
  const { filteredPodcasts, filterText, fetchPodcasts, setFilterText } = usePodcastStore();

  useEffect(() => {
    fetchPodcasts();
  }, []);

  return (
    <div className='flex flex-col space-y-10'>
      <div className='flex justify-end space-x-2 p-1 mb-10'>
        <p className='bg-blue-400 rounded-lg p-2 text-white font-bold'>{filteredPodcasts.length}</p>
        <input
          className='rounded-lg p-2 border shadow-md'
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Filtrar podcasts..."
          />
      </div>
      <ul className='grid grid-cols-4 gap-16'>
        {filteredPodcasts.map((podcast) => (
          <PodcastListItem podcast={podcast}  key={podcast.id.attributes['im:id']} />
        ))}
      </ul>
    </div>
  );
}
