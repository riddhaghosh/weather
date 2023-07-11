import './App.css';
import Search from './component/search/Search';
import CurrentWeather from './component/current-Weather/CurrentWeather';
function App() {

  const handleOnSearchChange = (seachData) => {
    console.log(seachData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather/>
    </div>
  );
}

export default App;
