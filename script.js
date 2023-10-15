// Sample data for menu items (you would typically fetch this from a server)
const menuItems = [
    { name: "Pizza", price: 10.99 },
    { name: "Burger", price: 6.99 },
    // Add more menu items here
];

// Sample logic to display menu items
const menuSection = document.querySelector(".menu");
menuItems.forEach(item => {
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menu-item");
    menuItemDiv.innerHTML = `<h3>${item.name}</h3><p>$${item.price.toFixed(2)}</p><button>Add to Cart</button>`;
    menuSection.appendChild(menuItemDiv);
});

// Sample logic to handle adding items to the order
const orderSection = document.querySelector(".order");
const addToCartButtons = document.querySelectorAll(".menu-item button");
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Implement logic to add the selected item to the order
    });
});
