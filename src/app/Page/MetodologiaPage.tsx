import { CardText } from "@/components/cardText";

export function MetodologiaPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 md:py-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--font-rosa-title)] font-bold mb-8 md:mb-12 text-center">
        Metodologia
      </h1>
      <div className="flex flex-col gap-4 md:gap-5 w-full max-w-4xl">
        <CardText 
          title="Treinar com propósito, cuidado e estratégia." 
          text="Minha metodologia é voltada para pessoas reais, com rotinas diferentes, corpos únicos e objetivos diversos — seja você iniciante, retornando à prática ou buscando evolução com segurança."
        />
        <CardText 
          title="Escuta Individualizada" 
          text="Antes de tudo, eu escuto você. Entender sua rotina, suas limitações e seu histórico é essencial para criar um plano realista, eficaz e sustentável."
        />
        <CardText 
          title="Treinos Personalizados" 
          text="Nada de treinos genéricos ou modismos. Cada pessoa recebe um programa de treino ajustado à sua realidade — respeitando tempo, condicionamento físico e objetivo (emagrecimento, fortalecimento, flexibilidade e saúde)."
        />
        <CardText 
          title="Foco em Saúde e Qualidade de Vida" 
          text="Seja no presencial, com correção técnica e motivação constante, ou online, com liberdade e suporte, você estará acompanhado(a) do início ao fim"
        />
        <CardText 
          title="Resultado com leveza e constância" 
          text="Muito além da estética, meu foco é proporcionar autonomia, disposição, prevenção de lesões e bem-estar físico e emocional."
        />
      </div>
    </div>
  );
}