import MenuIcon from "../components/icons/Menu";
import { useMenuStore } from "../store/useMenu";

const Projects = () => {
  const toggleMenu = useMenuStore((state) => state.toggleMenu);
  return (
    <div className="bg-slate-100 about-page min-h-screen">
      <div className="section px-8 md:px-24 py-4 lg:py-10 container mx-auto">
        <header className="mb-8 relative z-10">
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            My Projects
          </h4>
          <MenuIcon
            onClick={toggleMenu}
            className="w-6 h-6 lg:w-7 lg:h-7 absolute right-0 bottom-2 lg:bottom-3 text-primary hover:text-primary-600 transition-all cursor-pointer"
          ></MenuIcon>
        </header>
        <section className="projects-section">Hello</section>
      </div>
    </div>
  );
};

export default Projects;
