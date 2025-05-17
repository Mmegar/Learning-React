import './App.css'
import { useEffect } from 'react'

function ProjectValentine() {
    useEffect(() => {
        
        document.body.style.color = "black"
        document.body.style.background = "#FBF7F5"
    
    return () => {[
        document.body.style.background = "",
        document.body.style.color = ""]}
    })
    
return (
    
    <> 

        
        <h1 className={'styles.subtitle'}> WILL YOU BE MY GIRLFRIEND?</h1>

        <p> Yes </p>
        <p> No </p>

    </>
)}
     
export default ProjectValentine