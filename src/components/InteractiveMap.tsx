import { useState } from "react";
import { MapPin } from "lucide-react";
import { GOOGLE_MAPS_API_KEY } from "../config/maps";

export function InteractiveMap() {
  const postoLocation = {
    lat: -13.035914387285375,
    lng: -39.588833924922405,
  };

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=Posto+Catitú&center=${postoLocation.lat},${postoLocation.lng}&zoom=15&language=pt-BR`;

  return (
    <div className="relative h-[400px] rounded-xl overflow-hidden">
      <iframe
        src={mapUrl}
        className="w-full h-full border-0"
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
