init();

function init() {

    if (!window.tronWeb) return;

    window.tronWeb.on("addressChanged", (res) => {
        console.log(">>>>>>>>> Address changed", res);
        //console.log(">>>>>>>>> Address changed",new Date());
        if (window.tronWeb.ready && window.address === window.tronWeb.defaultAddress.base58) return;
        //alert(">>>>>>>>> Reload page",new Date());

        window.location.reload();

    });

    if (window.tronWeb.ready) {
        //console.log(">>>>>>>>>> Ready",new Date());
        window.address = window.tronWeb.defaultAddress.base58;
        document.getElementById("my-account").innerHTML = window.address;

        window.tronWeb.contract().at("TDKDBN394c4QShXpn8A74UcB4HHWXRx3hk").then(contract => {
            window.contract = contract;
            contract.greetings().call().then(res => {
                console.log(res);
                document.getElementById("greetings").innerHTML = res;
            });

     
            

        });
    }

}

function setName(){
    if(!document.querySelector("#name").value) return;
    window.contract.setName(document.querySelector("#name").value).send().then(res => {
        console.log(res);
        alert("Name sent successfully");
        contract.greetings().call().then( res => {
            console.log(res);
            document.getElementById("greetings").innerHTML = res;
        });
    }).catch( err => {
        console.log(err);
        alert("Error tryinig set name");
    });
  }