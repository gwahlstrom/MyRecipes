import styles from "./navBar.module.css";

export default function NavBar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navBarContainer}>
          <h1 className={styles.h1}>My Recipes</h1>
        </div>
      </div>
    </>
  );
}
