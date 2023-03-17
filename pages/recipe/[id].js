import { getOneRecipe } from "@/utils/recipeUtils";
import Link from "next/link";

export default function RecipePage(props) {
  if (!props.recipe) {
    return <div>Not Found</div>;
  }

  return (
    <div>
      <div className="idContainer">
        <h1 className="idTitle">{props.recipe.title}</h1>
        <h2 className="idDescription">{props.recipe.description}</h2>.
        <div className="idIngredients">
          <h3>Ingredients</h3>
          <ul className="ulIngredients">
            {props.recipe.ingredients.map((ing) => (
              <li className="liIngredients" key={ing}>
                {ing}
              </li>
            ))}
          </ul>
        </div>
        <h3 className="idIngredients">Instructions</h3>
        <ul className="ulIngredients">
          {props.recipe.instructions.map((inst) => (
            <li className="liIngredients" key={inst}>
              {inst}
            </li>
          ))}
        </ul>
      </div>
      <div className="backToHome">
        <Link href="/">← Back to home</Link>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      recipe: getOneRecipe(context.params.id) || null,
    }, // will be passed to the page component as props
  };
}
