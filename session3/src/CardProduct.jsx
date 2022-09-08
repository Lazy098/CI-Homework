import React from "react";

const CardProduct = (props) => {
    return(
        <div className="col mb-5">
        <div className="card h-100">
          {/* Product image*/}
          <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
          {/* Product details*/}
          <div className="card-body p-4">
            <div className="text-center">
              {/* Product name*/}
              <h5 className="fw-bolder">{props.title}</h5>
              {props.checkstars ? (
                <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
              </div>
              ) : (
                ''          
              )}
              {props.checksale ? (
                <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
              ) : (
                ''
              )}
              {/* Product price*/}
              {props.promotionalPrice ? (
                <span>
                  <span className="text-muted text-decoration-line-through">
                    ${props.price1}
                  </span>
                ${props.price2}
              </span>
              ) : props.price1 && !props.price2 ? (
                `$${props.price1}`
              ) : (
                `$${props.price1} - $${props.price2}`
              )}
            </div>
          </div>

          {/* Product actions*/}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">{props.titles}</a></div>
          </div>
        </div>
      </div>
    )
}

export default CardProduct;