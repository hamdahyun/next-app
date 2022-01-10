import type { NextPage } from 'next'

import { Counter } from '../features/counter/counter'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Counter />
    </div>
  )
}

export default Home
