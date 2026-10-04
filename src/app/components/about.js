import styles from '../page.module.css'
export default function About(){
    return(
        <div className={styles.about}> 
<div className={styles.line3}></div>
<span className={`${styles.name} ${styles.textabout}`}>I enjoy learning new things.</span>
<div className={styles.line4}></div>
<span className={`${styles.love} ${styles.textabout }`}>Hi!</span>
<div className={`${styles.line5}`}>
</div>
<div className={styles.line6}></div>
<span className={`${styles.text6} ${styles.textabout}`}>Enjoy programming in C# and .NET.</span>
<div className={styles.line7}></div>
<span className={`${styles.text7} ${styles.textabout}`}>In my free time I love driving.</span>
<div className={styles.line8}></div>
<div className={styles.line9}></div>
<span className={`${styles.text8} ${styles.textabout}`}>I am actively seeking job or internship opportunities.</span>
</div>
    )
}