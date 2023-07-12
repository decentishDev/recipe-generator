document.getElementById('generate-btn').addEventListener('click', function() {
    var ingredients = document.getElementById('ingredients').value;
    var recipeContent = generateRecipe(ingredients);
    displayRecipe(recipeContent);
  });
  
  function generateRecipe(ingredients) {
    // Replace this placeholder logic with the actual API call to generate a recipe
    var recipe = "Placeholder recipe generated based on ingredients:\n\n" + ingredients;
    return recipe;
  }
  
  function displayRecipe(recipeContent) {
    var recipeSection = document.getElementById('recipe-section');
    var recipeContentElement = document.getElementById('recipe-content');
    
    recipeContentElement.textContent = recipeContent;
    recipeSection.style.display = 'block';
  }

  