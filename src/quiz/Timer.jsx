import { useEffect, useState } from "react"

const Timer = ({setStop, data}) => {
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        if (timer === 0) return setStop(true)
        const Interval = setInterval(() => {
            setTimer(timer -  1)
        }, 1000)

        return () => clearInterval(Interval)
    }, [setStop, timer])

    useEffect(() => {
        setTimer(30)
    }, [data])

    return timer
}

export default Timer;