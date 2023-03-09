import './App.css';
import LinkedinImg from './assets/linkedin.svg'
import GithubImg from './assets/github.svg'
import MeImg from './assets/me.png'

function App() {
  return (
    <div className="App">
      <div className='header-container'>

        <div className='container-two'>
          <div className='title-style'>
            <h1>Ariel </h1>
            <h1 className='style-name'>Nicollas</h1>
          </div>

          <div className='icons-style'>
            <img className='img-style' src={LinkedinImg} alt="" />
            <img className='img-style' src={GithubImg} alt="" />
          </div>

        </div>
      </div>

      <div className='apresent-style'>


        <div className='photo-container'>

          <div className='container-description'>
            <h1>Prazer em conhecê-lo! <br></br>Eu sou, </h1>

            <h1 className='style-nick'>Ariel Nicollas.</h1>
          </div>
          <div className='style-photo'>
            <img src={MeImg} alt="" />  
          </div>
          
        </div>



        <p>Sou um desenvolvedor front-end apaixonado por criar aplicativos da web acessíveis
          <br></br>que os usuários adoram.
        </p>

        <div className='style-button'>
          <button>Contate-me</button>
          <hr />
        </div>

        <div className='skills-style'>
        <h3>HTML</h3>
        <span>Avançado</span>

        <h3>CSS</h3>
        <span>Avançado</span>

        <h3>Javascript</h3>
        <span>Intermediário</span>

        <h3>React</h3>
        <span>Intermediário</span>
      </div>

        </div>

      



    </div>
  );
}

export default App;
