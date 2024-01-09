// document.addEventListener('DOMContentLoaded', function () {
//   const menuItems = document.querySelectorAll('.menu-item');
//   const contentDivs = document.querySelectorAll('.content');

//   menuItems.forEach(function (menuItem) {
//     menuItem.addEventListener('click', function (event) {
//       // Prevent the default behavior (scrolling to the top)
//       event.preventDefault();

//       // Remove 'active' class from all menu items
//       menuItems.forEach(function (item) {
//         item.classList.remove('active');
//       });

//       // Remove 'active' class from all content divs
//       contentDivs.forEach(function (contentDiv) {
//         contentDiv.classList.remove('active');
//       });

//       // Add 'active' class to the clicked menu item
//       menuItem.classList.add('active');

//       // Get the target div associated with the clicked menu item
//       const targetDivId = menuItem.getAttribute('data-target');
//       const targetDiv = document.getElementById(targetDivId);

//       // Add 'active' class to the target div
//       targetDiv.classList.add('active');
//     });
//   });
// });


const CategoriesData = [
  {
      title: 'ESD Clean room products',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },

  {
    title: 'Material handling & Storage'
  },

  {
    title : 'Clean room disposable products'
  },

  {
    title : 'ESD & non ESD chairs  '
  },

  {
    title : 'Soldering equipment, accessories & tools​'
  },

  {
    title : 'Static measuring instruments​'
  },

  {
    title:'ESD flooring​'
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

  cardDataArray.forEach(cardData => {
      const card = document.createElement('div');
      card.classList.add('card', 'text-white', 'cat-width', 'cat-height');

      const cardOverlay = document.createElement('div');
      cardOverlay.classList.add('card-img-overlay');

      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = cardData.title;

      const cardText1 = document.createElement('p');
      cardText1.classList.add('card-text');
      cardText1.textContent = cardData.description;

      cardOverlay.appendChild(cardTitle);
      cardOverlay.appendChild(cardText1);

      card.appendChild(cardOverlay);

      cardContainer.appendChild(card);
  });
}

renderCategory(CategoriesData)

