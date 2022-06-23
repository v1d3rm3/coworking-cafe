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
import Router from 'next/router'

export default function Register() {
  const [nome, setNome] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [email, setEmail] = useState();
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();
  const [loading, setLoading] = useState();
  const [alertDetails, setAlertDetails] = useState();

  const cadastrarReq = (e) => {
    setLoading(true);
    fetch("http://localhost:3000/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, dataNascimento, email, login, senha }),
    }).then(
      (res) => {
        setLoading(false);
        if (res.ok) {
          setAlertDetails({
            active: true,
            message: "Usuário cadastrado com sucesso",
            variant: "success",
          });
          setTimeout(() => {
            Router.push('/SignIn');
          }, 2000);
        } else {
          res.json().then((b) => {
            setAlertDetails({
              active: true,
              message: b?.message,
              variant: "danger",
            });
          });
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
                <h1 className={styles.loginTitle}>Criar conta</h1>
                <Form onSubmit={(e) => cadastrarReq(e)}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Seu nome"
                      defaultValue={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="dataNascimento">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Sua data de nascimento"
                      defaultValue={dataNascimento}
                      onChange={(e) => setDataNascimento(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Seu email"
                      defaultValue={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="dataNascimento">
                    <Form.Label>Login</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Seu login"
                      defaultValue={login}
                      onChange={(e) => setLogin(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Sua senha"
                      defaultValue={senha}
                      onChange={(e) => setSenha(e.target.value)}
                    />
                  </Form.Group>
                  <Stack gap={3}>
                    <a href="/SignIn" className={styles["align_right"]}>
                      Já tem um usuário?
                    </a>
                    <Button disabled={loading} type="submit" variant="primary">
                      {loading ? "Carregando..." : "Cadastrar"}
                    </Button>

                    {alertDetails?.active ? (
                      <Alert
                        key={alertDetails?.variant}
                        variant={alertDetails?.variant}
                      >
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
