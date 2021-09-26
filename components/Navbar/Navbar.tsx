import React from 'react';
import Link from "next/link";
import styles from './Navbar.module.scss';
import { navDataIterface } from '../../pages/Interfaces/Interface';

function Navbar({data}: navDataIterface){

    return (
        <header className={styles.headerDiv}>
        <Link href="/"><a><img src={data.navLogo} alt={data.navTitle} className={styles.navLogo}></img></a></Link>
        <div className={styles.container}>
            <ul className={styles.navContainer}>
                {
                    data.navLinks.map((item, index)=>(
                        <li className={styles.navItem} key={index}><Link href={`/${item.href}`}>{item.title}</Link></li>
                    ))
                }
            </ul>
            <div className={styles.hidden}><i className="fa fa-bars fa-2x humburger"></i></div>
        </div>
        </header>
    )      
}

export default Navbar;

