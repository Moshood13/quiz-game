import { useState } from "react";
import "./index.scss";

const QuizApp = () => {

    const [question, setQuestion] = useState(1)


    const MoneyList = [
        {id: 1, amount: "$ 100"},
        {id: 2, amount: "$ 200"},
        {id: 3, amount: "$ 300"},
        {id: 4, amount: "$ 500"},
        {id: 5, amount: "$ 1000"},
        {id: 6, amount: "$ 2000"},
        {id: 7, amount: "$ 5000"},
        {id: 8, amount: "$ 10000"},
        {id: 9, amount: "$ 50000"},
        {id: 10, amount: "$ 100,000"},
        {id: 11, amount: "$ 150,000"},
        {id: 12, amount: "$ 250,000"},
        {id: 13, amount: "$ 350,000"},
        {id: 14, amount: "$ 500.000"},
        {id: 15, amount: "$ 1,000,000"}
    ].reverse();

    return(
        <div className="quizapp">
            <div className="question-box">
                <div className="timer">
                    <span className="time">30</span>
                    <span className="s">s</span>
                </div>
                <div className="question">
                    <h4 className="quest">What is your name?</h4>
                </div>
                <div className="options">
                    <ul className="opt-box">
                        <li className="option">Ade</li>
                        <li className="option">Ayo</li>
                        <li className="option">Ada</li>
                        <li className="option">Ali</li>
                    </ul>
                </div>
            </div>
            <div className="amount">
                <ul className="amountbox">
                    {MoneyList.map((m) => (
                    <li className={question === m.id ? "amountlist active" : "amountlist"}>
                        <span className="list">{m.id}</span>
                        <span className="num">{m.amount}</span>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default QuizApp;