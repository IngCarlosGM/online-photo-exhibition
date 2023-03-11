function ItemNavigationFilter({ name }: { name: string }): JSX.Element {
  return (
    <li className="mr-3 cursor-pointer hover:bg-primary p-2 rounded-md xs:mr-1 xs:first:ml-10 sm:first:ml-0">
      <a>{name}</a>
    </li>
  );
}

export default ItemNavigationFilter;
