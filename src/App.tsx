import Navbar from './components/Navbar';
import NavigationFilters from './components/navigation-filters/NavigationFilters';
import './styles/App.css';

function App(): JSX.Element {
  const menus: string[] = ['Animals', 'Art', 'Renders', 'Experimental', 'Wallpapers'];

  return (
    <div className="h-screen w-full bg-primary">
      <Navbar />
      <NavigationFilters menus={menus} />
      <h1 className="font-bold">Online photo exhibition</h1>
    </div>
  );
}

export default App;
