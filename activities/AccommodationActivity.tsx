import React from "react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ExternalLink, MapPin, CalendarDays, Clock3, Star, Wifi, Waves, Dumbbell, Luggage, Coffee, Car } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { ACCOMMODATIONS } from "../lib/accommodations";

const amenityIcons = [Wifi, Waves, Dumbbell, Luggage, Coffee, Car];

export const AccommodationActivity: React.FC = () => {
  return (
    <AppScreen appBar={{ title: "숙소 자세히 보기" }}>
      <div className="min-h-full bg-gray-50 px-4 pb-24 pt-4 dark:bg-black">
        <header className="mb-5 rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 p-5 text-white shadow-lg shadow-indigo-500/20">
          <p className="text-xs font-bold tracking-[0.18em] text-white/65">BOOKED STAYS</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight">이번 여행의 숙소 3곳</h1>
          <p className="mt-1 text-sm text-white/80">방콕에서 코시창까지, 예약한 순서대로 정리했어요.</p>
        </header>

        <div className="flex flex-col gap-5">
          {ACCOMMODATIONS.map((stay) => (
            <article key={stay.id} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 dark:bg-[#1C1C1E] dark:ring-white/10">
              <div
                role="img"
                aria-label={`${stay.name} 대표 이미지`}
                className="relative h-48 bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(180deg, transparent 45%, rgba(0,0,0,.58)), url(${stay.imageUrl})` }}
              >
                <div className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  {stay.date} · {stay.city}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
                  <div className="min-w-0">
                    <p className="truncate text-lg font-bold">{stay.name}</p>
                    <p className="truncate text-xs text-white/80">{stay.englishName}</p>
                  </div>
                  <span className="flex shrink-0 items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-sm font-bold backdrop-blur-sm"><Star size={14} fill="currentColor" /> {stay.score}</span>
                </div>
              </div>

              <div className="p-4">
                <div className="grid grid-cols-2 gap-2 rounded-2xl bg-gray-50 p-2 dark:bg-white/[0.06]">
                  <div className="rounded-xl bg-white px-3 py-2.5 dark:bg-white/[0.06]">
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-400"><CalendarDays size={13} /> 체크인</span>
                    <p className="mt-1 text-sm font-bold text-gray-900 dark:text-gray-100">{stay.dateLabel} · {stay.checkIn}</p>
                  </div>
                  <div className="rounded-xl bg-white px-3 py-2.5 dark:bg-white/[0.06]">
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-400"><Clock3 size={13} /> 체크아웃</span>
                    <p className="mt-1 text-sm font-bold text-gray-900 dark:text-gray-100">다음 날 · {stay.checkOut}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100">주요 편의시설</h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {stay.amenities.map((amenity, amenityIndex) => {
                      const Icon = amenityIcons[amenityIndex % amenityIcons.length];
                      return <span key={amenity} className="flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-1.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-400/15 dark:text-indigo-200"><Icon size={13} />{amenity}</span>;
                    })}
                  </div>
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl border border-gray-100 dark:border-white/10">
                  <iframe
                    title={`${stay.name} Google 지도`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(stay.mapQuery)}&output=embed`}
                    loading="lazy"
                    className="h-44 w-full border-0"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="flex items-center justify-between gap-3 px-3 py-2.5">
                    <p className="min-w-0 truncate text-xs text-gray-500 dark:text-gray-400"><MapPin className="mr-1 inline text-indigo-500" size={13} />{stay.address}</p>
                    <a className="shrink-0 text-xs font-bold text-indigo-600 dark:text-indigo-300" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stay.mapQuery)}`} target="_blank" rel="noreferrer">지도 열기</a>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {stay.highlights.map((highlight) => <span key={highlight} className="rounded-full bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300">{highlight}</span>)}
                </div>

                <a href={stay.agodaUrl} target="_blank" rel="noreferrer" className="mt-4 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#5392f9] text-sm font-bold text-white transition-transform active:scale-[0.98]">
                  Agoda 예약 정보 열기 <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <BottomNav active="home" />
    </AppScreen>
  );
};
