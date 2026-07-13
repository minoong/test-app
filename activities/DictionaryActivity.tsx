import React, { useState } from "react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { BottomNav } from "../components/BottomNav";

const PHRASES = [
  { ko: "안녕하세요", th: "사와디캅 (สวัสดีครับ/ค่ะ)", pron: "Sawatdee krap/kha" },
  { ko: "감사합니다", th: "코쿤캅 (ขอบคุณครับ/ค่ะ)", pron: "Khop khun krap/kha" },
  { ko: "얼마인가요?", th: "타오라이 캅? (เท่าไหร่ครับ/คะ)", pron: "Tao rai krap/kha?" },
  { ko: "너무 비싸요", th: "팽 빠이 (แพงไป)", pron: "Paeng pai" },
  { ko: "고수 빼주세요", th: "마이 싸이 팍치 (ไม่ใส่ผักชี)", pron: "Mai sai phak chi" },
];

export const DictionaryActivity: React.FC<any> = () => {
  const [selected, setSelected] = useState(PHRASES[0]);

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any currently playing audio
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices();
      const thaiVoice = voices.find(v => v.lang.includes('th'));
      if (thaiVoice) utterance.voice = thaiVoice;
      utterance.lang = 'th-TH'; // Force Thai language
      window.speechSynthesis.speak(utterance);
    } else {
      alert("이 브라우저에서는 음성 듣기 기능이 지원되지 않습니다.");
    }
  };

  const thaiTextOnly = selected.th.split('(')[1]?.replace(')','') || selected.th;

  return (
    <AppScreen appBar={{ title: "회화 사전" }}>
      <div className="flex flex-col h-[calc(100dvh-64px)] bg-gray-50 dark:bg-gray-900 pb-16">
        
        {/* Top Half (Opposite person - Rotated) */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 bg-blue-500 text-white rotate-180 relative transition-all">
          <p className="text-sm opacity-80 mb-4">현지인에게 이 화면을 보여주세요</p>
          <h2 className="text-5xl font-bold text-center leading-tight">
            {thaiTextOnly}
          </h2>
          <p className="text-xl mt-4 opacity-90">{selected.ko}</p>
        </div>

        {/* Divider */}
        <div className="h-2 bg-gray-200 dark:bg-gray-800 shrink-0 shadow-inner z-10" />

        {/* Bottom Half (My view) */}
        <div className="flex-1 flex flex-col bg-white dark:bg-black p-6 overflow-y-auto">
          <div className="mb-6 flex justify-between items-start gap-4">
            <div>
              <h3 className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                {selected.th.split('(')[0]}
              </h3>
              <p className="text-gray-500 text-sm mt-1">발음: {selected.pron}</p>
            </div>
            
            <button 
              onClick={() => playAudio(thaiTextOnly)}
              className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm active:scale-90 transition-transform"
              aria-label="듣기"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
              </svg>
            </button>
          </div>

          <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3">자주 쓰는 표현</h4>
          <div className="flex flex-wrap gap-2">
            {PHRASES.map((p, i) => (
              <button 
                key={i}
                onClick={() => setSelected(p)}
                className={`px-4 py-3 rounded-full text-sm font-semibold transition-colors ${
                  selected.ko === p.ko 
                    ? "bg-blue-600 text-white shadow-md" 
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                {p.ko}
              </button>
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="dictionary" />
    </AppScreen>
  );
};
