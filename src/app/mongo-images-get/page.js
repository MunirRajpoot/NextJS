'use client'

import { useEffect, useState } from "react"
import Image from 'next/image'

const GetMongoImage = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/api/get-mongo-image');
                const result = await response.json();
                console.log("Fetch Images", result);

                if (result.success) {
                    setImages(result.images);
                } else {
                    console.log("Error");
                }
            } catch (error) {
                console.log("Error", error);
            }
        };
        fetchImages();
    }, []);

    return (
        <>
            <h2>Get Images from MongoDB</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    images.map((image) => (
                        <div key={image._id} style={{ margin: "10px" }}>
                            <Image
                                src={`data:${image.contentType};base64,${Buffer.from(image.data).toString('base64')}`}
                                alt={image.name}
                                width={200}
                                height={200}
                                style={{ objectFit: "cover" }}
                            />
                            <p>{image.name}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default GetMongoImage;
