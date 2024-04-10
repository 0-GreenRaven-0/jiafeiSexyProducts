//--------------------------------------------Section Display-----------------------------------------------------------
function displaySection(sectionId) {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    section.style.display = "none";
  });

  const selectedSection = document.getElementById(sectionId);

  selectedSection.style.display = "block";
}

//--------------------------------------------Add to Cart---------------------------------------------------------------

const orders = [];

render();
updateEmptyCart();

function addToChart(itemName, price) {
  let existingOrder = orders.find((order) => order.itemName === itemName);
  const popupProduct = document.querySelector(".popUpProducts");

  if (existingOrder) {
    popupProduct.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert" id="alerts" >
            <strong>Bitch order was added already</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
  } else {
    orders.push({ itemName: itemName, price: price, quantity: 1 });
  }

  console.log(orders);

  render();
  updateEmptyCart();
  showNotification();
}

//----------------------------------------------Generate Order----------------------------------------------------------

function render() {
  let ordersHtml = "";

  for (let i = 0; i < orders.length; i++) {
    const currentOrder = orders[i];

    ordersHtml += `
    <div class="col-lg-4 col-md-6 col-sm-8">
      <div class="order">
        <div class="order-img">
          <img src="sexy porducts/${currentOrder.itemName}" class="img-fluid">
        </div>
        <div class="order-description">
          <h3 class="order-price">Price: $${currentOrder.price}</h3>
          <div class="quantity-control">
            <h4>Quantity: ${currentOrder.quantity}</h4>
            <div class="quantity-btns">
              <button class="quantity-btn adjust" onclick=" add('${currentOrder.itemName}')">+</button>
              <button class="quantity-btn adjust" onclick=" remove('${currentOrder.itemName}')">-</button>
              <button class="quantity-btn cancel-order" onclick = "orders.splice(${i},1);
              render(); ">Cancel</button>
            </div>
          </div>
        </div>
        </div>
        </div>
    `;
  }

  document.querySelector(".placed-items").innerHTML = ordersHtml;

  calculateTotal();
  updateEmptyCart();
}

//--------------------------------------------------------------calculate total--------------------------------------------------------

function calculateTotal() {
  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    const currentOrder = orders[i];

    total += currentOrder.price * currentOrder.quantity;
  }

  document.querySelector(
    ".total-purchase"
  ).innerHTML = `<h4>Your total purchase will be: $${total}</h4>`;
}

//-----------------------------------------------------------quantity control---------------------------------------------------------

function add(itemName) {
  const currentOrder = orders.find((order) => order.itemName === itemName);

  currentOrder.quantity++;
  render();
}

function remove(itemName) {
  const currentOrder = orders.find((order) => order.itemName === itemName);
  const popupProduct = document.querySelector(".popUpProducts");

  if (currentOrder.quantity >= 2) {
    currentOrder.quantity--;
  } else {
    popupProduct.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert" id="alerts" >
    <strong>Bitch stop</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  }

  render();
  updateEmptyCart();
}

//----------------------------------------------------------------- Empty cart -----------------------------------------------------------------

function updateEmptyCart() {
  const emptyCartMessage = document.querySelector(".display-empty-cart");

  if (orders.length === 0) {
    emptyCartMessage.style.display = "block";
  } else {
    emptyCartMessage.style.display = "none";
  }
}

//---------------------------------------------------------------- Notification Badge--------------------------------------------------------

function showNotification() {
  const notification1 = document.querySelector(".notification-badge");
  const notification2 = document.querySelector(".notification-badge2");

  notification1.style.display = "block";
  notification2.style.display = "block";
}

function hideNotification() {
  const notification1 = document.querySelector(".notification-badge");
  const notification2 = document.querySelector(".notification-badge2");

  notification1.style.display = "none";
  notification2.style.display = "none";
}

//---------------------------------------------------------------------Ads-------------------------------------------------------------------
const popup_overlay = document.querySelector(".popup-overlay");

