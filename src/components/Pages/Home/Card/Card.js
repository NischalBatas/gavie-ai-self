'use client';
import styles from './page.module.css'


import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import { projects } from '@/db/ItemData';
import CardsItems from '@/components/Card/Cards';
import Features from '../Features/Features';

const Card = () => {
    const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <main ref={container} className={styles.main}>
      <Features/>
    {
      projects.map( (project, i) => {
        const targetScale = 1 - ( (projects.length - i) * 0.05);
        return <CardsItems itemProject={project} key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
      })
    }
  </main>
  )
}

export default Card