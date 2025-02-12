import { Facebook, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/images/logo.png"
            alt="Logo Posto Catitú"
            className="w-[120px] h-[120px] mb-4"
          />
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Posto Catitú. Todos os direitos
            reservados.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs mt-2 text-center">
            Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/lucasdesena/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7901FA] dark:text-[#9B4DFF] hover:underline"
            >
              Lucas de Sena
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
            className="group bg-white/10 p-3 rounded-full hover:bg-gradient-to-r hover:from-[#FA4534] hover:to-[#FAB432] hover:scale-110 transition-all duration-300"
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
