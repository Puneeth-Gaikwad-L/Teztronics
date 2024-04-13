let productToView = JSON.parse(localStorage.getItem("product"));
localStorage.removeItem("product");


if (productToView != null) {
    console.log("true");
    console.log(productToView);
    document.getElementById("productTitle").innerText = productToView.productName;

     // Get the carousel items container
     const carouselItems = document.getElementById('carouselItems');

     // Loop through the image URLs and create carousel items
     productToView.productImage.forEach((imageUrl, index) => {
       const carouselItem = document.createElement('div');
       carouselItem.classList.add('carousel-item');
       if (index === 0) {
         carouselItem.classList.add('active');
       }
 
       const img = document.createElement('img');
       img.src = imageUrl;
       img.classList.add('d-block', 'w-100');
       img.alt = 'Carousel Image';
 
       carouselItem.appendChild(img);
       carouselItems.appendChild(carouselItem);
     });
    
    document.getElementById("desc").innerText = productToView.productDescription;
} else {
    document.getElementById("productInDetail").style.display = "none";
}

const productViewContainer = document.getElementById("products-container");


CategoriesData.forEach(element => {
    let arr = element.subCategory;
    arr.forEach((arrEle => {
        renderProduct(arrEle.products);
    }))
})

function renderProduct(products) {
    products.forEach(element => {
        const card = renderCards(element)
        productViewContainer.appendChild(card);
    });
}

function renderCards(product) {
    // console.log(product);
    const card = document.createElement('div');
    card.classList.add('card', 'MyProductCard');
    card.style = 'width: 18rem;';

    const cardImage = document.createElement('img');
    cardImage.src = product.productImage[0]; // Add the actual image source
    cardImage.className = 'card-img-top';
    cardImage.alt = `${product.productName}`;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = product.productName;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text', 'myProductCardText');
    cardText.textContent = `Some quick example text to build on the card title and make up the bulk of the card's content.`;

    const cardLink = document.createElement('a');
    cardLink.href = './productView.html';
    cardLink.className = 'btn btn-primary';
    cardLink.textContent = 'Get Quotes';

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);

    card.appendChild(cardImage);
    card.appendChild(cardBody);

    return card;

}