import Navbar from './components/Navbar';
import './styles/App.css';

function App(): JSX.Element {
  return (
    <div className="h-screen w-full bg-primary">
      <Navbar />
      <h1 className="font-bold">Online photo exhibition</h1>
    </div>
  );
}

export default App;
