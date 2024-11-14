import { useEffect, useRef, useState } from 'react';
import './snakegame.css';

function Snakegame() {

    const size = useWindowSize();
    const pxAmount = 20; // how many pixels will there be
    const canvasRef = useRef();

    useEffect(() => {
        console.log(size);
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.canvas.height = size;
        context.canvas.width = size;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#FFFFFF';
        context.fillRect(Math.floor(0 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)));
        context.fillRect(Math.floor(2 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)));
        context.fillRect(Math.floor(4 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)));
        context.fillRect(Math.floor(6 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)));
        context.fillRect(Math.floor(8 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)));
        context.fillRect(Math.floor(10 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)));
        context.fillRect(Math.floor(12 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)));
        context.fillRect(Math.floor(14 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)));
        context.fillRect(Math.floor(16 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)));
        context.fillRect(Math.floor(18 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)), Math.floor(1 * (size / pxAmount)));
        console.log(size, canvas.width);
    }, [size]);

    return (
        <canvas className="game-canvas" ref={canvasRef} />
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