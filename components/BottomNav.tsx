import React from "react";
import { useFlow } from "@stackflow/react";
import { Home, Calendar, ClipboardCheck, MessageCircle } from "lucide-react";

interface BottomNavProps {
  active: "home" | "schedule" | "checklist" | "dictionary";
}

export const triggerHapticFeedback = () => {
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    navigator.vibrate(15);
  }
};

export const BottomNav: React.FC<BottomNavProps> = ({ active }) => {
  const { replace } = useFlow();

  const handleNav = (
    target: "HomeActivity" | "ScheduleActivity" | "ChecklistActivity" | "DictionaryActivity",
    name: "home" | "schedule" | "checklist" | "dictionary"
  ) => {
    if (active === name) return; // 중복 탭 방지
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(15);
    }
    replace(target, {}, { animate: false });
  };

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex justify-around items-center px-4 h-16">
        {/* 홈 탭 */}
        <div className="relative flex flex-col items-center justify-center w-16 h-full select-none">
          <input
            type="checkbox"
            // @ts-expect-error: React typings do not support the standard switch attribute for checkboxes
            switch={true}
            disabled={active === "home"}
            onChange={() => handleNav("HomeActivity", "home")}
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full disabled:cursor-default z-10"
            style={{ WebkitTapHighlightColor: "transparent" }}
          />
          <Home 
            size={22} 
            fill={active === "home" ? "currentColor" : "none"} 
            className={`transition-all duration-200 ${active === "home" ? "text-blue-500" : "text-gray-400"}`} 
          />
          <span className={`text-[10px] mt-1 font-medium ${active === "home" ? "text-blue-500" : "text-gray-400"}`}>홈</span>
        </div>
        
        {/* 일정표 탭 */}
        <div className="relative flex flex-col items-center justify-center w-16 h-full select-none">
          <input
            type="checkbox"
            // @ts-expect-error: React typings do not support the standard switch attribute for checkboxes
            switch={true}
            disabled={active === "schedule"}
            onChange={() => handleNav("ScheduleActivity", "schedule")}
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full disabled:cursor-default z-10"
            style={{ WebkitTapHighlightColor: "transparent" }}
          />
          <Calendar 
            size={22} 
            fill={active === "schedule" ? "currentColor" : "none"} 
            className={`transition-all duration-200 ${active === "schedule" ? "text-blue-500" : "text-gray-400"}`} 
          />
          <span className={`text-[10px] mt-1 font-medium ${active === "schedule" ? "text-blue-500" : "text-gray-400"}`}>일정표</span>
        </div>

        {/* 준비물 탭 */}
        <div className="relative flex flex-col items-center justify-center w-16 h-full select-none">
          <input
            type="checkbox"
            // @ts-expect-error: React typings do not support the standard switch attribute for checkboxes
            switch={true}
            disabled={active === "checklist"}
            onChange={() => handleNav("ChecklistActivity", "checklist")}
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full disabled:cursor-default z-10"
            style={{ WebkitTapHighlightColor: "transparent" }}
          />
          <ClipboardCheck 
            size={22} 
            fill={active === "checklist" ? "currentColor" : "none"} 
            className={`transition-all duration-200 ${active === "checklist" ? "text-blue-500" : "text-gray-400"}`} 
          />
          <span className={`text-[10px] mt-1 font-medium ${active === "checklist" ? "text-blue-500" : "text-gray-400"}`}>준비물</span>
        </div>

        {/* 회화 탭 */}
        <div className="relative flex flex-col items-center justify-center w-16 h-full select-none">
          <input
            type="checkbox"
            // @ts-expect-error: React typings do not support the standard switch attribute for checkboxes
            switch={true}
            disabled={active === "dictionary"}
            onChange={() => handleNav("DictionaryActivity", "dictionary")}
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full disabled:cursor-default z-10"
            style={{ WebkitTapHighlightColor: "transparent" }}
          />
          <MessageCircle 
            size={22} 
            fill={active === "dictionary" ? "currentColor" : "none"} 
            className={`transition-all duration-200 ${active === "dictionary" ? "text-blue-500" : "text-gray-400"}`} 
          />
          <span className={`text-[10px] mt-1 font-medium ${active === "dictionary" ? "text-blue-500" : "text-gray-400"}`}>회화</span>
        </div>
      </div>
    </div>
  );
};
