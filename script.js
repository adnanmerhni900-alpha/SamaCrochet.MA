let cart = JSON.parse(localStorage.getItem('cart')) || [];

const products = [
  // 1–26 (القائمة الأساسية بعد التصحيح)
  { id: 1,  category:"Keychains",     name: "chicken with Flowers",              desc: "ورود كروشيه بشكل فراولة لطيفة ♡", price: 46,  img: "images/1.jpg" },
  { id: 2,  category: "Keychains",   name: "Strawberry Keychain",             desc: "سلسلة مفاتيح فراولة لطيفة ♡", price: 48,  img: "images/2.jpg" },
  { id: 3,  category: "keychains",     name: "Romantic Fllouss",                desc: " كتكوت ضريف يحمل قلب احمر  ", price: 62,  img: "images/3.jpg" },
  { id: 4,  category: "Keychains",   name: "Tomato Keychain",                 desc: "سلسلة مفاتيح طماطم مضحكة ♡", price: 56,  img: "images/4.jpg" },
  { id: 5,  category: "Keychains",   name: "Nishinoya Volleyball Keychain",   desc: "نيشينويا مع الكرة الطائرة - Haikyuu ♡", price: 57,  img: "images/5.jpg" },
  { id: 6,  category: "Keychains",   name: "Hinata Volleyball Keychain",      desc: "هيناتا مع الكرة الطائرة - Haikyuu ♡", price: 57,  img: "images/6.jpg" },
  { id: 7,  category: "Keychains",   name: "Kaito Kid Keychain",              desc: "كايتو كيد - شخصية لطيفة ♡", price: 44,  img: "images/7.jpg" },
  { id: 8,  category: "Accessories", name: "Mikasa Scarf with Gloves",        desc: "طقم وشاح وقفازات ميكاسا", price: 289, img: "images/8.jpg" },
  { id: 9,  category: "Accessories", name: "Crochet Gloves",                  desc: "قفازات كروشيه دافئة ♡", price: 78,  img: "images/9.jpg" },
  { id: 10, category: "Flowers",     name: "Single Tulip",                    desc: "زهرة توليب واحدة جميلة ♡", price: 25,  img: "images/10.jpg" },
  { id: 11, category: "Dolls",       name: "Graduation Girl Doll",            desc: "فتاة تخرج بدفتر وطاقية", price: 63,  img: "images/11.jpg" },
  { id: 12, category: "Keychains",   name: "Mini Scarf Keychain",             desc: "سلسلة مفاتيح وشاح صغير ♡", price: 28,  img: "images/12.jpg" },
  { id: 13, category: "Dolls",       name: "Sunflower Girl Doll",             desc: "فتاة مع دوار الشمس ♡", price: 70,  img: "images/13.jpg" },
  { id: 14, category: "Flowers",     name: "Single Carnation",                desc: "زهرة قرنفل واحدة أنيقة ♡", price: 60,  img: "images/14.jpg" },
  { id: 15, category: "Flowers",     name: "Bouquet of 4 Carnations",         desc: "باقة من ٤ ورود قرنفل ♡", price: 230, img: "images/15.jpg" },
  { id: 16, category: "Flowers",     name: "Sunflower",                       desc: "دوار شمس كبير مشرق ♡", price: 70,  img: "images/16.jpg" },
  { id: 17, category: "Accessories", name: " Mirror Flower Crochet",             desc: "مرآة الزهور كروشيه ♡", price: 119,  img: "images/38.jpg" },
  { id: 18, category: "Keychains",   name: "Mushroom Keychain",               desc: "سلسلة مفاتيح فطر لطيف ♡", price: 44,  img: "images/18.jpg" },
  { id: 19, category: "Keychains",   name: "Octopus Keychain",                desc: "سلسلة مفاتيح أخطبوط لطيف ♡", price: 50,  img: "images/19.jpg" },
  { id: 20, category: "Flowers",     name: "Bouquet of lily flowers",         desc: "زهرة زنبق أنيقة ♡", price: 146,  img: "images/20.jpg" },
  { id: 21, category: "Flowers",     name: "Rose Flower",                     desc: "وردة كروشيه رومانسية ♡", price: 62,  img: "images/21.jpg" },
  { id: 22, category: "Dolls",       name: "Large Handmade Doll",             desc: "دمية كروشيه كبيرة وجميلة ♡", price: 370, img: "images/22.jpg" },
  { id: 23, category: "Dolls",       name: "Ramadan Character Doll",          desc: "شخصية رمضان مع فانوس ♡", price: 325, img: "images/23.jpg" },
  { id: 24, category: "Dolls",       name: "Mini Pig Doll",                   desc: "خنزير صغير كروشيه لطيف ♡", price: 85,  img: "images/24.jpg" },
  { id: 25, category: "Keychains",   name: "Teddy Bear Keychain",             desc: "دبدوب صغير سلسلة مفاتيح ♡", price: 45,  img: "images/25.jpg" },
  { id: 26, category: "Keychains",   name: "Romantic fllouse",                desc: "سلسلة مفاتيح كتكوت يجمل وردة   ♡", price: 65,  img: "images/26.jpg" },
  { id: 27, category: "Keychains",   name: "little fllouss ",          desc: "سلسلة مفاتيح ورود صغيرة لطيفة ♡", price: 40,  img: "images/27.jpg" },
  { id: 28, category: "Dolls",       name: "Batman Doll",                     desc: "دمية باتمان كروشيه مميزة", price: 129, img: "images/28.jpg" },
  { id: 29, category: "Keychains",   name: "Mini Flowers ",           desc: "سلسلة مفاتيح ورود صغيرة جداً ♡", price: 25,  img: "images/29.jpg" },
  { id: 30, category: "Keychains",   name: "Chicken Bo3o ",           desc: "دجاجة بوعو لطيفة سلسلة مفاتيح ♡", price: 59,  img: "images/30.jpg" },
  { id: 31, category: "Flowers",     name: "Flowers Box",                     desc: "صندوق ورود كروشيه جميل ♡", price: 79,  img: "images/31.jpg" },
  { id: 32, category: "Keychains",   name: "Little Bear ",            desc: "دب صغير سلسلة مفاتيح لطيف ♡", price: 45,  img: "images/32.jpg" },
  { id: 33, category: "Accessories", name: "Book Marker",                     desc: "علامة كتاب كروشيه مميزة ♡", price: 25,  img: "images/33.jpg" },
  { id: 34, category: "Accessories", name: "Gold Earrings",             desc: "أقراط الدهبية كروشيه ♡", price: 43,  img: "images/34.jpg" },
  { id: 35, category: "Accessories", name: "Flower Earrings",             desc: "أقراط الورود كروشيه ♡", price: 45,  img: "images/35.jpg" },
  { id: 36,  category: "Keychains",   name: "NARUTO  Keychain",      desc: "  ناروتو من انمي ناروتو♡", price: 40,  img: "images/36.jpg" },
  { id: 37,  category: "Keychains",   name: "Gojo saturu Keychain",      desc: "   جوجو من انمي جوجتسو كايسن ♡", price: 45,  img: "images/37.jpg" },
  { id: 38, category: "Accessories", name: "Strawberry Earrings",             desc: "أقراط فراولة كروشيه ♡", price: 43,  img: "images/17.jpg" },
  { id: 39,  category: "Keychains",   name: "Panda",      desc: " باندا كروشي لطيف ♡", price: 40,  img: "images/39.jpg" },
  { id: 40,  category: "Keychains",   name: "Spider Man",      desc: "     سلسلة مفاتيح للرجل العنكبوت لطيفة ♡", price: 50,  img: "images/40.jpg" },
  { id: 41, category: "Flowers",     name: "Bouquet Flowers ",                     desc: " ورود كروشيه جميل ♡", price: 279,  img: "images/41.jpg" },
  { id: 42,  category: "Keychains",   name: "Kout-kout twin",      desc: "    توأم كتاكيت لطيف بقبعة وردية لصديقات ♡", price: 42,  img: "images/42.jpg" },
  { id: 43, category: "Accessories", name: "Rose Flower Earrings",             desc: "أقراط ورود حمراء كروشيه ♡", price: 45,  img: "images/43.jpg" },

];

