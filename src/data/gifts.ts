export type GiftArticle = {
  slug: string;
  categoryId: string;
  title: string;
  description: string;
  occasion: string;
  recipient: string;
  budget: string;
  publishedAt: string;
  readingTime: string;
  hero: string;
  intro: string;
  ideas: {
    name: string;
    reason: string;
  }[];
  tips: string[];
};

export const giftArticles: GiftArticle[] = [
  {
    slug: "birthday-gifts-for-best-friend",
    categoryId: "birthday-gift",
    title: "친구 생일선물 추천 아이디어",
    description:
      "친한 친구에게 주기 좋은 생일선물을 예산대별로 정리한 가이드입니다. 실용적이면서도 센스 있는 선물 아이디어를 담았습니다.",
    occasion: "생일선물",
    recipient: "친구",
    budget: "3만~10만원",
    publishedAt: "2026-03-10",
    readingTime: "4분",
    hero: "친한 친구에게는 과하지 않지만 취향이 느껴지는 선물이 가장 만족도가 높습니다.",
    intro:
      "오래 알고 지낸 친구일수록 취향을 모를 것 같지만, 평소 자주 쓰는 물건이나 함께 공유한 추억에서 힌트를 찾으면 선물 선택이 훨씬 쉬워집니다.",
    ideas: [
      {
        name: "포토 캘린더",
        reason: "함께 찍은 사진을 넣으면 추억과 실용성을 동시에 챙길 수 있습니다.",
      },
      {
        name: "디저트 + 커피 기프트박스",
        reason: "실패 확률이 낮고 바로 즐길 수 있어 만족도가 높은 편입니다.",
      },
      {
        name: "데일리 파우치 또는 에코백",
        reason: "평소 자주 들고 다닐 수 있어 실용적인 선물을 선호하는 친구에게 잘 맞습니다.",
      },
    ],
    tips: [
      "함께 있었던 추억 하나를 선물에 자연스럽게 녹이면 만족도가 올라갑니다.",
      "유행성 소품보다는 오래 쓰는 아이템이 안전합니다.",
      "짧은 손편지를 더하면 선물의 완성도가 높아집니다.",
    ],
  },
  {
    slug: "housewarming-gifts-for-new-homeowners",
    categoryId: "housewarming-gift",
    title: "집들이 선물 추천 베스트",
    description:
      "자취방, 신혼집, 이사한 집 어디에도 무난하게 잘 어울리는 집들이 선물 추천 리스트입니다.",
    occasion: "집들이선물",
    recipient: "새집으로 이사한 지인",
    budget: "2만~12만원",
    publishedAt: "2026-03-11",
    readingTime: "5분",
    hero: "집들이 선물은 집에 바로 도움이 되는 실용적인 아이템일수록 반응이 좋습니다.",
    intro:
      "새집에 들어간 직후에는 필요한 물건이 많기 때문에, 인테리어를 크게 타지 않으면서 자주 쓸 수 있는 선물이 좋은 선택이 됩니다.",
    ideas: [
      {
        name: "우드 트레이 또는 도마",
        reason: "주방에서 쓰기도 좋고 손님 맞이용으로도 활용할 수 있습니다.",
      },
      {
        name: "무난한 컬러의 블랭킷",
        reason: "공간 분위기를 해치지 않으면서 실용적으로 사용할 수 있습니다.",
      },
      {
        name: "프리미엄 오일 세트",
        reason: "부담스럽지 않으면서도 센스 있는 선물로 보이기 좋습니다.",
      },
    ],
    tips: [
      "취향을 잘 모르면 화이트, 베이지, 우드 계열이 안전합니다.",
      "부피 큰 인테리어 소품은 피하는 편이 좋습니다.",
      "주방용품이나 소모성 식품류는 실패 확률이 낮습니다.",
    ],
  },
  {
    slug: "wedding-gifts-for-couples-who-have-everything",
    categoryId: "wedding-gift",
    title: "결혼선물 추천, 실용적인 선물 모음",
    description:
      "이미 살림이 어느 정도 갖춰진 커플에게 어울리는 실용적인 결혼선물 추천 리스트입니다.",
    occasion: "결혼선물",
    recipient: "예비부부 또는 신혼부부",
    budget: "5만~20만원",
    publishedAt: "2026-03-12",
    readingTime: "5분",
    hero: "결혼선물은 개수보다 품질이 좋은 업그레이드형 아이템이 만족도가 높습니다.",
    intro:
      "요즘은 이미 함께 살고 있는 커플도 많기 때문에, 기본 살림을 또 사주기보다는 평소 쓰는 물건의 질을 높여주는 선물이 더 반갑습니다.",
    ideas: [
      {
        name: "호텔식 타월 세트",
        reason: "매일 쓰는 물건이라 체감 만족도가 높고 커플이 함께 사용하기 좋습니다.",
      },
      {
        name: "레스토랑 또는 숙박 기프트카드",
        reason: "함께 추억을 만들 수 있어 실물 선물과는 다른 만족감을 줍니다.",
      },
      {
        name: "고급 와인잔 또는 샴페인잔",
        reason: "결혼이라는 이벤트와 잘 어울리고 특별한 날마다 꺼내 쓰기 좋습니다.",
      },
    ],
    tips: [
      "이미 가지고 있을 법한 제품은 브랜드나 급을 높여서 고르는 게 좋습니다.",
      "포장이나 카드 메시지도 깔끔하게 준비하면 더 잘 어울립니다.",
      "경험형 선물에는 작은 꽃이나 카드 등을 함께 주면 허전하지 않습니다.",
    ],
  },
  {
    slug: "thank-you-gifts-for-teachers",
    categoryId: "thank-you-gift",
    title: "선생님 감사선물 추천",
    description:
      "학기 말이나 졸업 시즌에 드리기 좋은 선생님 감사선물을 부담 없는 예산대로 정리했습니다.",
    occasion: "감사선물",
    recipient: "선생님",
    budget: "2만~6만원",
    publishedAt: "2026-03-13",
    readingTime: "4분",
    hero: "선생님 선물은 부담스럽지 않으면서도 정성이 느껴지는 실용템이 가장 좋습니다.",
    intro:
      "감사의 마음을 전하는 선물일수록 크기보다 활용도가 중요합니다. 사용하기 쉽고 보관 부담이 적은 아이템이 선호됩니다.",
    ideas: [
      {
        name: "고급 펜과 메모 세트",
        reason: "직업 특성과도 잘 맞고 실용성이 높아 선호도가 높습니다.",
      },
      {
        name: "카페 기프트카드",
        reason: "취향을 크게 타지 않고 사용하기 편합니다.",
      },
      {
        name: "핸드크림 또는 티 세트",
        reason: "부담 없이 감사의 마음을 전하기 좋은 무난한 선택입니다.",
      },
    ],
    tips: [
      "짧은 감사 카드와 함께 드리면 훨씬 인상적입니다.",
      "보관이 어렵거나 부피 큰 선물은 피하는 편이 좋습니다.",
      "학교 규정상 고가 선물이 어려운 경우가 있으니 예산은 무리하지 않는 것이 좋습니다.",
    ],
  },
  {
    slug: "new-mom-gifts-for-comfort-and-support",
    categoryId: "new-baby-gift",
    title: "출산 후 산모를 위한 선물 추천",
    description:
      "아기보다 산모에게 직접 도움이 되는 실용적인 출산 선물 아이디어를 모았습니다.",
    occasion: "출산선물",
    recipient: "산모",
    budget: "3만~12만원",
    publishedAt: "2026-03-14",
    readingTime: "5분",
    hero: "출산 후에는 예쁜 선물보다 몸을 편하게 해주는 실용적인 선물이 더 큰 도움이 됩니다.",
    intro:
      "출산 축하 선물은 아기용품에 집중되기 쉽지만, 실제로는 산모의 회복과 일상 적응을 돕는 선물이 더 기억에 남는 경우가 많습니다.",
    ideas: [
      {
        name: "보온 텀블러",
        reason: "수유나 육아 중에도 물이나 음료를 편하게 마실 수 있어 유용합니다.",
      },
      {
        name: "편한 홈웨어 세트",
        reason: "회복 기간 동안 집에서 오래 지내기 때문에 실사용 빈도가 높습니다.",
      },
      {
        name: "반찬 또는 식사 배달 쿠폰",
        reason: "식사 준비 부담을 줄여주는 선물은 체감 만족도가 높습니다.",
      },
    ],
    tips: [
      "예쁜 것보다 실제로 힘을 덜어주는 선물이 더 좋습니다.",
      "세탁과 관리가 쉬운 제품이 실용적입니다.",
      "축하 메시지는 아기뿐 아니라 산모를 응원하는 내용이면 더 좋습니다.",
    ],
  },
  {
    slug: "christmas-gifts-for-coworkers",
    categoryId: "christmas-gift",
    title: "직장동료 크리스마스 선물 추천",
    description:
      "회사에서 부담 없이 주고받기 좋은 직장동료용 크리스마스 선물 아이디어를 정리했습니다.",
    occasion: "크리스마스선물",
    recipient: "직장동료",
    budget: "1만~5만원",
    publishedAt: "2026-03-15",
    readingTime: "4분",
    hero: "직장동료 선물은 부담 없는 가격대와 무난한 활용도가 핵심입니다.",
    intro:
      "회사에서 주고받는 선물은 너무 개인적이거나 비싼 것보다, 누구나 편하게 쓸 수 있는 아이템이 가장 무난합니다.",
    ideas: [
      {
        name: "간식 세트",
        reason: "실패 확률이 낮고 함께 나눠 먹기에도 좋습니다.",
      },
      {
        name: "머그컵",
        reason: "사무실이나 집에서 모두 쓰기 좋은 무난한 선물입니다.",
      },
      {
        name: "미니 노트와 펜",
        reason: "가볍고 실용적이라 단체 선물이나 교환식에도 잘 어울립니다.",
      },
    ],
    tips: [
      "예산은 팀 분위기에 맞춰 적당한 수준으로 맞추는 것이 좋습니다.",
      "향수나 의류처럼 취향이 크게 갈리는 선물은 피하는 편이 안전합니다.",
      "작은 선물이라도 포장을 깔끔하게 하면 훨씬 좋아 보입니다.",
    ],
  },
];

export const featuredCategories = [
  {
    title: "생일선물",
    description: "친구, 연인, 가족에게 무난하게 잘 맞는 선물 아이디어.",
    href: "/gifts#birthday-gift",
  },
  {
    title: "집들이선물",
    description: "새집에 바로 도움이 되는 실용적인 선물 추천.",
    href: "/gifts#housewarming-gift",
  },
  {
    title: "결혼선물",
    description: "신혼부부에게 어울리는 깔끔하고 실용적인 선물.",
    href: "/gifts#wedding-gift",
  },
];

export function getGiftArticle(slug: string) {
  return giftArticles.find((article) => article.slug === slug);
}
