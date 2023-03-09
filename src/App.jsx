import './App.css';
import LinkedinImg from './assets/linkedin.svg'
import GithubImg from './assets/github.svg'

function App() {
  return (
    <div className="App">
      <div className='header-container'>

        <div className='container-two'>
          <div className='title-style'>
            <h1>Ariel Nicollas</h1>
          </div>

          <div className='icons-style'>
            <img className='img-style' src={LinkedinImg} alt="" />
            <img className='img-style' src={GithubImg} alt="" />
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
