import '@picocss/pico/css/pico.sand.min.css';
import Sections from './components/Sections';
import Nav from './components/Nav';

const App = () => {
  const apiKey = 'GI89Ztk9Fo3ZJ1F95LyLF3xG9xOfGlW0';
  const sections = [
    {
      title: 'Home',
      url: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`,
    },
    {
      title: 'Movies',
      url: `https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=${apiKey}`,
    },
    {
      title: 'Fashion',
      url: `https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=${apiKey}`,
    },
  ];

  return (
    <main className="container" style={{ marginTop: 64 }}>
      <Nav></Nav>
      <Sections sections={sections}></Sections>
      <p>&copy; 2024 The New York Times</p>
    </main>
  );
};

export default App;
