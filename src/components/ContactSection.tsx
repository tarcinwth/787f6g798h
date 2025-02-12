import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="location"
      className="relative py-20 bg-gradient-to-br from-white to-[#91A1FA]/10 overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute -right-40 top-20 w-80 h-80 bg-[#FA4534]/5 rounded-full blur-3xl" />
        <div className="absolute -left-40 bottom-20 w-80 h-80 bg-[#FAB432]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="relative inline-block font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#7901FA]">
            Localização e Contato
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FA4534] to-[#FAB432]" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mapa com efeito de borda */}
          <div className="group relative bg-white rounded-xl shadow-lg transition-all duration-500 hover:-translate-y-1">
            {/* Borda gradiente animada */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FA4534] to-[#FAB432] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />

            <div className="relative bg-white rounded-xl h-[400px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.160399496156!2d-39.588833924922405!3d-13.035914387285375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73fdd27ae190459%3A0x245ccc47bbfe0d31!2sPosto%20Catit%C3%BA!5e1!3m2!1spt-BR!2sbr!4v1738858126948!5m2!1spt-BR!2sbr"
                className="w-full h-full rounded-xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Posto Catitú"
                allowFullScreen
              />
            </div>
          </div>

          {/* Cards de informações de contato */}
          <div className="flex flex-col justify-center space-y-4">
            {[
              {
                icon: <MapPin className="w-6 h-6 text-[#7901FA]" />,
                title: "Endereço",
                content:
                  "R. Idalina Figueredo Batista, 406 - Amargosa, BA, 45300-000",
              },
              {
                icon: <Phone className="w-6 h-6 text-[#7901FA]" />,
                title: "Telefone",
                content: "(75) 9 9204-1400",
              },
              {
                icon: <Mail className="w-6 h-6 text-[#7901FA]" />,
                title: "Email",
                content: "postocatitu@gmail.com",
              },
              {
                icon: <Clock className="w-6 h-6 text-[#7901FA]" />,
                title: "Horário",
                content: "24 horas, todos os dias",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradiente de fundo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FA4534]/5 to-[#FAB432]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-center gap-4">
                  <div className="bg-[#7901FA]/10 p-3 rounded-full group-hover:bg-[#7901FA]/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-['Montserrat'] font-semibold text-[#7901FA] group-hover:text-[#FA4534] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
