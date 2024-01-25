import '../styles/about.css'
import selfie from '../../assets/selfie.jpg'
export default function About() {
  return (
    <div className="about" id='about'>
      <div className='selfie-div'><img src={selfie} className='selfie'></img></div>
        <p className='about-info'><span className="about-start">Hi, I&apos;m Noah </span> I am an up and coming full stack web 
        developer from San Antonio looking to get my start into the developer world.
        I enjoy spending time with my family, disc golf, table-top games, video games, and also puzzles which is what got me into coding,
        because its almost like im sitting down solving a puzzle. I have been coding for about a year and 
        a half now started off casually learning because it piqued my intrest, but quickly developed a passion for it 
        and decided to go to school. I attended University of Texas San Antonio and became fullstack certified. 
        I am experienced with HTML, CSS, JavaScript, MySQL, MongoDb, Git, Bash as well as many frameworks and npm packages such as
        Handlebars, Bootstrap, Bulma, jQuery, Express.js, React.js, and Node.js, indexDb, Webpack.js, workbox, inquirer, bCrypt, and jest
        are some I can name, and i&apos;m always learning more! check out some of my work below, 
        and if you would like to work with me on a project reach out to me with my info down in the contact area.
        </p>
    </div>
  );
}
