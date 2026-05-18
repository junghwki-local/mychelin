import FeedCard from "@/components/feed/FeedCard";

const MOCK_FEED = [
  {
    id: "1",
    name: "을지로 돼지갈비",
    category: "한식",
    address: "서울 중구 을지로 123",
    rating: 4,
    reviewCount: 24,
    distance: "230m",
    thumbnailUrl: null,
    author: { name: "김정환", avatarUrl: null },
    comment: "고기가 두툼하고 불향이 장난없어요. 혼밥하기도 좋고 웨이팅은 평일 기준 20분 정도.",
    createdAt: "2시간 전",
  },
  {
    id: "2",
    name: "스시 하루",
    category: "일식",
    address: "서울 강남구 청담동 45",
    rating: 5,
    reviewCount: 8,
    distance: "1.2km",
    thumbnailUrl: null,
    author: { name: "이지훈", avatarUrl: null },
    comment: "가격 대비 퀄리티가 정말 좋습니다. 오마카세 6만원인데 이 가격에 이 퀄리티면 무조건 재방문.",
    createdAt: "5시간 전",
  },
  {
    id: "3",
    name: "성수 커피 로스터스",
    category: "카페",
    address: "서울 성동구 성수이로 78",
    rating: 4,
    reviewCount: 41,
    distance: "3.4km",
    thumbnailUrl: null,
    author: { name: "박소연", avatarUrl: null },
    comment: "스페셜티 원두를 직접 로스팅해요. 에스프레소가 특히 좋고 공간도 작업하기 딱 좋은 분위기.",
    createdAt: "어제",
  },
];

export default function FeedPage() {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-10 bg-background border-b border-border px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-black tracking-tight text-primary">Mychelin</h1>
        <div className="flex gap-1 text-sm">
          <button className="px-3 py-1 rounded-full bg-primary text-white font-semibold text-xs">근처</button>
          <button className="px-3 py-1 rounded-full text-muted font-semibold text-xs">팔로잉</button>
        </div>
      </header>

      <div className="flex flex-col">
        {MOCK_FEED.map((item) => (
          <FeedCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
