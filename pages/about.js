import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.About}>
            <h1>About the project</h1>
            <p>This is my first next.js project. I will be publishing it on github and will deploy it to versel. This content is purely for study purposes.</p>
            <Image 
            src="/images/charizard.png" 
            width="300" 
            height="300" 
            alt="Charizard" 
            />

        </div>
    )
}