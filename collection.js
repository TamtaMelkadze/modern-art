  // პროდუქტების დამატება
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartCount();

  const buttons = document.querySelectorAll('.add-to-cart');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const product = btn.parentElement;
      const name = product.getAttribute('data-name');
      const price = parseFloat(product.getAttribute('data-price'));
      const image = product.querySelector('img').src; //store image

      cart.push({ name, price, image });
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      alert(`${name} დაემატა კალათაში`);
    });
  });

  // კალათის რაოდენობა header-ში
  function updateCartCount() {
    const counter = document.getElementById('cart-count');
    if (counter) counter.textContent = cart.length;
  }

  // cart.html – კალათის გამოტანა
  const cartItemsDiv = document.getElementById('cart-items');
  if (cartItemsDiv) {
    renderCart();
  }

  // function renderCart() {
  //   cartItemsDiv.innerHTML = '';
  //   let total = 0;
  //   cart.forEach((item, index) => {
  //     const div = document.createElement('div');
  //     div.classList.add('cart-item');
  //     div.innerHTML = `
  //     <img src=${item.image}" alt="${item.name}" class="cart-thumb">
  //       <span>${item.name}</span>
  //       <span>${item.price} ₾</span>
  //       <button onclick="removeItem(${index})">წაშლა</button>
  //     `;
  //     cartItemsDiv.appendChild(div);
  //     total += item.price;
  //   });

  //   document.getElementById('total').textContent = `ჯამი: ${total} ₾`;
  // }

//   function renderCart() {
//   const cartItemsDiv = document.getElementById('cart-items');
//   cartItemsDiv.innerHTML = '';
//   let total = 0;

//   cart.forEach((item, index) => {
//     const div = document.createElement('div');
//     div.classList.add('cart-item');
//     div.innerHTML = `
//       <img src="${item.image}" alt="${item.name}" class="cart-thumb" />
//       <div class="cart-info">
//       <span class="cart-name">${item.name}</span>
//       <div class="cart-right"
//       <span class="cart-price">${item.price} ₾</span>
//       <button onclick="removeItem(${index})" class="remove-btn">წაშლა</button>
//       </div>
//       </div>
//     `;
//     cartItemsDiv.appendChild(div);
//     total += item.price;
//   });

//   document.getElementById('total').textContent = `ჯამი: ${total} ₾`;
// }

function renderCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-thumb" />
      <div class="cart-info">
        <span class="cart-name">${item.name}</span>
        <div class="cart-right">
          <span class="cart-price">${item.price} ₾</span>
          <button onclick="removeItem(${index})" class="remove-btn">წაშლა</button>
        </div>
      </div>
    `;
    cartItemsDiv.appendChild(div);
    total += item.price;
  });

  document.getElementById('total').textContent = `ჯამი: ${total} ₾`;
}



  function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
  }

  const clearBtn = document.getElementById('clear-cart');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      cart = [];
      localStorage.removeItem('cart');
      renderCart();
      updateCartCount();
    });
  }


  // background split


//   const hero = document.querySelector('.hero');
//   const left = document.querySelector('.left');
//   const right = document.querySelector('.right');

//   hero.addEventListener('mousemove', (e) => {
//     const rect = hero.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const percent = (x / rect.width) * 100;

//     left.style.width = percent + '%';
//     right.style.width = (100 - percent) + '%';
//   });

//   hero.addEventListener('mouseleave', () => {
//     left.style.width = '50%';
//     right.style.width = '50%';
//   });


  // Product Image zoom popup 
  const popup = document.getElementById('image-popup');
  const popupImg = document.getElementById('popup-img');
  const closePopup = document.querySelector('.close');
console.log(popup)
  document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
      popup.style.display = 'block';
      popupImg.src = img.src;
    });
  });

  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });



  // accountis gverdi

 const form = document.getElementById('account-form');
form.addEventListener('submit', function(e){
  e.preventDefault();

  // Use getElementById to match the input IDs exactly
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if(password !== confirmPassword){
    alert("პაროლები არ ემთხვევა!");
    return;
  }

  // Save in localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push({ username, email, password });
  localStorage.setItem('users', JSON.stringify(users));

  alert("ანგარიში წარმატებით შექმნილია!");
  form.reset();
  window.location.href = "login.html"; // redirect to login
});
