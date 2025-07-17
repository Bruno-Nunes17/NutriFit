import { NavLink } from "react-router-dom";
import icon from "../../assets/nutrifit.png"
function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 shadow">
        <NavLink to={"/"}>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={icon} alt="icone"  className="w-10"/>

            <span className="text-xl font-semibold text-green-600">
            NutriFit
            </span>

          </div>
        </NavLink>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700"></nav>
        <NavLink to={"/generator"}>
          <button className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-600 cursor-pointer">
            Começar Agora
          </button>
        </NavLink>
      </header>
    </>
  );
}

export default Header;
