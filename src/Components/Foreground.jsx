import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const data = [
    {
      des: 'Palesine Will Be Free',
      fileSize: '0.5mb',
      closeIcon: true,
      tag: { tagText: 'Cancel', tagColor: 'green', tagStatus: true }
    },
    {
      des: 'There is no place for Israel in this world',
      fileSize: '0.8mb',
      closeIcon: false,
      tag: { tagText: 'Download Now', tagColor: 'blue', tagStatus: true }
    },
    {
      des: 'We are with Palestine',
      fileSize: '1gb',
      closeIcon: true,
      tag: { tagText: 'Upload Now', tagColor: 'green', tagStatus: false }
    },
    {
      des: 'Free Palestine',
      fileSize: '0.2mb',
      closeIcon: false,
      tag: { tagText: 'Click Here', tagColor: 'blue', tagStatus: true }
    },
    {
      des: 'We are with Palestine',
      fileSize: '293mb',
      closeIcon: true,
      tag: { tagText: 'Subscribe', tagColor: 'green', tagStatus: true }
    },
    {
      des: 'We are with Palestine',
      fileSize: '21mb',
      closeIcon: true,
      tag: { tagText: 'View More', tagColor: 'green', tagStatus: false }
    },
  ]
  const ref = useRef(null)
  return (
    <>
      <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex flex-wrap gap-5 p-5'>
        {data.map((x, i) => {
          return <Card data={x} reference={ref} />
        })}
      </div>
    </>
  )
}

export default Foreground