function displayAd() {
  const randomNumber = Math.floor(Math.random() * 7) + 1;
  popup_overlay.classList.toggle("active");

  switch (randomNumber) {
    case 1:
      popup_overlay.innerHTML = `  <div class="popup-container" id="ad-1">
    <div class="content">
        <div class="skip-button"> <button onclick="removeAd()"> Skip</button></div>
        <img
        src="ads/1.jpg""
        width="210px"
        height="270px"
        />
        <p class="description">
        <strong>
            Anna has sent you 3 messages, click here to respond</strong
        >
        </p>
        <a href="#" class="visit-button" onclick="visit()">Click here</a>
    </div>
    </div>`;
      break;

    case 2:
      popup_overlay.innerHTML = `  <div class="popup-container" id="ad-2">
    <div class="content">
        <div class="skip-button"> <button onclick="removeAd()"> Skip</button></div>
        <img
        src="ads/2.jpg""
        width="210px"
        height="270px"
        />
        <p class="description">
        <strong>
            one million missed calls from Harvard</strong
        >
        </p>
        <a href="#" class="visit-button" onclick="visit()">Click here</a>
    </div>
    </div>`;
      break;

    case 3:
      popup_overlay.innerHTML = `  <div class="popup-container" id="ad-3">
      <div class="content">
          <div class="skip-button"> <button onclick="removeAd()"> Skip</button></div>
          <img
          src="ads/3.jpg""
          width="210px"
          height="270px"
          />
          <p class="description">
          <strong>
             Najwa Karam is 5 km away from you, click here to meet her.
          </strong>
          </p>
          <a href="#" class="visit-button" onclick="visit()">Click here</a>
      </div>
      </div>`;
      break;

    case 4:
      popup_overlay.innerHTML = `  <div class="popup-container" id="ad-4">
        <div class="content">
            <div class="skip-button"> <button onclick="removeAd()"> Skip</button></div>
            <img
            src="ads/4.jpeg""
            width="210px"
            height="270px"
            />
            <p class="description">
            <strong>
                Mariam Nour wants to go on a date with you</strong
            >
            </p>
            <a href="#" class="visit-button" onclick="visit()">Click here</a>
        </div>
        </div>`;
      break;

    case 5:
      popup_overlay.innerHTML = `  <div class="popup-container" id="ad-5">
        <div class="content">
            <div class="skip-button"> <button onclick="removeAd()"> Skip</button></div>
            <img
            src="ads/5.jpeg""
            width="210px"
            height="270px"
            />
            <p class="description">
            <strong>
                You have won the Iphone 27 Pro Max Super</strong
            >
            </p>
            <a href="#" class="visit-button" onclick="visit()">Click here</a>
        </div>
        </div>`;
      break;

    case 6:
      popup_overlay.innerHTML = `  <div class="popup-container" id="ad-6">
      <div class="content">
          <div class="skip-button"> <button onclick="removeAd()"> Skip</button></div>
          <img
          src="ads/6.webp""
          width="210px"
          height="270px"
          />
          <p class="description">
          <strong>
              Sarah is setting your house on fire, click her to go on a date with her</strong
          >
          </p>
          <a href="#" class="visit-button" onclick="visit()">Click here</a>
      </div>
      </div>`;
      break;

    default:
      popup_overlay.innerHTML = `  <div class="popup-container" id="ad-7">
        <div class="content">
            <div class="skip-button"> <button onclick="removeAd()"> Skip</button></div>
            <img
            src="ads/7.jpg""
            width="210px"
            height="270px"
            />
            <p class="description">
            <strong>
                Did you know? The sky rains water, click for more mind blowing scientific discoveries</strong
            >
            </p>
            <a href="#" class="visit-button" onclick="visit()">Click here</a>
        </div>
        </div>`;
  }
}

setTimeout(displayAd, 15000);

function removeAd() {
  const popup_overlay = document.querySelector(".popup-overlay");
  popup_overlay.classList.toggle("active");

  popup_overlay.innerHTML = " ";
  setTimeout(displayAd, 15000);
}

//-------------------------------------------------------------Visit ads-------------------------------------------------------

function visit() {
  alert("Did no one tell you not to click on these popup ads?");
}

//----------------------------------------------------------Thank you for checking my page---------------------------------------------

function endOfPage() {
  const popupProduct = document.querySelector(".popUpProducts");
  if (orders.length === 0) {
    popupProduct.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert" id="alerts" >
    <strong>Bitch you didn't order anything</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  } else {
    alert(
      "You have reached the end of the page, thank you so much for your time 💚"
    );
    window.close();
  }
}
