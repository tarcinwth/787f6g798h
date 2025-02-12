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

const createIcon = (Icon: typeof Droplet) => (
  <Icon className="w-8 h-8 text-secondary-light dark:text-secondary-dark" />
);

export const SERVICES: ServiceItem[] = [
  {
    icon: createIcon(Droplet),
    title: "Combustível de Qualidade",
    desc: "Gasolina, Etanol e Diesel S10 de alta qualidade e procedência garantida.",
  },
  {
    icon: createIcon(Store),
    title: "Loja de Conveniência",
    desc: "Produtos variados para seu conforto, disponíveis 24 horas.",
  },
  {
    icon: createIcon(Gauge),
    title: "Calibragem de Pneus",
    desc: "Serviço gratuito de calibragem para sua segurança.",
  },
  {
    icon: createIcon(Car),
    title: "Troca de Óleo",
    desc: "Serviço profissional com produtos de primeira linha.",
  },
  {
    icon: createIcon(Coffee),
    title: "Café da Manhã",
    desc: "Deliciosas opções para começar bem o dia.",
  },
  {
    icon: createIcon(CreditCard),
    title: "Formas de Pagamento",
    desc: "Aceitamos dinheiro, cartões e PIX.",
  },
  {
    icon: createIcon(Clock),
    title: "Atendimento 24h",
    desc: "Sempre aberto para melhor atender você.",
  },
  {
    icon: createIcon(Fuel),
    title: "Diesel S10",
    desc: "Combustível de alta performance para seu veículo.",
  },
];
