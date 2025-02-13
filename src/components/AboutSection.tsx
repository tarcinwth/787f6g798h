import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Award, ThumbsUp, Users, Clock } from "lucide-react";

interface AboutSectionProps {
  imagemSobre: string;
}

export function AboutSection({ imagemSobre }: AboutSectionProps) {
  const { ref, isInView } = useInView();

  const stats = [
    {
      icon: <Award className="w-8 h-8 text-[#7901FA]" />,
      value: "5+",
      label: "Anos de Experiência",
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-[#7901FA]" />,
      value: "10k+",
      label: "Clientes Satisfeitos",
    },
    {
      icon: <Users className="w-8 h-8 text-[#7901FA]" />,
      value: "20+",
      label: "Colaboradores",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#7901FA]" />,
      value: "24/7",
      label: "Atendimento",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#7901FA] to-[#FA78D9] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
        >
          <div className="text-white space-y-6">
            <h2 className="text-5xl font-bold text-center md:text-left mb-6">
              Sobre o Posto Catitú
            </h2>
            <div className="space-y-4">
              <p className="text-white/90 leading-relaxed">
                Desde 2018, o Posto Catitú tem sido sinônimo de qualidade e
                confiança em Amargosa e região. Nossa história começou com um
                sonho de oferecer o melhor serviço em abastecimento e
                atendimento aos nossos clientes.
              </p>
              <p className="text-white/90 leading-relaxed">
                Localizado na <span className="font-bold">R. Idalina Figueredo Batista, 406 - Amargosa, BA</span>,
                nos tornamos um ponto de referência para motoristas locais e
                viajantes.
              </p>
              <p className="text-white/90 leading-relaxed">
                Trabalhamos com os melhores fornecedores do mercado, garantindo
                combustível de alta qualidade e serviços que vão além do
                abastecimento. 
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-white/10 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                >
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FAB432]/20 to-[#FA4534]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105">
              <img
                src={imagemSobre}
                alt="Posto Catitú"
                className="w-full h-full object-cover rounded-xl transition-all duration-500 hover:shadow-2xl"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-[#7901FA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
