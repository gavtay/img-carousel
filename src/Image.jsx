import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './Image.css'

const leftArrow = <FontAwesomeIcon id="left" icon={faArrowLeft} style={{color: "#ffffff"}} />
const rightArrow = <FontAwesomeIcon id="right" icon={faArrowRight} style={{color: "#ffffff"}} />

export default function Image() {
    const [showImg, setShowImg] = useState(0);

    let imageObjectArray = [
        { id: 0, url: './src/assets/picture0.jpg' },
        { id: 1, url: './src/assets/picture1.jpg' }, 
        { id: 2, url: './src/assets/picture2.jpg' }, 
        { id: 3, url: './src/assets/picture3.jpg' }
    ];

    function changeImage(num, imageObjectArray) {
        if (num === '0') {
            if (showImg > 0) {setShowImg(showImg - 1);}
        }
        else {
            if (showImg < imageObjectArray.length - 1) {setShowImg(showImg + 1);}
        }
    }
        
    function renderImages(imageObjectArray) {
        let imgId = imageObjectArray[showImg];

        return (
            <>
                <img className="img" src={imgId.url} alt="Purple lofi picture" />
            </>
        )
    }

    return (
        <>
            <div className="image-container">
                <div className='carousel-container'>
                    <button
                        className='switchImgBtn'
                        id='left-btn'
                        onClick={()=>{changeImage('0', imageObjectArray)}}>
                        {leftArrow}
                    </button>
                        {renderImages(imageObjectArray)}                       
                    <button 
                        className='switchImgBtn' 
                        id='right-btn' 
                        onClick={()=>{changeImage('1', imageObjectArray)}}>
                        {rightArrow}
                    </button>
                </div>
            </div>
            <div className='img-number-container'>
                <h3>{showImg + 1} / {imageObjectArray.length}</h3>
            </div>
        </>
    )
}
