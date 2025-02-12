import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { InteractiveMap } from "./InteractiveMap";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

export function ContactSection() {
  const { ref, isInView } = useInView();

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
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-center font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#7901FA] mb-12">
            Entre em Contato
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#FA4534]/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-[#FA4534]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Telefone</h3>
                  <p className="text-gray-600">(75) 99204-1400</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#FAB432]/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-[#FAB432]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">contato@postocatitu.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#7901FA]/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-[#7901FA]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Endereço</h3>
                  <p className="text-gray-600">BR 116, KM 486 - Amargosa, BA</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <InteractiveMap />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
