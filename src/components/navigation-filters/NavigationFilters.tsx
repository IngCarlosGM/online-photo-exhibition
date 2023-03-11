import ItemNavigationFilter from './ItemNavigationFilter';

function NavigationFilters({ menus }: { menus: string[] }): JSX.Element {
  return (
    <div>
      <ul className="w-full h-12 bg-fourth flex justify-center items-center xs:overflow-auto">
        {menus.map((menu) => (
          <ItemNavigationFilter key={menu} name={menu} />
        ))}
      </ul>
    </div>
  );
}

export default NavigationFilters;
