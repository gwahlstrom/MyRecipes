import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { getAllRecipes } from "@/utils/recipeUtils";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>My Recipes</title>
        <meta name="description" content="Welcome to my recipes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="recipesHead">
          <h1>Recipes</h1>
        </div>
        <div className="cardContainer">
          {props.recipes?.length &&
            props.recipes.map((r) => (
              <>
                <div className="card">
                  <li key={r.id}>
                    <Link href={`/recipe/${r.id}`}>{r.title}</Link>
                  </li>
                </div>
              </>
            ))}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      recipes: getAllRecipes(),
    }, // will be passed to the page component as props
  };
}
