import React, {useState} from 'react'
import './productImages.css'

function ProductImages({ images = [{url:''}] }) {
    const [main, setMain] = useState(images[0])

    return (
        <div className="images-container">
            <img src={main.url} alt="main-img" className="main-img"/>
            <div className="gallery">
                {images.map( (img, index) => {
                    return (
                        <>
                        <img src={img.url} 
                        alt={img.filename} 
                        key={index} 
                        onClick={() => setMain(images[index])}
                        className={`${img.url === main.url ? 'active' : null}`}/>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductImages
