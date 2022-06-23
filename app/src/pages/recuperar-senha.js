import {
  Form,
  Container,
  Row,
  Col,
  Button,
  Stack,
  Alert,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import styles from "../styles/Recover.module.css";

export default function Recover() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState();
  const [alertDetails, setAlertDetails] = useState();

  const login = (e) => {
    setLoading(true);
    fetch("http://localhost:3000/usuario", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login: user}),
    })
      .then(
        (res) => {
          setLoading(false);
          if (res.ok) {
            setAlertDetails({
              active: true,
              message: "Nova senha cadastrada com sucesso",
              variant: "success",
            });
          } else {
            res.json().then(b => {
              setAlertDetails({
                active: true,
                message: b?.message,
                variant: "danger",
              });
            })
          }
        },
        (err) => {
          console.error(err);
        }
      );
    e.preventDefault();
  };

  useEffect(() => {
    setLoading(false);
    setAlertDetails({
      active: false,
      message: "",
      variant: "",
    });
  }, []);

  return (
    <div>
      <main>
        <Container>
          <Row className={styles.loginBox}>
            <Col sm="5" xxl="4">
              <Stack>
                <h1 className={styles.recoverTitle}>Coworking Café</h1>
                <h2 className={styles.recoverTitleSecondary}>Encontre sua conta</h2>
                <Form onSubmit={(e) => login(e)}>
                  <Form.Group className="mb-3" controlId="user">
                    <Form.Label>Digite seu usuário para a recuperação</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Seu usuário"
                      defaultValue={user}
                      onChange={(e) => setUser(e.target.value)}
                    />
                  </Form.Group>
                  <Stack gap={3}>
                    <Button disabled={loading} type="submit" variant="primary">
                      {loading ? "Carregando..." : "Continuar"}
                    </Button>
                    {alertDetails?.active ? (
                      <Alert key={alertDetails?.variant} variant={alertDetails?.variant}>
                        {alertDetails?.message}
                      </Alert>
                    ) : null}
                  </Stack>
                </Form>
              </Stack>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
