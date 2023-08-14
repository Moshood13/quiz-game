import { useEffect, useState } from "react"
import useSound from "use-sound";
import wrong from "../asset/wrong-answer.mp3";

const Timer = ({setStop, data}) => {
    const [timer, setTimer] = useState(30);
    const [playWrong] = useSound(wrong);

    useEffect(() => {
        if (timer === 0) {
            setStop(true);
            playWrong();
        } 

        const Interval = setInterval(() => {
            setTimer(timer -  1)
        }, 1000);

        return () => clearInterval(Interval)
    }, [setStop, timer])

    useEffect(() => {
        setTimer(30)
    }, [data])

    return timer
}

export default Timer;