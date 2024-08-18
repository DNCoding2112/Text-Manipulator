import React from 'react'
import { useState } from 'react'


export default function About() {
    const [myStyle,setmyStyle]=useState({
        color:"black",
        backgroundColor:"white",
        border: '1px solid white',
    })

    const [btntext,setBtnText]=useState("Enable Dark Mode")

    const toggleStyle=()=>{
        if(myStyle.color=== 'white'){
            setmyStyle({
                color:"black",
                backgroundColor:"white",
                border:"1px solid white"
            })
            setBtnText("Enable Dark Mode")
        }
        else{
            setmyStyle({
                color:"white",
                backgroundColor:"black",
                border:"1px solid white"
            })
            setBtnText("Enable Light Mode")
        }
    }

  return (
    <div className="container" width="100vw" style={myStyle}>
        <h2 className="my-3">About Us</h2>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze Your Text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextManipulator gives you a way to analyze your text quickly and efficiently. Be it word count, character count, or change case of text, this web app has got your back!     
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to Use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextManipulator is a free character counter tool that provides instant character count & word count statistics for a given text. TextManipulator reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter software works in any browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It Suits to count characters in facebook, blog, books, excel document, essays, etc.
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
        </div>
    </div>
  )
}
