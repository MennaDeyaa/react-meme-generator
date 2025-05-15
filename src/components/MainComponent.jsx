import { useState } from "react"
import React from "react"

export default function MainComponent(){
    // eslint-disable-next-line no-unused-vars
    const [meme,setMeme]=useState({
        topText:"One does not simply",
        bottomText:"Walk into Mordor",
        imgSrc:"http://i.imgflip.com/1bij.jpg"
    })
    // eslint-disable-next-line no-unused-vars
    const [allMeme,setAllMeme]=useState([]);
       React.useEffect(()=>{
         fetch("https://api.imgflip.com/get_memes")
               .then(res=>res.json())
               .then(data => setAllMeme(data.data.memes)) 
            },[])


    function handleChange(e){
          const {value, name }=e.currentTarget
          setMeme((prev)=>{return {...prev, [name] :value}})
    }

    function handleClick(){
        const randomNumber=Math.floor(Math.random() * allMeme.length)
        const previous=allMeme[randomNumber].url
        setMeme(prev=>({...prev,imgSrc:previous }))
    }

 

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={handleClick}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imgSrc} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}