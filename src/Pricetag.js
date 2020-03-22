import React, { useState } from 'react'
import PricetagEdit from './PricetagEdit'
import PricetagPrint from './PricetagPrint'

import { normalizePrice, formatPrice } from './utils'
import { units } from './constants'

const Pricetag = props => {
  // Props:
  const { isPrintView } = props

  // State:
  const [name, setName] = useState('')
  const [packageValue, setPackageValue] = useState('')
  const [unit, setUnit] = useState('g')
  const [price, setPrice] = useState('')
  const [plu, setPlu] = useState('')

  // Computed values:
  const unitDetails = units.find(u => u.value === unit)
  const unitPrice = normalizePrice(price) / normalizePrice(packageValue) * unitDetails.multiplier

  const prettyPrice = `${formatPrice(price)} €`
  const prettyUnitPrice = `${formatPrice(unitPrice)} € / ${unitDetails.multiUnit}`

  return (
    <section className={`cenovka cenovka--${ isPrintView ? 'print' : 'edit' }`}>

      {isPrintView
        ? (
          <PricetagPrint
            name={name}
            prettyPrice={prettyPrice}
            plu={plu}
            prettyUnitPrice={prettyUnitPrice}
          />
        )
        : (
          <PricetagEdit
            name={name}
            setName={setName}
            packageValue={packageValue}
            setPackageValue={setPackageValue}
            unit={unit}
            setUnit={setUnit}
            price={price}
            setPrice={setPrice}
            plu={plu}
            setPlu={setPlu}
            unitPrice={unitPrice}
            prettyUnitPrice={prettyUnitPrice}
          />
        )
      }

    </section>
  )
}

export default Pricetag
