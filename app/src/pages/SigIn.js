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
import styles from "../styles/SignIn.module.css";

export default function SigIn() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState();
  const [alertDetails, setAlertDetails] = useState();

  const login = (e) => {
    setLoading(true);
    fetch("http://localhost:3000/usuario/autenticar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login: user, senha: password }),
    })
      .then(
        (res) => {
          setLoading(false);
          if (res.ok) {
            setAlertDetails({
              active: true,
              message: "Login realizado com sucesso",
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
                <h1 className={styles.loginTitle}>Coworking Café</h1>
                <Form onSubmit={(e) => login(e)}>
                  <Form.Group className="mb-3" controlId="user">
                    <Form.Label>Usuário</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Seu usuário"
                      defaultValue={user}
                      onChange={(e) => setUser(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Sus senha"
                      defaultValue={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Stack gap={3}>
                    <a href="recuperar-senha" className={styles["align_right"]}>
                      Esqueceu a senha?
                    </a>
                    <Button disabled={loading} type="submit" variant="primary">
                      {loading ? "Carregando..." : "Entrar"}
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
