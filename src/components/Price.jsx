import React from 'react'

function Price({ salePrice, price }) {
  return (
    <div className="text-lg">
      {salePrice ? (
        <>
          <span className="line-through pr-1 text-gray-500">
            ${(price).toFixed(2)}
          </span>
          ${(salePrice).toFixed(2)}
        </>
      ) : (
        <>${(price).toFixed(2)}</>
      )}
    </div>
  )
}

export default Price
