

    let productCount = 3;

    for (let x = 0; x < productCount; x++) {
        let card = `
        <div class="product__card">
        <div class="product-modal">
            <div class="product-modal__content">
                <button class="quick-view">Quick View</button>
            </div>
        </div>
        <div class="paper">
            <div class="product-image">
                <div class="badge__new-container">
                    <div class="badge__new">NEW</div>
                </div>
                <div class="img__overlay">
                    <img src="resources/img/ear-phone.jpg" class="product__img" alt="product">
                </div>
                <span class="product__badge"></span>
            </div>

            <div>
                <span class="brand__name">Google</span>
                <hr>
                <span class="full__brand-name">
                    Google Pixel 3 XL, Android 9, 4GB RAM, 64GB ROM...
                </span>

                <div class="price-details">
                    <p class="price">
                        &#x20A6;500,000
                    </p>
                    <p class="percentage__off">
                        22%
                    </p>
                </div>
                <div class="ratings-numbers">
                    <div class="ratings">
                        <img src="resources/img/ratings.svg" height="10px" width="10px" alt="rating">
                        <img src="resources/img/ratings.svg" height="10px" width="10px" alt="rating">
                        <img src="resources/img/ratings.svg" height="10px" width="10px" alt="rating">
                        <img src="resources/img/ratings.svg" height="10px" width="10px" alt="rating">
                        <img src="resources/img/ratins-none.svg" height="10px" width="10px" alt="rating">
                    </div>
                    <div class="numbers">
                        (889)
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    let topProduct = document.querySelector(".market__product-wrapper");
    topProduct.innerHTML += card;
}
