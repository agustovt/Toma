const products = [
    { id: 1, name: 'Product 1', description: 'Description of product 1', price: 10.00 },
    { id: 2, name: 'Product 2', description: 'Description of product 2', price: 15.00 },
    { id: 3, name: 'Product 3', description: 'Description of product 3', price: 20.00 },
];

const cart = [];

const productContainer = document.querySelector('.product-list');
const cartContainer = document.querySelector('.cart-items');
const totalAmountElement = document.getElementById('totalAmount');

function renderProducts() {
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <div>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>$${product.price.toFixed(2)}</p>
            </div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

function renderCart() {
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <div>${item.name} - $${item.price.toFixed(2)}</div>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartContainer.appendChild(cartItemElement);
    });
    updateTotal();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
}

function removeFromCart(productId) {
    const productIndex = cart.findIndex(p => p.id === productId);
    if (productIndex > -1) {
        cart.splice(productIndex, 1);
    }
    renderCart();
}

function updateTotal() {
    const totalAmount = cart.reduce((total, product) => total + product.price, 0);
    totalAmountElement.textContent = totalAmount.toFixed(2);
}

document.getElementById('checkoutButton').addEventListener('click', () => {
    alert('Checkout not implemented.');
});

renderProducts();
renderCart();
