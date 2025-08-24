import { CardText } from "@/components/cardText";
import gsap from "gsap";
import { PiTarget } from "react-icons/pi";

export function MetodologiaPage() {
  // gsap.registerPlugin(ScrollTrigger,Draggable);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 md:py-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--font-rosa-title)] font-bold mb-8 md:mb-12 text-center font-sans">
        Metodologia
      </h1>
      <div className="flex flex-col gap-4 md:gap-5 w-full max-w-4xl">
        <CardText
          // Icon={<PiTarget size={32} />} 
          title="Treinar com propósito, cuidado e estratégia."
          text={
            <>
              Minha metodologia foi criada para <strong>pessoas reais com rotinas reais </strong> - inclusive aquelas que tem pouco tempo, falta de organização ou que estão tentando retornar os treinos
            </>
          }

          textAlternative={
            <>
              Aqui, não existe fórmula mágica.  Existe <strong>consistência, adaptação, planejamento estratégico,</strong> feito sob medida para seu objetivo
            </>
          }
        />
        <CardText
          title="Escuta Individualizada"
          text={
            <>
              Antes de qualquer exercicio, <strong>eu quero te ouvir.</strong>
            </>
          }

          textAlternative="Entendo sua rotina, suas limitações, seu histórico fisíco e emocional"
          textAlternative2={
            <>
              A partir disso, <strong>desenvolvo um plano de treino totalmente individualizado,</strong> que respeita seu tempo e potencializa seus resultado com segurança.
            </>
          }
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
          text="Mais do que estética, o foco é:"
          type="topic"
          topicsArray={[' Saude e bem estar físico.', 'Prevensão de lesões', 'Performance consciente', ' Qualidade de vida e Equilíbrio emocional']}
          textAlternative2={
            <>
              Você vai sentir progresso real -  <strong> sem exageros, sem pressão, sem fórmulas prontas </strong>
            </>
          }
        />
      </div>
    </div>
  );
}
