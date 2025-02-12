import { useTheme } from "../contexts/ThemeContext";
import { MapPin } from "lucide-react";

export function InteractiveMap() {
  const { theme } = useTheme();

  const postoLocation = {
    lat: -13.035914387285375,
    lng: -39.588833924922405,
  };

  return (
    <div className="relative h-[400px] rounded-xl overflow-hidden">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=${
          import.meta.env.VITE_GOOGLE_MAPS_API_KEY
        }&q=Posto+Catitú,Amargosa+BA&zoom=15&maptype=roadmap`}
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
        className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-50 transition-colors"
      >
        <MapPin className="w-4 h-4 text-[#FA4534]" />
        <span>Como chegar</span>
      </a>
    </div>
  );
}
