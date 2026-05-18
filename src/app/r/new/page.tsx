"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CATEGORIES = ["한식", "일식", "중식", "양식", "카페", "분식", "패스트푸드", "기타"];

export default function NewRestaurantPage() {
  const router = useRouter();
  const [step, setStep] = useState<"search" | "form">("search");
  const [searchQuery, setSearchQuery] = useState("");
  const [form, setForm] = useState({
    name: "",
    address: "",
    category: "",
    rating: 0,
    comment: "",
    photos: [] as File[],
  });

  const handleSearchSelect = (name: string, address: string) => {
    setForm((prev) => ({ ...prev, name, address }));
    setStep("form");
  };

  const handleManualInput = () => {
    setForm((prev) => ({ ...prev, name: searchQuery }));
    setStep("form");
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    setForm((prev) => ({ ...prev, photos: [...prev.photos, ...files].slice(0, 5) }));
  };

  const MOCK_SEARCH_RESULTS = searchQuery.length > 0
    ? [
        { name: searchQuery + " 1호점", address: "서울 강남구 테헤란로 123" },
        { name: searchQuery + " 본점", address: "서울 마포구 합정동 45" },
      ]
    : [];

  if (step === "search") {
    return (
      <div className="flex flex-col h-full">
        <header className="sticky top-0 z-10 bg-background border-b border-border px-4 py-3 flex items-center gap-3">
          <button onClick={() => router.back()} className="text-muted">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <h2 className="font-bold text-lg">맛집 등록</h2>
        </header>

        <div className="p-4 flex flex-col gap-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="매장 이름으로 검색"
              className="w-full border border-border rounded-xl px-4 py-3 pr-12 text-sm outline-none focus:border-primary transition-colors"
            />
            <svg className="absolute right-4 top-3.5 text-muted" width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
          </div>

          {MOCK_SEARCH_RESULTS.length > 0 && (
            <ul className="flex flex-col border border-border rounded-xl overflow-hidden">
              {MOCK_SEARCH_RESULTS.map((result, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleSearchSelect(result.name, result.address)}
                    className="w-full text-left px-4 py-3 hover:bg-card transition-colors border-b border-border last:border-0"
                  >
                    <p className="text-sm font-semibold">{result.name}</p>
                    <p className="text-xs text-muted mt-0.5">{result.address}</p>
                  </button>
                </li>
              ))}
            </ul>
          )}

          {searchQuery.length > 0 && (
            <button
              onClick={handleManualInput}
              className="flex items-center gap-2 text-sm text-primary font-semibold"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
              &ldquo;{searchQuery}&rdquo; 직접 등록하기
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-10 bg-background border-b border-border px-4 py-3 flex items-center gap-3">
        <button onClick={() => setStep("search")} className="text-muted">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h2 className="font-bold text-lg">리뷰 작성</h2>
      </header>

      <form className="p-4 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-muted font-semibold uppercase tracking-wide">매장</p>
          <p className="text-lg font-bold">{form.name}</p>
          <p className="text-sm text-muted">{form.address}</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-muted font-semibold uppercase tracking-wide">카테고리</p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setForm((prev) => ({ ...prev, category: cat }))}
                className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                  form.category === cat
                    ? "bg-primary text-white border-primary"
                    : "border-border text-muted hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-muted font-semibold uppercase tracking-wide">별점</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => setForm((prev) => ({ ...prev, rating: star }))}
                className={`text-3xl transition-colors ${star <= form.rating ? "text-primary" : "text-border"}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-muted font-semibold uppercase tracking-wide">사진</p>
          <div className="flex gap-2 overflow-x-auto pb-1">
            <label className="shrink-0 w-20 h-20 border-2 border-dashed border-border rounded-xl flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" className="text-muted">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
              <input type="file" accept="image/*" multiple onChange={handlePhotoChange} className="hidden" />
            </label>
            {form.photos.map((photo, i) => (
              <div key={i} className="shrink-0 w-20 h-20 rounded-xl bg-card border border-border overflow-hidden">
                <img src={URL.createObjectURL(photo)} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <p className="text-xs text-muted">최대 5장 (사진 첨부 필수)</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-muted font-semibold uppercase tracking-wide">한줄평</p>
          <textarea
            value={form.comment}
            onChange={(e) => setForm((prev) => ({ ...prev, comment: e.target.value }))}
            placeholder="이 맛집을 소개해주세요"
            rows={4}
            className="border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none"
          />
        </div>

        <div className="flex flex-col gap-2 p-4 bg-card rounded-xl border border-border">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            GPS 방문 인증
          </div>
          <p className="text-xs text-muted">매장 200m 이내에 있어야 리뷰를 등록할 수 있어요.</p>
          <button
            type="button"
            className="mt-1 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg"
          >
            내 위치 확인하기
          </button>
        </div>

        <button
          type="submit"
          disabled
          className="w-full py-4 bg-primary text-white font-bold rounded-xl opacity-50 cursor-not-allowed"
        >
          등록하기
        </button>
      </form>
    </div>
  );
}
