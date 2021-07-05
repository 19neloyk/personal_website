import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Image from 'next/image'
import profilePic from '../public/images/profile.jpg'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>neloy kundu</title>
      </Head>
      <div className = {styles.container}>
        <div className = {styles.headerDiv}>
          <h1>welcome</h1>
        </div>
        <div className = {styles.profilePicWrapper}>
          <div className = {styles.profilePicMargin}></div>
          <Image 
          src={profilePic} 
          alt="neloy a while back" 
          width = {150}
          height = {150}
          className={styles.profilePicDiv}
          />
        </div>
        <div className = {styles.menuItemDiv}>
          <h2>My name is Neloy. I'm pursuing a
           BS in Mathematics and Computer Science
            at Lafayette College. Additionally, I'm
            heavily interested in finance. </h2>
        </div>
        <div className = {styles.menuItemDiv}>
          <h2>I build a ton of software 
            for my own ventures. In fact, I am currently 
            participating in my college's selective summer <a href = "https://dyer.lafayette.edu/bsa/">accelerator program</a> and
              have won the institution's annual business <a href = "https://news.lafayette.edu/2021/05/12/students-pitch-big-ideas-and-earn-investment-money/">
              competition
            </a> with one of these ventures. I've also done <a href = "https://www.semanticscholar.org/paper/Distinct-Distances-with-%24%5Cell_p%24-Spaces-AlQady-Chabot/eb4471b06585654ae607b0980342ee4a60a5fd8b">published 
          research</a> at the intersection of cs and mathematics.
          </h2>
        </div>
      </div>
    </Layout>
  )
}
