import Image from "next/image";
import Link from "next/link";

type FeedCardProps = {
  id: string;
  name: string;
  category: string;
  address: string;
  rating: number;
  reviewCount: number;
  distance?: string;
  thumbnailUrl?: string | null;
  author: {
    name: string;
    avatarUrl?: string | null;
  };
  comment: string;
  createdAt: string;
};

const STAR = "★";
const EMPTY_STAR = "☆";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-primary text-sm tracking-tight">
      {Array.from({ length: 5 }, (_, i) => (i < rating ? STAR : EMPTY_STAR)).join("")}
    </span>
  );
}

export default function FeedCard({
  id,
  name,
  category,
  address,
  rating,
  reviewCount,
  distance,
  thumbnailUrl,
  author,
  comment,
  createdAt,
}: FeedCardProps) {
  return (
    <Link href={`/r/${id}`} className="block">
      <article className="bg-background border-b border-border">
        {thumbnailUrl && (
          <div className="relative w-full aspect-[4/3] bg-card">
            <Image src={thumbnailUrl} alt={name} fill className="object-cover" />
          </div>
        )}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-xs text-muted bg-card px-2 py-0.5 rounded-full">{category}</span>
              <h2 className="mt-1 text-lg font-bold leading-tight">{name}</h2>
              <p className="text-xs text-muted mt-0.5 line-clamp-1">{address}</p>
            </div>
            {distance && (
              <span className="text-xs text-muted shrink-0">{distance}</span>
            )}
          </div>

          <div className="flex items-center gap-2 mt-2">
            <Stars rating={rating} />
            <span className="text-xs text-muted">({reviewCount})</span>
          </div>

          <p className="mt-3 text-sm text-foreground line-clamp-2">{comment}</p>

          <div className="flex items-center gap-2 mt-3">
            <div className="w-6 h-6 rounded-full bg-card overflow-hidden shrink-0">
              {author.avatarUrl ? (
                <Image src={author.avatarUrl} alt={author.name} width={24} height={24} className="object-cover" />
              ) : (
                <div className="w-full h-full bg-border" />
              )}
            </div>
            <span className="text-xs text-muted">{author.name}</span>
            <span className="text-xs text-muted">·</span>
            <span className="text-xs text-muted">{createdAt}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
