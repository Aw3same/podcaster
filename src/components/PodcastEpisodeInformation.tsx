import { usePodcastStore } from '@/store/podcastStore';
import DOMPurify from 'dompurify'

const createMarkup = (html: string): { __html: string } => {
  return { __html: DOMPurify.sanitize(html) };
}
export function PodcastEpisodeInformation() {
  const { episodeDetail } = usePodcastStore();  

  return    (  
  <div className=' bg-slate-100 p-2 w-full flex items-center justify-center rounded-sm'>
    <div className='flex flex-col p-2 bg-white rounded-sm text-left w-full space-y-5'>            
        <h3 className='text-xl font-bold'>{episodeDetail?.trackName}</h3>
        <div dangerouslySetInnerHTML={createMarkup(episodeDetail?.description || 'There is no description available.')} className="italic"/>

        <audio controls className="w-full mt-4">
          <source src={episodeDetail?.episodeUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>   
  </div>
  )
}