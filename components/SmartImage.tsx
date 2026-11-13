import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Icon, { type IconName } from "./Icon";

// Renders /public/images/<file> when it exists. Until the photo is added it shows a
// branded placeholder panel, so the site can launch before every image is ready.
// Drop a file with the same name into public/images/ and it appears on the next build.

type Props = {
  file: string;
  alt: string;
  icon?: IconName;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function SmartImage({ file, alt, icon = "washer", className = "", priority, sizes = "(min-width: 768px) 50vw, 100vw" }: Props) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", "images", file));

  if (exists) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={`/images/${file}`} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-aqua-light via-white to-sun-light ${className}`}
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-aqua/10" />
      <div className="absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-sun/15" />
      <Icon name={icon} className="relative h-20 w-20 text-aqua-dark/60" />
    </div>
  );
}
