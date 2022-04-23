import styles from "../styles/Featured.module.css"
import Image from "next/image"
import { useState } from "react";

const Featured = () => {
    const [index,setIndex]=useState(0);
    const images=[
        "/images/pizza.avif",
        "/images/pizza.avif",
        "/images/pizza.avif"
    ];
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer}>
            <Image src="/images/left.png" alt="Left arrow" width="50" height="50" style={{left:0}}/>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.imgContainer}>
            {images.map((image,i)=>(
                    <Image src={image} key={i} alt="" layout="fill" /> 
                ))}
                   
            </div>
        </div>
        <div className={styles.arrowContainer}>
            {/* <Image src="/images/next.png" alt="Right arrow" layout="fill" style={{right:0}}/> */}
        </div>
    </div>
  )
}

export default Featured