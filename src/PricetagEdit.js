import React from 'react'

import { units } from './constants'

const PricetagEdit = props => {
  const {
    name, setName,
    packageValue, setPackageValue,
    unit, setUnit,
    price, setPrice,
    plu, setPlu,
    unitPrice,
    prettyUnitPrice
  } = props

  return (
    <>
      <label className="cenovka__data">
        <strong className="cenovka__data__title">Názov:</strong>
        <span className="cenovka__data__value">
          <input
            className="cenovka__data__input cenovka__data__input--name input"
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="off"
          />
        </span>
      </label>

      <label className="cenovka__data">
        <strong className="cenovka__data__title">Balenie:</strong>
        <span className="cenovka__data__value">
          <input
            className="cenovka__data__input input"
            type="text"
            name="package"
            value={packageValue}
            onChange={e => setPackageValue(e.target.value)}
            autoComplete="off"
          />
        </span>
        <span className="cenovka__data__value cenovka__data__value--unit">
          <select
            className="cenovka__data__input dropdown"
            name="unit"
            value={unit}
            onChange={e => setUnit(e.target.value)}
          >
            {units.map(({value, label}) => (<option value={value} key={value}>{label}</option>) )}
          </select>
        </span>
      </label>

      <label className="cenovka__data">
        <strong className="cenovka__data__title">Cena:</strong>
        <span className="cenovka__data__value">
          <input
            className="cenovka__data__input input"
            type="text"
            name="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
            autoComplete="off"
          />
        </span>
        <span className="cenovka__data__value cenovka__data__value--euro">
          &euro;
        </span>
      </label>

      <label className="cenovka__data">
        <strong className="cenovka__data__title">Kód:</strong>
        <span className="cenovka__data__value">
          <input
            className="cenovka__data__input input"
            type="text"
            name="plu"
            value={plu}
            onChange={e => setPlu(e.target.value)}
            autoComplete="off"
            pattern="[0-9]*"
            inputMode="numeric"
          />
        </span>
      </label>

      {!Number.isNaN(unitPrice) && Number.isFinite(unitPrice) && (
        <span className="cenovka__data cenovka__data--unitprice">
          <span className="cenovka__data__value">
            { prettyUnitPrice }
          </span>
        </span>
      )}
    </>
  )
}

export default PricetagEdit
