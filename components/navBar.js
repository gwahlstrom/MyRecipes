import styles from "./navBar.module.css";

export default function NavBar() {
  return (
    <>
      <div className={styles.container}>
        <div className="navBarContainer">
          <h1>My Recipes</h1>
        </div>
      </div>
    </>
  );
}
