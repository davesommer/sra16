import Hero from './components/hero/Hero'
import Navigation from './components/common/Navigation';
import Content from './components/common/Content'
import Arguments from "./components/arguments/Arguments"
import Comitee from './components/comitee/Comitee';

function App() {
  return (
    <div className="App">
      <Hero />
      <Navigation />
      <Content>
        <Arguments />
        <Comitee />
      </Content>
    </div>
  );
}

export default App;
