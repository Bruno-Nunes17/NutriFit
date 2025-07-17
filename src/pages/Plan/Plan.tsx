import { useLocation } from "react-router-dom";
import NutritionPlan from "../../components/PlanComponent/NutritionPlan";
import PlanComponent from "../../components/PlanComponent/PlanComponent";


const PlanPage = () => {

    const { state } = useLocation();

    return (
        <>
            {(state.tipoFicha === "exercicios" || state.tipoFicha === "completo") && (
                <PlanComponent title="🔥 Treino Personalizado" plano={state.data || state.training} />
            )}
            {(state.tipoFicha === "nutricao" || state.tipoFicha === "completo") && (
                <NutritionPlan title="🥗 Plano Alimentar Diário" plano={state.data || state.nutrition} />
            )}
        </>
    );
};

export default PlanPage;
