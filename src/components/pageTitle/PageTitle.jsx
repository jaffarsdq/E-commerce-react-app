import React from 'react'


function ProductTile({word}) {

  return (
    <div className="container my-4">
        <div className="main row">
            <div className="display-1 welcome col fs-1 text-center text-capitalize">
                <strong>{word.slice(0,1)}</strong>{word.slice(1)}
            </div>
        </div>
    </div>
  )
}

export default ProductTile