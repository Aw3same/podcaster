import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

jest.mock('@/components/NavigatorIndicator', () => () => <div data-testid="navigation-indicator" />);

describe('Navbar', () => {
  it('renders the Podcaster title', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText('Podcaster')).toBeInTheDocument();
  });

  it('includes a link to the home page', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const homeLink = screen.getByRole('link', { name: /podcaster/i });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('includes the NavigationIndicator component', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByTestId('navigation-indicator')).toBeInTheDocument();
  });
});