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
    icon: <Droplet className={`w-8 h-8 text-[${COLORS.secondary.light}]`} />,
    title: "Combustível de Qualidade",
    desc: "Gasolina, Etanol e Diesel S10 de alta qualidade e procedência garantida.",
  },
  // ... outros serviços
];
