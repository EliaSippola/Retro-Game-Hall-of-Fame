import { useEffect, useRef, useState } from 'react';
import './snakegame.css';
import { createGame, getCanvas, getPoints, getSnake, getSnake2 } from './snakedata';

function Snakegame() {

    const size = useWindowSize();
    const canvasRef = useRef();
    const [state, setState] = useState(0);
    const [message, setMessage] = useState("Start Game");
    const [points, setPoints] = useState(0);
    const [points2, setPoints2] = useState(0);

    useEffect(() => {

        const handleKeyDown = (e) => {

            const key = e.key;
            const snake = getSnake();
            const snake2 = getSnake2();
            switch (key) {
                case "a": {e.preventDefault(); snake.direction = 1; break;}
                case "s": {e.preventDefault(); snake.direction = 2; break;}
                case "d": {e.preventDefault(); snake.direction = 3; break;}
                case "w": {e.preventDefault(); snake.direction = 0; break;}
                case "ArrowLeft": {e.preventDefault(); snake2.direction = 1; break;}
                case "ArrowDown": {e.preventDefault(); snake2.direction = 2; break;}
                case "ArrowRight": {e.preventDefault(); snake2.direction = 3; break;}
                case "ArrowUp": {e.preventDefault(); snake2.direction = 0; break;}
            }
    
        }
        document.addEventListener('keydown', handleKeyDown, true);

        const interval = setInterval(() => {
            setPoints(getSnake().points);
            setPoints2(getSnake2().points);
            advance();
        }, 50);

        return () => {
            clearInterval(interval);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        if (state == -1) {
            console.log("you lost");
            setState(0);
            setMessage("Start again");
            getCanvas().reset(canvasRef, size);
        }
    }, [state]);

    useEffect(() => {
        createGame(canvasRef, size);
    }, [size]);

    function advance() {
        getCanvas().advance(setState);
    }

    function handleStartClick() {

        // game not running
        if (state == 0 || state == 2) {
            getCanvas().paused = false;
            setMessage("Pause");
            setState(1);
        } else if (state == 1) {
            getCanvas().paused = true;
            setMessage("Unpause");
            setState(2);
        }

    }

    return (
        <div className='game'>
            <canvas className="game-canvas" ref={canvasRef} />
            <button onClick={handleStartClick}>{message}</button>
            <p>Points: {points}</p>
            <p>Points2: {points2}</p>
        </div>
    )

}

function useWindowSize() {

    const [size, setSize] = useState(0);

    function handleResize() {
        if (window.innerWidth < 780) {
            setSize(400);
            return;
        }
        setSize(window.innerWidth - 380);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    })

    return size;
}



export default Snakegame;