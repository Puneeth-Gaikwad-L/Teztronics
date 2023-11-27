try {
    document.addEventListener('DOMContentLoaded', function () {
        // Get all menu items
        const menuItems = document.querySelectorAll('.menu-item');
      
        // Add click event listener to each menu item
        menuItems.forEach(function (menuItem) {
          menuItem.addEventListener('click', function () {
            // Remove 'active' class from all menu items
            menuItems.forEach(function (item) {
              item.classList.remove('active');
            });
      
            // Add 'active' class to the clicked menu item
            menuItem.classList.add('active');
          });
        });
      });
} catch (error) {
    console.error(error);
}
  