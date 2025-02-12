import {
  LucideIcon,
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

interface ServiceConfig {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const createIcon = (Icon: LucideIcon) => (
  <Icon className="w-8 h-8 text-secondary-light dark:text-secondary-dark" />
);

export const SERVICES: ServiceConfig[] = [
  {
    Icon: Droplet,
    title: "Combustível de Qualidade",
    desc: "Gasolina, Etanol e Diesel S10 de alta qualidade e procedência garantida.",
  },
  {
    Icon: Store,
    title: "Loja de Conveniência",
    desc: "Produtos variados para seu conforto, disponíveis 24 horas.",
  },
  {
    Icon: Gauge,
    title: "Calibragem de Pneus",
    desc: "Serviço gratuito de calibragem para sua segurança.",
  },
  {
    Icon: Car,
    title: "Troca de Óleo",
    desc: "Serviço profissional com produtos de primeira linha.",
  },
  {
    Icon: Coffee,
    title: "Café da Manhã",
    desc: "Deliciosas opções para começar bem o dia.",
  },
  {
    Icon: CreditCard,
    title: "Formas de Pagamento",
    desc: "Aceitamos dinheiro, cartões e PIX.",
  },
  {
    Icon: Clock,
    title: "Atendimento 24h",
    desc: "Sempre aberto para melhor atender você.",
  },
  {
    Icon: Fuel,
    title: "Diesel S10",
    desc: "Combustível de alta performance para seu veículo.",
  },
];
