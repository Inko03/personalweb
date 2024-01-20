import styles from "../page.module.css"
export default function Projects(){
    return(
        <div className={styles.project}>
<div className={styles.line10}></div>
<div className={styles.line11}></div>
<div className={styles.line12}></div>
  <div className={styles.photo1}>
      <span className={styles.titleP}>Memory game</span>
      <span className={styles.stactitle}>Tech use:</span>
      <span className={styles.stacP}>HTML, CSS, JavaScript</span>
      <a href='https://inko03.github.io/game/' target='_blank'><span className={styles.linktoWeb}>Wanna see?</span></a>
  </div>
<div className={styles.line13}></div>
<div className={styles.line13extra}></div>
<div className={styles.line13extra2}></div>
<div className={styles.line13extra3}></div>
<div className={styles.photo2}>
      <span className={styles.titleP}>Home Developer Site</span>
      <span className={styles.stactitle}>Tech use:</span>
      <span className={styles.stacP}>HTML, CSS, JavaScript</span>
      <a target='_blank' href='https://inko03.github.io/website/?fbclid=IwAR1Pf0qyBP0FU1J4udpHDQnnAtpXHZhPJ0I4CjVpd_QyHRtxJ5gGnqzc8Xo'><span className={styles.linktoWeb}>Wanna see?</span></a>
</div>
<div className={styles.line14}></div>
  <div className={styles.photo3}>
  <span className={styles.titleP}>Online shop and Brand site</span>
      <span className={styles.stactitle}>Tech use:</span>
      <span className={styles.stacP}>React, NodeJS, MongoDB</span>
      <span className={styles.linktoWeb}>Wanna see?</span>
  </div>
</div>
    )
}