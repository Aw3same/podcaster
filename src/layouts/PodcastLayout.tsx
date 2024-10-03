import { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { usePodcastStore } from '@/store/podcastStore';
export function PodcastLayout() {
  const { id } = useParams();
  const { fetchPodcastDetail, podcastDetail } = usePodcastStore();

  useEffect(() => {
    if (id) {
      fetchPodcastDetail(id);
    }
  }, [id, fetchPodcastDetail]);

  if (!podcastDetail) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex space-x-3 items-start">
          <div className="w-1/3"> 
            <Link to={`/podcast/${id}`} className='flex flex-col gap-3 p-2 shadow-lg bg-slate-100 rounded-sm'>
              <div className='p-2 bg-white rounded-sm w-full flex items-center justify-center'>
                  <img  src={podcastDetail['im:image'][2].label}
                        alt={podcastDetail.title.label}
                        className="rounded-sm size-64 object-cover border-2 border-gray-400 shadow-md"
                  />
              </div>
              <div className='p-2 w-full bg-white rounded-sm text-left'>
                  <h3 className="uppercase font-bold">{podcastDetail.title.label.split(' - ')[0]}</h3>
                  <p className="italic">by {podcastDetail['im:artist'].label}</p>
              </div>
              <div className='p-2 bg-white rounded-sm text-left'>
                  <h3 className="font-bold">Description:</h3>
                  <p className="mt-2 italic">{podcastDetail.summary.label}</p>
              </div>
            </Link>
          </div>
        <div className="w-2/3">
          <Outlet context={{ podcastDetail }} />
        </div>
      </div>
  )
}