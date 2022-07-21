import { Col, Row } from "react-bootstrap";
import style from "../styles/RoomSeats.module.css";

export default function RoomSeats({ setSelected }) {

  const myclick = (e) => {
    console.log('e', e);
    setSelected(true);
    e.preventDefault();
  };

  return (
    <Row className={style.room}>
      <Col>
        <div className={style.seat} onClick={myclick}></div>
        <div className={style.seat}></div>
        <div className={style.seat}></div>
      </Col>
      <Col className={style.queueRight}>
        <div className={style.seat}></div>
        <div className={style.seat}></div>
        <div className={style.seat}></div>
        <div className={style.seat}></div>
      </Col>
    </Row>
  );
}
