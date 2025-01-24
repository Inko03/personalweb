import styles from "../page.module.css"
export default function Main(){
    return(
        <div id='main'>
        <span className={styles.title}>Mateusz Żmija</span>
         <span className={styles.unTitle}>Junior Software Developer</span>
         <div className={styles.line1}></div>
         <div className={styles.line2}></div>
         <div className={styles.line5extra}></div>
        </div>
    )
}