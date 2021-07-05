import styles from './layout.module.css'
import Link from 'next/link'
import * as React from 'react';

export default function Layout ({children}) {
    return (
        <div className = {styles.container} >
            <div className = {styles.menu}>
                <div className = {styles.menuHeadDiv}>
                    <h1>
                    <Link href="/">
                        <a> neloy kundu </a>
                    </Link>
                    </h1>
                </div>
                <div className = {styles.menuItemDiv}>
                    <h1>
                        <Link href="/work">
                            <a> work </a>
                        </Link>
                    </h1>
                </div>
                
                <div className = {styles.menuItemDiv}>
                    <h1>
                        <Link href="/writing">
                                <a> writing </a>
                        </Link>
                    </h1>
                </div>

                <div className = {styles.menuItemDiv}>
                    <h1>
                        <Link href="/cool-stuff">
                                <a> cool stuff </a>
                        </Link>
                    </h1>
                </div>
            </div>
            <div className = {styles.menuFiller}/>
            <div className = {styles.content}>
                <main>{children}</main>
            </div>
        </div>
    )
}