import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, "Informe o nome completo"),
  age: z.string().min(1, "Informe a idade"),
  height: z.string().min(1, "Informe a altura"),
  weight: z.string().min(1, "Informe o peso"),
  gender: z.enum(["masculino", "feminino"]),
  goal: z.string(),
  level: z.string(),
  foods: z.string().optional(),
  meals: z.string().optional(),
  workoutSplit: z.string().optional(),
  experience: z.string().optional(),
  workoutDuration: z.string().optional(),
  limitations: z.string().optional(),
  extraActivities: z.string().optional(),
});

export type FormularioData = z.infer<typeof schema>;

interface FormularioFichaProps {
  tipoFicha: string;
  formData: (dados: FormularioData) => void;
}

function FormularioFicha({ tipoFicha, formData }: FormularioFichaProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormularioData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormularioData) => {
    formData(data);
  };

  return (
    <div className="w-6xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {(tipoFicha === "nutricao" || tipoFicha === "completo" || tipoFicha === "exercicios") && (
          <>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Nome:</label>
              <input {...register("name")} className="w-full border rounded px-3 py-2" placeholder="Ex: Maria Silva" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Peso:</label>
              <input type="number" {...register("weight")} className="w-full border rounded px-3 py-2" placeholder="Peso (kg)" />
              {errors.weight && <p className="text-red-500 text-sm">{errors.weight.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Altura:</label>
              <input type="number" {...register("height")} className="w-full border rounded px-3 py-2" placeholder="Altura (cm)" />
              {errors.height && <p className="text-red-500 text-sm">{errors.height.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Idade:</label>
              <input type="number" {...register("age")} className="w-full border rounded px-3 py-2" placeholder="Idade" />
              {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Sexo:</label>
              <select {...register("gender")} className="w-full border rounded px-3 py-2">
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Nível de atividade física:</label>
              <select {...register("level")} className="w-full border rounded px-3 py-2">
                <option value="sedentario">🏋️‍♂️ Sedentário</option>
                <option value="leve">🚶‍♂️ Leve</option>
                <option value="moderado">🏋️ Moderado</option>
                <option value="intenso">🏃‍♂️ Intenso</option>
                <option value="atleta">🥇 Atleta</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Objetivo:</label>
              <select {...register("goal")} className="w-full border rounded px-3 py-2">
                <option value="emagrecer">Emagrecer</option>
                <option value="definicao">Definição</option>
                <option value="hipertrofia">Hipertrofia</option>
                <option value="hipertrofia+definicao">Hipertrofia + Definição</option>
              </select>
            </div>
          </>
        )}

        {(tipoFicha === "nutricao" || tipoFicha === "completo") && (
          <>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Alimentos de preferência:</label>
              <input {...register("foods")} className="w-full border rounded px-3 py-2" placeholder="Frango, ovo e etc..." />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Refeições por dia:</label>
              <select {...register("meals")} className="w-full border rounded px-3 py-2">
                <option value="3">3 refeições</option>
                <option value="4">4 refeições</option>
                <option value="5">5 refeições</option>
                <option value="6">6 refeições</option>
                <option value="7">7 refeições</option>
              </select>
            </div>
          </>
        )}

        {(tipoFicha === "exercicios" || tipoFicha === "completo") && (
          <>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Divisão de treino:</label>
              <select {...register("workoutSplit")} className="w-full border rounded px-3 py-2">
                <option value={"fullbody"}>Full Body (Corpo inteiro)</option>
                <option value={"AB"}>AB</option>
                <option value={"ABC"}>ABC</option>
                <option value={"ABCD"}>ABCD</option>
                <option value={"ABCDE"}>ABCDE (Divisão de 5 dias)</option>
                <option value={"pushPullLegs"}>Push / Pull / Legs</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Experiência com treino:</label>
              <select {...register("experience")} className="w-full border rounded px-3 py-2">
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
                <option value="retornando">Retornando</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Tempo por treino:</label>
              <select {...register("workoutDuration")} className="w-full border rounded px-3 py-2">
                <option value="30">30 min</option>
                <option value="45">45 min</option>
                <option value="60">1 hora</option>
                <option value="90">1h30</option>
                <option value="semLimite">Sem limite</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Limitações físicas:</label>
              <select {...register("limitations")} className="w-full border rounded px-3 py-2">
                <option value="nenhuma">Nenhuma</option>
                <option value="joelho">Joelho</option>
                <option value="coluna">Coluna</option>
                <option value="ombro">Ombro</option>
                <option value="outros">Outros</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Atividades extras:</label>
              <select {...register("extraActivities")} className="w-full border rounded px-3 py-2">
                <option value="nenhuma">Nenhuma</option>
                <option value="futebol">Futebol</option>
                <option value="corrida">Corrida</option>
                <option value="pilates">Pilates</option>
                <option value="luta">Luta</option>
                <option value="outros">Outros</option>
              </select>
            </div>
          </>
        )}

        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded">
          Gerar Ficha
        </button>
      </form>
    </div>
  );
}

export default FormularioFicha;
