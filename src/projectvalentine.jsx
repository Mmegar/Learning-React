import './App.css'
import { useEffect } from 'react'
import flirty_people from './assets/flirts.webp'
import Clickable from './clickable.jsx'
import styles from './clickable.module.css';

function ProjectValentine() {

    useEffect(() => {
        
        document.body.style.color = "black"
        document.body.classList.add("valentine-background")
    
    return () => {[
        document.body.style.background = "",
        document.body.style.color = ""],
        document.body.classList.remove("valentine-background")}
    })
    
return (
    <>
        <div className='image-wrapper'>
            <img id="imageElement" className='imageSize' src={flirty_people} alt="flirt"/>
        </div>
        <h1 className='subtitle'> WILL YOU BE MY GIRLFRIEND?</h1>


        <div className={styles.buttonRow}>
            <Clickable label="yes" property="yes" className={styles.yesBtn} />
            <Clickable label="EW WHO ARE U" property="no" className={styles.noBtn} />
        </div>  
         
    </>
)}
     
export default ProjectValentine