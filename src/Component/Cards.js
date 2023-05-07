import React from 'react'
import Cardutil from './Cardutil'
import "./Card.css"

function Cards({coursesdata, temp}) {
  return (
    <div className='coursesContent'>
      <Cardutil coursesdata={coursesdata[0 + temp]} />
      <Cardutil coursesdata={coursesdata[1 + temp]}/>
      <Cardutil coursesdata={coursesdata[2 + temp]}/>
      <Cardutil coursesdata={coursesdata[3 + temp]}/>

    </div>
  )
}

export default Cards
