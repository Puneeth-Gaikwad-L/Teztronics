function renderCategory(cardDataArray) {
  const cardContainer = document.getElementById('category-container');

  for (let i = 0; i < cardDataArray.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card', 'text-white', 'cat-width', 'cat-height', 'MyCard');

    const cardOverlay = document.createElement('div');
    cardOverlay.classList.add('card-img-overlay');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = cardDataArray[i].title;

    const cardText1 = document.createElement('p');
    cardText1.classList.add('card-text');
    cardText1.textContent = cardDataArray[i].description;

    cardOverlay.appendChild(cardTitle);
    cardOverlay.appendChild(cardText1);

    card.appendChild(cardOverlay);

    card.setAttribute('data-custom-value', `${i}`);

    card.addEventListener("click", (event) => {
      console.log(event.currentTarget);
      if (cardDataArray[event.currentTarget.getAttribute('data-custom-value')].subCategory) {
        renderCategoryMenu(CategoriesData[i].subCategory);
        const displaySubCat = document.getElementById("displayMenu");
        displaySubCat.style.height = "fit-content";
        document.getElementById("cat-header").innerText = cardDataArray[i].title;
      } else {
        document.getElementById("displayMenu").style.height = "0";
      }
    });

    cardContainer.appendChild(card);
  };
}

renderCategory(CategoriesData)
renderCategoryMenu(CategoriesData[0].subCategory);
const displaySubCat = document.getElementById("displayMenu");
document.getElementById("cat-header").innerText = CategoriesData[0].title;
displaySubCat.style.height = "fit-content";

function renderCategoryMenu(subCategory) {
  console.log(subCategory);
  const navList = document.getElementById('menuList');
  navList.innerHTML = '';
  const addTargetDivs = document.getElementById("target-divs");
  addTargetDivs.innerHTML = "";
  subCategory.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'nav-item';

    const link = document.createElement('a');
    link.className = `nav-link menu-item myCategories ${index === 0 ? 'active' : ''}`;
    link.setAttribute('data-target', item.targetDiv);
    link.href = '#';
    link.textContent = item.title;

    // Add click event listener to each link
    link.addEventListener('click', (event) => {
      event.preventDefault();
      handleLinkClick();
    });

    listItem.appendChild(link);
    navList.appendChild(listItem);

    const targetDiv = document.createElement('div');
    targetDiv.id = item.targetDiv;
    targetDiv.className = `container-fluid content ${index === 0 ? 'active' : ''}`;

    const innerContainer = document.createElement('div');
    innerContainer.className = 'container-fluid Mycontainer';

    item.products.forEach((product) => {
      const card = renderCards(product)
      innerContainer.appendChild(card);
      targetDiv.appendChild(innerContainer);
    })

    addTargetDivs.appendChild(targetDiv);
  });
}

function handleLinkClick() {
  const menuItems = document.querySelectorAll('.menu-item');
  const contentDivs = document.querySelectorAll('.content');

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function (event) {
      // Prevent the default behavior (scrolling to the top)
      event.preventDefault();

      // Remove 'active' class from all menu items
      menuItems.forEach(function (item) {
        item.classList.remove('active');
      });

      // Remove 'active' class from all content divs
      contentDivs.forEach(function (contentDiv) {
        contentDiv.classList.remove('active');
      });

      // Add 'active' class to the clicked menu item
      menuItem.classList.add('active');

      // Get the target div associated with the clicked menu item
      const targetDivId = menuItem.getAttribute('data-target');
      const targetDiv = document.getElementById(targetDivId);

      // Add 'active' class to the target div
      targetDiv.classList.add('active');

    });
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
  cardImage.alt = 'product.productName';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const cardTitle = document.createElement('h5');
  cardTitle.className = 'card-title';
  cardTitle.textContent = product.productName;

  const cardText = document.createElement('p');
  cardText.classList.add('card-text', 'myProductCardText');
  cardText.textContent = `Some quick example text to build on the card title and make up the bulk of the card's content.`;

  const cardLink = document.createElement('button');
  cardLink.className = 'btn btn-primary';
  cardLink.textContent = 'View more';

  cardLink.addEventListener('click', () => {
    localStorage.setItem("product",JSON.stringify(product));
    window.location.href = './productView.html';
  });

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardLink);

  card.appendChild(cardImage);
  card.appendChild(cardBody);

  return card;

}


let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 13.06167286872496, lng: 77.55515123743002 },
    zoom: 18,
  });

  setMarkers(map, 13.06167286872496, 77.55515123743002, "testronics")

}

function setMarkers(map, lat, lng, title) {
  new google.maps.Marker({
    position: { lat: lat, lng: lng },
    // label: b,
    map,
    title: title,
  });
}


initMap();
