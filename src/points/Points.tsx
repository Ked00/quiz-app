import React, {useState} from 'react'

export const Points = () => {
    const [points, setPoints] = useState(5000)
  return (
    <h3 className="text-primary mt-2">{points}</h3>
  )
}
