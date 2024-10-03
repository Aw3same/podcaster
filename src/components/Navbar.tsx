import { Link } from 'react-router-dom';
import NavigationIndicator from './NavigatorIndicator';

export function Navbar() {
  return (
    <header className='flex justify-between items-center p-4 border-b shadow-sm border-gray-200 text-blue-400'>
        <Link to="/" className='flex items-center'>
          <h1 className='text-2xl font-bold'>Podcaster</h1>
        </Link>
        <NavigationIndicator />
    </header>
  );
}