"use client"
import { useEffect, useState,useRef } from 'react';
import styles from './page.module.css'
import gsap from 'gsap';
import { ScrollTrigger,TextPlugin,ScrollToPlugin } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Main from './components/main';
import About from './components/about';
import Projects from './components/projects';
import Tech from './components/tech';
import Contact from './components/contact';
gsap.registerPlugin(ScrollTrigger,TextPlugin,ScrollToPlugin);
export default function Home() {
  const classes = ['menuin']
useGSAP(()=>{
  // my love

  //what i do 
  //TOP
 const tl= gsap.timeline({
    scrollTrigger:{
      trigger: ".page_line3__oJFIY",
      start: "top center",
        }
  })
  tl.fromTo(".page_love__AXCST", {opacity:0,top:"-2vh"},{opacity:1,top:0})
  //
  tl.fromTo(".page_line5__1Wezs", {height:0},{height:"9.8vh"})
  tl.fromTo(".page_name__eOmhd", {opacity:0,top:"8vh"},{opacity:1,top:"10vh"})
  //
  tl.fromTo(".page_line3__oJFIY", {height:0},{height:"20vh"})
  tl.fromTo(".page_line4__yKw_O", {width:0},{width:"20vw"})
  tl.fromTo(".page_line6__mkDFr", {height:0},{height:"9.8vh"})
  tl.fromTo(".page_text6__PEDdr", {opacity:0,top:"30vh"},{opacity:1,top:"32vh"})
  //BOTTOM
  const bot = gsap.timeline({
    scrollTrigger:{
      trigger:'.page_line8__UqXGi',
      start:'-250vh 80%',
    }
  })
  //page_text7__Ufdrl
  bot.fromTo(".page_line8__UqXGi", {height:0},{height:'33vh'})
  bot.fromTo(".page_line9__HEsiN", {width:0},{width:'9vw'})
  bot.fromTo(".page_text8__S_vbA", {opacity:0,right:'29vw'},{opacity:1,right:'31vw'})
  bot.fromTo(".page_line7__xUAXd", {height:0},{height:'12vh'})
  bot.fromTo(".page_text7__Ufdrl", {opacity:0,bottom:"10vh"},{opacity:1,bottom:"13vh"})
  //page_line12__9yjhD
  const ba = gsap.timeline({
      scrollTrigger:{
        trigger:".page_photo1__EqUrQ",
        start:'-150vh center'
      }
  })  
  //page_titleP__pcTaH
  ba.fromTo(".page_line10__AMhDQ",{height:0},{height:'5vh'})
  ba.fromTo(".page_line11__mE8Za",{width:0},{width:'4vw'})
  ba.fromTo(".page_line12__9yjhD",{height:0},{height:'4vh'})
  ba.fromTo(".page_photo1__EqUrQ",{opacity:0,top:'9vh'},{opacity:1,top:'12vh',duration:1})

  const ab = gsap.timeline({
    scrollTrigger:{
      trigger:".page_line13__xBnEw",
      start:'10% 30%',
    }
  })
  //
  ab.fromTo('.page_line13__xBnEw',{height:0},{height:'35vh',delay:1})
  ab.fromTo('.page_photo2__GMtdK',{opacity:0,top:'30vh'},{opacity:1,top:'36vh',duration:1})
  ab.fromTo('.page_line13extra__rfZQm',{height:0},{height:'35vh'})
  ab.fromTo(".page_line13extra2__jf1vg", {width:0},{width:'18vw'})
  ab.fromTo('.page_line13extra3__Q9oqN',{height:0,top:'90vh'},{height:'10vh'})

///page_line14__Z88Em
const lastb = gsap.timeline({
  scrollTrigger:{
    trigger:".page_photo3__ef1Rx",
    start:'top 70%'
  }
})
lastb.fromTo(".page_line14__Z88Em",{height:0},{height:'15vh'})
lastb.fromTo(".page_photo3__ef1Rx",{opacity:0,bottom:'13vh'},{opacity:1,bottom:'16vh',duration:1})
const tech = gsap.timeline({
  scrollTrigger:{
    trigger:'.page_tech____gRa',
    start:'top 75%'
  }
})
//page_text17__nIqUB
tech.fromTo(".page_line15__OEKee",{height:0},{height:'19vh'})
.fromTo(".page_text15__lr9O2",{opacity:0,top:'17vh'},{opacity:1,top:'20vh'})
.fromTo(".page_line19__tpdoe",{height:0},{height:'19vh'})
.fromTo(".page_text19__9ZZuO",{opacity:0,top:'17vh'},{opacity:1,top:'20vh'})
.fromTo(".page_line16__b_4cd",{height:0},{height:'20vh'})
.fromTo(".page_text16__nSpOW",{opacity:0,bottom:'17vh'},{opacity:1,bottom:'21vh'})
.fromTo(".page_line18__XTyzV",{height:0},{height:'40vh'})
.fromTo(".page_text18__8e7EU",{opacity:0,bottom:'39vh'},{opacity:1,bottom:'41vh'})
.fromTo(".page_line20__877Ej",{height:0},{height:'20vh'})
.fromTo(".page_text20__3SEmr",{opacity:0,bottom:'19vh'},{opacity:1,bottom:'21vh'})
.fromTo(".page_line17__Lkrtl",{height:0},{height:'5vh'})
.fromTo(".page_text17__nIqUB",{opacity:0,bottom:'4vh'},{opacity:1,bottom:'6vh'})

//page_about__aOfOo
const tt = gsap.timeline({repeat:-1,yoyo:true, repeatDelay:2});
tt.fromTo(".page_unTitle__D6Cto",{text:".",color:'transparent'},{text:"Junior Software Developer",color:'#FEFBE9', duration:2})

ScrollTrigger.create({
  start:0,
  end:'max',
  onUpdate:UpdateValue
})

function UpdateValue(){
  if(ScrollTrigger.isInViewport(`.${styles.about}`,0.6)){

    gsap.to(`#${styles.idunderscore}`,{width:'100%'})
  }else{
    gsap.to(`#${styles.idunderscore}`,{width:'0'})
  }
  if(ScrollTrigger.isInViewport(`.${styles.project}`,0.6)){
    gsap.to(`#${styles.idpro}`,{width:'100%'})
  }else{
    gsap.to(`#${styles.idpro}`,{width:'0'})
  }
  if(ScrollTrigger.isInViewport(`.${styles.tech}`,0.45)){
    gsap.to(`#${styles.idtech}`,{width:'100%'})
    gsap.to(`#${styles.idpro}`,{width:'0'})
  }else{
    gsap.to(`#${styles.idtech}`,{width:'0'})
  }
  if(ScrollTrigger.isInViewport(`.${styles.contact}`,0.99)){
    gsap.to(`#${styles.idcontact}`,{width:'100%'})
    gsap.to(`#${styles.idtech}`,{width:'0'})
  }else{
    gsap.to(`#${styles.idcontact}`,{width:'0'})
  }
}
//page_spanContact__KlnPe
//const lo = gsap.timeline({repeat:-1,yoyo:true,duration:4});

})

useEffect(()=>{
  const w = document.querySelector('.page_menu__71kMP')
  w.addEventListener('click',(e)=>{
    for(let i =0;i<w.children.length;i++){
      if(e.target.parentElement===w.children[i]){
        console.log(e.target.nextSibling.classList.add(`${styles.underscireactive}`))
        console.log(e.target.id)
        gsap.to(window, { duration: 1, scrollTo: { y: `.${e.target.id}`,offsetY: 20} });
      }else{
        console.log(w.children[i].lastChild.classList.remove(`${styles.underscireactive}`))
      }
    }
  })

},[])
  return (
<div id='scroll-palce'>
    <div id='scroll-content'>
      <div id={styles.logo}><img src='/photo/rysunek.png' id={styles.logoimg}></img></div>
    <a aria-label="Linkedin" href='https://linkedin.com/in/mateusz-żmija-94368927a' target='_blank'><img src='/photo/linkedin.png' alt='linkedinimg' className={styles.imagelink}  ></img></a>
    <a aria-label="Github" href='https://github.com/Inko03'  target='_blank'><img src='/photo/github.png' alt='githubimg' className={styles.imagegithub}  ></img></a>
    <Main/>
    <div className={styles.menu}>
            <div className={styles.onthem}>
              <span className={styles.menuin} id={styles.about}>ABOUT</span>
              <span className={`${styles.underscore}`} id={`${styles.idunderscore}`}></span>
            </div>
            <div className={styles.onthem}>
              <span className={styles.menuin} id={styles.project}>PROJECTS</span>
              <span className={styles.underscore} id={`${styles.idpro}`}></span>
            </div>
            <div className={styles.onthem}>
              <span className={styles.menuin} id={styles.tech}>TECH</span>
              <span className={styles.underscore} id={`${styles.idtech}`}></span>
            </div>
            <div className={styles.onthem}>
              <span className={styles.menuin} id={styles.contact}>CONTACT</span>
              <span className={styles.underscore} id={`${styles.idcontact}`}></span>
            </div>
         </div>
    <About/>
    <Projects/>
    <Tech/>
    <Contact/>
    </div>
</div>
  )
}
