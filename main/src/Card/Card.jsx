import styles from "./Card.module.css"
export default function Card({Src,Countryname}){
    return(
        <div>
        <div className={styles.card} >
            <img className={styles.img} src={Src}
            alt={Countryname}/>
            <h3>{Countryname}</h3>
        </div>
        </div>
    )
}