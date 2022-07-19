import style from "../styles/ListCard.module.css"
import data from "../../public/data/data.json"
import LocalCard from "./LocalCard"

export default function ListCard() {
    const renderedList = data.places.map((local) => {
        return (<LocalCard title={local.name} subtitle={local.address} />)
    })
    return (
        <div className={style.grid}>
            {renderedList}
        </div>
    )
}