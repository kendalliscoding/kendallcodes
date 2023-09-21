import './QuestionBubble.css';

const QuestionBubble = ({position, question}) => {
    return (
        <div className={`questionBubble ${position}`}>
            <div className="tail" />
            <div className="bubble">
                <p className="question"> {question} </p>
            </div> 
        </div>
    )
}

export default QuestionBubble;