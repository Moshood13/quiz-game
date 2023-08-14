import { useEffect, useState } from "react";
import "./quizBox.scss";

const QuizBox = ({data , setQuestNum, questNum, setStop}) => {

    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState("option")

    const randomQuestion = () => {
        let random = data[(Math.floor(Math.random() * data.length))]
        return random
     }
    useEffect(() => {

        setQuestion(randomQuestion())
    },[data])

    const Time = (duration, callback) => {
        setTimeout(() => {
            callback()
        }, duration)
    }

   const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("option active");
    Time(3000, () => setClassName(a.correct ? "option correct" : "option wrong"))
    Time(6000, () => {
        if (a.correct) {
            setQuestion(randomQuestion());
            setSelectedAnswer(null)
            setQuestNum(questNum + 1)
        }
        else {
            setStop(true)
        }
    })
   }

    return(
        <div className="quizbox">
            <div className="question">
                    <h4 className="quest">{question?.question}</h4>
                </div>
                <div className="options">
                    <ul className="opt-box">
                        {question?.answers.map((a) => (
                            <li className= {selectedAnswer === a ? className : "option"} onClick={() => handleClick(a)}>{a.text}</li>

                        ))}
                    </ul>
                </div>
        </div>
    )
}

export default QuizBox;