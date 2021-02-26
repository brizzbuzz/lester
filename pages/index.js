import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Lester</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Get Started &rarr;</h3>
            <p>Learn the ropes through guided tutorials</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Plugins &rarr;</h3>
            <p>Discover all of the integrations that Lester supports</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Lester's features</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Customize &rarr;</h3>
            <p>
              Learn how you can hack and modify Lester to meet your needs
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://bit.ly/37ONpcU"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/prairie.svg" alt="Prairie Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
