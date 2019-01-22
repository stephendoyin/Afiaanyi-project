$(function () {

    let imgs = [
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg'
    ];

    let product = document.querySelector(".product-list__container");
    // let productCard = document.querySelector(".product__card");

    for (let i = 0; i < imgs.length; i++) {
        let productCard = `
        <div class="product__card">
        
                        <div class="paper">
                            <div class="product-image">
                            <div class="badge__new-container">
                            <div class="badge__new">NEW</div>
                            </div>
                                <img src="${imgs[i]}" alt="product">
                                <span class="product__badge"></span>
                            </div>
                            
                            <div>
                                <span class="brand__name">Google</span>
                                <hr>
                                <span class="full__brand-name">
                                    Google Pixel 3 XL, Android 9, 4GB RAM...
                                </span>

                                <div class="price-details">
                                    <p class="price">
                                    &#x20A6;55,990.00
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

        product.innerHTML += productCard;
    }

    let histroyProductCount = 2;

    let history = document.querySelector(".search__product-container");

    for (let i = 0; i < histroyProductCount; i++) {
        let product = `
        <div class="product__card">
        
                        <div class="paper">
                            <div class="product-image">
                            <div class="badge__new-container">
                            <div class="badge__new">NEW</div>
                            </div>
                                <img src="${imgs[i]}" alt="product">
                                <span class="product__badge"></span>
                            </div>
                            
                            <div>
                                <span class="brand__name">Google</span>
                                <hr>
                                <span class="full__brand-name">
                                    Google Pixel 3 XL, Android 9, 4GB RAM...
                                </span>

                                <div class="price-details">
                                    <p class="price">
                                    &#x20A6;55,990.00
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
        history.innerHTML += product;
    }
    // $(".header__full-nav-link").hover(function () {
    //     $(".dropdown__header").css("display", "block");
    // }, function () {
    //     $(".dropdown__header").css("display", "none");
    // });
});

