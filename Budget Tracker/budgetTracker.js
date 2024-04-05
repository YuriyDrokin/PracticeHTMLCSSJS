const form = document.querySelector(".add-transaction");
let transactions = localStorage.getItem("transactions") !== null ? JSON.parse(localStorage.getItem("transactions")) : [];

function addTransaction(source, amount) {
  const time = new Date();
  const transaction = {

    id: Math.floor(Math.random() * 100000),
    source: source,
    amount: amount,
    time: `${time.toLocaleTimeString()} ${time.toLocaleDateString()}`
  };
  transactions.push(transactions);
  localStorage.setItem("transactions", JSON.stringify(transaction));
}

form.addEventListener("submit", event => {
  event.preventDefault();
  addTransaction(form.source.value, form.amount.value);
  form.reset();

})