import React,{useState, useEffect} from 'react'
import './css/Navbar.css'
import logo from './images/logo.png'
import avatar from './images/avatar.png'

function Navbar() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const handleScroll=()=>{
            if(window.scrollY>50){
                setScroll(true)
            } else{
                setScroll(false)
            }
        }
        window.addEventListener("scroll", handleScroll);
        return()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    }, [scroll])
    return (
        <>
        <div className= {scroll?"header":"float-header"}>
            <div id="logo"><img src={logo} alt="Netflix"/> </div>
            <div id="avatar"><img src={avatar} alt="avatar" /></div>
        </div>
        </>
        
    )
}

export default Navbar
