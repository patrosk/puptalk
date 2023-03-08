import './App.css';
import Header from './Header.js';
import useFetch from './useFetch.js';
import ImgWrapper from './ImgWrapper.js';
import Footer from './Footer.js';

function Home() {

    const { data, loading, error } = useFetch('https://api.quotable.io/random?tags=motivational');

    return (
      <div className="App">
          <Header />
          <div className="main">
          {loading && <h2>loading...</h2> }
          {error && console.log(error)}
          <ImgWrapper/>
          <h5>This pupper wants you to know:</h5>
          <p>
            {data?.content}
          </p>
          </div>
          <Footer/>
      </div>
    );
}

export default Home;