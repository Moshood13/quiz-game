import { useEffect, useState } from "react";
import useSound from "use-sound";
import correct from "../asset/correct-answer.mp3";
import wrong from "../asset/wrong-answer.mp3";
import intro from "../asset/intro.mp3";
import "./quizBox.scss";
import ReactAudioPlayer from "react-audio-player";

const QuizBox = ({ data, setQuestNum, questNum, setStop }) => {

    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState("option")
    const [playCorrect] = useSound(correct);
    const [playWrong] = useSound(wrong);

    


    const randomQuestion = () => {
        let random = data[(Math.floor(Math.random() * data.length))]
        return random
    }


    useEffect(() => {
        setQuestion(randomQuestion())
    }, [data])

    const Time = (duration, callback) => {
        setTimeout(() => {
            callback()
        }, duration)
    }

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("option active");
        Time(3000, () => setClassName(a.correct ? "option correct" : "option wrong"))
        Time(5000, () => {
            if (a.correct) {
                playCorrect()
                Time(1000, () => {
                    setQuestion(randomQuestion());
                    setSelectedAnswer(null)
                    setQuestNum(questNum + 1)
                })
            }
            else {
                playWrong()
                Time(1000, () => {
                    setStop(true)
                })
            }
        })
        if (questNum  <= 14) {
            setStop(false)

        } else {
            Time(6000, () => {
                setStop(true)
            })
        }
    }

    return (
        <div className="quizbox">
            <div className="question">
                <h4 className="quest">{question?.question}</h4>
            </div>
            <div className="options">
                <ul className="opt-box">
                    {question?.answers.map((a) => (
                        <li className={selectedAnswer === a ? className : "option"} onClick={() => handleClick(a)}>{a.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default QuizBox;