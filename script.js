let balance = 0;

function deposit() {
    const amount = Number(document.getElementById("amount").value);
    const message = document.getElementById("message");

    if (amount <= 0) {
        message.style.color = "red";
        message.textContent = "Enter a valid deposit amount";
        return;
    }

    balance += amount;
    updateUI("Deposit successful", "green");
}

function withdraw() {
    const amount = Number(document.getElementById("amount").value);
    const message = document.getElementById("message");

    if (amount <= 0) {
        message.style.color = "red";
        message.textContent = "Enter a valid withdrawal amount";
        return;
    }

    if (amount > balance) {
        message.style.color = "red";
        message.textContent = "Insufficient balance";
        return;
    }

    balance -= amount;
    updateUI("Withdrawal successful", "green");
}

function updateUI(msg, color) {
    document.getElementById("balance").textContent = "₹ " + balance;
    const message = document.getElementById("message");
    message.style.color = color;
    message.textContent = msg;
    document.getElementById("amount").value = "";
}
