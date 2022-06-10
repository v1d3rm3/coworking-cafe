import Head from 'next/head'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <h1 className={styles.title}>
            Bem-vindo ao Coworking Café!
          </h1>

          <Col>
            <Row className={styles.grid}>
              <Image src="/img/cowomen.jpg" alt="Vercel Logo" width={640} height={427} />
              <h2> Maecenas sem nibh</h2>
            </Row>

            <Row className={styles.grid}>
              <h2> Maecenas sem nibh</h2>
              <Image src="/img/cowomen.jpg" alt="Vercel Logo" width={640} height={427} />
            </Row>
            
            <Row className={styles.grid}>
              <Image src="/img/cowomen.jpg" alt="Vercel Logo" width={640} height={427} />
              <h2> Maecenas sem nibh</h2>
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
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
