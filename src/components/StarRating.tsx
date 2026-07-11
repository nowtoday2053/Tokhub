import React from 'react';
import { Star } from 'lucide-react';

type StarRatingProps = {
  rating?: number;
  size?: 'sm' | 'md';
};

export const StarRating: React.FC<StarRatingProps> = ({ rating = 5, size = 'sm' }) => {
  const starSize = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4';

  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${starSize} ${
            i < Math.floor(rating)
              ? 'fill-amber-400 text-amber-400'
              : 'fill-zinc-200 text-zinc-200'
          }`}
        />
      ))}
    </span>
  );
};
