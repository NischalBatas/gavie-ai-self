'use client'
import Image from 'next/image';
import styles from './style.module.css';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const CardsItems = ({i,itemProject, title, description, src, url, color, progress, range, targetScale}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className={styles.cardContainer}>
         <motion.div 
        style={{ scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className={`${i%2 ==0 ? '': 'flex-row-reverse'}  card flex items-start flex-wrap md:flex-nowrap justify-center md:justify-between gap-6 lg:gap-10 feature_main_item py-[50px] px-[32px] md:py-[96px] md:px-[72px] `}>
            <div className='max-w-[475px] flex flex-col gap-[16px] md:mt-3'>
                <span className='text-[28px] md:text-[36px] font-semibold'>{itemProject.title}</span>
                <p className='text-[16px] md:text-[18px] text-[#ffffffb3]'>{itemProject.description}</p>
            </div>
            <div>
                <Image className='md:min-w-[350px]' width={442.8} height={314.3} src={itemProject.src} alt='feature effort'/>
            </div>
        </motion.div>
        
      {/* <motion.div 
        style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>

          <div className={styles.imageContainer}>
            <motion.div
              className={styles.inner}
              style={{scale: imageScale}}
            >
              <Image
                fill
                src={`/images/${src}`}
                alt="image" 
              />
            </motion.div>
          </div>

        </div>
      </motion.div> */}
    </div>
  )
}

export default CardsItems