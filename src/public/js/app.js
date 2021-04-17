document.getElementById("my-account").innerHTML = window.tronWeb.defaultAddress.base58;

window.tronWeb.contract().at("TDKDBN394c4QShXpn8A74UcB4HHWXRx3hk").then(result => {
    init(result);
  });

  function init(contract){

    contract.setName("Yonatan").send().then(res => {
        console.log(res);
        alert("Name sent successfully");

        contract.greetings().call().then( res => {
            console.log(res);
            //document.getElementById("greetings").innerHTML = contract.greetings();
        });

    }).catch( err => {
        console.log(err);
        alert("Error tryinig set name");
    });



    

  }





