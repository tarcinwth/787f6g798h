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

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
        >
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Sobre o Posto Catitú
            </h2>
            <p className="text-white/90 leading-relaxed">
              Há mais de 5 anos servindo nossos clientes com excelência e
              qualidade. Oferecemos os melhores produtos e serviços para seu
              veículo.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FAB432]/20 to-[#FA4534]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative overflow-hidden rounded-xl">
              <img
                src={imagemSobre}
                alt="Posto Catitú"
                className="w-full h-full object-cover rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
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
