import './assets/styles/custom.scss';
import './App.css';
import Navbar from 'components/Navbar';

function App() {
  return (
    <div className="d-flex flex-column-reverse flex-xl-row vh-100">
      <Navbar />
      <div>
        <h1>TechnoMori - Instant Messaging App</h1>
        <span>Body text</span>
      </div>
    </div>
  );
}

export default App;
