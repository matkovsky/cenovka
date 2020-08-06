import React from 'react'

const PricetagPrint = props => {
  const { name, prettyPrice, plu, prettyUnitPrice, packageValue, unit} = props

  return (
    <>
      <span className="cenovka__name">{name} {packageValue}{packageValue ? unit : ''}</span>
      <span className="cenovka__price">{prettyPrice}</span>
      <span className="cenovka__plu">{plu}</span>
      <span className="cenovka__unit-price">{prettyUnitPrice}</span>
    </>
  )
}

export default PricetagPrint
