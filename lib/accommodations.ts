export interface Accommodation {
  id: "bangkok" | "pattaya" | "koh-sichang";
  city: string;
  date: string;
  dateLabel: string;
  name: string;
  englishName: string;
  address: string;
  checkIn: string;
  checkOut: string;
  imageUrl: string;
  mapQuery: string;
  agodaUrl: string;
  score: string;
  highlights: string[];
  facilityGroups: Array<{
    title: string;
    items: string[];
  }>;
  dining: {
    primary: string;
    details: string[];
  };
  importantInfo?: {
    breakfast: {
      title: string;
      details: string;
    };
    shuttle: {
      title: string;
      details: string;
    };
  };
  notice?: string;
}

export const ACCOMMODATIONS: Accommodation[] = [
  {
    id: "bangkok",
    city: "방콕",
    date: "8/29",
    dateLabel: "8월 29일 · 1박",
    name: "셰이드 하우스 방콕 올드타운",
    englishName: "Shade House Bangkok Oldtown",
    address: "195 Samsen 1 Alley, Wat Sam Phraya, Phra Nakhon, Bangkok 10200",
    checkIn: "14:00",
    checkOut: "11:00",
    imageUrl: "https://pix8.agoda.net/hotelImages/64336206/0/6400f6e0887f133e75ef63196f41c0c2.jpg?ce=2&s=1024x768",
    mapQuery: "Shade House Bangkok Oldtown",
    agodaUrl: "https://www.agoda.com/ko-kr/shade-house-bangkok-oldtown/hotel/bangkok-th.html?adults=2&rooms=1&checkIn=2026-08-29&checkOut=2026-08-30",
    score: "9.2",
    highlights: ["카오산 로드 650m", "2025년 신축", "올드타운 산책"],
    facilityGroups: [
      { title: "핵심", items: ["무료 Wi‑Fi", "익스프레스 체크인", "짐 보관", "에어컨"] },
      { title: "서비스", items: ["룸서비스", "일일 청소", "금연 객실"] },
    ],
    dining: {
      primary: "객실 내 룸서비스",
      details: ["매일 하우스키핑", "공용 구역 Wi‑Fi"],
    },
  },
  {
    id: "pattaya",
    city: "팟타야",
    date: "8/30",
    dateLabel: "8월 30일 · 1박",
    name: "더 그라스 서비스드 스위트 바이 앳 마인드",
    englishName: "The Grass Serviced Suites by At Mind",
    address: "599/10 Pattaya Tai Road, South Pattaya, Pattaya 20150",
    checkIn: "14:00",
    checkOut: "12:00",
    imageUrl: "https://pix8.agoda.net/hotelImages/1622455/-1/0aa45e1afb355375de608953c5690591.jpg?ca=15&ce=1&s=1024x768",
    mapQuery: "The Grass Serviced Suites by At Mind Pattaya",
    agodaUrl: "https://www.agoda.com/ko-kr/the-grass-serviced-suites-by-at-mind/hotel/pattaya-th.html?adults=2&rooms=1&checkIn=2026-08-30&checkOut=2026-08-31",
    score: "8.8",
    highlights: ["루프탑 수영장", "파타야 비치 1.9km", "스위트·간이 주방"],
    facilityGroups: [
      { title: "핵심", items: ["무료 Wi‑Fi", "야외 수영장", "피트니스", "사우나"] },
      { title: "식사", items: ["레스토랑", "조식 뷔페", "룸서비스"] },
      { title: "서비스", items: ["무료 주차", "24시간 프런트", "공항 셔틀"] },
    ],
    dining: {
      primary: "호텔 레스토랑",
      details: ["조식 뷔페", "룸서비스 이용 가능"],
    },
  },
  {
    id: "koh-sichang",
    city: "코시창",
    date: "8/31",
    dateLabel: "8월 31일 · 1박",
    name: "섬웨어 코 시창",
    englishName: "Somewhere Koh Sichang",
    address: "194, 194/1 Tha Thewawong, Koh Si Chang, Chonburi 20120",
    checkIn: "14:00",
    checkOut: "12:00",
    imageUrl: "https://pix8.agoda.net/hotelImages/1157835/-1/0e77488a5d3361f5d13049edd6ca0d70.jpg?ce=0&s=1024x768",
    mapQuery: "Somewhere Koh Sichang",
    agodaUrl: "https://www.agoda.com/ko-kr/somewhere-koh-sichang/hotel/chonburi-th.html?adults=2&rooms=1&checkIn=2026-08-31&checkOut=2026-09-01",
    score: "9.2",
    highlights: ["코시창 선착장 600m", "바다 전망 수영장", "섬 휴양"],
    facilityGroups: [
      { title: "사용 가능한 언어", items: ["영어", "태국어"] },
      { title: "야외", items: ["자전거"] },
      { title: "인터넷", items: ["Wi‑Fi (공용 구역)", "무료 Wi‑Fi (모든 객실)", "인터넷", "인터넷 서비스"] },
      { title: "액티비티 및 레저 활동", items: ["등산로", "수영장", "스노클링", "실외 수영장", "여행 안내소", "전망이 있는 수영장", "정원", "티켓 서비스"] },
      { title: "청결 및 안전", items: ["구급상자", "매일 소독", "모든 객실 매일 소독", "살균/소독 장비", "손 소독제", "위생 인증", "직원 대상 안전 규정 교육"] },
      { title: "식음료 시설/서비스", items: ["단품 요리 레스토랑", "레스토랑", "룸서비스", "바", "생수(병)", "유럽식 조식", "조식 뷔페", "주류", "커피숍"] },
      { title: "서비스 및 편의 시설", items: ["공용 구역 내 냉방", "공용 라운지/TV 시청 구역", "금연 숙소", "다림질 서비스", "복사기/팩스", "안전 금고", "일일 청소", "컨시어지", "테라스", "회의/연회 시설", "흡연 구역"] },
      { title: "출입/접근 서비스", items: ["24시간 경비", "24시간 상시 체크인", "24시간 프런트", "공용 구역 CCTV", "금연 객실", "소화기", "숙소 외부 CCTV", "연기 감지기"] },
      { title: "이동 편의 시설/서비스", items: ["공항 셔틀", "셔틀 서비스", "무료 주차", "택시 서비스"] },
      { title: "이용 안내", items: ["엘리베이터 없음", "반려동물 불가"] },
      { title: "객실 편의시설", items: ["DVD/CD 플레이어", "Wi‑Fi (무료)", "객실 내 안전 금고", "거울", "금연", "냉장고", "스트리밍 서비스", "리넨", "모닝콜 서비스", "무료 생수", "무료 인스턴트 커피", "무료 차", "무선인터넷", "발코니/테라스", "샤워실", "세면도구", "소파", "소화기", "수영장 시설", "숙면용 편의 용품", "슬리퍼", "알람시계", "암막 커튼", "야외용 가구", "에어컨", "열리는 창문", "옷 거는 행거", "옷장", "욕조 및 샤워실", "위성 방송/케이블 방송", "유선인터넷(무료)", "유아용 침대(요청 시)", "일일 청소 서비스", "전기 주전자", "전용 수영장", "전화기", "접이식 침대", "주전자", "창문", "책상", "침대 옆 콘센트", "타월", "프라이빗 욕실", "헤어드라이어", "화재감지기", "휴식 공간", "휴지통"] },
    ],
    dining: {
      primary: "The Verandah Restaurant",
      details: ["유럽식 조식", "인터내셔널 · 태국식", "뷔페 · 알라카르트"],
    },
    importantInfo: {
      breakfast: {
        title: "The Verandah Restaurant",
        details: "유럽식 조식 · 조식 뷔페 이용 가능",
      },
      shuttle: {
        title: "공항 셔틀 · 셔틀 서비스",
        details: "요청 시 제공되며 추가 요금이 부과될 수 있어요.",
      },
    },
  },
];
