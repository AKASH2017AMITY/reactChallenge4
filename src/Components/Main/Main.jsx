import React from 'react'
import styles from "./Main.module.css"

function Main({ data }) {
    return (
        <section id={styles.main}>
            <div className={styles.cardContainer}>
                {data?.map((food) => (
                    <div key={food.name} className={styles.card}>
                        <div className={styles.leftSideCard}>
                            <img src={"http://localhost:9000"+ food.image} alt="asd" />
                        </div>
                        <div className={styles.rightSideCard}>
                            <div>
                                <h2 className={styles.heading}>{food.name}</h2>
                            </div>
                            <div>
                                <p>{food.text}</p>
                            </div>
                            <div className={styles.priceBtnContainer}> 
                                <button className={styles.priceBtn}><span style={{fontSize:"larger"}}>$</span>{food.price.toFixed(2)}</button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
            {/* <h1>
            Akash
        </h1> */}

        </section>
    )
}

export default Main
