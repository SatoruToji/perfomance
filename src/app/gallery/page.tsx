'use client'

import Link from "next/link";
import Image from 'next/image'
import { useState } from "react";
import styles from './styles.module.scss'

export default function Gallery(){
  const [img, setImg] = useState({
    first: '/images/1.png',
    second: '/images/2.png',
    third: '/images/3.jpg'
  })

  const [isFull, setIsFull] = useState({
    first: false,
    second: false,
    third: false
  })

  const onClick = (key: string) => {
    setIsFull((prev) => ({
      ...prev, [key]: true
    }))
  }

  return(
    <div className={styles.container}>
      <Image 
        src={img.first}
        alt=""
        width={512}
        height={329}
        onClick={() => onClick('first')}
        unoptimized={isFull.first}
        style={{
          cursor: 'pointer'
        }}
      />
      <Image 
        src={img.second}
        alt=""
        width={512}
        height={329}
        onClick={() => onClick('second')}
        unoptimized={isFull.second}
        style={{
          cursor: 'pointer'
        }}
      />
      <Image 
        src={img.third}
        alt=""
        width={660}
        height={1100}
        onClick={() => onClick('third')}
        unoptimized={isFull.third}
        style={{
          cursor: 'pointer'
        }}
      />

      <Link href={"./"}>go to back</Link>
    </div>
  )
}