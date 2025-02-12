import { useTheme } from "../contexts/ThemeContext";
import { MapPin } from "lucide-react";

export function InteractiveMap() {
  const { theme } = useTheme();
  const mapStyle = theme === "dark" ? "night" : "roadmap";

  const postoLocation = {
    lat: -13.035914387285375,
    lng: -39.588833924922405,
  };

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  }&q=Posto+Catitú,Amargosa+BA&zoom=15&maptype=${mapStyle}`;

  return (
    <div className="relative h-[400px] rounded-xl overflow-hidden">
      <iframe
        src={mapUrl}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização do Posto Catitú"
        allowFullScreen
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
