import { usePodcastStore } from '@/store/podcastStore';
import { Entry } from '@/types/podcast';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export function PodcastInformation() {
  const { id } = useParams()
  const { fetchPodcastDetail } = usePodcastStore()
  const [podcastDetail, setPodcastDetail] = useState<Entry>(null)

  useEffect(() => {
    const loadPodcastDetail = async () => {
      if (id) {
        const detail = await fetchPodcastDetail(id)
        setPodcastDetail(detail)
      }
    }
    loadPodcastDetail()
  }, [id, fetchPodcastDetail])

  if (!podcastDetail) return <div>Loading...</div>

  return (
    <div className="podcast-detail">
      <aside className="sidebar">
        <img src={podcastDetail.image} alt={podcastDetail.title} />
        <h2>{podcastDetail.title}</h2>
        <p>By {podcastDetail.author}</p>
        <p>{podcastDetail.description}</p>
      </aside>
      <main>
        <h3>Episodes: {podcastDetail.episodes.length}</h3>
        <ul>
          {podcastDetail.episodes.map((episode) => (
            <li key={episode.id}>
              <Link to={`/podcast/${id}/episode/${episode.id}`}>
                <h4>{episode.title}</h4>
              </Link>
              <p>Date: {new Date(episode.pubDate).toLocaleDateString()}</p>
              <p>Duration: {episode.duration}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
