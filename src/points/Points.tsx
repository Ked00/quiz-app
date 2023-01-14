import React, {useState} from 'react'

export const Points = () => {
    const [points, setPoints] = useState(0)
  return (
    <h3 className="mt-2">{points}</h3>
  )
}
