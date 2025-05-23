import './App.css'
import { useEffect } from 'react'
import flirty_people from './assets/flirts.webp'
import maomao from './assets/maomao.webp'
import masterJinshi from './assets/masterJinshi.webp'
import Clickable from './clickable.jsx'
import styles from './clickable.module.css';
import maomaoPlease from "./assets/maomoaPlease.webp"
import maomaoSad from "./assets/maomaoSad.webp" 
import jinshiCry from "./assets/jinshiCry.webp"

function preloadImages(imageArray) {
  return Promise.all(
    imageArray.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    })
  );
}


function ProjectValentine() {

    useEffect(() => {
        // Preload images
        preloadImages([maomaoSad, maomaoPlease, jinshiCry])
        .then(() => console.log("✅ Images preloaded"))
        .catch(err => console.error("❌ Preload error", err));

        // Set up background and text color
        document.body.style.backgroundColor = "#FBF7F5";
        document.body.style.color = "black";

        // Cleanup on unmount
        return () => {
            document.body.style.backgroundColor = "";
            document.body.style.color = "";
        };
        }, []);
    
return (
    <>
        <div> 
            <img id="" className='maomao-background' src={maomao} alt="maomao"/>
            <img id="" className='jinshi-background' src={masterJinshi} alt="masterJinshi"/>
            <div className='image-wrapper'>
                
                <img id="imageElement" className='imageSize' src={flirty_people} alt="flirt"/>
            </div>
            <h1 className='subtitle'> WILL YOU BE MY GIRLFRIEND?</h1>
            <div className={styles.buttonRow}>
                <Clickable label="yes" property="yes" className={styles.yesBtn} />
                <Clickable label="EW WHO ARE U" property="no" className={styles.noBtn} />
            </div>  
           
        </div> 
    </>
)}
     
export default ProjectValentine