import { useTheme } from "../contexts/ThemeContext";
import { MapPin } from "lucide-react";

export function InteractiveMap() {
  const { theme } = useTheme();
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const postoLocation = {
    lat: -13.035914387285375,
    lng: -39.588833924922405,
  };

  if (!apiKey) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-800 rounded-xl">
        <p className="text-gray-500 dark:text-gray-400">
          Mapa indisponível no momento
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-[400px] rounded-xl overflow-hidden">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Posto+Catitú,Amargosa+BA&zoom=15&maptype=roadmap`}
        width="100%"
        height="100%"
        style={{
          border: 0,
          filter: theme === "dark" ? "invert(90%) hue-rotate(180deg)" : "none",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização do Posto Catitú"
      />
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${postoLocation.lat},${postoLocation.lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-white dark:hover:bg-gray-800 transition-colors"
      >
        <MapPin className="w-4 h-4 text-primary-light dark:text-primary-dark" />
        <span className="text-gray-800 dark:text-gray-200">Como chegar</span>
      </a>
    </div>
  );
}
