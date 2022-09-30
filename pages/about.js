import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.About}>
            <h1>About the project</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Image 
            src="/images/charizard.png" 
            width="300" 
            height="300" 
            alt="Charizard" 
            />

        </div>
    )
}