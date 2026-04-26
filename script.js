// Premium Food Menu Data
const menuData = [
    { id: 1, name: "Hyderabadi Chicken Biryani", category: "Indian", price: 350, isVeg: false, desc: "Authentic dum biryani with marinated chicken and aromatic basmati rice.", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop", rating: 4.8 },
    { id: 2, name: "Butter Chicken & Naan", category: "Indian", price: 420, isVeg: false, desc: "Creamy tomato curry with tender chicken and garlic butter naan.", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=600&auto=format&fit=crop", rating: 4.9 },
    { id: 3, name: "Paneer Tikka Masala", category: "Indian", price: 380, isVeg: true, desc: "Charcoal grilled paneer in a rich, spiced tomato gravy.", img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600&auto=format&fit=crop", rating: 4.6 },
    { id: 4, name: "Truffle Mushroom Pizza", category: "Pizza", price: 599, isVeg: true, desc: "Wild mushrooms, truffle oil, mozzarella, and thyme.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop", rating: 4.7 },
    { id: 5, name: "Wagyu Beef Burger", category: "Burger", price: 450, isVeg: false, desc: "Premium wagyu patty, aged cheddar, caramelized onions, brioche bun.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop", rating: 4.9 },
    { id: 6, name: "Spicy Tuna Sushi Roll", category: "Sushi", price: 650, isVeg: false, desc: "Fresh tuna, spicy mayo, cucumber, topped with sesame.", img: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=600&auto=format&fit=crop", rating: 4.8 },
    { id: 7, name: "Artisan Margherita", category: "Pizza", price: 499, isVeg: true, desc: "San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil.", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop", rating: 4.5 },
    { id: 8, name: "Gulab Jamun", category: "Dessert", price: 150, isVeg: true, desc: "Soft milk dumplings soaked in rose and cardamom syrup.", img: "images/gulab_jamun.png", rating: 4.9 },
    { id: 9, name: "Matcha Cheesecake", category: "Dessert", price: 299, isVeg: true, desc: "Rich Japanese matcha infused cheesecake with a graham crust.", img: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=600&auto=format&fit=crop", rating: 4.6 },
    { id: 10, name: "Classic Pepperoni", category: "Pizza", price: 550, isVeg: false, desc: "Crispy pepperoni, mozzarella, and our signature tomato sauce.", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600&auto=format&fit=crop", rating: 4.7 },
    { id: 11, name: "Crispy Chicken Sandwich", category: "Burger", price: 390, isVeg: false, desc: "Buttermilk fried chicken, spicy slaw, pickles, toasted brioche.", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=600&auto=format&fit=crop", rating: 4.5 },
    { id: 12, name: "Dragon Sushi Roll", category: "Sushi", price: 720, isVeg: false, desc: "Tempura shrimp, eel, avocado, topped with unagi sauce.", img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=600&auto=format&fit=crop", rating: 4.9 },
    { id: 13, name: "Chole Bhature", category: "Indian", price: 280, isVeg: true, desc: "Spicy chickpea curry served with fluffy, deep-fried bread.", img: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=600&auto=format&fit=crop", rating: 4.4 },
    { id: 14, name: "Tiramisu", category: "Dessert", price: 350, isVeg: true, desc: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone.", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600&auto=format&fit=crop", rating: 4.8 },
    { id: 15, name: "Salmon Nigiri", category: "Sushi", price: 580, isVeg: false, desc: "Fresh premium salmon over seasoned sushi rice.", img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=600&auto=format&fit=crop", rating: 4.7 },
    { id: 16, name: "Tandoori Chicken", category: "Indian", price: 400, isVeg: false, desc: "Chicken legs marinated in yogurt and spices, roasted in a tandoor.", img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=600&auto=format&fit=crop", rating: 4.6 },
    { id: 17, name: "Double Smash Burger", category: "Burger", price: 480, isVeg: false, desc: "Two smashed beef patties, american cheese, special sauce.", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop", rating: 4.7 },
    { id: 18, name: "Chocolate Lava Cake", category: "Dessert", price: 320, isVeg: true, desc: "Warm chocolate cake with a molten center, served with vanilla bean ice cream.", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=600&auto=format&fit=crop", rating: 4.9 },
    { id: 19, name: "BBQ Bacon Burger", category: "Burger", price: 520, isVeg: false, desc: "Angus beef, crispy bacon, onion rings, and smoky BBQ sauce.", img: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=600&auto=format&fit=crop", rating: 4.6 },
    { id: 20, name: "Palak Paneer", category: "Indian", price: 360, isVeg: true, desc: "Soft paneer cubes in a smooth spinach curry with a dash of cream.", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop", rating: 4.5 },
    { id: 21, name: "Hawaiian Pizza", category: "Pizza", price: 480, isVeg: false, desc: "Sweet pineapple and smoked ham with gooey mozzarella.", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop", rating: 4.3 },
    { id: 22, name: "California Roll", category: "Sushi", price: 450, isVeg: false, desc: "Crab stick, avocado, cucumber, wrapped in seasoned rice and nori.", img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=600&auto=format&fit=crop", rating: 4.4 },
    { id: 23, name: "Mango Sorbet", category: "Dessert", price: 210, isVeg: true, desc: "Refreshing dairy-free sorbet made with ripe Alphonso mangoes.", img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=600&auto=format&fit=crop", rating: 4.7 },
    { id: 24, name: "Chicken Tikka Pizza", category: "Pizza", price: 580, isVeg: false, desc: "Fusion pizza topped with spicy chicken tikka, onions, and cilantro.", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop", rating: 4.6 },
    { id: 25, name: "Executive Veg Meal", category: "Meals", price: 450, isVeg: true, desc: "Complete meal with paneer curry, dal makhani, rice, roti, and dessert.", img: "images/veg_meal.png", rating: 4.8 },
    { id: 26, name: "Non-Veg Combo Meal", category: "Meals", price: 550, isVeg: false, desc: "Savor our chicken curry, tandoori leg, biryani, naan, and a sweet treat.", img: "images/nonveg_meal.png", rating: 4.7 },
    { id: 27, name: "Happy Meal (Kids)", category: "Meals", price: 250, isVeg: false, desc: "Mini burger, french fries, fruit juice, and a surprise toy.", img: "images/kids_meal.png", rating: 4.6 },
    { id: 28, name: "Healthy Salad Meal", category: "Meals", price: 380, isVeg: true, desc: "A large bowl of fresh garden salad, quinoa, hummus, and pita bread.", img: "images/salad_meal.png", rating: 4.9 }
];

const categories = ["All", "Indian", "Pizza", "Burger", "Sushi", "Dessert", "Meals"];
let cart = [];
let currentCategory = "All";
let currentDiet = "All";
let activeOrder = null;
let orderSimulationInterval = null;

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const categoryFilters = document.getElementById('categoryFilters');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartCount = document.getElementById('cartCount');
const cartTotalAmount = document.getElementById('cartTotalAmount');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderMenu(menuData);
    loadCart();
    loadActiveOrder();
    
    // Check for existing login on load
    const savedUser = localStorage.getItem('craveUser');
    if (savedUser) {
        loginSuccess(savedUser);
    }
});

// Navigation
function navigate(sectionId) {
    // Update active section
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('section-active'));
    document.getElementById(sectionId).classList.add('section-active');

    // Update active nav link mapped by section ID
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active-link');
        }
    });

    // Trigger animations reset hack
    const section = document.getElementById(sectionId);
    section.style.animation = 'none';
    section.offsetHeight; /* trigger reflow */
    section.style.animation = null;
    
    // Smooth scroll considering sticky header height
    if(sectionId !== 'home') {
        const offset = 80; // height of the navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = section.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Render Categories
function renderCategories() {
    categoryFilters.innerHTML = `
        <div class="filter-group">
            ${categories.map(cat => `
                <button class="filter-btn ${cat === currentCategory ? 'active-filter' : ''}" 
                        onclick="setCategory('${cat}')">${cat}</button>
            `).join('')}
        </div>
        <div class="filter-group diet-filters">
            <button class="filter-btn ${currentDiet === 'All' ? 'active-filter' : ''}" onclick="setDiet('All')">All</button>
            <button class="filter-btn veg-btn ${currentDiet === 'Veg' ? 'active-filter' : ''}" onclick="setDiet('Veg')"><i class='bx bx-stop-circle' style='color:#2e7d32'></i> Veg</button>
            <button class="filter-btn nonveg-btn ${currentDiet === 'Non-Veg' ? 'active-filter' : ''}" onclick="setDiet('Non-Veg')"><i class='bx bx-stop-circle' style='color:#c62828'></i> Non-Veg</button>
        </div>
    `;
}

function setDiet(diet) {
    currentDiet = diet;
    applyFilters();
}

// Filter Menu by Category
function setCategory(category) {
    currentCategory = category;
    applyFilters();
}

function applyFilters() {
    renderCategories();
    let filtered = menuData;
    if (currentCategory !== "All") {
        filtered = filtered.filter(item => item.category === currentCategory);
    }
    if (currentDiet !== "All") {
        const isVegFilter = currentDiet === "Veg";
        filtered = filtered.filter(item => item.isVeg === isVegFilter);
    }
    renderMenu(filtered);
}

// Render Menu Items
function renderMenu(items) {
    menuGrid.innerHTML = items.map(item => `
    <div class="menu-card">
      <img src="${item.img}" alt="${item.name}" class="card-img" />
      <div class="card-info">
        <div class="card-header">
          <h3 class="card-title">
            <i class='bx bx-stop-circle diet-icon ${item.isVeg ? 'veg' : 'non-veg'}'></i>
            ${item.name}
          </h3>
          <span class="card-price">₹${item.price.toFixed(2)}</span>
        </div>
        <div class="card-rating" style="color: #f5b301; font-size: 0.9rem; margin-bottom: 8px;">
          <i class='bx bxs-star'></i> ${item.rating.toFixed(1)} (120+ reviews)
        </div>
        <p class="card-desc">${item.desc}</p>
        <div style="display: flex; gap: 10px; margin-top: 15px;">
          <button class="add-to-cart-btn" onclick="addToCart(${item.id})" style="flex: 1;">
            <i class='bx bx-cart-add'></i> Add to Cart
          </button>
          <button class="btn-primary" onclick="payNow(${item.id})" style="flex: 1; padding: 0.8rem; border-radius: 8px; font-size: 0.95rem; font-weight: 600;">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function payNow(id) {
    addToCart(id);
    checkout();
}

// Cart Logic
function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('show');
}

function addToCart(id) {
    const item = menuData.find(i => i.id === id);
    cart.push(item);
    saveCart();
    updateCartUI();

    // Animation feedback
    cartCount.style.transform = 'scale(1.5)';
    setTimeout(() => cartCount.style.transform = 'scale(1)', 200);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <i class='bx bx-cart'></i>
        <p>Your cart is empty.</p>
      </div>
    `;
        cartTotalAmount.textContent = "₹0.00";
        return;
    }

    cartItemsContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${index})">
            <i class='bx bx-trash'></i>
        </button>
    </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalAmount.textContent = `₹${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    // Create new active order
    activeOrder = {
        id: "ORD" + Math.floor(1000 + Math.random() * 9000),
        items: [...cart],
        total: cart.reduce((sum, item) => sum + item.price, 0),
        status: 0,
        timestamp: Date.now()
    };
    localStorage.setItem('craveActiveOrder', JSON.stringify(activeOrder));
    
    alert(`Thank you for your order! Total: ₹${activeOrder.total.toFixed(2)}`);
    cart = [];
    saveCart();
    updateCartUI();
    toggleCart();
    
    simulateTracking();
}

function loadActiveOrder() {
    const saved = localStorage.getItem('craveActiveOrder');
    if (saved) {
        activeOrder = JSON.parse(saved);
        if (activeOrder.status < 3) {
            simulateTracking();
        }
    }
}

function simulateTracking() {
    if (orderSimulationInterval) clearInterval(orderSimulationInterval);
    orderSimulationInterval = setInterval(() => {
        if (!activeOrder) return;
        if (activeOrder.status < 3) {
            activeOrder.status++;
            localStorage.setItem('craveActiveOrder', JSON.stringify(activeOrder));
            
            // update tracking modal if it's currently open
            if (document.getElementById('trackingModal').classList.contains('show')) {
                const trackingBody = document.getElementById('trackingBody');
                if (trackingBody && trackingBody.innerHTML.includes('Order #')) {
                    toggleOrderTracking(true); // Re-render
                }
            }
        } else {
            clearInterval(orderSimulationInterval);
        }
    }, 10000); // Progress every 10 seconds for demo
}

// Local Storage for Cart persistence
function saveCart() {
    localStorage.setItem('craveCart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('craveCart');
    if (saved) {
        cart = JSON.parse(saved);
    }
    updateCartUI();
}

// --- Modal & Auth Logic ---
const modalOverlay = document.getElementById('modalOverlay');
const userAuthSection = document.getElementById('userAuthSection');
const userProfileSection = document.getElementById('userProfileSection');
const userNameDisplay = document.getElementById('userNameDisplay');

function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    const isVisible = modal.classList.contains('show');
    
    // Close all modals first
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('show'));
    
    if (!isVisible) {
        modalOverlay.classList.add('show');
        modal.classList.add('show');
    } else {
        modalOverlay.classList.remove('show');
    }
}

function closeAllModals(event) {
    if (event && event.target === modalOverlay) {
        modalOverlay.classList.remove('show');
        document.querySelectorAll('.modal').forEach(m => m.classList.remove('show'));
    }
}

function switchModal(hideId, showId) {
    document.getElementById(hideId).classList.remove('show');
    document.getElementById(showId).classList.add('show');
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    
    // "Whenever new login ask them to sign up first"
    const users = JSON.parse(localStorage.getItem('craveAllUsers')) || {};
    if (!users[email]) {
        alert("Account not found. Please sign up first.");
        switchModal('loginModal', 'signupModal');
        document.getElementById('signupEmail').value = email;
        return;
    }

    const name = users[email].name;
    localStorage.setItem('craveUserEmail', email);
    loginSuccess(name);
    toggleModal('loginModal');
}

function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    
    // Save to our mock database
    const users = JSON.parse(localStorage.getItem('craveAllUsers')) || {};
    users[email] = { name: name };
    localStorage.setItem('craveAllUsers', JSON.stringify(users));

    localStorage.setItem('craveUserEmail', email);
    loginSuccess(name);
    toggleModal('signupModal');
}

function toggleProfileModal() {
    toggleModal('profileModal');
    loadProfileDetails();
}

function loadProfileDetails() {
    const userProfile = JSON.parse(localStorage.getItem('craveUserProfile')) || {
        name: localStorage.getItem('craveUser') || '',
        email: localStorage.getItem('craveUserEmail') || '',
        phone: '',
        address: ''
    };
    
    document.getElementById('profileName').value = userProfile.name;
    document.getElementById('profileEmail').value = userProfile.email;
    document.getElementById('profilePhone').value = userProfile.phone || '';
    document.getElementById('profileAddress').value = userProfile.address || '';
}

function saveProfile(event) {
    event.preventDefault();
    const userProfile = {
        name: document.getElementById('profileName').value,
        email: document.getElementById('profileEmail').value,
        phone: document.getElementById('profilePhone').value,
        address: document.getElementById('profileAddress').value
    };
    localStorage.setItem('craveUserProfile', JSON.stringify(userProfile));
    localStorage.setItem('craveUser', userProfile.name);
    localStorage.setItem('craveUserEmail', userProfile.email);
    
    userNameDisplay.textContent = `Hi, ${userProfile.name}`;
    
    toggleModal('profileModal');
    alert('Profile saved successfully!');
}

function loginSuccess(name) {
    if (!userAuthSection || !userProfileSection || !userNameDisplay) return;
    userAuthSection.style.display = 'none';
    userProfileSection.style.display = 'flex';
    userNameDisplay.textContent = `Hi, ${name}`;
    localStorage.setItem('craveUser', name);
}

function logout() {
    if (!userAuthSection || !userProfileSection) return;
    userProfileSection.style.display = 'none';
    userAuthSection.style.display = 'flex';
    localStorage.removeItem('craveUser');
}

function toggleOrderTracking(forceRender = false) {
    if (forceRender !== true) {
        toggleModal('trackingModal');
    }
    const trackingBody = document.getElementById('trackingBody');
    if (!trackingBody) return;
    
    if (activeOrder) {
        const statuses = ["Order Confirmed", "Preparing Order", "Out for Delivery", "Delivered"];
        const pTexts = [
            "We received your order.",
            "Your premium meal is being cooked exactly as you like it.",
            "Our deliverer is heading to your address.",
            "Enjoy your meal!"
        ];
        const icons = ["bx-check", "bx-restaurant", "bx-trip", "bx-home"];
        
        let stepsHtml = statuses.map((status, index) => {
            let stepClass = "";
            if (index < activeOrder.status) stepClass = "step-completed";
            else if (index === activeOrder.status) stepClass = "step-active";
            
            return `
                <div class="tracking-step ${stepClass}">
                    <div class="step-icon"><i class='bx ${icons[index]}'></i></div>
                    <div class="step-info">
                        <h4>${status}</h4>
                        <p>${pTexts[index]}</p>
                    </div>
                </div>
            `;
        }).join('');
    
        trackingBody.innerHTML = `
            <div class="tracking-status" style="background: rgba(0,0,0,0.03); padding: 25px; border-radius: 16px; border: 1px solid rgba(0,0,0,0.08);">
                <div style="margin-bottom: 20px; border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="margin: 0; font-size: 18px;">Order #${activeOrder.id}</h3>
                    <span style="color: var(--primary); font-weight: 700;">₹${activeOrder.total.toFixed(2)}</span>
                </div>
                <div class="tracking-steps">
                    ${stepsHtml}
                </div>
            </div>
        `;
    } else {
        trackingBody.innerHTML = `
            <div style="text-align: center; color: #a0a0a5; padding: 20px;">
                <i class='bx bx-food-menu' style="font-size: 48px; opacity: 0.5; margin-bottom: 10px;"></i>
                <p>You have no active orders yet.</p>
            </div>
        `;
    }
}