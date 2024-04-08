import { NavBar } from "@/components/Layout/Navigations";
import Footer from "@/components/Layout/Footer";
export default function Layout(props) {
  return (
    <main className="text-ujkol-text">
      {/* NAVIGATION */}
      <NavBar onClick={props.onClick} />
      {props.children}
      {/* FOOTER */}
      <Footer />
    </main>
  );
}
