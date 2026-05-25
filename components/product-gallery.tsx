"use client";

import { useState } from "react";

interface ProductGalleryProps {
  gallery: string[];
  name: string;
}

export function ProductGallery({ gallery, name }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/80 dark:bg-zinc-950/70">
        <img src={gallery[selected]} alt={name} className="h-[380px] w-full object-cover" />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {gallery.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelected(index)}
            className={`overflow-hidden rounded-[20px] border ${selected === index ? "border-foreground" : "border-transparent"}`}
          >
            <img src={image} alt={`${name} ${index + 1}`} className="h-20 w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
