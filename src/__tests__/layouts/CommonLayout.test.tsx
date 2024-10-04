import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CommonLayout } from '@/layouts/CommonLayout';

jest.mock('@/components/Navbar', () => ({
  Navbar: () => <div data-testid="navbar" />,
}));

jest.mock('@/components/Footer', () => ({
  Footer: () => <div data-testid="footer" />,
}));

describe('CommonLayout', () => {
  it('renders Navbar, Outlet, and Footer', () => {
    render(
      <MemoryRouter>
        <CommonLayout />
      </MemoryRouter>
    );

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('applies correct classes to main content', () => {
    render(
      <MemoryRouter>
        <CommonLayout />
      </MemoryRouter>
    );

    const main = screen.getByRole('main');
    expect(main).toHaveClass('flex-1 p-8 max-w-screen-2xl');
  });
});