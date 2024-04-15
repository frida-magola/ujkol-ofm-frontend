import { NavBar } from "./Navigations";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <main className="text-ujkol-text">
      {/* NAVIGATION */}
      <NavBar />
      {props.children}
      {/* FOOTER */}
      <Footer />
    </main>
  );
}
