import { NavLink } from "react-router-dom";
import banner from "../../assets/Banner.jpg";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative text-white px-6 py-20 overflow-hidden">
        <img
          src={banner}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />

        <div className="absolute inset-0 bg-gradient-to-l from-green-200/10 via-green-600/30 to-green-900/80" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Transforme seu corpo e<br />
              sua saúde usando IA!
            </h1>
            <p className="text-lg text-white/90">
              Planos personalizados de nutrição e treino utilizando inteligência
              artificial para resultados reais e duradouros.
            </p>
            <div className="flex gap-4">
              <NavLink to={"/generator"}>
                <button className="bg-white text-green-600 font-bold py-2 px-4 rounded-md shadow-md hover:bg-gray-100 cursor-pointer">
                  Começar Agora
                </button>
              </NavLink>
              <NavLink to={"/learn-more"}>
                <button className="border-2 border-white text-white font-bold py-2 px-4 rounded-md hover:bg-white hover:text-green-600 transition cursor-pointer">
                  Saiba Mais
                </button>
              </NavLink>
            </div>
          </div>
          <div className="md:w-1/3 mt-10 md:mt-0">
          </div>
        </div>
      </section>

      <section className="bg-white text-center px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Por que Utilizar a NutriFit?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Nossa abordagem integrada de nutrição e exercícios físicos é baseada
          em ciência e personalizada para suas necessidades específicas.
        </p>
      </section>
    </div>
  );
}

export default Home;
