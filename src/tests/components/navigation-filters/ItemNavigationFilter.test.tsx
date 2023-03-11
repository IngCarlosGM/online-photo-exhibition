import { render, screen } from '@testing-library/react';
import ItemNavigationFilter from '../../../components/navigation-filters/ItemNavigationFilter';

describe('Testing component <NavigationFilters />', () => {
  const name: string = 'Test name';

  beforeEach(() => {
    render(<ItemNavigationFilter name={name} />);
  });

  it('should match the snapshot', () => {
    expect(screen).toMatchSnapshot();
  });

  it('should to show the name filter"', async () => {
    expect(await screen.findByText(name)).toBeDefined();
  });
});
