import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import type { Applicant } from './api/lib/applicant'

const Home: NextPage = () => {
  const [applicants, setApplicants] = useState<Applicant[]>([])

  async function getAllApplicants() {
    setApplicants(await (await fetch('/api/all')).json() as Applicant[]);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>FirstAidKit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          First Aid Kit!
        </h1>
        <button onClick={getAllApplicants}>Load Applicants</button>
        <ul>
          {applicants.map(a => <li key={a.name}>{a.name} - {a.phone}</li>
          )}
        </ul>
      </main>
    </div>
  )
}

export default Home
