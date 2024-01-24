import styles from "../page.module.css"
import stylebutton from "./constact.module.css"
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
    const [pending, setpending] = useState(false)
    const [status,setStatus]=useState()
    useGSAP(()=>{
        const lo = gsap.timeline({repeat:-1,repeatDelay:2})
        lo.fromTo(".page_underor__PsW_i",{width:0,backgroundColor:'#6B604F'},{width:'100%',backgroundColor:'transparent',duration:1})
    })
    const senData =async()=>{
      try{
        setpending(true)
        const response = await fetch('https://mateuszwebsite.pl/api/send',({
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
          if(data.message==="SUCCESS"){setresponse(true),clear(),setpending(false),setStatus("Message sent correct")}else{
            setStatus("Bad data or not all fild fill")
            setresponse(false)
            clear()
            setpending(false)
          }
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
          <span className={stylebutton.spanerror}>{status?status:null}</span>
          {pending?<div id={stylebutton.pending}><span id={stylebutton.dot}></span><span id={stylebutton.dotleft}></span><span id={stylebutton.dotright}></span></div>:<button className={styles.buttonContact} onClick={senData} style={response?{pointerEvents:'none'}:{pointerEvents:'all'}}>{response?"Sent":"Send"}</button>}
        </div>
      </div>
    )
}
