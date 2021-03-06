import Head from 'next/head'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coworking Café</title>
        <meta name="description" content="Coworking café página inicial" />
        <link rel="icon" href="/W.ico" />
      </Head>

      <main>
        <Container >
          <h1 className={styles.title}>
            Bem-vindo ao Coworking Café!
          </h1>

          <Col className={styles.grid}>
            <Row>
              <Image src="/img/cowomen.jpg" alt="Vercel Logo" width={640} height={427} />
              <Col>
                <h2>Encontre</h2>
                <p>
                  Descubra os espaços de coworking mais próximos de você. De forma fácil e rápida,
                  sempre com a melhor qualidade. Locais confiáveis e com a melhor infraestrutura 
                  para que você possa se sentir confortável e seguro.
                </p>
              </Col>
            </Row>

            <Row>
              <Col>
                <h2>Reserve</h2>
                <p>
                  Na nossa plataforma, você pode visualizar e reservar um espaço para trabalhar, fazer reuniões ou estudar
                  saber a que horas você pode ir e o valor que irá pagar. Simples, rápido e direto.
                </p>
              </Col>
              <Image src="/img/maps.jpg" alt="Vercel Logo" width={640} height={427} />
            </Row>

            <Row>
              <Image src="/img/bike.jpg" alt="Vercel Logo" width={640} height={427} />
              <Col>
                <h2>Trabalhe, estude ou reuna-se</h2>
                <p>
                  Locais com infraestrutura modernas e especializas para as suas necessidades.
                  Com ou sem assinatura, você paga como quiser.
                </p>
              </Col>
            </Row>
          </Col>
        </Container>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/W.svg" alt="Vercel Logo" width={50} height={50} />
          </span>
        </a>
      </footer>
    </div>
  )
}
