const inputEl = document.querySelector("#input");
const mktCapButton = document.querySelector("#mkt-cap");
const percentageButton = document.querySelector("#percentage");
const tbodyEl = document.querySelector("#table-body");

let coins = [];
let sortedCoins = [];

async function fetchData() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    coins = await response.json();
    sortedCoins = [...coins];
    renderData(coins);
  } catch (err) {
    console.error(err);
  }
}

async function getCoins() {
  await fetchData();

  mktCapButton.addEventListener("click", () => {
    sortedCoins.sort((a, b) => b.market_cap - a.market_cap);

    renderData(sortedCoins);
  });

  percentageButton.addEventListener("click", () => {
    sortedCoins.sort(
      (a, b) =>
        (b.price_change_percentage_24h ?? 0) -
        (a.price_change_percentage_24h ?? 0),
    );

    renderData(sortedCoins);
  });

  inputEl.addEventListener("keyup", () => {
    const value = inputEl.value.trim().toLowerCase();

    if (!value) {
      sortedCoins = [...coins];
      renderData(coins);
      return;
    }

    const filteredCoins = coins.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.symbol.toLowerCase().includes(value),
    );
    sortedCoins = [...filteredCoins];
    renderData(filteredCoins);
  });
}

getCoins();

function renderData(data) {
  tbodyEl.innerHTML = "";

  data.forEach((item) => {
    const volume = (item.total_volume / 1000).toFixed(1);
    const change = item.price_change_percentage_24h ?? 0;
    const color = change >= 0 ? "green" : "red";

    tbodyEl.innerHTML += `
      <tr>
        <td>
          <div class="name">
            <img src="${item.image}" alt="coin-icon" width="25">
            <span>${item.name}</span>
          </div>
        </td>
        <td>${item.symbol.toUpperCase()}</td>
        <td>$${item.current_price.toLocaleString()}</td>
        <td>${volume}k</td>
        <td class="${color}">${change.toFixed(2)}%</td>
        <td>$${item.market_cap.toLocaleString()}</td>
      </tr>
    `;
  });
}

// same code using then and catch

// const inputEl = document.querySelector("#input");
// const mktCapButton = document.querySelector("#mkt-cap");
// const percentageButton = document.querySelector("#percentage");
// const tbodyEl = document.querySelector("#table-body");

// let coins = [];
// let sortedCoins=[];
// const fetchData = fetch(
//   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",
// );

// fetchData
//   .then((response) => {
//
//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     coins = [...data];
//     sortedCoins=[...data];
//     renderData(coins);

//     mktCapButton.addEventListener("click", () => {
//       sortedCoins.sort(
//         (a, b) => b.market_cap - a.market_cap,
//       );

//       renderData(sortedCoins);
//     });

//     percentageButton.addEventListener("click", () => {
//        sortedCoins.sort(
//         (a, b) =>
//           (b.price_change_percentage_24h ?? 0) -
//           (a.price_change_percentage_24h ?? 0),
//       );

//       renderData(sortedCoins);
//     });

//     inputEl.addEventListener("keyup", () => {
//     const value = inputEl.value.trim().toLowerCase();

//       if (!value) {
//       sortedCoins=[...coins];
//         renderData(coins);
//         return;
//       }

//       const filteredCoins = coins.filter(
//         (item) =>
//           item.name.toLowerCase().includes(value) ||
//           item.symbol.toLowerCase().includes(value),
//       );
// sortedCoins=[...filteredCoins];
//       renderData(filteredCoins);
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// function renderData(data) {
//   tbodyEl.innerHTML = "";

//   data.forEach((item) => {
//     const volume = (item.total_volume / 1000).toFixed(1);
//     const change = item.price_change_percentage_24h ?? 0;
//     const color = change >= 0 ? "green" : "red";

//     tbodyEl.innerHTML += `
//       <tr>
//         <td>
//           <div class="name">
//             <img src="${item.image}" alt="coin-icon" width="25">
//             <span>${item.name}</span>
//           </div>
//         </td>
//         <td>${item.symbol.toUpperCase()}</td>
//         <td>$${item.current_price.toLocaleString()}</td>
//         <td>${volume}k</td>
//         <td class="${color}">${change.toFixed(2)}%</td>
//         <td>$${item.market_cap.toLocaleString()}</td>
//       </tr>
//     `;
//   });
// }
