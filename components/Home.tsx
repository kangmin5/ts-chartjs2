import React from 'react'
import styles from '../styles/Home.module.css'
import Chart1 from './Chart1'
import Chart2 from './Chart2'
import Chart3 from './Chart3'

const Home = () => {
  return (
      <div className={styles.container}>
          <div className={styles.chart}>
              <div className={styles.chart1}><Chart1 /> </div>
            <div className={styles.chart2}><Chart2/> </div>
            <div className={styles.chart3}><Chart3/> </div>

          </div>
    </div>
  )
}

export default Home