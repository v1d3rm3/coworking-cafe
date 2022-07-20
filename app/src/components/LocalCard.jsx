import style from "../styles/Card.module.css";

export default function LocalCard({ title, subtitle, photo }) {
  return (
    <a href="/Room">
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
