import { useEffect, useState } from "react";
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
            question: "In which part of your body would you find the cruciate ligament?",
            answers: [
                {
                    text: "Elbow",
                    correct: false,
                },
                {
                    text: "Ankle",
                    correct: false,
                },
                {
                    text: "Knee",
                    correct: true,
                },
                {
                    text: "Feet",
                    correct: false
                }
            ]
        },
        {
            id: 2,
            question: "What is the name of the main antagonist in the Shakespeare play Othello?",
            answers: [
                {
                    text: "Lago",
                    correct: true,
                },
                {
                    text: "Sam",
                    correct: false,
                },
                {
                    text: "Jada",
                    correct: false,
                },
                {
                    text: "Nick",
                    correct: false
                }
            ]
        },
        {
            id: 3,
            question: "What was the most popular girls name in the UK in 2021?",
            answers: [
                {
                    text: "Alicia",
                    correct: false,
                },
                {
                    text: "Maddison",
                    correct: false,
                },
                {
                    text: "Jessica",
                    correct: false,
                },
                {
                    text: "Olivia",
                    correct: true
                }
            ]
        },
        {
            id: 4,
            question: "What is the name of the 1976 film about the Watergate scandal, starring Robert Redford and Dustin Hoffman?",
            answers: [
                {
                    text: "Stanley and I",
                    correct: false,
                },
                {
                    text: "Mid-journey",
                    correct: false,
                },
                {
                    text: "All the President's Men",
                    correct: true,
                },
                {
                    text: "Two thrones",
                    correct: true
                }
            ]
        },
        {
            id: 5,
            question: "Which comedian was the second permanent host of Never Mind the Buzzcocks after Mark Lamarr?",
            answers: [
                {
                    text: "Terry Alderton",
                    correct: false,
                },
                {
                    text: "Simon Amstell",
                    correct: true,
                },
                {
                    text: "Adele Anderson",
                    correct: false,
                },
                {
                    text: "Micheal Bentine",
                    correct: false
                }
            ]
        },
        {
            id: 6,
            question: "Which popular video game franchise has released games with the subtitles World At War and Black Ops?",
            answers: [
                {
                    text: "Ghost Reckon",
                    correct: false,
                },
                {
                    text: "Made of Honor",
                    correct: false,
                },
                {
                    text: "Call of Duty",
                    correct: true,
                },
                {
                    text: "Battlefield",
                    correct: false
                }
            ]
        },
        {
            id: 7,
            question: "In what US State is the city Nashville?",
            answers: [
                {
                    text: "Tennessee",
                    correct: true,
                },
                {
                    text: "Los Angeles",
                    correct: false,
                },
                {
                    text: "California",
                    correct: false,
                },
                {
                    text: "San Francisco",
                    correct: false
                }
            ]
        },
        {
            id: 8,
            question: "Which rock band was founded by Trent Reznor in 1988?",
            answers: [
                {
                    text: "Black Sabbath",
                    correct: false,
                },
                {
                    text: "Nine Inch Nails",
                    correct: true,
                },
                {
                    text: "Talking Heads",
                    correct: false,
                },
                {
                    text: "Led Zeppelin",
                    correct: false
                }
            ]
        },
        {
            id: 9,
            question: "What is the currency of Denmark?",
            answers: [
                {
                    text: "Peso",
                    correct: false,
                },
                {
                    text: "Franc",
                    correct: false,
                },
                {
                    text: "Euro",
                    correct: true,
                },
                {
                    text: "Krone",
                    correct: true
                }
            ]
        },
        {
            id: 10,
            question: "Which Tennis Grand Slam is played on a clay surface?",
            answers: [
                {
                    text: "The French Open (Roland Garros)",
                    correct: true,
                },
                {
                    text: "US Open",
                    correct: false,
                },
                {
                    text: "Australia Open",
                    correct: false,
                },
                {
                    text: "Wimbledon",
                    correct: false
                }
            ]
        },
        {
            id: 11,
            question: "In which European country would you find the Rijksmuseum?",
            answers: [
                {
                    text: "Turkey",
                    correct: false,
                },
                {
                    text: "Netherlands",
                    correct: true,
                },
                {
                    text: "Austria",
                    correct: false,
                },
                {
                    text: "Germany",
                    correct: false
                }
            ]
        }, {
            id: 12,
            question: "How many films have Al Pacino and Robert De Niro appeared in together?",
            answers: [
                {
                    text: "4",
                    correct: true,
                },
                {
                    text: "7",
                    correct: false,
                },
                {
                    text: "12",
                    correct: false,
                },
                {
                    text: "8",
                    correct: false
                }
            ]
        },
        {
            id: 13,
            question: "What was the old name for a Snickers bar before it changed in 1990?",
            answers: [
                {
                    text: "Close",
                    correct: false,
                },
                {
                    text: "Chilla",
                    correct: false,
                },
                {
                    text: "Marathon",
                    correct: true,
                },
                {
                    text: "Snick",
                    correct: false
                }
            ]
        },
        {
            id: 14,
            question: "Who was the head of state in Japan during the second world war?",
            answers: [
                {
                    text: "Emperor Hinamoto",
                    correct: false,
                },
                {
                    text: "Emperor Hirohito",
                    correct: true,
                },
                {
                    text: "Emperor Hiroshima",
                    correct: false,
                },
                {
                    text: "Emperor Hinokuma",
                    correct: false
                }
            ]
        },
        {
            id: 15,
            question: "What is the smallest planet in our solar system?",
            answers: [
                {
                    text: "Mercury",
                    correct: true,
                },
                {
                    text: "Mars",
                    correct: false,
                },
                {
                    text: "Uranus",
                    correct: false,
                },
                {
                    text: "Pluto",
                    correct: false
                }
            ]
        },
        {
            id: 16,
            question: "Who wrote the novels Gone Girl and Sharp Objects?",
            answers: [
                {
                    text: "Ralph Ellison",
                    correct: false,
                },
                {
                    text: "James Baldwin",
                    correct: false,
                },
                {
                    text: "Gillian Flynn",
                    correct: true,
                },
                {
                    text: "Samuel Clemens",
                    correct: false
                }
            ]
        },
        {
            id: 17,
            question: "Which legendary surrealist artist is famous for painting melting clocks?",
            answers: [
                {
                    text: "William",
                    correct: false,
                },
                {
                    text: "Salvador Dali",
                    correct: true,
                },
                {
                    text: "Tomas Aceves",
                    correct: false,
                },
                {
                    text: "Gustave Brion",
                    correct: false
                }
            ]
        },
        {
            id: 18,
            question: "Which football club plays its home games at Loftus Road?",
            answers: [
                {
                    text: "Crewe",
                    correct: false,
                },
                {
                    text: "Mansfield",
                    correct: false,
                },
                {
                    text: "Bristol City",
                    correct: false,
                },
                {
                    text: "Queen's Park Rangers",
                    correct: true
                }
            ]
        },
        {
            id: 19,
            question: "Continental United States has 4 time zones, can you name them?",
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
        {
            id: 20,
            question: "What was the Turkish city of Istanbul called before 1930?",
            answers: [
                {
                    text: "Saigon",
                    correct: false,
                },
                {
                    text: "Batavia",
                    correct: false,
                },
                {
                    text: "Constantinople",
                    correct: true,
                },
                {
                    text: "Angora",
                    correct: false
                }
            ]
        },
        {
            id: 21,
            question: "From which US city do the band The Killers originate?",
            answers: [
                {
                    text: "Las Vegas",
                    correct: true,
                },
                {
                    text: "Oklahoma",
                    correct: false,
                },
                {
                    text: "Seatle",
                    correct: false,
                },
                {
                    text: "Baltimore",
                    correct: false
                }
            ]
        },
        {
            id: 22,
            question: "How many human players are there on each side in a polo match?",
            answers: [
                {
                    text: "4",
                    correct: true,
                },
                {
                    text: "6",
                    correct: false,
                },
                {
                    text: "5",
                    correct: false,
                },
                {
                    text: "8",
                    correct: false
                }
            ]
        },
        {
            id: 23,
            question: "In what year did Tony Blair become British Prime Minister?",
            answers: [
                {
                    text: "1990",
                    correct: false,
                },
                {
                    text: "1992",
                    correct: false,
                },
                {
                    text: "1997",
                    correct: true,
                },
                {
                    text: "2001",
                    correct: false
                }
            ]
        },
        {
            id: 24,
            question: "How many times has England won the men's football World Cup?",
            answers: [
                {
                    text: "1",
                    correct: true,
                },
                {
                    text: "3",
                    correct: false,
                },
                {
                    text: "5",
                    correct: false,
                },
                {
                    text: "2",
                    correct: false
                }
            ]
        },
        {
            id: 25,
            question: "What is the capital of New Zealand?",
            answers: [
                {
                    text: "Auckland",
                    correct: false,
                },
                {
                    text: "New Plymouth",
                    correct: false,
                },
                {
                    text: "Wellington",
                    correct: true,
                },
                {
                    text: "Nelson",
                    correct: false
                }
            ]
        },
        {
            id: 26,
            question: "Street artist Banksy is originally associated with which British city?",
            answers: [
                {
                    text: "Liverpool",
                    correct: false,
                },
                {
                    text: "Bristo",
                    correct: true,
                },
                {
                    text: "Coventry",
                    correct: false,
                },
                {
                    text: "Leciester",
                    correct: false
                }
            ]
        },
        {
            id: 27,
            question: "From what grain is the Japanese spirit Sake made?",
            answers: [
                {
                    text: "Rice",
                    correct: true,
                },
                {
                    text: "Corn",
                    correct: false,
                },
                {
                    text: "Barley",
                    correct: false,
                },
                {
                    text: "Buckwheat",
                    correct: false
                }
            ]
        },
        {
            id: 28,
            question: "What does KFC stand for?",
            answers: [
                {
                    text: "Kentucky Fry Chicken",
                    correct: false,
                },
                {
                    text: "Ketchup Fried Chicken",
                    correct: false,
                },
                {
                    text: "King's Fried Chicken",
                    correct: true,
                },
                {
                    text: "Kentucky Fried Chicken",
                    correct: true
                }
            ]
        },
        {
            id: 29,
            question: "What street does the British prime minister live on?",
            answers: [
                {
                    text: "Downing Street",
                    correct: true,
                },
                {
                    text: "Oxford Street",
                    correct: false,
                },
                {
                    text: "Albert Street",
                    correct: false,
                },
                {
                    text: "Carnaby Street",
                    correct: false
                }
            ]
        },
        {
            id: 30,
            question: "Mycology is the study of what?",
            answers: [
                {
                    text: "Plant",
                    correct: false,
                },
                {
                    text: "Cell",
                    correct: false,
                },
                {
                    text: "Bacteria",
                    correct: false,
                },
                {
                    text: "Fungi",
                    correct: true
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
    }, [questNum, MoneyList])

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