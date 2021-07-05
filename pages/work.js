import Layout from '../components/layout.js'
import styles from '../styles/Work.module.css'
import Image from 'next/image'
import Spacer from '../components/spacer'


import popup_picture_1 from '../public/images/popup1.png'
import popup_picture_2 from '../public/images/popup2.png'
import popup_picture_3 from '../public/images/popup3.png'

import tunedune_picture_1 from '../public/images/tunedune1.png'
import tunedune_picture_2 from '../public/images/tunedune2.png'
import tunedune_picture_3 from '../public/images/tunedune3.png'

import seventhgear_1 from '../public/images/seventhgear1.png'
import seventhgear_2 from '../public/images/seventhgear2.png'

export default function WorkPage () {
    return (
        <Layout>
            <div className = {styles.container}>
                <div className = {styles.headingDiv}>
                    <h1>work </h1>
                </div>
                
                <div className = {styles.eachExperience}>
                    <h1 className = {styles.experienceTitle}>
                        popup: foodtrucks and mobile vendors
                    </h1>
                    <h2>(June 2020 - present)</h2>
                    <h2 className = {styles.experiencePoint}>
                        popup is a platform I made for viewing mobile vendors nearby on both <strong>iOS</strong> and <strong>Android</strong>
                    </h2>
                    <h2 className = {styles.experiencePoint}>
                        I used <strong>Golang</strong> (backend), <strong>React Native</strong> (mobile), <strong>MongoDB</strong>(database), and <strong>AWS EC2</strong> for hosting
                    </h2>
                    <h2>Links: <a href = "https://apps.apple.com/us/app/popup-foodtrucks-and-popups/id1573365496">App Store</a>, <a href = "https://play.google.com/store/apps/details?id=com.popup_mobile&hl=en_US&gl=US">Play Store</a></h2>
                    <div className = {styles.experiencePictures}>
                    <Image 
                    src={popup_picture_1} 
                    alt="popup" 
                    width = {170}
                    height = {300}
                    className={styles.eachPicture}
                    />
                    <Spacer/>
                    <Image 
                    src={popup_picture_2} 
                    alt="popup" 
                    width = {170}
                    height = {300}
                    className={styles.eachPicture}
                    />
                    <Spacer/>
                    <Image 
                    src={popup_picture_3} 
                    alt="popup" 
                    width = {170}
                    height = {300}
                    className={styles.eachPicture}
                    />
                    </div>
                </div>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <div className = {styles.eachExperience}>
                    <h1 className = {styles.experienceTitle}>
                        TuneDune
                    </h1>
                    <h2>(June 2020 - present)</h2>
                    <h2 className = {styles.experiencePoint}>
                    TuneDune is used to curate songs for group gatherings;
                     individuals connect their Spotify and Apple Music accounts.
                      The app then looks at similarities in everyone’s music tasted
                       to choose songs that fit everyone’s preferences. This is
                        all done in real time.
                    </h2>
                    <h2 className = {styles.experiencePoint}>
                        I also had to conform old Spotify and Apple Music SDKs to the
                        newer SwiftUI framework which was really difficult for me
                    </h2>
                    <h2 className = {styles.experiencePoint}>
                        I used <strong>Node.js</strong> (backend), <strong>Swift</strong> (mobile), <strong>MongoDB</strong>(database) and <strong>AWS EC2</strong> for hosting
                    </h2>
                    <h2>Links: <a href = "https://apps.apple.com/us/app/tunedune/id1525288136">App Store</a></h2>
                    <div className = {styles.experiencePictures}>
                    <Image 
                    src={tunedune_picture_1} 
                    alt="tunedune" 
                    width = {170}
                    height = {300}
                    className={styles.eachPicture}
                    />
                    <Spacer/>
                    <Image 
                    src={tunedune_picture_2} 
                    alt="tunedune" 
                    width = {170}
                    height = {300}
                    className={styles.eachPicture}
                    />
                    <Spacer/>
                    <Image 
                    src={tunedune_picture_3} 
                    alt="tunedune" 
                    width = {170}
                    height = {300}
                    className={styles.eachPicture}
                    />
                    </div>
                </div>

                <Spacer/>
                <Spacer/>
                <Spacer/>
                <div className = {styles.eachExperience}>
                    <h1 className = {styles.experienceTitle}>
                        Seventh Gear
                    </h1>
                    <h2>(June 2020 - present)</h2>
                    <h2 className = {styles.experiencePoint}>
                    Seventh Gear is a mobile game where the user has to 
                    quickly fit in a stationary gear to a spinning 
                    gear each level. As each level increases, so 
                    does the speed of the spinning gear.
                    </h2>
                    <h2 className = {styles.experiencePoint}>
                        I used <strong>Swift</strong>, using graphics libraries such as SpriteKit.
                        I implemented <strong>Google Admob</strong> advertisements and <strong>Firebase Analytics</strong>.
                    </h2>
                    <h2>Links: <a href = "https://apps.apple.com/us/app/seventh-gear/id1492736437">App Store</a></h2>
                    <div className = {styles.experiencePictures}>
                    <Image 
                    src={seventhgear_1} 
                    alt="seventh gear" 
                    width = {170}
                    height = {300}
                    className={styles.eachPicture}
                    />
                    <Spacer/>
                    <Image 
                    src={seventhgear_2} 
                    alt="seventh gear" 
                    width = {170}
                    height = {300}
                    className={styles.eachPicture}
                    />
                    </div>
                </div>

                <Spacer/>
                <Spacer/>
                <Spacer/>
                <div className = {styles.eachExperience}>
                    <h1 className = {styles.experienceTitle}>
                        Article Based AI Investment
                    </h1>
                    <h2>(June 2020 - present)</h2>
                    <h2 className = {styles.experiencePoint}>
                    This was an application that read the titles of Tesla articles, 
                    and using a neural network, would make a recommendation to buy, 
                    sell, or hold shares of Tesla using a neural network.
                    </h2>
                    <h2 className = {styles.experiencePoint}>
                        I used <strong>Python</strong>, using the <strong>BeautifulSoup</strong> library for webscraping,
                        <strong>Pandas</strong> for data.
                    </h2>
                    <h2>Links: <a href = "https://github.com/19neloyk/article-based-AI-investment">Public Repo</a></h2>
                    <h2><i>This was so old, I unfortunately could not find any pictures of this</i></h2>
                </div>

                <Spacer/>
                <Spacer/>
                <Spacer/>
                <div className = {styles.eachExperience}>
                    <h1 className = {styles.experienceTitle}>
                    United Nations 1% for Development App
                    </h1>
                    <h2>(June 2020 - present)</h2>
                    <h2 className = {styles.experiencePoint}>
                    I jelped a United Nations nonprofit that gave out funding.
                     I proposed and wrote a web app that scored applications
                      for funding, so the fund’s readers could save time and
                       read high-priority applications first.
                    </h2>
                    <h2 className = {styles.experiencePoint}>
                        I used <strong>HTML/CSS</strong>(frontend), <strong>NodeJS</strong>
                        (backend), and <strong>MongoDB</strong> (database)
                    </h2>
                    <h2>Links: <a href = "https://github.com/19neloyk/unonepercentappfinal">Public Repo</a></h2>
                    <h2><i>This was so old, I unfortunately could not find any pictures of this</i></h2>
                </div>

                <h1>
                    <a href = "https://19neloyk.github.io">
                        Here's an older, more exhaustive list with smaller projects
                    </a>
                </h1>

            </div>
        </Layout>
    )
}