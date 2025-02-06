interface AboutSectionProps {
  imagemSobre: string;
}

export function AboutSection({ imagemSobre }: AboutSectionProps) {
  return (
    <section className="py-20 bg-[#7901FA]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-white">
            <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold mb-8">
              Sobre Nós
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Estamos localizados entre Amargosa e Mutuípe e orgulhamo-nos de
              servir nossa comunidade com dedicação e confiança. Uma empresa
              nascida em Amargosa, com amor pelo povo desta cidade, que carrega
              o nome de um grande personagem do bairro: Rodão, conhecido como
              Seu Catitú!
            </p>
            <p className="text-white/90 text-lg leading-relaxed mt-4">
              Venha nos conhecer, estamos aguardando a sua visita.
            </p>
          </div>
          <div className="relative">
            <img
              src={imagemSobre}
              alt="Posto Catitú"
              className="rounded-xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#7901FA]/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
