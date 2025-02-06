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
    <section className="py-20 bg-gradient-to-br from-white to-[#91A1FA]/10">
      <div className="container mx-auto px-4">
        <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold text-center text-[#7901FA] mb-12">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white/50 backdrop-blur p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#91A1FA]/20 hover:border-[#91A1FA]/50"
            >
              <div className="flex items-center gap-4">
                <div className="text-[#7901FA] group-hover:text-[#FA4534] transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-['Montserrat'] text-xl font-semibold text-[#7901FA]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
