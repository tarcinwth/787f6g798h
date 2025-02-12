import {
  Droplet,
  Fuel,
  Store,
  Gauge,
  Car,
  Coffee,
  CreditCard,
  Clock,
} from "lucide-react";
import { COLORS } from "./theme";
import type { ServiceItem } from "../types";

export const SERVICES: ServiceItem[] = [
  {
    icon: (
      <Droplet className="w-8 h-8 text-secondary-light dark:text-secondary-dark" />
    ),
    title: "Combustível de Qualidade",
    desc: "Gasolina, Etanol e Diesel S10 de alta qualidade e procedência garantida.",
  },
  {
    icon: (
      <Store className="w-8 h-8 text-primary-light dark:text-primary-dark" />
    ),
    title: "Loja de Conveniência",
    desc: "Produtos variados para seu conforto, disponíveis 24 horas.",
  },
  {
    icon: <Gauge className="w-8 h-8 text-accent-light dark:text-accent-dark" />,
    title: "Calibragem de Pneus",
    desc: "Serviço gratuito de calibragem para sua segurança.",
  },
  {
    icon: (
      <Car className="w-8 h-8 text-tertiary-light dark:text-tertiary-dark" />
    ),
    title: "Troca de Óleo",
    desc: "Serviço profissional com produtos de primeira linha.",
  },
  {
    icon: (
      <Coffee className="w-8 h-8 text-secondary-light dark:text-secondary-dark" />
    ),
    title: "Café da Manhã",
    desc: "Deliciosas opções para começar bem o dia.",
  },
  {
    icon: (
      <CreditCard className="w-8 h-8 text-primary-light dark:text-primary-dark" />
    ),
    title: "Formas de Pagamento",
    desc: "Aceitamos dinheiro, cartões e PIX.",
  },
  {
    icon: <Clock className="w-8 h-8 text-accent-light dark:text-accent-dark" />,
    title: "Atendimento 24h",
    desc: "Sempre aberto para melhor atender você.",
  },
  {
    icon: (
      <Fuel className="w-8 h-8 text-tertiary-light dark:text-tertiary-dark" />
    ),
    title: "Diesel S10",
    desc: "Combustível de alta performance para seu veículo.",
  },
];
