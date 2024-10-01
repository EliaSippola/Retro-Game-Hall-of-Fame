import { useEffect, useState } from 'react'
import './GameImage.css'

export function GameImage( source ) {

    const [image, setImage] = useState(null);

    const fetchImange = async () => {
        const res = await fetch("../../assets/" + source);
        if (!res.ok) {
            return null;
        }

        const imageBlob = await res.blob();
        const imageObjectUrl = URL.createObjectURL(imageBlob);
        setImage(imageObjectUrl);
    }

    useEffect(() => {
        fetchImange();
    }, []);

    return (
        <div className='GameImage'>
            {image == null ?
            <img src='' alt="" />
            :
            <img src={image} alt='' />    
        }
        </div>
    )
}