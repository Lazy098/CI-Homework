import logo from './logo.svg';
import './App.css';
import Navigation1 from './Navigation1';
import Navigation2 from './Navigation2';
import Navigation3 from './Navigation3';
import Navigation4 from './Navigation4';
import Header1 from './Header1';
import Header2 from './Header2';
import Header3 from './Header3';
import Header4 from './Header4';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Footer3 from './Footer3';
import Footer4 from './Footer4';

function App() {
  return (
    <div className="App">
      <div className='About'>
      <Navigation1 />
      <Header1 />
      <Content1 />
      <Footer1 />
    </div>
    <div className='App2'>
      <Navigation2 />
      <Header2 />
      <Content2 />
      <Footer2 />
    </div>
    <div className='App3'>
      <Navigation3 />
      <Header3 />
      <Content3 />
      <Footer3 />
    </div>
    <div className='App4'>
      <Navigation4 />
      <Header4 />
      <Content4 />
      <Footer4 />
    </div>
  </div>
  );
}

export default App;
