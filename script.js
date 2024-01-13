const CategoriesData = [
  {
    title: 'ESD Clean room products',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    subCategory: [{
      title: 'ESD Flooring & table mats',
      targetDiv: 'div-1',
      products: [{
        productName: 'ESD Anti-fatigue mat​',
        productImage: ["./assets/images/ESD Anti-fatigue mat.jfif", "./assets/images/ESD Anti-fatigue mat-2.jfif"],
        productDescription: 'ESD Anti-fatigue mat​',
      },
      {
        productName: 'ESD rubber mat - Green',
        productImage: ["assets/images/ESD rubber mat – Green.jfif", "assets/images/ESD rubber mat – Green-2.jfif"]
      }]
    },
    // {
    //   title: 'Antistatic Cleaner',
    //   targetDiv: 'div-2',
    // },
    // {
    //   title: 'Floor marking Tapes',
    //   targetDiv: 'div-3',
    // },
    // {
    //   title: 'ESD Gloves & finger cots',
    //   targetDiv: 'div-4',
    //   }
    ]


  },

  {
    title: 'Material handling & Storage'
  },

  {
    title: 'Clean room disposable products'
  },

  {
    title: 'ESD & non ESD chairs  '
  },

  {
    title: 'Soldering equipment, accessories & tools​'
  },

  {
    title: 'Static measuring instruments​'
  },

  {
    title: 'ESD flooring​'
  },

  {
    title: 'Tape & tape dispenser​'
  },

  {
    title: 'ESD packing cover​'
  },

  {
    title: 'Magnifier and microscope​'
  }

];

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
        displaySubCat.style.height = "fit-content"
      } else {
        document.getElementById("displayMenu").style.height = "0";
      }
    });

    cardContainer.appendChild(card);
  };
}

renderCategory(CategoriesData)

function renderCategoryMenu(subCategory) {
  console.log(subCategory);
  const navList = document.getElementById('menuList');
  navList.innerHTML = '';

  subCategory.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'nav-item';

    const link = document.createElement('a');
    link.className = `nav-link menu-item ${index === 0 ? 'active' : ''}`;
    link.setAttribute('data-target', item.targetDiv);
    link.href = '#';
    link.textContent = item.title;

    // Add click event listener to each link
    link.addEventListener('click', () => handleLinkClick());

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


    document.getElementById("target-divs").appendChild(targetDiv);
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
  console.log(product);
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
  cardText.className = 'card-text';
  cardText.textContent = `Some quick example text to build on the card title and make up the bulk of the card's content.`;

  const cardLink = document.createElement('a');
  cardLink.href = '#';
  cardLink.className = 'btn btn-primary';
  cardLink.textContent = 'Go somewhere';

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardLink);

  card.appendChild(cardImage);
  card.appendChild(cardBody);

  return card;

}
