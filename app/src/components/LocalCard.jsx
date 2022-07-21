import style from "../styles/Card.module.css";

export default function LocalCard({ id, title, subtitle, photo }) {

  const link2Room = `/Room?id=${id}`;

  return (
    <a href={link2Room}>
      <div className={style.card}>
        <div className={style.image}>
          <img className={style.imageNode} src={photo} />
        </div>
        <h3 className={style.title}>{title}</h3>
        <h6>{subtitle}</h6>
      </div>
    </a>
  );
}
