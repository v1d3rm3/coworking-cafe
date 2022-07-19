import style from "../styles/Card.module.css";

export default function LocalCard({ title, subtitle }) {
  return (
    <a href="/Room">
      <div className={style.card}>
        <div className={style.image}>
          <img className={style.imageNode} src="https://source.unsplash.com/500x300/?building" />
        </div>
        <h3 className={style.title}>{title}</h3>
        <h6>{subtitle}</h6>
      </div>
    </a>
  );
}
