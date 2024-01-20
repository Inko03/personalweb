import styles from '../page.module.css'
export default function About(){
    return(
        <div className={styles.about}> 
<div className={styles.line3}></div>
<span className={`${styles.name} ${styles.textabout}`}>I love the aesthetic design </span>
<div className={styles.line4}></div>
<span className={`${styles.love} ${styles.textabout }`}>Hi! My name is Mateusz.</span>
<div className={`${styles.line5}`}>
</div>
<div className={styles.line6}></div>
<span className={`${styles.text6} ${styles.textabout}`}>I'm 20 years old, I love creating websites.</span>
<div className={styles.line7}></div>
<span className={`${styles.text7} ${styles.textabout}`}>In my free time I love driving</span>
<div className={styles.line8}></div>
<div className={styles.line9}></div>
<span className={`${styles.text8} ${styles.textabout}`}>Currently looking for a job</span>
</div>
    )
}