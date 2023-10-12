import React from 'react'


function ProductTile({word}) {

  return (
    <div className="container pt-3">
        <div className="main row">
            <div className="welcome col fs-1 text-center text-capitalize">
                <b className='fw-bolder'>{word.slice(0,1)}</b>{word.slice(1)}
            </div>
        </div>
    </div>
  )
}

export default ProductTile