
import { render, screen } from '@testing-library/react';
import { useNavigation } from 'react-router-dom';
import NavigationIndicator from '@/components/NavigatorIndicator';

jest.mock('react-router-dom', () => ({
  useNavigation: jest.fn(),
}));

describe('NavigationIndicator', () => {
  it('renders nothing when not navigating', () => {
    (useNavigation as jest.Mock).mockReturnValue({ state: 'idle' });
    const { container } = render(<NavigationIndicator />);
    expect(container.firstChild).toBeNull();
  });

  it('renders a loading indicator when navigating', () => {
    (useNavigation as jest.Mock).mockReturnValue({ state: 'loading' });
    render(<NavigationIndicator />);
    const indicator = screen.getByTestId('navigation-indicator');
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveClass('size-8 bg-blue-400 rounded-full animate-blink');
  });
});