import { Star } from "lucide-react";

interface StarRatingProps {
    rating: number;
    maxStars?: number;
    size?: number; // size in pixels, default is 14 (w-3.5 h-3.5)
}

export function StarRating({ rating, maxStars = 5, size = 14 }: StarRatingProps) {
    const clampedRating = Math.max(0, Math.min(rating, maxStars));

    // Example: 4.7 / 5 -> 94%. We clip the right-most 6%
    const percentage = (clampedRating / maxStars) * 100;
    const clipPercent = 100 - percentage;

    return (
        <div
            className="relative inline-flex items-center"
            aria-label={`${rating} out of ${maxStars} stars`}
        >
            {/* Base unfilled stars in gray */}
            <div className="flex gap-[2px]">
                {Array.from({ length: maxStars }).map((_, i) => (
                    <Star
                        key={`base-${i}`}
                        width={size}
                        height={size}
                        strokeWidth={2}
                        className="text-muted-foreground opacity-30 fill-transparent transition-opacity duration-300 group-hover/card:opacity-50"
                    />
                ))}
            </div>

            {/* 
        Colored filled stars overlay 
        Perfect fractional render via inset clip-path matching exact percentage 
      */}
            <div
                className="absolute top-0 left-0 bottom-0 flex gap-[2px] transition-all duration-300 ease-out"
                style={{ clipPath: `inset(0 ${clipPercent}% 0 0)` }}
            >
                {Array.from({ length: maxStars }).map((_, i) => (
                    <Star
                        key={`fill-${i}`}
                        width={size}
                        height={size}
                        color="#C53B00"
                        fill="#C53B00"
                        strokeWidth={2}
                        className="flex-shrink-0 transition-opacity duration-300 opacity-90 group-hover/card:opacity-100"
                    />
                ))}
            </div>
        </div>
    );
}
