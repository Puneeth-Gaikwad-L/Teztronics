const CategoriesData = [
  {
    title: 'ESD Clean room products',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    subCategory: [{
      title: 'ESD Flooring & table mats',
      targetDiv: 'div-1',
      products: [{
        productName: 'ESD Anti-fatigue mat​',
        productPrice: 1000,
        productImage: ['./assets/images/ESD Anti-fatigue mat'],
        productDescription: 'ESD Anti-fatigue mat​',
      }]
    },
    {
      title: 'Antistatic Cleaner',
      targetDiv : 'div-2',
    },
    {
      title: 'Floor marking Tapes',
      targetDiv : 'div-3',
    },
    {
      title: 'ESD Gloves & finger cots',
      targetDiv : 'div-4',
      }]
    

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
        displaySubCat.style.height = "50vh"
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
