import { Facebook, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#7901FA] to-[#FA78D9] text-white overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute -right-40 top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -left-40 bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterAbout />
          <FooterLinks />
          <FooterHours />
          <FooterSocial />
        </div>

        <div className="relative border-t border-white/10 mt-12 pt-8 text-center space-y-2">
          <p className="text-white/60 hover:text-white/80 transition-colors">
            &copy; {new Date().getFullYear()} Posto Catitú. Todos os direitos
            reservados.
          </p>
          <p className="text-white/60">
            Feito com <span className="text-red-500">❤️</span> por{" "}
            <a
              href="https://www.instagram.com/jovemtata_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FAB432] hover:text-white transition-colors duration-300"
            >
              Wota
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterAbout() {
  return (
    <div className="relative group">
      <h3 className="font-['Montserrat'] text-xl font-bold mb-4 group-hover:text-[#FAB432] transition-colors">
        Sobre Nós
      </h3>
      <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
        Há 5 anos oferecendo serviços de qualidade e atendimento excepcional
        para nossos clientes em Amargosa.
      </p>
    </div>
  );
}

function FooterLinks() {
  const links = [
    { href: "#", text: "Início" },
    { href: "#", text: "Serviços" },
    { href: "#", text: "Sobre Nós" },
    { href: "#", text: "Contato" },
  ];

  return (
    <div>
      <h3 className="font-['Montserrat'] text-xl font-bold mb-4">
        Links Rápidos
      </h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-white/80 hover:text-[#FAB432] transition-colors relative group"
            >
              <span className="relative">
                {link.text}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#FAB432] group-hover:w-full transition-all duration-300" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterHours() {
  return (
    <div className="group">
      <h3 className="font-['Montserrat'] text-xl font-bold mb-4 group-hover:text-[#FAB432] transition-colors">
        Horário
      </h3>
      <div className="space-y-4">
        <div className="group/item">
          <p className="text-white/80 group-hover/item:text-white transition-colors">
            Segunda a Domingo
          </p>
          <p className="font-semibold text-[#FAB432]">24 horas</p>
        </div>
        <div className="group/item">
          <p className="text-white/80 group-hover/item:text-white transition-colors">
            Feriados
          </p>
          <p className="font-semibold text-[#FAB432]">Aberto normalmente</p>
        </div>
      </div>
    </div>
  );
}

function FooterSocial() {
  const socialLinks = [
    {
      href: "https://www.facebook.com/elma.rodrigues.5",
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
    },
    {
      href: "https://www.instagram.com/posto_catitu/",
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
    },
    {
      href: "mailto:postocatitu@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      name: "Email",
    },
  ];

  return (
    <div>
      <h3 className="font-['Montserrat'] text-xl font-bold mb-4">
        Redes Sociais
      </h3>
      <div className="flex gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="bg-white/10 p-2 rounded-full hover:bg-[#FA4534] hover:scale-110 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Siga-nos no ${link.name}`}
          >
            <div className="transform group-hover:rotate-12 transition-transform duration-300">
              {link.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
