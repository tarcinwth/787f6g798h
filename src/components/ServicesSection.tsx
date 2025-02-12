import { LucideIcon } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FA4534]/5 to-transparent" />
      <div className="absolute -right-40 top-0 w-80 h-80 bg-[#FAB432]/10 rounded-full blur-3xl" />
      <div className="absolute -left-40 bottom-0 w-80 h-80 bg-[#FA4534]/10 rounded-full blur-3xl" />

      {/* Linhas decorativas */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#FA4534] to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#FA4534] to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="relative inline-block font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            <span className="relative z-10">Nossos Serviços</span>
            {/* Decoração do título */}
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-[#FA4534]/20 to-[#FAB432]/20 -skew-x-12" />
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Oferecemos serviços completos para seu veículo com a qualidade que
            você merece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradiente de fundo animado */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FA4534]/5 via-[#FAB432]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Círculo decorativo */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-[#FA4534]/10 to-[#FAB432]/10 rounded-full transform group-hover:scale-150 transition-transform duration-500" />

              <div className="relative p-8">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#FA4534]/10 to-[#FAB432]/10 group-hover:from-[#FA4534]/20 group-hover:to-[#FAB432]/20 transition-colors duration-300">
                    <div className="text-[#FA4534] group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-['Montserrat'] text-xl font-semibold text-[#1A1A1A] group-hover:text-[#FA4534] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Linha decorativa inferior */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FA4534] to-[#FAB432] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
