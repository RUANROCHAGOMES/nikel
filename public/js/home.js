const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

let data = {
    transactions: {}
};

document.getElementById("button-logout").addEventListener("click", logout);
document.getElementById("transactions-button").addEventListener("click", function() {
    window.location.href = "transactions.html"
})


//ADICIONAR LANÇAMENTO
document.getElementById("transaction-forma").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const value = parseFloat(document.getElementById("value-input").value);
    const description = document.getElementById("description-input").value;
    const date = document.getElementById("date-input").value;
    const type = document.querySelector('input[name="type-input"]:checked').value;

    data.transactions.unshift({
        value: value, type: type, description: description, date: date
    });

    saveData(data);
    e.target.reset();
    myModal.hide();

    getCashIn();
    getCashOut();
    getTotal();

    alert("Lançamento adicionado com sucesso.");    
})

checklogged();

function checklogged() {
    if(session) {
        sessionStorage.getItem("logged", session);
        logged = session;
    }

    if(!logged) {
        window.location.href = "index.html";
        return;
    }

    const dataUser = localStorage.getItem(logged);
    if(dataUser) {
        data = JSON.parse(dataUser);
    }    
}

    getCashIn();
    getCashOut();
    getTotal();

function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = "index.html";
}

function getCashIn() {
    const transactions = data.transactions;

    const CashIn = transactions.filter((item) => item.type === "1");

    if(CashIn.length) {
        let CashInHtml = ``;
        let limit = 0;

        if(CashIn.length > 5) {
            limit = 5;
        } else { 
            limit = CashIn.length;            
        }

        for (let index = 0; index < limit; index++) {
            CashInHtml += `
            <div class="row mb-4">
                <div class="col-12">
                    <H3 class="fs-2">${CashIn[index].value(2)}</H3>
                    <div class="container p-0">
                        <div class="row">
                            <div class="vol-12 col-md-8">
                                <p>${CashIn[index].description}</p>
                            </div>
                            <div class="col-12 col-md-3 d-flex justify-content-end">
                                 ${CashIn[index].date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `                 
        }

        document.getElementById("cash-in-list").innerHTML = CashInHtml;
    }
}

function getCashOut() {
    const transactions = data.transactions;

    const CashIn = transactions.filter((item) => item.type === "2");

    if(CashIn.length) {
        let CashInHtml = ``;
        let limit = 0;

        if(CashIn.length > 5) {
            limit = 5;
        } else { 
            limit = CashIn.length;            
        }

        for (let index = 0; index < limit; index++) {
            CashInHtml += `
            <div class="row mb-4">
                <div class="col-12">
                    <H3 class="fs-2">${CashIn[index].value(2)}</H3>
                    <div class="container p-0">
                        <div class="row">
                            <div class="vol-12 col-md-8">
                                <p>${CashIn[index].description}</p>
                            </div>
                            <div class="col-12 col-md-3 d-flex justify-content-end">
                                 ${CashIn[index].date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `                 
        }

        document.getElementById("cash-out-list").innerHTML = CashOutHtml;
    }
}

function getTotal() {
    const transactions = data.transactions;
    let total = 0;

    transactions.forEach((item) => {
        if(item.type === "1") {
            total += item.value;
        } else {
            total -= item.value;
        }        
    });
    
    document.getElementById("total").innerHTML = `R$ ${total.toFixed(2)}`
}


function saveData(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

