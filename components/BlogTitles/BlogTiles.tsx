import React from 'react';
import Link from "next/link";
import styles from './BlogTiles.module.scss';
import {BlogTileInterface} from "../../pages/Interfaces/Interface";

function BlogTiles({item}: BlogTileInterface){
    return <>
        <div className={styles.container} id={item.uid}>
            <div className={styles.imageBlock}>
                <img src={item.blogimage} alt='Blog'></img>
            </div>
            <h3>{item.title}</h3>
            <h5>Author: {item.author}</h5>
            <h5>Date: {item.createdat}</h5>
            <Link href={`/${item.uid}`}><a className={styles.button}>View Full Blog</a></Link>
        </div>
    </>
}

export default BlogTiles;

