import React from 'react'
import Skeleton from '@mui/material/Skeleton';

function CommonSkeleton(props) {

  const { key, animation, variant, width, height,style } = props
  return (
    <Skeleton key={key} animation={animation} variant={variant} width={width} height={height} style={style}/>
  )
}


export default CommonSkeleton