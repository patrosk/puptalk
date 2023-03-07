import './App.css';
import Header from './Header.js';
import useFetch from './useFetch';
import ImgWrapper from './ImgWrapper';
import Footer from './Footer';

function App() {

  const { data, loading, error } = useFetch('https://api.quotable.io/random?tags=motivational');

  if(loading) return (
    <div className="App App-header">
      <Header/>
      <h2>loading...</h2>
    </div>
  );
  if(error) console.log(error);

  return (
    <div className="App App-header">
        <Header />
        <ImgWrapper/>
        <h5>This pupper wants you to know:</h5>
        <p>
          {data?.content}
        </p>
        <Footer/>
    </div>
  );
}

export default App;
