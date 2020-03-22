import React, { useState } from 'react'
import Pricetag from './Pricetag'

const pricetagIds = [...Array(16)].map((_, i) => i)

const App = () => {
  const [isPrintView, setIsPrintView] = useState(false)

  return (
    <div className="app">

      <button onClick={e => setIsPrintView(!isPrintView)} className="view-toggler no-print">
        { isPrintView ? '✍️ Editácia cenoviek' : '🖨 Tlačový náhlad' }
      </button>

      <div>
        { pricetagIds.map(id => ( <Pricetag key={ id } isPrintView={isPrintView} /> ))}
      </div>

    </div>
  )
}

export default App
