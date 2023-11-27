document.addEventListener('DOMContentLoaded', function () {
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
});
