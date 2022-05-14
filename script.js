fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food')
.then(res => {
  if(!res.ok){
      throw Error('ovo je error');
  }
  return res.json();
})
.then((data) => {
  foods=data;
  renderFoods(data);
  })

  renderFoods = (foods) => {
    let containerList = document.querySelector('.container');
    let resultHtml = '';

    foods.forEach(food => {
        resultHtml += `
        
        <div class="card">
            <img src="${food.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
            <h1 class="card-title">${food.name}</h1>
            <p>Product price: ${food.price} KM</p>
            <button type="button" onclick="fillData(${food.id})" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Uredi proizvod</button>
            <button type="button" class="btn btn-danger" onclick="deleteFOOD(${food.id})">Obrisi proizvod</button>
            
            </div>
        </div>
        `;
    });
    containerList.innerHTML = resultHtml;
  }



  const fillData = (foodID) => {
    const food=foods.find(food => food.id === foodID)
    const FoodFormID=document.getElementById("food-id");
    const FoodFormName=document.getElementById("food-name");
    const FoodFormPrice=document.getElementById("food-price");
    const FoodFormURL=document.getElementById("food-url");
    
    FoodFormID.value=food.id;
    FoodFormName.value=food.name;
    FoodFormPrice.value=food.price;
    FoodFormURL.value=food.imageUrl;
    }

  const putFood=()=>{
  const FoodFormID=document.getElementById("food-id").value;
  const FoodFormName=document.getElementById("food-name").value;
  const FoodFormPrice=document.getElementById("food-price").value;
  const FoodFormURL=document.getElementById("food-url").value;

  
  fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food`, {
        method: 'PUT',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
          id: FoodFormID,
          name: FoodFormName,
          price: FoodFormPrice,
          imageUrl: FoodFormURL
        })
    })
    .then(res => {
        console.log(res);
    })
  }

  const deleteFOOD = (id) => {
    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food/${id}`, {
        method: 'DELETE'
    })
    .then(res => {
        console.log(res);
    })
}


