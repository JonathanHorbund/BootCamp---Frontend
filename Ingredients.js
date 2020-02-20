import React from 'react';

const ingredientsList = [
  "2 cups all-purpose flour",
  "1/2 cup packed brown sugar",
  "1 1/2 teaspoons baking powder",
  "1 1/2 teaspoons pumpkin pie spice",
  "1/2 teaspoon salt",
  "1/4 teaspoon baking soda",
  "1 cup pumpkin puree",
  "2 eggs",
  "1/4 cup milk",
  "1/4 cup butter, softened",
  "1 1/2 cups confectioners' sugar",
  "1/4 cup butter, melted",
  "2 tablespoons water",
  "1 teaspoon vanilla extract"
]

const ingredientElements = ingredientsList.map(ingredientObject => {
  return (<li>{ingredientObject}</li>)
})

const Ingredients = () => {
  return (
    <section>
      <h1>Ingredients</h1>
      <ul>
        {ingredientElements}
      </ul>
    </section>
  )
}

export default Ingredients