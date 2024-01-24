import '../styles/card.css';

export default function Card(props) {
  
    return (
      <div className='Card'>
        <link type='stylesheet' href='./card.module.css'/>
        <div className='card_heading'>{props.name}</div>
        <div className='card_content'>{props.description}</div>
        <a href={`"${props.anchor}"`}>visit {props.name}</a>
        <a href={`"${props.repo}"`}>check out my {props.name} repo!</a>
      </div>
    );
  }
  