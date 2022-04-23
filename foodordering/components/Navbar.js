import styles from "../styles/Navbar.module.css"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/images/phone-call.png" alt="Callphone" width="32" height="32" />
        </div>
        <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW!</div>
            <div className={styles.text}>921738912312</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
            <li className={styles.listItem}>Home</li>
            <li className={styles.listItem}>Product</li>
            <li className={styles.listItem}>Menu</li>
            <Image src="/images/pizza.avif" alt="Pizza" width="100" height="100"/>
            <li className={styles.listItem}>Events</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
            <Image src="/images/pizza.avif" alt="Pizza" width="40" height="40"/>
            <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar