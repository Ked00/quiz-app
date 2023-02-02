import React from 'react'
import {Button } from "react-bootstrap"

type Props =  {
  click: ()=> void
}

export const EndTest = (props: Props) => {
  return (
    <Button variant="danger" className="w-25" onClick={props.click}>End Test</Button>
  )
}

