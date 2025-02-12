import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

interface AboutSectionProps {
  imagemSobre: string;
}

export function AboutSection({ imagemSobre }: AboutSectionProps) {
  const { ref, isInView } = useInView();

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#7901FA] to-[#FA78D9] overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/10 to-transparent" />

        {/* Padrão de hexágonos ou linhas */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-px h-full bg-white transform -skew-x-12" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-white transform skew-x-12" />
          <div className="absolute top-1/4 left-0 w-full h-px bg-white transform -skew-y-12" />
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-white transform skew-y-12" />
        </div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-white relative">
            {/* Elemento decorativo do título */}
            <div className="absolute -left-4 -top-4 w-12 h-12 bg-white/10 rounded-full blur-xl" />

            <h2 className="relative font-['Montserrat'] text-3xl md:text-4xl font-bold mb-8">
              Sobre Nós
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-[#FAB432]" />
            </h2>

            <div className="space-y-6">
              <p className="text-white/90 text-lg leading-relaxed">
                Estamos localizados entre Amargosa e Mutuípe e orgulhamo-nos de
                servir nossa comunidade com dedicação e confiança. Uma empresa
                nascida em Amargosa, com amor pelo povo desta cidade, que
                carrega o nome de um grande personagem do bairro: Rodão,
                conhecido como Seu Catitú!
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                Venha nos conhecer, estamos aguardando a sua visita.
              </p>
            </div>

            {/* Estatísticas ou destaques */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors duration-300">
                <div className="font-['Montserrat'] text-3xl font-bold text-[#FAB432]">
                  5+
                </div>
                <div className="text-white/80 text-sm">Anos de História</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors duration-300">
                <div className="font-['Montserrat'] text-3xl font-bold text-[#FAB432]">
                  24h
                </div>
                <div className="text-white/80 text-sm">Atendimento</div>
              </div>
            </div>
          </div>

          <div className="relative group">
            {/* Moldura decorativa */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FAB432]/20 to-[#FA4534]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Container da imagem com efeito parallax */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={imagemSobre}
                alt="Posto Catitú"
                className="w-full h-full object-cover rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7901FA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Borda brilhante */}
              <div className="absolute inset-0 border border-white/10 rounded-xl" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
