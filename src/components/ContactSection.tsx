import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="location"
      className="py-20 bg-gradient-to-br from-white to-[#91A1FA]/10"
    >
      <div className="container mx-auto px-4">
        <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold text-center text-[#7901FA] mb-12">
          Localização e Contato
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl h-[400px] shadow-lg border border-[#91A1FA]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.160399496156!2d-39.588833924922405!3d-13.035914387285375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73fdd27ae190459%3A0x245ccc47bbfe0d31!2sPosto%20Catit%C3%BA!5e1!3m2!1spt-BR!2sbr!4v1738858126948!5m2!1spt-BR!2sbr"
              className="w-full h-full rounded-xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Posto Catitú"
              allowFullScreen
            />
          </div>
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  const contactItems = [
    {
      icon: <MapPin className="w-6 h-6 text-[#7901FA]" />,
      title: "Endereço",
      content: "R. Idalina Figueredo Batista, 406 - Amargosa, BA, 45300-000",
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
  ];

  return (
    <div className="flex flex-col justify-center">
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md border border-[#91A1FA]/20"
          >
            <div className="bg-[#7901FA]/10 p-3 rounded-full">{item.icon}</div>
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-[#7901FA]">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
