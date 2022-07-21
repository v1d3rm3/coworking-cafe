import style from "../styles/ListCard.module.css";
import LocalCard from "./LocalCard";

export default function ListCard({ places }) {
  const renderedList = places?.map((local, key) => {
    return <LocalCard key={key?.toString()} id={local.id} title={local.nome} subtitle={local.endereco} photo={local.capa} />;
  });
  return <div className={style.grid}>{renderedList}</div>;
}
