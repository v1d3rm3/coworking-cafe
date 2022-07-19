import { Col, Container, Row } from "react-bootstrap";
import Image from 'next/image'
import RoomSeats from "../components/RoomSeats";

export default function Room() {
    return (
        <Container style={{marginBottom: "40px"}}>
            <Row>
                <Col>
                    <RoomSeats />
                </Col>
                <Col>
                    <h1>Instituto metropole digital</h1>
                    <h5>Lagoa Nova, Natal-RN</h5>
                    <p>Valor: R$20,00</p>
                    <div>
                        <img src="https://img.olx.com.br/images/43/438291167511750.jpg" height={150} />
                        <img src="https://img.olx.com.br/images/43/431268765210989.jpg" height={150} />
                        <img src="https://img.olx.com.br/images/43/430235525125510.jpg" height={150} />                  
                    </div>
                </Col>
            </Row>
        </Container>
    );
}