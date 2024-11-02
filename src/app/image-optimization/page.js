import React from 'react'
import Image from 'next/image';
import Img from "../../../public/Assets/image.jpg"
const ImageOptimization = () => {
    console.log(Img);
    
    return (
        <>
            <h2>Image Optimization in Next JS</h2>

            <Image height={200} src={Img} alt='Next-Image'/>
        </>
    )
}

export default ImageOptimization
