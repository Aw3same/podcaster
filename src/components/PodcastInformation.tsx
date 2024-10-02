import { Link, useParams } from 'react-router-dom';

export function PodcastInformation() {
  const { id } = useParams();
  return <div>PodcastInformation from id: {id}
      <ul>
        <li><Link to={`/podcast/${id}/episode/1`}>Episode 1</Link></li>
        <li><Link to={`/podcast/${id}/episode/2`}>Episode 2</Link></li>
        <li><Link to={`/podcast/${id}/episode/3`}>Episode 3</Link></li>
    </ul>
  </div>;
}
