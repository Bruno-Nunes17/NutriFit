export default function LearnMore() {
    return (
        <div className="min-h-screen bg-white text-gray-800 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Saiba Mais</h1>


                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">O que é o NutriFit?</h2>
                    <p className="text-lg leading-relaxed">
                        O <strong>NutriFit</strong> é uma aplicação gratuita que ajuda você a gerar um plano alimentar e uma ficha de treino totalmente personalizados com base nos seus dados e objetivos.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Principais funcionalidades</h2>
                    <ul className="list-disc list-inside text-lg space-y-2">
                        <li>📋 Geração de fichas de treino personalizadas por frequência e objetivo</li>
                        <li>🍎 Recomendação calórica com base na TMB (Taxa Metabólica Basal)</li>
                        <li>📄 Exportação em PDF das fichas e plano alimentar</li>
                        <li>🧠 Interface simples e intuitiva, sem necessidade de cadastro</li>
                    </ul>
                </section>


                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Por que usar o NutriFit?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-100 p-4 rounded shadow">
                            <h3 className="font-bold text-lg">Praticidade</h3>
                            <p>Você preenche um formulário simples e recebe uma ficha pronta.</p>
                        </div>
                        <div className="bg-green-100 p-4 rounded shadow">
                            <h3 className="font-bold text-lg">Personalização</h3>
                            <p>Os treinos e dietas são gerados conforme seu perfil e objetivos.</p>
                        </div>
                        <div className="bg-yellow-100 p-4 rounded shadow">
                            <h3 className="font-bold text-lg">Acessibilidade</h3>
                            <p>Não exige login, funciona direto no navegador e é gratuito.</p>
                        </div>
                        <div className="bg-red-100 p-4 rounded shadow">
                            <h3 className="font-bold text-lg">Resultados</h3>
                            <p>Tenha um plano de ação claro para alcançar sua meta mais rápido.</p>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
}
