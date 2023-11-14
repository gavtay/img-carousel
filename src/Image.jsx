import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { useState } from 'react'
import './Image.css'

const leftArrow = <FontAwesomeIcon
    id="left"
    icon={faArrowLeft}
    style={{color: "#ffffff"}}
/>
const rightArrow = <FontAwesomeIcon
    id="right"
    icon={faArrowRight}
    style={{color: "#ffffff"}}
/>

// const [showImg, setShowImg] = useState([]);

export default function Image() {
    // function populateShowImg() {
    //     console.log('I made it');
    //     for (let i = 0; i < 4; ++i) {
    //         let addImg = {
    //             id: i,
    //             url: './assets/picture' + i + '.jpg'
    //         }
    //         setShowImg([...showImg, addImg]);
    //     }
    // }
        
    function renderImages() {
        // if id === x
        //     foundImg === showImg.x
        //     return (showImg.url)
        return (
            <>
                <img className="img" src="./src/assets/picture1.jpg" alt="Purple lofi picture" />
            </>
        )
    }

    return (
        <>
            {console.log('step 1')}
            {/* {populateShowImg()} */}
            <div className="image-container">
                <div className='carousel-container'>
                    <button className='switchImgBtn'>{leftArrow}</button>
                        {renderImages()}
                        
                    <button className='switchImgBtn'>{rightArrow}</button>
                </div>
            </div>
        </>
    )
}

