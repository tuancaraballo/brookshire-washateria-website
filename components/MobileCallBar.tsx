import Icon from "./Icon";
import { business, directionsUrl } from "@/data/business";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-white/95 backdrop-blur md:hidden">
      <a href={business.phoneHref} className="flex items-center justify-center gap-2 py-3.5 font-semibold text-navy">
        <Icon name="phone" className="h-5 w-5" /> Call
      </a>
      <a href={directionsUrl} className="flex items-center justify-center gap-2 bg-sun py-3.5 font-semibold text-navy-deep">
        <Icon name="pin" className="h-5 w-5" /> Directions
      </a>
    </div>
  );
}
