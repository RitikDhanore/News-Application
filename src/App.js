import './App.css';
import NewsList from './components/NewsList';
import Demo from './components/demo';
import Card from './components/Cards';
import Imagecarousel from './components/Imagecarousel';
import TopStory from './components/TopStory';

function App() {
  return (
    <div className="App">

      <Demo />
      <Imagecarousel />
      <TopStory />
      <NewsList />
      {/* <Card /> */}
    </div>
  );
}

export default App;
