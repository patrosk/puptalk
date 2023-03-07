import './App.css';
import Header from './Header.js';
import useFetch from './useFetch';
import ImgWrapper from './ImgWrapper';

function App() {

  const { data, loading, error } = useFetch('https://api.quotable.io/random?tags=motivational');

  if(loading) return <h2>loading...</h2>
  if(error) console.log(error);

  return (
    <div className="App App-header">
        <Header />
        <ImgWrapper/>
        <h2>Quote:</h2>
        <p>
          {data?.content}
        </p>
    </div>
  );
}

export default App;
