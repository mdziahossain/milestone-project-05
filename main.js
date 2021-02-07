function loadData() {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")  
  .then(res => res.json())
  .then(data => { 
    // console.log(data);
    const meals = data.meals;
    displayMeals(meals)
  });
}
  

function displayMeals(data) {
  console.log(data);
  const mealsDiv = document.getElementById("meals");

  for (let i = 0; i < data.length; i++) {
    const meal = data[i];
      console.log(meal.strMeal);
      const mealDiv = document.createElement('div');
      mealDiv.className = "meal-box";

      const mealInfo = `
      <img class="meal-img" src="${meal.strMealThumb}" />
      <h5 class="meal-name">${meal.strMeal}</h5>
      <button onclick="mealDetails()">Details</button>
      `;
      
      mealDiv.innerHTML = mealInfo;
      mealsDiv.appendChild(mealDiv);
  }
}

const mealDetails = details => {
  // console.log(details);
}

loadData();