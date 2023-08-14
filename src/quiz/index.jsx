import { useEffect, useState } from "react";
import useSound from "use-sound";
import "./index.scss";
import QuizBox from "../component/QuizBox";
import Timer from "./Timer";
import play from "../asset/play.mp3";
import Start from "./Start";

const QuizApp = () => {
    const [questNum, setQuestNum] = useState(1)
    const [stop, setStop] = useState(false)
    const [earned , setEarned] = useState("$ 0")
    const [username, setUsername] = useState(null)

    const Data = [
        {
            id: 1,
            question: "Who is the first man on earth",
            answers: [
                {
                    text: "Moshood",
                    correct: false,
                },
                {
                    text: "Saheed",
                    correct: false,
                },
                {
                    text: "Adam",
                    correct: true,
                },
                {
                    text: "Sherif",
                    correct: false
                }
            ]
        },
        {
            id: 2,
            question: "Who is the first man on earth",
            answers: [
                {
                    text: "Moshood",
                    correct: false,
                },
                {
                    text: "Saheed",
                    correct: false,
                },
                {
                    text: "Adam",
                    correct: true,
                },
                {
                    text: "Sherif",
                    correct: false
                }
            ]
        },
        {
            id: 3,
            question: "How many days are there in a week?",
            answers: [
                {
                    text: "5",
                    correct: false,
                },
                {
                    text: "6",
                    correct: false,
                },
                {
                    text: "8",
                    correct: false,
                },
                {
                    text: "7",
                    correct: true
                }
            ]
        },
        {
            id: 4,
            question: "Who is the fist woman on earth",
            answers: [
                {
                    text: "Linda",
                    correct: false,
                },
                {
                    text: "Lola",
                    correct: false,
                },
                {
                    text: "Ayo",
                    correct: false,
                },
                {
                    text: "Eve",
                    correct: true
                }
            ]
        },
        {
            id: 5,
            question: "What is the first Alphabet in English",
            answers: [
                {
                    text: "M",
                    correct: false,
                },
                {
                    text: "S",
                    correct: false,
                },
                {
                    text: "A",
                    correct: true,
                },
                {
                    text: "D",
                    correct: false
                }
            ]
        },
    ]

    const handleClick = () => {
        setStop(false);
        setQuestNum(1);
        setEarned("$ 0")
    }




    const MoneyList = [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 5000" },
        { id: 8, amount: "$ 10000" },
        { id: 9, amount: "$ 50000" },
        { id: 10, amount: "$ 100,000" },
        { id: 11, amount: "$ 150,000" },
        { id: 12, amount: "$ 250,000" },
        { id: 13, amount: "$ 350,000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1,000,000" }
    ].reverse();

    useEffect(() => {
        questNum > 1 && setEarned(MoneyList.find((m) => m.id === questNum - 1).amount)
    }, [questNum])

    return (
        <div className="quizapp">
            {username ? (
                <>
                {stop ? (
                <div className="end">
                <h1 className="stop">
                    <span className="top">Congratulations</span>
                    You have won: <span className="amt-00 inline">{earned}</span>
                    </h1>
                    <button className="btn-01" onClick={handleClick}>Restart</button>
                    </div>
                    )
                    
                :
                <>
                    <div className="question-box">
                        <div className="timer">
                            <div className="time">
                                <Timer 
                                setStop={setStop}
                                data={Data}
                                />
                            </div>
                            <span className="s">s</span>
                        </div>
                        <QuizBox
                            data={Data}
                            setQuestNum={setQuestNum}
                            questNum={questNum}
                            setStop={setStop}
                        />
                    </div>
                    <div className="amount">
                        <ul className="amountbox">
                            {MoneyList.map((m) => (
                                <li className={questNum === m.id ? "amountlist active" : "amountlist"}>
                                    <span className="list">{m.id}</span>
                                    <span className="num">{m.amount}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <audio id="audio" loop autoPlay>
                        <source src={play} type="audio/mp3"></source>
                    </audio>
                </>
            }"
                </>
                
            )
             : <Start setUsername={setUsername} />}
            
        </div>
    )
}

export default QuizApp;