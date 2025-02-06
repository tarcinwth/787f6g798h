import { Facebook, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#7901FA] to-[#FA78D9] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterAbout />
          <FooterLinks />
          <FooterHours />
          <FooterSocial />
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Posto Catitú. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterAbout() {
  return (
    <div>
      <h3 className="font-['Montserrat'] text-xl font-bold mb-4">Sobre Nós</h3>
      <p className="text-white/80 leading-relaxed">
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
              className="text-white/80 hover:text-white transition-colors"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterHours() {
  return (
    <div>
      <h3 className="font-['Montserrat'] text-xl font-bold mb-4">Horário</h3>
      <p className="text-white/80">Segunda a Domingo</p>
      <p className="font-semibold">24 horas</p>
      <div className="mt-4">
        <p className="text-white/80">Feriados</p>
        <p className="font-semibold">Aberto normalmente</p>
      </div>
    </div>
  );
}

function FooterSocial() {
  const socialLinks = [
    {
      href: "https://www.facebook.com/elma.rodrigues.5",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      href: "https://www.instagram.com/posto_catitu/",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      href: "mailto:postocatitu@gmail.com",
      icon: <Mail className="w-5 h-5" />,
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
            className="bg-white/10 p-2 rounded-full hover:bg-[#FA4534] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