let selectedProduct = null;

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartCount').textContent = count;
}

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  updateCartCount();

  // توست إشعار
  const toast = document.createElement('div');
  toast.textContent = `تم إضافة ${product.name} إلى السلة ♡`;
  toast.style.cssText = `
    position: fixed; bottom: 40px; left: 50%; transform: translateX(-50%);
    background: #8b5cf6; color: white; padding: 14px 32px;
    border-radius: 50px; z-index: 3000; box-shadow: 0 10px 30px rgba(0,0,0,0.6);
    font-size: 1.1rem; white-space: nowrap;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}

function changeQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  saveCart();
  updateCart();
  updateCartCount();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCart();
  updateCartCount();
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function renderProducts(containerId, productsList) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  productsList.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" onclick="openProductModal(${product.id})">
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <div class="price">${product.price} درهم</div>
      <button onclick="addToCart(products.find(p => p.id === ${product.id}))">أضف إلى السلة ♡</button>
    `;
    container.appendChild(card);
  });
}

function openProductModal(id) {
  selectedProduct = products.find(p => p.id === id);
  if (!selectedProduct) return;
  document.getElementById('modalImg').src = selectedProduct.img;
  document.getElementById('modalImg').alt = selectedProduct.name;
  document.getElementById('modalName').textContent = selectedProduct.name;
  document.getElementById('modalDesc').textContent = selectedProduct.desc;
  document.getElementById('modalPrice').textContent = selectedProduct.price;
  document.getElementById('productModal').classList.add('show');
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  if (cart.length === 0) {
    cartItems.innerHTML = '<p style="text-align:center; padding:40px 0;">السلة فارغة حالياً ♡</p>';
  } else {
    cart.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div style="flex:1; text-align:right;">
          <h4>${item.name}</h4>
          <p>${item.price} درهم × ${item.quantity}</p>
          <div class="quantity-controls">
            <button onclick="changeQuantity(${index}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${index}, 1)">+</button>
            <button onclick="removeFromCart(${index})" style="background:#ef4444; margin-right:8px;">حذف</button>
          </div>
        </div>
      `;
      cartItems.appendChild(div);
    });
  }
  document.getElementById('cartTotalAmount').textContent = cartTotal();
}

// الفلاتر
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.category;
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    renderProducts('allProducts', filtered);
  };
});

document.getElementById('addToCartBtn').onclick = () => {
  addToCart(selectedProduct);
  document.getElementById('productModal').classList.remove('show');
};

document.getElementById('cartBtn').onclick = () => {
  updateCart();
  document.getElementById('cartModal').classList.add('show');
};

document.getElementById('showOrderFormBtn').onclick = () => {
  document.getElementById('orderForm').style.display = 'block';
  document.getElementById('showOrderFormBtn').style.display = 'none';
  document.getElementById('confirmOrderBtn').style.display = 'block';
};

document.getElementById('confirmOrderBtn').onclick = () => {
  const name    = document.getElementById('customerName').value.trim();
  const phone   = document.getElementById('customerPhone').value.trim();
  const city    = document.getElementById('customerCity').value.trim();
  const address = document.getElementById('customerAddress').value.trim();
  const notes   = document.getElementById('customerNotes').value.trim();

  if (!name || !phone || !city || !address) {
    alert('يرجى ملء جميع الحقول المطلوبة ♡');
    return;
  }

  let message =
` SAMA CROCHET طلب جديد لك  ♡

 الاسم: ${name}
 الهاتف: ${phone}
 المدينة: ${city}
 العنوان:
${address}
${notes ? ` ملاحظات: ${notes}\n` : ''}

 المنتجات:
`;

cart.forEach(item => {
  message += `• ${item.name} × ${item.quantity} = ${item.price * item.quantity} درهم\n`;
});

message += `\n  الإجمالي: ${cartTotal()} درهم`;


  const whatsappNumber = "+212621091399";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");

  cart = [];
  saveCart();
  updateCartCount();
  updateCart();
  document.getElementById('cartModal').classList.remove('show');
  document.getElementById('orderForm').style.display = 'none';
  document.getElementById('showOrderFormBtn').style.display = 'block';
  document.getElementById('confirmOrderBtn').style.display = 'none';
};

document.querySelectorAll(".close").forEach(btn => {
  btn.onclick = () => {
    document.getElementById("productModal").classList.remove("show");
    document.getElementById("cartModal").classList.remove("show");
  };
});

window.onclick = (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("show");
  }
};

const backToTop = document.getElementById("backToTop");
window.onscroll = () => {
  backToTop.style.display = window.scrollY > 400 ? "flex" : "none";
};
backToTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// تحميل أولي
renderProducts("allProducts", products);
updateCartCount();