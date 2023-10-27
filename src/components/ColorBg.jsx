import React, { useState } from 'react'
import './ColorBg.css'

function ColorBg() {
    const [changeColor, setChangeColor] = useState("blackColor")

    const handleChangeColor = (colorVal) => {
        setChangeColor(colorVal)
    }

    console.log(changeColor);
    return (
        <>
            <div className={`color-container ${changeColor}`}>
                <div className='color-section'>
                        <div className='left-container'>
                            <h1 style={{fontSize:'50px'}}>Background Color</h1>
                            <p>Background color change by choosing the boxes on the right side!!!</p>
                        </div>
                        <div className='right-container'>
                            <div onClick={() => handleChangeColor("red-box")} className='red-box box-size'></div>
                            <div onClick={() => handleChangeColor("green-box")} className='green-box box-size'></div>
                            <div onClick={() => handleChangeColor("blue-box")} className='blue-box box-size'></div>
                            <div onClick={() => handleChangeColor("grey-box")} className='grey-box box-size'></div>
                            <div onClick={() => handleChangeColor("white-box")} className='white-box box-size'></div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default ColorBg