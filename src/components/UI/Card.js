import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className;  //here the space after card inside the '' is very important.
    return (
        <div className = {classes}>
            {/* // this is a comment line */}
            {props.children}
        </div>
    )
}
export default Card;