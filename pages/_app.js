import Layout from "@/components/layout";
import NavBar from "@/components/navBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar></NavBar>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
