import styles from  "../styles/Cart.module.css"
import Image from "next/image"

const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <tr className={styles.tr}>
                <th>Product</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
            <tr>
                <td>
                    <div className={styles.imgContainer}>
                        <Image src="/images/pizza.avif" layout="fill" objectFit="cover" alt=""/>
                    </div>
                </td>
                <td>
                    <span className={styles.name}>CORALZO</span>
                </td>
                <td>
                    <span className={styles.extra}>
                        Double Ingredients,Spicy Sauce
                    </span>
                </td>
                <td>
                    <span className={styles.price}>$19.90</span> 
                </td>
                <td>
                    <span className={styles.quantity}>2</span> 
                </td>
                <td>
                    <span className={styles.total}>$39.80</span> 
                </td>
            </tr>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>SubTotal:</b>$79.60
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>$0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>$79.60
                </div>
            </div>
            <button className={styles.button}>
                CHECKOUT NOW!
            </button>
        </div>
    </div>
  )
}

export default Cart