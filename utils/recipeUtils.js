const recipes = [
  {
    id: 0,
    title: "Classic Spaghetti Bolognese",
    description:
      "A classic Italian dish featuring spaghetti in a rich tomato sauce with ground beef and vegetables.",
    ingredients: [
      "1 lb spaghetti",
      "1 lb ground beef",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 can (28 oz) crushed tomatoes",
      "1 carrot, chopped",
      "1 stalk celery, chopped",
      "1 tbsp olive oil",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "1/2 tsp dried oregano",
      "1/2 tsp dried basil",
    ],
    instructions: [
      "Cook spaghetti according to package instructions.",
      "In a large skillet, heat olive oil over medium-high heat.",
      "Add ground beef and cook until browned, about 5 minutes.",
      "Add onion and garlic and cook until onion is translucent, about 3 minutes.",
      "Add carrot and celery and cook until vegetables are slightly softened, about 5 minutes.",
      "Add crushed tomatoes, salt, pepper, oregano, and basil and bring to a simmer.",
      "Reduce heat to low and let simmer for 15-20 minutes, until sauce has thickened.",
      "Serve sauce over spaghetti.",
    ],
  },
  {
    id: 1,
    title: "Roasted Chicken Thighs with Vegetables",
    description:
      "Juicy and flavorful roasted chicken thighs with vegetables, perfect for a weeknight dinner.",
    ingredients: [
      "8 bone-in, skin-on chicken thighs",
      "1 lb baby potatoes, halved",
      "1 lb baby carrots",
      "1 onion, chopped",
      "4 cloves garlic, minced",
      "2 tbsp olive oil",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "1 tsp dried thyme",
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "In a large bowl, combine potatoes, carrots, onion, garlic, olive oil, salt, pepper, and thyme.",
      "Arrange chicken thighs on a baking sheet, skin side up.",
      "Pour vegetable mixture around chicken.",
      "Bake for 40-45 minutes, until chicken is cooked through and vegetables are tender.",
      "Serve chicken and vegetables immediately.",
    ],
  },
  {
    id: 2,
    title: "Vegetarian Chili",
    description: "A hearty and flavorful vegetarian chili with beans, vegetables, and spices.",
    ingredients: [
      "2 tbsp olive oil",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "2 bell peppers, chopped",
      "2 carrots, chopped",
      "1 zucchini, chopped",
      "1 can (28 oz) diced tomatoes",
      "2 cans (15 oz each) kidney beans, drained and rinsed",
      "1 can (15 oz) corn, drained",
      "2 tbsp chili powder",
      "1 tsp cumin",
      "1 tsp smoked paprika",
      "1/2 tsp salt",
      "1/4 tsp black pepper",
    ],
    instructions: [
      "In a large pot or Dutch oven, heat olive oil over medium-high heat.",
      "Add onion and garlic and cook until onion is translucent, about 3 minutes.",
      "Add bell peppers, carrots, and zucchini and cook until vegetables are slightly softened, about 5 minutes.",
      "Add diced tomatoes, kidney beans, corn, chili powder, cumin, smoked paprika, salt, and black",
    ],
  },
  {
    id: 3,
    title: "Grilled Pork Tenderloin with Orange Marmalade Glaze",
    description: "Grilled pork tenderloin topped with a tasty orange marmalade glaze.",
    ingredients: [
      "1/3 cup soy sauce (use gluten-free soy sauce for gluten-free version)",
      "1/3 cup orange marmalade",
      "1/3 cup honey",
      "1 tablepoon rice wine vinegar plus 1 teaspoon",
      "Pinch crushed red pepper flakes",
      "1 pound pork tenderloin",
      "2 scallions, thinly sliced (optional)",
      "Olive oil (for grill)",
    ],
    instructions: [
      "Make marinade: In a small saucepan, bring the soy sauce, marmalade, honey, rice wine vinegar, and red pepper flakes to a simmer over medium heat. Remove from the flame and let cool. Reserve half of the marinade for serving as a sauce with the finished tenderloin.",
      "Marinated the tenderloin: With the remaining half of the marinade, marinate the tenderloin for 1 hour.",
      "Prepare the grill: While the tenderloin is marinating, prepare your grill for high direct heat on one side, and a low heat on the other side.",
      "Sear tenderloin on all sides: Remove the tenderloin from the marinade and coat with olive oil. Place on the hot side of the grill, with the narrower end of the tenderloin more toward the cool side of the grill. As soon as the tenderloin gets grill marks on one side (a minute or two), turn it to get grill marks on another side. Continue until all sides are lightly seared.",
      "Finish on cool side of the grill: Move the tenderloin to the cool side of the grill. Cover and cook a few minutes more, until the internal temperature of the tenderloin reaches 140°F (no higher). Remove from heat.",
      "Tent with foil and let rest: If you have let the temp get too high above 140°F, you may need to slice the pork immediately or the meat will continue to cook as it rests and become overcooked. If you have taken it out in time, tent the tenderloin with foil and let it rest 10 minutes. Thinly slice, sprinkle with the remaining glaze and scallions. Serve with rice.",
    ],
  },
];

export const getOneRecipe = (id) => {
  return recipes[id];
};
export const getAllRecipes = () => {
  return recipes.map((r) => ({ id: r.id, title: r.title }));
};
