import './App.css'
import { useState } from 'react'
import flirty_people from './assets/flirts.webp'
import maomaoPlease from "./assets/maomoaPlease.webp"
import maomaoSad from "./assets/maomaoSad.webp" 
import jinshiCry from "./assets/jinshiCry.webp"



function Clickable({label, property, className}) {
    const [imageElement, setImageElement] = useState(0)
    const maomaoImages = [
        maomaoPlease,
        maomaoSad,
        jinshiCry
    ]

    function clicked() {
        const getImageId = document.getElementById("imageElement")
        /*if the no button is clicked then the image will change */
        if (property == "no"){ 
            setImageElement(prev => prev + 1)
            if (maomaoImages.length > imageElement){
                getImageId.src = maomaoImages[imageElement]
            } else{
                getImageId.src = maomaoImages[setImageElement(0)]
                getImageId.src = flirty_people
               
            }
        }
    }

return (
    <>
        <p onClick={clicked} className={className}> {label} </p>

    </>
)}
     
export default Clickable