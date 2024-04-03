import Image from 'next/image'
import React, { useState } from 'react'
import { imgArr } from '@/components/sliderData'

const slider = () => {
  const length = imgArr.length
  const [count, setCount] = useState(0)
  const next = () => {
    setCount(count === length - 1 ? 0 : count + 1)
  }
  const prev = () => {
    setCount(count === 0 ? 0 : count - 1)
  }

  return (
    <div>

      {

        imgArr.map((el, index) => {
          return (
            <>

              {
                index == count && <Image src={el.url} height={250} width={1295} />

              }
            </>
          )
        })
      }

      <br />
      <div className='Button12'>

        <button id='BUT12' onClick={setTimeout(prev, 1500)}> </button>

        <button id='BUT11' onClick={setTimeout(next, 1500)}> </button>

      </div>

      <div className='helloworld'>
        {imgArr[count].caption}
      </div>

      <div className='dess1'>
        {imgArr[count].desc}
      </div>
    </div>
  )
}

export default slider
