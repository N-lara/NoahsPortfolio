import { useState } from 'react';
import '../styles/projects.css';
import jateImage from '../../assets/JATE.png'
import blogpostImage from '../../assets/blogpost.png'
import weatherImage from '../../assets/Weather.png'


const projects = [
  {
    name: "Just Another Text Editor",
    description: `J.A.T.E is a text editor created with HTML, CSS, Javascript, Webpack, Workbox, IDB, and Express.js that runs in the browser for you to code.`,
    repo: 'https://github.com/N-lara/Text-editor',
    anchor: 'https://just-another-text-editor-117903.onrender.com/',
    image: jateImage
  },
  {
    name: "Weather Website",
    description: `This is a website I built using the openWeatherMapAPI and countryStateCityAPI, with HTML, CSS, and Javascript`,
    repo: 'https://github.com/N-lara/weather-website/',
    anchor: 'https://n-lara.github.io/weather-website/',
    image: weatherImage
  },
  {
    name: "Blogpost Website",
    description: `This is a website I built with handlebars, bcrypt, myslq, HTML, CSS JavaScript, and express.js to mock-up a blog website where users ccreate a profile and interact with other users through posts and comments`,
    repo: 'https://github.com/N-lara/Text-editor',
    anchor: 'https://desolate-hollows-52185-78d44b985b86.herokuapp.com/',
    image: blogpostImage
  },
  //template for new projects
  // {
  //   name: "projectTitle",
  //   description: "lorem ipsum...",
  //   repo: "repoURL",
  //   anchor: "anchorURL",
  //   image: imageVar
  // },
]

export default function Projects() {
  const [card1, setCard1] = useState(0);
  const [card2, setCard2] = useState(1);

  function nextClick(){
    card1<(projects.length-1)?setCard1(card1+1):setCard1(0);
    card2<(projects.length-1)?setCard2(card2+1):setCard2(0);
  }
  
  function previousClick(){
    card1>0?setCard1(card1-1):setCard1(projects.length-1);
    card2>0?setCard2(card2-1):setCard2(projects.length-1);
  }


  return (
  <div className="caroucel" id='projects'>
    <button onClick={previousClick}>&lArr;</button>
    <div className="card-container">

      <div className={`card`} style={{backgroundImage: `url(${projects[card1].image})`}}>
        <div className='card-heading'>
          <div className='card-links'>
            <a href={`${projects[card1].anchor}`}>visit the site!</a>
            <a href={`${projects[card1].repo}`}>check out the repo!</a>
          </div>
          <div>{projects[card1].name}</div>
        </div>
        <div className='card-content'>
          <div className='card-description' >{projects[card1].description}</div>
        </div>
      </div>

      <div className={`card card2`} style={{backgroundImage: `url(${projects[card2].image})`}}>
        <div className='card-heading'>
          <div className='card-links'>
            <a href={`${projects[card2].anchor}`}>visit the site!</a>
            <a href={`${projects[card2].repo}`}>check out the repo!</a>
          </div>
          <div>{projects[card2].name}</div>
        </div>
        <div className='card-content'>
          <div className='card-description' >{projects[card2].description}</div>
        </div>
      </div>

    </div>
    <button onClick={nextClick}>&rArr;</button>
  </div>
  );
}
