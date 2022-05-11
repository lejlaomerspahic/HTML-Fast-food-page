fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food')
.then(res => {
  if(!res.ok){
      throw Error('ovo je error');
  }
  return res.json();
})
.then((data) => {
      let contentWrapper = document.querySelector(".content-wrapper");
      data.forEach((food) => {
        let card = document.createElement("div");
        card.classList.add("card");


        let image = document.createElement("img");
        image.src += food.imageUrl;
        card.appendChild(image);

        let cardWrapper = document.createElement("div");
        cardWrapper.classList.add("card-body");

        let userFullName = document.createElement("p");
        userFullName.innerText = "Product ID : " + food.id;

        let userName = document.createElement("p");
        userName.innerText = "Name of the product: " + food.name;

        let userCompany = document.createElement("p");
        userCompany.innerText = "Product price: " + food.price;
        cardWrapper.appendChild(userFullName);
        cardWrapper.appendChild(userName);
        cardWrapper.appendChild(userCompany);

        card.appendChild(cardWrapper);
        contentWrapper.appendChild(card);
      });
    })
    .catch((error) => {
      alert(error);
    });



