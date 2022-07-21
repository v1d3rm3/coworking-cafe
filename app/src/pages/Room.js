import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from 'react'
import Image from "next/image";
import RoomSeats from "../components/RoomSeats";
import style from "../styles/Room.module.css";
import { useState } from "react";
import { useRouter } from 'next/router'
import {
  Form,
  Button,
  Stack,
  Alert,
} from "react-bootstrap";
export default function Room() {
  const router = useRouter()
  console.log(router.query);

  const [selected, setSelected] = useState();
  const [nome, setNome] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setSelected(false);
  }, []);

  return (
    <Container style={{ marginBottom: "40px" }}>
      <Row>
        <Col>
          <RoomSeats setSelected={setSelected} />
        </Col>
        <Col className={style.details}>
          <h1>Instituto metropole digital</h1>
          <h5>Lagoa Nova, Natal-RN</h5>
          <p>Valor: R$20,00</p>
          <div className={style.images}>
            <img
              src="https://img.olx.com.br/images/43/438291167511750.jpg"
              height={150}
            />
            <img
              src="https://img.olx.com.br/images/43/431268765210989.jpg"
              height={150}
            />
            <img
              src="https://img.olx.com.br/images/43/430235525125510.jpg"
              height={150}
            />
          </div>
          <hr></hr>
          {
            selected ?  <Row className={style.loginBox}>
            <Col>
              <Stack>
                <Form onSubmit={(e) => cadastrarReq(e)}>
                  <Form.Group controlId="name">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Seu nome"
                      defaultValue={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </Form.Group>
                  <Stack gap={3}>
                    <Button disabled={loading} type="submit" variant="primary">
                      {loading ? "Carregando..." : "Solicitar reserva"}
                    </Button>
                  </Stack>
                </Form>
              </Stack>
            </Col>
          </Row>: ''
          }
          
        </Col>
      </Row>
    </Container>
  );
}
