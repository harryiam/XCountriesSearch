import styles from "./Card.module.css"
export default function Card({Src,Countryname}){
    return(
        <div className={styles.card}>
        <div className={styles.card}>
            <img src={Src}
            alt={Countryname}/>
            <h3>{Countryname}</h3>
        </div>
        </div>
    )
}