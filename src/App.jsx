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

      <div className='apresent-style'>
        <h1>Prazer em conhecê-lo!</h1>
        <h1>Eu sou Ariel Nicollas.</h1>
        <p>Sou um desenvolvedor front-end apaixonado por criar aplicativos da web acessíveis 
        <br></br>que os usuários adoram.
        </p>
      </div>

      


    </div>
  );
}

export default App;
