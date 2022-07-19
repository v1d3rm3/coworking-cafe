import { Col, Row } from "react-bootstrap";
import style from "../styles/RoomSeats.module.css"

export default function RoomSeats() {
    return(
        <Row className={style.room}>
            <Col>
                <div className={style.seat}></div>
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