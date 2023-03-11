import Navbar from './components/Navbar';
import NavigationFilters from './components/navigation-filters/NavigationFilters';
import './styles/App.css';

function App(): JSX.Element {
  return (
    <div className="h-screen w-full bg-primary">
      <Navbar />
      <NavigationFilters />
      <h1 className="font-bold">Online photo exhibition</h1>
    </div>
  );
}

export default App;
