const products = [
  {
    "id": 1,
    "category": "Men",
    "name": "Classic Cotton T-Shirt",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    "description": "Comfortable premium cotton t-shirt designed for everyday casual wear.",
    "price": 1499,
    "actualPrice": 1999,
    "stock": 25
  },
  {
    "id": 2,
    "category": "Men",
    "name": "Casual Denim Jacket",
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    "description": "Stylish denim jacket with a modern fit, perfect for casual outfits.",
    "price": 3499,
    "actualPrice": 4299,
    "stock": 15
  },
  {
    "id": 3,
    "category": "Women",
    "name": "Elegant Summer Dress",
    "image": "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    "description": "Lightweight and elegant summer dress with a comfortable modern design.",
    "price": 2999,
    "actualPrice": 3799,
    "stock": 18
  },
  {
    "id": 4,
    "category": "Women",
    "name": "Classic Handbag",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    "description": "Elegant everyday handbag with a spacious interior and premium finish.",
    "price": 2499,
    "actualPrice": 3299,
    "stock": 12
  },
  {
    "id": 5,
    "category": "Shoes",
    "name": "Urban Running Shoes",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    "description": "Lightweight running shoes designed for comfort, walking and daily activities.",
    "price": 3999,
    "actualPrice": 4999,
    "stock": 20
  },
  {
    "id": 6,
    "category": "Shoes",
    "name": "Classic White Sneakers",
    "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
    "description": "Minimal white sneakers that easily match casual and everyday outfits.",
    "price": 3299,
    "actualPrice": 4199,
    "stock": 22
  },
  {
    "id": 7,
    "category": "Accessories",
    "name": "Classic Leather Watch",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    "description": "Classic leather strap watch with a clean design for everyday style.",
    "price": 2799,
    "actualPrice": 3599,
    "stock": 10
  },
  {
    "id": 8,
    "category": "Accessories",
    "name": "Premium Sunglasses",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    "description": "Modern sunglasses with a stylish frame suitable for everyday outdoor use.",
    "price": 1799,
    "actualPrice": 2399,
    "stock": 30
  },
  {
    "id": 9,
    "category": "Accessories",
    "name": "Premium Sunglasses",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    "description": "Modern sunglasses with a stylish frame suitable for everyday outdoor use.",
    "price": 1299,
    "actualPrice": 1399,
    "stock": 10
  },
 
]


// toggle them

const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        themeToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
});



const productSections = document.querySelector(".product-sections")
const SearchProduct = document.querySelector("#SearchProduct")

const displayProdutsOnScreen = (result) =>{
productSections.innerHTML = "";
    result.forEach((curPro)=>{

        let Element = document.createElement("div")
        Element.classList.add("cart")
        Element.innerHTML = `
        <span class="category">${curPro.category}</span>

        <div class = "cartImage">
        <img src="${curPro.image}" alt="${curPro.name}">
        </div>
        <p class="productName">${curPro.name}</p>
        <div class="ratting">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <p class="description">${curPro.description}</p>
           <p class="price">${curPro.price}</p>
        <p class="actualPrice">${curPro.actualPrice}</p>

           <div class="stockelement">
        <p>quantity (pieces)</p>
        <p class="inStock">${curPro.stock}</p>
        <div class="increasDecreas">
            <button class="increament">+</button>
            <p class="count">1</p>
            <button class="decreament">-</button>
        </div>
     </div>

    <button class="addto-cart">
    <i class="fa-solid fa-cart-arrow-down"></i>
    Add-to-cart
  </button>`
        productSections.appendChild(Element)
    })
}

displayProdutsOnScreen(products)

const filterProducts = () => {

    const searchText =
        SearchProduct.value.toLowerCase();

    const result = products.filter((curElem) => {
        return curElem.name.toLowerCase().includes(searchText);
        });
    displayProdutsOnScreen(result);

};
SearchProduct.addEventListener("input",filterProducts)
