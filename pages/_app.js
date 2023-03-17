import NavBar from "@/components/navBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </>
  );
}
