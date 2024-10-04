import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/Footer';

describe('Footer', () => {
  it('renders the footer text', () => {
    render(<Footer />);
    expect(screen.getByText(/Podcaster © Made with ❤️ by Ángel/i)).toBeInTheDocument();
  });

  it('has the correct CSS classes', () => {
    const { container } = render(<Footer />);
    const footer = container.firstChild as HTMLElement;
    expect(footer).toHaveClass('flex justify-center p-4 text-gray-400 text-sm');
  });
});