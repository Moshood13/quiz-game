import { useRef } from "react";

const Start = ({ setUsername }) => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value);

    }
    return (
        <div className="start">
            <div className="inputBox">
                <h4 className="text">Be A Millionaire</h4>
                <input
                    type="text"
                    placeholder="enter your name"
                    className="input"
                    ref={inputRef}
                />
                <button
                    className="btn-00"
                    onClick={handleClick}
                >Click to Begin
                </button>
            </div>
        </div>
    )
}

export default Start;