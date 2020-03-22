import React from 'react'

const PricetagPrint = props => {
  const { name, prettyPrice, plu, prettyUnitPrice} = props

  return (
    <>
      <span className="cenovka__name">{name}</span>
      <span className="cenovka__price">{prettyPrice}</span>
      <span className="cenovka__plu">{plu}</span>
      <span className="cenovka__unit-price">{prettyUnitPrice}</span>
    </>
  )
}

export default PricetagPrint
