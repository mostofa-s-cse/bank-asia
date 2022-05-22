const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})


// deposit button event hendelar...


const depositBtn = document.getElementById("addeposit");
depositBtn.addEventListener("click", function() {
    const depositNumber = getInputNumber("depositAmount");

    updateSpanText("currentDeposit", depositNumber);

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    // currentbalance upadte...
    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";

})

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}


// withdraw button event hendelar...
const withdrawBtn = document.getElementById("addwithdraw");
withdrawBtn.addEventListener("click", function() {
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentwithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);

    document.getElementById("withdrawAmount").value = "";
})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}