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
            <button type="button" onclick="fillData(${food.id})" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Edit product</button>
            <button type="button" class="btn btn-danger" onclick="deleteFOOD(${food.id})">Delete product</button>
            </div>
        </div>
        `;
      });
  containerList.innerHTML = resultHtml;
  }

const addFood = () => {
  const FoodFormID=document.getElementById("food-id").value;
  const FoodFormName=document.getElementById("food-name").value;
  const FoodFormPrice=document.getElementById("food-price").value;
  const FoodFormURL=document.getElementById("food-url").value;
    
  fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food`, {
    method: 'POST',
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

const fillData = (foodID) => {
  const food=foods.find(food => food.id === foodID)
  const FoodFormID1=document.getElementById("food-id1");
  const FoodFormName1=document.getElementById("food-name1");
  const FoodFormPrice1=document.getElementById("food-price1");
  const FoodFormURL1=document.getElementById("food-url1");
    
    FoodFormID1.value=food.id;
    FoodFormName1.value=food.name;
    FoodFormPrice1.value=food.price;
    FoodFormURL1.value=food.imageUrl;
}

const putFood=()=>{
  FoodFormID1=document.getElementById("food-id1").value;
  FoodFormName1=document.getElementById("food-name1").value;
  FoodFormPrice1=document.getElementById("food-price1").value;
  FoodFormURL1=document.getElementById("food-url1").value;

  fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food`, {
    method: 'PUT',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify({

      id: FoodFormID1,
      name: FoodFormName1,
      price: FoodFormPrice1,
      imageUrl: FoodFormURL1

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



