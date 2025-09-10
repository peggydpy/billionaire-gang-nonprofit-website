import NavBar from "../components/NavBar";

export default function MyApp({ Component, pageProps }) {
  return (
    <div style={{minHeight: "100vh", background: "#fff", color: "#111"}}>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
