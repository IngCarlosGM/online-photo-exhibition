import { render, screen } from '@testing-library/react';
import NavigationFilters from '../../../components/navigation-filters/NavigationFilters';

describe('Testing component <NavigationFilters />', () => {
  const nameFilter: string = 'Test name';
  const menus: string[] = [nameFilter];

  jest.mock('../../../components/navigation-filters/ItemNavigationFilter', () => ({
    ItemNavigationFilter: () => (
      <li className="mr-3 cursor-pointer hover:bg-primary p-2 rounded-md xs:mr-1 xs:first:ml-10 sm:first:ml-0">
        <a>{nameFilter}</a>
      </li>
    ),
  }));

  beforeEach(() => {
    render(<NavigationFilters menus={menus} />);
  });

  it('should match the snapshot', () => {
    expect(screen).toMatchSnapshot();
  });

  it('should to has filter defined Animals"', async () => {
    expect(await screen.findByText(nameFilter)).toBeDefined();
  });
});
