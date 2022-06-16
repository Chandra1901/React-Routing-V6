import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () =>  {

    const { userId   }= useParams();

    // Params object  contains the dynamic params of the key value pairs from the current url

  return (
    <div>
       Details about the user {userId}
    </div>
  )
}

export default Details