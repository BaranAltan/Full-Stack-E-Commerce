import React from 'react'

function Product() {
  return (
    <div>
        <section class="products">
    <div class="container">
      <div class="section-title">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
      </div>
      <div class="product-wrapper product-carousel">
        <div class="glide__track" data-glide-el="track">
          <ul class="product-list glide__slides" id="product-list"></ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left">
            <i class="bi bi-chevron-left"></i>
          </button>
          <button class="glide__arrow glide__arrow--right">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Product
