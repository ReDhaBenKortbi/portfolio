import { FC } from "react";
import Header from "./components/header/Header";
import MobileNavSide from "./components/header/mobile_navside/MobileNavSide";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

export const App: FC = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Header />
        {/* Page content here */}
        {/* {<Outlet />} */}
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>

      {/*Drawer side */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <MobileNavSide />
      </div>
    </div>
  );
};
