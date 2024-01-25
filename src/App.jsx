import './App.css'
import NavTabs from './components/UI/NavTabs'
import About from'./components/pages/About'
import Projects from'./components/pages/Projects'
import Contact from'./components/pages/Contact'

const App = () => 
    <>
    <NavTabs className={'Hello'}/>
    <About/>
    <Projects/>
    <Contact/>
    </>;

export default App
