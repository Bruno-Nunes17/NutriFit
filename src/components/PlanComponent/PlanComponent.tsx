import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export type Exercise = {
    name: string;
    sets: number;
    reps: string;
};

export type WorkoutPlan = {
    title: string;
    exercises: Exercise[];
};

export type Plano = {
    nome: string;
    sexo: string;
    idade: number;
    altura: number;
    peso: number;
    objetivo: string;
    workoutPlan?: WorkoutPlan[];
};

interface PlanComponentProps {
    plano: Plano;
    title: string;
}

const PlanComponent: React.FC<PlanComponentProps> = ({ title, plano }) => {
    const pdfRef = useRef<HTMLDivElement>(null);
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

    const renderWorkOutSection = (title: string, data: Exercise[]) => (
        <section key={title} style={{ marginBottom: "40px" }}>
            <h2
                style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#047857",
                    marginBottom: "12px",
                }}
            >
                {title}
            </h2>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "16px",
                }}
            >
                {data.map((ex, i) => (
                    <div
                        key={i}
                        style={{
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #D1D5DB",
                            borderRadius: "8px",
                            padding: "16px",
                            textAlign: "center",
                        }}
                    >
                        <p
                            style={{ fontWeight: 600, color: "#374151", fontSize: "16px" }}
                        >
                            {ex.name}
                        </p>
                        <p style={{ color: "#6B7280", fontSize: "14px" }}>
                            Séries: {ex.sets}
                        </p>
                        <p style={{ color: "#6B7280", fontSize: "14px" }}>
                            Repetições: {ex.reps}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );

    const handleDownload = async () => {
        if (!pdfRef.current) {
            return;
        }

        setIsGeneratingPdf(true);

        await new Promise((resolve) => setTimeout(resolve, 100));

        try {
            const canvas = await html2canvas(pdfRef.current, {
                scale: 3,
                useCORS: true,
            });

            const imgData = canvas.toDataURL("image/jpeg", 1.0);

            const pdfWidth = 595.28;
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "pt",
                format: [pdfWidth, pdfHeight],
            });

            pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("plano-de-treino.pdf");
        } catch (error) {
            console.error("Erro ao gerar o PDF:", error);
        }

        setIsGeneratingPdf(false);
    };

    return (
        <div
            style={{
                backgroundColor: "#ECFDF5",
                padding: "40px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div
                ref={pdfRef}
                style={{
                    width: isGeneratingPdf ? "794px" : "100%",
                    maxWidth: isGeneratingPdf ? undefined : "794px",
                    padding: "30px",
                    backgroundColor: "#f0fdf4",
                    boxSizing: "border-box",
                    transition: "width 0.3s ease",
                }}
            >
                <div style={{ marginBottom: "40px" }}>
                    <h2
                        style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            color: "#065F46",
                            marginBottom: "16px",
                        }}
                    >
                        Informações Pessoais
                    </h2>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "16px",
                            color: "#064E3B",
                            fontSize: "14px",
                        }}
                    >
                        <div>
                            <strong>Nome completo:</strong> {plano.nome}
                        </div>
                        <div>
                            <strong>Sexo:</strong> {plano.sexo}
                        </div>
                        <div>
                            <strong>Peso:</strong> {plano.peso} kg
                        </div>
                        <div>
                            <strong>Altura:</strong> {plano.altura} cm
                        </div>
                        <div>
                            <strong>Idade:</strong> {plano.idade} anos
                        </div>
                        <div style={{ gridColumn: "span 2" }}>
                            <strong>Objetivo:</strong> {plano.objetivo}
                        </div>
                    </div>
                </div>

                <div>
                    <h1
                        style={{
                            fontSize: "28px",
                            fontWeight: 800,
                            color: "#065F46",
                            textAlign: "center",
                            marginBottom: "32px",
                        }}
                    >
                        {title}
                    </h1>
                    {plano.workoutPlan?.map((workout) =>
                        renderWorkOutSection(workout.title, workout.exercises)
                    )}
                </div>
            </div>

            <div style={{ marginTop: "40px" }}>
                <button
                    onClick={handleDownload}
                    type="button"
                    style={{
                        backgroundColor: "#047857",
                        color: "#FFFFFF",
                        fontWeight: 600,
                        padding: "12px 24px",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    📄 Baixar Plano de Treino
                </button>
            </div>
        </div>
    );
};

export default PlanComponent;
