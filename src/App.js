import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import ApiPulls from './components/ApiPulls';
import Activities from './components/Activities';
function App() {
  return (
    <div className="App">
      <Header/>
      <p> </p>
      <Body/>
      <Activities/>
      {/* <Activitysearch/> */}
    </div>
  );
}

export default App;
