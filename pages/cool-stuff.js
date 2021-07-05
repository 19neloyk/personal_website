import Layout from '../components/layout.js'
import styles from '../styles/Cool-Stuff.module.css'

export default function WorkPage () {
    return (
        <Layout>
            <div className = {styles.container}>
                <div className = {styles.headerDiv}>
                    <h1>cool stuff</h1>
                </div>
                <div className = {styles.itemDiv}>
                    <h2>
                        <a href ="https://en.wikipedia.org/wiki/Space-filling_curve">
                        > space-filling curves
                        </a>
                    </h2>
                </div>
                <div className = {styles.itemDiv}>
                    <h2>
                        <a href ="https://www.youtube.com/watch?v=22Sojtv4gbg&t=281s&ab_channel=TwoMinutePapers">
                        > enhancing photorealism AI in GTA V
                        </a>
                    </h2>
                </div>
                <div className = {styles.itemDiv}>
                    <h2>
                        <a href ="https://en.wikipedia.org/wiki/Barbershop_paradox">
                        > barbershop paradox
                        </a>
                    </h2>
                </div>
            </div>
            
        </Layout>
    )
}