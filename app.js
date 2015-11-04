const React = require('react');
const ReactDOM = require('react-dom');

const model = new falcor.Model({
  ingredientsById: {
    1: {
      name: "flour",
      description: "white and powdery"
    },
    2: {
      name: "chocolate chips",
      description: "delicious"
    }
  },
  cache: {
    recipes: [
      {
        name: "Cookies",
        instructions: "Bake them",
        ingredients: [
          { $type:"ref", value: "ingredientsById[1]" },
          { $type:"ref", value: "ingredientsById[2]" }
        ]
      },
      {
        name: "Brownies",
        instructions: "Also bake them.",
        ingredients: [
          { $type:"ref", value: "ingredientsById[1]" }
        ]
      }
    ]
  }
});

model.get('recipes[0..1].ingredients[0..9]')
  .then(data => {
    console.log(data);
  })

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('target')
);
