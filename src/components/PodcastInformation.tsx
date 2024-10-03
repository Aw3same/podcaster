import { usePodcastStore } from '@/store/podcastStore';
import { Episode } from '@/types/episode';
import { Entry } from '@/types/podcast';
import {  useOutletContext, useParams } from 'react-router-dom';
import { EpidodesTable } from './EpisodesTable';

interface PodcastContextType {
  selectedPodcast: Entry | null;
}



const MOCK_EPISODES: Episode[] = [
  { id: 1, title: 'Episode 1: The Beginning', date: '2024-09-01', duration: '45:30' },
  { id: 2, title: 'Episode 2: The Adventure Continues', date: '2024-09-05', duration: '50:15' },
  { id: 3, title: 'Episode 3: A New Challenge', date: '2024-09-10', duration: '48:00' },
  { id: 4, title: 'Episode 4: The Journey Forward', date: '2024-09-15', duration: '42:50' },
  { id: 5, title: 'Episode 5: The Big Finale', date: '2024-09-20', duration: '52:40' },
]

export function PodcastInformation() {  
  const { id } = useParams()
  const { selectedPodcast } = useOutletContext<PodcastContextType>();
  const { podcastDetails } = usePodcastStore();

  if(!id) return <div>Loading...</div>
  const podcastDetailInfo = podcastDetails[id];

  if (!podcastDetails) return <div>Loading...</div>

  return (
    <div className="">
      <div className=' bg-slate-100 p-2 w-full flex items-center justify-center rounded-sm'>
        <div className='flex items-center p-2 bg-white rounded-sm text-left w-full font-bold text-xl'>            
            <h3>Epidodes: {podcastDetailInfo?.detail?.trackCount}</h3>
        </div>
      </div>
      <div className=' bg-slate-100 p-2 w-full flex items-center justify-center rounded-sm'>
        <div className='flex items-center p-2 bg-white rounded-sm text-left w-full font-bold text-xl'>            
            <EpidodesTable episodes={MOCK_EPISODES} />
        </div>
      </div>
    </div>
  )
}


