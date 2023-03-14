import './App.css';
import LinkedinImg from './assets/linkedin.svg'
import GithubImg from './assets/github.svg'
import Projetcs from './components/Projects';
import './styles/projects.module.css';
import SKills from './components/Skills';
import Presentation from './components/Presentation';
import About from './components/About';
import Button from './components/Button';

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

      <Presentation></Presentation>

      <About></About>

      <Button></Button>

      <SKills></SKills>

      <Projetcs></Projetcs>
    </div>
    
  );
}

export default App;
