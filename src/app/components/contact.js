import styles from "../page.module.css"
import { useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
export default function Contact(){
    useGSAP(()=>{
        const lo = gsap.timeline({repeat:-1,repeatDelay:2})
        lo.fromTo(".page_underor__PsW_i",{width:0,backgroundColor:'#6B604F'},{width:'100%',backgroundColor:'transparent',duration:1})
    })
    const [telefon,setTelefon] = useState(1) 
    return(
        <div className={styles.contact}>
        <span className={styles.contactTitle}>Contact me:</span>
        <div className={styles.contactForm}>
          <div className={styles.aroundInputEmail}>
            <input className={styles.emailForm} required></input>
            <span className={styles.inputtext}>{telefon?"Telefon":"Email"}</span>
            <span className={styles.redLineEmail}></span>
          </div>
          <div className={styles.aroundInputMess}>
            <input className={styles.messageForm} required></input>
            <span className={styles.inputtext}>Message</span>
            <span className={styles.redLineMess}></span>
          </div>
          <div id={styles.conntact}>
            <span className={styles.underor}></span>
            <span className={styles.spanContact} onClick={()=>{telefon?setTelefon(0):setTelefon(1)}}>{telefon?"or use email":"or use phone"}</span>
          </div>
          <button className={styles.buttonContact}>Send</button>
        </div>
      </div>
    )
}