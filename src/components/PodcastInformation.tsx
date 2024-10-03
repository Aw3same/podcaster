import { usePodcastStore } from '@/store/podcastStore';
import { useParams } from 'react-router-dom';
import { EpisodesTable } from './EpisodesTable';

export function PodcastInformation() {  
  const { id } = useParams()
  const { podcastEpisodes } = usePodcastStore();

  if (!id) return <div>Loading...</div>
  const episodes = podcastEpisodes[id]?.episodes || [];

  return (
    <div className="">
      <div className=' bg-slate-100 p-2 w-full flex items-center justify-center rounded-sm'>
        <div className='flex items-center p-2 bg-white rounded-sm text-left w-full font-bold text-xl'>            
            <h3>Epidodes: {episodes?.length}</h3>
        </div>
      </div>
      <div className=' bg-slate-100 p-2 w-full flex items-center justify-center rounded-sm'>
        <div className='flex items-center p-2 bg-white rounded-sm text-left w-full font-bold text-xl'>            
            <EpisodesTable episodes={episodes} />
        </div>
      </div>
    </div>
  )
}


