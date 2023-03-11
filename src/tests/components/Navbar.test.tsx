import { render, screen } from '@testing-library/react';
import Navbar from '../../components/Navbar';

describe('Testing component <NavBar />', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it('should match the snapshot', () => {
    expect(screen).toMatchSnapshot();
  });

  it('should to has the text "Photo exhibition"', () => {
    expect(screen.getByText('Photo exhibition')).toBeTruthy();
  });
});
