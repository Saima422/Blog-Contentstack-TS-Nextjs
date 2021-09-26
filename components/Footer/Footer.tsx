import React from 'react';
import Link from "next/link";
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare, faWhatsappSquare, faTelegram, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { footerInterface } from '../Interfaces/Interface';
config.autoAddCss=false;

function Footer({data}: {data: footerInterface}){
    const icon:any = [];

    data.footerLinks.map((item)=>{
        switch(item){
            case "faFacebookSquare":
                icon.push(faFacebookSquare);
                break;
            case "faInstagramSquare":
                icon.push(faInstagramSquare);
                break;
            case "faLinkedin":
                icon.push(faLinkedin);
                break;
            case "faTwitterSquare":
                icon.push(faTwitterSquare);
                break;
            case "faWhatsappSquare":
                icon.push(faWhatsappSquare);
                break;
            case "faTelegram":
                icon.push(faTelegram);
                break;
            case "faGithubSquare":
                icon.push(faGithubSquare);
        }
    })

    return (
        <footer className={styles.footer}>
            
            <div className={styles.contact}>
                <div className={styles.footerLogo}>
                    <Link href='/'><a><img src={data.footerLogo} alt='logo'></img></a></Link>
                </div>
                <div className={styles.socialIcons}>
                    {
                        icon.map((item:any, index:number)=>(
                            <FontAwesomeIcon icon={item} size='2x' className={styles.icon} key={index}/>
                        ))
                    }
                </div>
            </div>  
        </footer>
    ) 
}

export default Footer;