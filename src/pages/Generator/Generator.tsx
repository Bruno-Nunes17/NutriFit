import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormularioFicha, { type FormularioData } from "../../components/FormularioFicha/FormularioFicha";
import FichaOption from "../../components/FichaOption/FichaOption";
const apiUrl = import.meta.env.VITE_API_URL;
import axios from "axios";

function Generator() {
  const [tipoFicha, setTipoFicha] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (dados: FormularioData) => {

    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/${tipoFicha}`, dados);

      const fichaGerada = { ...response.data, tipoFicha };

      navigate("/plan-page", { state: fichaGerada });
    } catch (error) {
      console.error("Erro ao enviar os dados para a API:", error);
      alert("Erro ao gerar ficha. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-full mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Monte sua ficha personalizada
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Escolha o tipo de plano que deseja gerar com base nos seus objetivos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <FichaOption
            title="Nutrição"
            description="Plano alimentar baseado nos seus objetivos."
            selected={tipoFicha === "nutricao"}
            onClick={() => setTipoFicha("nutricao")}
          />
          <FichaOption
            title="Exercícios"
            description="Plano de treinos personalizado."
            selected={tipoFicha === "exercicios"}
            onClick={() => setTipoFicha("exercicios")}
          />
          <FichaOption
            title="Completo"
            description="Alimentação + Treinos."
            selected={tipoFicha === "completo"}
            onClick={() => setTipoFicha("completo")}
          />
        </div>
        {loading ? (
          <div className="flex justify-center items-center flex-col h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500 border-solid"></div>
            <p className="text-center text-gray-600 mt-8 mb-8">Gerando seu Plano personalizado...</p>
          </div>
        ) : (
          tipoFicha && (
            <div className="flex items-center justify-center max-w-full">
              <FormularioFicha tipoFicha={tipoFicha} formData={handleFormSubmit} />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Generator;
