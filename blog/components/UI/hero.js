import classes from './hero.module.css'
import Image from 'next/image'

export default function Hero() {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/itadori.jpeg"  alt="" width={500} height={500}/>
        </div>
        <h1>Hi I'm Jer</h1>
        <p>I am a silly little potato</p>
    </section>
}