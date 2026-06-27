let cardsEl = document.querySelector("#cards");
let menuData = [];

async function getMenu() {
  try {
    cardsEl.innerHTML = "";

    const response = await fetch(
      "https://storage.googleapis.com/acciojob-open-file-collections/appsmith-uploads/bb3807e9b0bc49958d39563eb1759406.json",
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    menuData = data;

    data.forEach((item) => {
      cardsEl.innerHTML += `
        <div class="card">
          <div class="card-image">
            <img src="${item.imgSrc}" alt="${item.name}" />
          </div>

          <div class="card-bottom">
            <div class="left-content">
              <h3 class="food-name">${item.name}</h3>
              <p class="price">$${item.price}</p>
            </div>

            <button class="add-btn" >Order</button>
          </div>
        </div>
      `;
    });
  } catch (error) {
    console.error(error);
  }
}

getMenu();

cardsEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    alert(" Your order is being placed. Please wait...");

    processOrder();
  }
});

function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomFoods = [];

      while (randomFoods.length < 3) {
        const randomIndex = Math.floor(Math.random() * menuData.length);
        const food = menuData[randomIndex];
        if (!randomFoods.includes(food)) {
          randomFoods.push(food);
        }
      }
      resolve({
        items: randomFoods,
      });
    }, 2500);
  });
}

function orderPrep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        order_status: true,
        paid: false,
      });
    }, 1500);
  });
}

function payOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        order_status: true,
        paid: true,
      });
    }, 1000);
  });
}

function thankyouFnc() {
  alert("Thank you for eating with us today!");
}

async function processOrder() {
  try {
    const order = await takeOrder();

    const prepared = await orderPrep();

    const payment = await payOrder();

    if (payment.paid) {
      thankyouFnc();
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  }
}
