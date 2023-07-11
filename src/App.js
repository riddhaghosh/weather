import './App.css';
import search from './component/search/search';
import CurrentWeather from './component/current-Weather/current-weatrher';
function App() {

  const handleOnSearchChange = (seachData) => {
    console.log(seachData);
  }

  return (
    <div className="container">
      <search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather/>
    </div>
  );
}

export default App;
