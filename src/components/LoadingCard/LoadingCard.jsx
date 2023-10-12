//css import
import './LoadingCard.css'

function LoadingCard() {
  return (      
    
      <a className="container col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3 text-center" aria-hidden="true">
            <div className="col-12  p-2 card  placeholder-glow">
                <span className="col-12 d-flex justify-content-center placeholder img-span">
                </span>
                <div className="col-10 text-start d-flex flex-column mt-1 mx-2 placeholder-glow">
                    <span className='placeholder mb-2'></span>
                    <div className="d-flex justify-content-center align-items-center placeholder-glow">
                        <span className='my-auto placeholder col-2'></span>
                        <span className="ms-auto icon placeholder"></span>
                    </div>
                </div>
            </div>
        </a>
       
  )
}

export default LoadingCard;