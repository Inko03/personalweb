import styles from "../page.module.css"
import { useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Clicker_Script, The_Girl_Next_Door } from "next/font/google"
export default function Contact(){
    const [type,setType]=  useState({})
    const [message,setMessage]= useState({})
    const [formdata,setformdata]=useState({})
    const [telefon,setTelefon] = useState(1) 
    const [response,setresponse] = useState()
    useGSAP(()=>{
        const lo = gsap.timeline({repeat:-1,repeatDelay:2})
        lo.fromTo(".page_underor__PsW_i",{width:0,backgroundColor:'#6B604F'},{width:'100%',backgroundColor:'transparent',duration:1})
    })
    const senData =async()=>{
      setformdata({type,message})
      try{
        const response = await fetch('https://personalweb-navy.vercel.app/api/send',({
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            type:type.type,
            message:message.message
          })
        }))
        if(response.ok){
          const data  =await response.json()
          console.log(`${data.message}`)
          if(data.message==="SUCCESS"){setresponse(true),clear()}
        }else{
          console.log("Samething went wrong")
        }
      }catch{
        console.log('ERROR:',error)
      }
    }
    const clear = ()=>{
      document.querySelector('.page_emailForm__YsMMg').value="";
      setType({})
      document.querySelector('.page_messageForm__RDDtS').value="";
      setMessage({})
    }
    return(
        <div className={styles.contact}>
        <span className={styles.contactTitle}>Contact me:</span>
        <div className={styles.contactForm}>
          <div className={styles.aroundInputEmail}>
            <input className={styles.emailForm} required onChange={(e)=>setType({type:`${e.target.value}`})}></input>
            <span className={styles.inputtext}>{telefon?"Phone":"Email"}</span>
            <span className={styles.redLineEmail}></span>
          </div>
          <div className={styles.aroundInputMess}>
            <input className={styles.messageForm} required onChange={(e)=>setMessage({message:`${e.target.value}`})}></input>
            <span className={styles.inputtext}>Message</span>
            <span className={styles.redLineMess}></span>
          </div>
          <div id={styles.conntact}>
            <span className={styles.underor}></span>
            <span className={styles.spanContact} onClick={()=>{telefon?setTelefon(0):setTelefon(1)}}>{telefon?"or use email":"or use phone"}</span>
          </div>
          <button className={styles.buttonContact} onClick={senData} style={response?{pointerEvents:'none'}:{pointerEvents:'all'}}>{response?"Sent":"Send"}</button>
        </div>
      </div>
    )
}