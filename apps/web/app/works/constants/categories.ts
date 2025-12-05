import type { Category, CategoryInfo } from "../../../types/categories";

// 모든 정보를 담은 마스터 설정
export const CATEGORY_CONFIGS = [
  { id: "BRAND", index: 0, nameKo: "브랜드", nameEn: "Brand" },
  { id: "GRAPHIC", index: 1, nameKo: "그래픽", nameEn: "Graphic" },
  { id: "MEDIA", index: 2, nameKo: "미디어", nameEn: "Media" },
  { id: "UI/UX", index: 3, nameKo: "UI/UX", nameEn: "UI/UX" },
  { id: "LIVING", index: 4, nameKo: "리빙", nameEn: "Living" },
  {
    id: "PRODUCT INTERACTION",
    index: 5,
    nameKo: "제품 인터랙션",
    nameEn: "Product Interaction",
  },
  { id: "SPACE", index: 6, nameKo: "공간", nameEn: "Space" },
  { id: "MOBILITY", index: 7, nameKo: "모빌리티", nameEn: "Mobility" },
] as const;

// 카테고리 목록
export const CATEGORIES: Category[] = [
  "ALL",
  ...CATEGORY_CONFIGS.map((c) => c.id),
];

// 카테고리별 상수 정보
export const CATEGORY_INFO: Record<Category, CategoryInfo> = {
  ALL: {
    categoryNameKo: "전체",
    categoryNameEn: "ALL WORKS",
  },
  BRAND: {
    categoryNameKo: "브랜드 디자인 프로젝트",
    categoryNameEn: "BRAND DESIGN PROJECT",
    advisorKo: "이장섭",
    advisorEn: "LEE JANGSUP",
    descriptionKo:
      "정체성을 구축하기 위한 시각적 응용 항목과 이를 대외적으로 확산시키고 일관적으로 관리하는 시스템 전체의 디자인을 포함하는 '브랜드 디자인' 개념을 이해하고, 기존의 브랜드와 사회의 움직임을 관찰하여 개인, 단체, 서비스, 제품, 작품을 넘어 문화적 현상, 조직적인 움직임, 생각의 방식으로 확장되는 새로운 브랜드 디자인을 제안한다.",
    descriptionEn:
      "These projects explore the concept of brand design that encompasses not only the visual elements that build an identity but also the entire system that manages and expands that identity to the public and propose a new 'brand design' which serves beyond individuals, organizations, services, products, and artworks and evolve into a cultural phenomenon, a collective movement, and a thinking process by observing the movements of the society and the existing brands.",
  },
  GRAPHIC: {
    categoryNameKo: "그래픽 디자인 프로젝트",
    categoryNameEn: "GRAPHIC DESIGN PROJECT",
    advisorKo: "배민기",
    advisorEn: "BAE MINKEE",
    descriptionKo:
      "시각디자인 영역의 조형적 가능성과 다양한 활용을 토대로 현대 시각문화의 다양한 특성을 숙지하고, 작업의 방향 설정 및 표현 방법과 커뮤니케이션의 개념을 이해한다. 개별적인 피드백과 고유한 프로세스를 통해 주제를 일관성 있게 구현하고, 그래픽디자인의 외연을 넓히는 창조적인 경험을 쌓는 것을 목표로 한다.",
    descriptionEn:
      "Based on the formative possibilities and diverse applications within the field of visual design, this course deepens the understanding of the characteristics of contemporary visual culture while exploring directions of practice, methods of expression, and concepts of communication. Through individualized feedback and unique processes, students consistently develop their themes and aim to build creative experiences that expand the boundaries of graphic design.",
  },
  MEDIA: {
    categoryNameKo: "미디어 디자인 프로젝트",
    categoryNameEn: "MEDIA DESIGN PROJECT",
    advisorKo: "이준원",
    advisorEn: "LEE JUNWON",
    descriptionKo:
      "미디어를 디스플레이로서의 도구가 아닌 디자인의 요소로 인식하고, 이 특성을 적극 활용하는 프로세스를 학습한다. 확장된 미디어 개념의 역사를 이해하고 이를 기반으로 커뮤니케이션을 위한 콘텐츠를 제작한다. 개인 주제를 미디어 중심으로 재해석하여 다른 분야와 구별되는 자신만의 미디어 해석 방법과 표현 방법을 토론한다.",
    descriptionEn:
      "This course approaches media not merely as a display tool but as an essential element of design, exploring processes that actively utilize its unique characteristics. Students examine the history of extended media concepts and create communication-oriented content based on that understanding. By reinterpreting personal themes through a media-centered perspective, students discuss and develop their own distinctive approaches to media interpretation and expression that set them apart from other fields.",
  },
  "UI/UX": {
    categoryNameKo: "UI/UX 디자인 프로젝트",
    categoryNameEn: "UI/UX DESIGN PROJECT",
    advisorKo: "김신혜",
    advisorEn: "KIM SHINHYE",
    descriptionKo:
      "UI/UX 디자인은 현재 비즈니스와 기술 분야에서 핵심 역할을 한다. 뛰어난 UI/UX 디자인은 제품 또는 서비스의 성공에 결정적인 역할을 하며 사용자의 만족도와 충성도를 높인다. 본 수업을 통해 UI/UX의 기본 개념과 사용자 연구, 디자인 도구와 기술, 유용한 디자인 원칙, 그리고 실제 프로젝트로 적용하는 과정을 통해 현업에서 요구되는 문제해결 역량을 향상시키는 것이 목표이다.",
    descriptionEn:
      "UI/UX design plays a pivotal role in today's business and technology fields. Exceptional UI/UX design is crucial to the success of products and services, enhancing user satisfaction and loyalty. This course aims to strengthen practical problem-solving skills required in the industry through an understanding of core UI/UX concepts, user research, design tools and technologies, essential design principles, and the process of applying them to real-world projects.",
  },
  LIVING: {
    categoryNameKo: "리빙 디자인 프로젝트",
    categoryNameEn: "LIVING DESIGN PROJECT",
    advisorKo: "이성용",
    advisorEn: "LEE SEONGYONG",
    descriptionKo:
      "( 먼저 졸업을 앞둔 학생들에게 미리 축하 인사를 전합니다.) \n리빙디자인프로젝트 수업은 일상 공간 요소들의 다양한 영향을 통합하여 사고할 수 있도록 진행되어 왔습니다. 사용 환경이 반영된 기획과 조형 개발 뿐만이 아니라 구조설계, 소재선택 및 가공이라는 산업디자인 본연의 역할에도 많은 고민을 할 수 있도록 하였습니다. 이러한 과정을 통해 각자의 개성이 어떻게 객관적으로 적용되었는지 많은 관심으로 살펴봐 주시길 바랍니다. 학생들에게 많은 격려 부탁드립니다.",
    descriptionEn:
      "( First of all, I would like to extend my warmest congratulations to the students who are graduating.) The Living Design Project course has been conducted with the goal of encouraging students to think integratively about the diverse influences of everyday spatial elements. Beyond planning and formative development that reflect the user environment, the course also allowed students a deep exploration of the essential roles of industrial design such as structural design, material selection, and processing. Through this process, we hope you observe with interest in how each student's individuality has been objectively applied and expressed. We kindly encourage the audience to show their generous support for the students.",
  },
  "PRODUCT INTERACTION": {
    categoryNameKo: "제품 디자인 프로젝트",
    categoryNameEn: "PRODUCT INTERACTION DESIGN PROJECT",
    advisorKo: "조상은",
    advisorEn: "CHO SANGEUN",
    descriptionKo:
      "인간, 사회, 문화, 경제, 기술, 환경의 변화 속에서 미래 가치를 조망하는 주관적 통찰과 해석을 기반으로 디자인에 접근한다. '나의 관점'에서 바라본 미래의 생활상을 제시하고, 이러한 변화하는 현상을 표현할 수 있는 디자인 언어를 개발하여 제품인터랙션 시스템 디자인으로 구체화함으로써 디자인의 새로운 가치와 방향성을 제시한다.",
    descriptionEn:
      "Approaching design through subjective insight and interpretation, these projects envision future values amid the evolving landscapes of humanity, society, culture, economy, technology, and environment. From a 'personal perspective', they propose an image of future life and develops a design language that is capable of expressing these evolving phenomena and by shaping this into a product–interaction system design, they present new values and directions for design.",
  },
  SPACE: {
    categoryNameKo: "공간 디자인 프로젝트",
    categoryNameEn: "SPACE DESIGN PROJECT",
    advisorKo: "안성모",
    advisorEn: "AHN SUNGMO",
    descriptionKo:
      "공간을 형성시키는 필수적인 장치이자 우리가 일상 속에서 항상 접하는 '문'이라는 공간요소를 통해 공간이 담고 있는 복잡한 힘들을 규명하고 열림과 닫힘의 고유한 작동방식을 디자인 함으로써 방문자와 거주자 간의 새로운 소통의 관계를 제시한다. 이러한 과정을 통해 자신만의 시각으로 공간 고유의 속성과 문제를 드러내고 공간에 대한 사고를 확장한다.",
    descriptionEn:
      "As an essential device that shapes a space and a familiar element we encounter in daily life, the 'door' serves as a medium to explore the complex forces contained within space. By designing the distinctive mechanisms of opening and closing, we propose a new form of communication between visitors and residents. Through this process, it reveals the inherent characteristics and issues of space from a personal perspective, expanding our boundaries of spatial thought.",
  },
  MOBILITY: {
    categoryNameKo: "모빌리티 디자인 프로젝트",
    categoryNameEn: "MOBILITY DESIGN PROJECT",
    advisorKo: "임승빈",
    advisorEn: "YIM SEUNGBIN",
    descriptionKo:
      '이번 전시 컨셉인 \'이사\'에도 어떠한 형태로든 모빌리티가 필요할 것입니다. 모빌리티디자인프로젝트는 현재와 미래의 모빌리티 패러다임 속에서 여러 가지 \'이동\'과 이에 동반되는 다양한 인간적, 사회적 문제들에 대한 솔루션과 새로운 테크놀로지와 환경에 대한 사유를 통해 창의와 혁신으로 새로운 영감을 주는 모빌리티를 지향합니다. "MOVEMENT THAT INSPIRES" "MOBILITY THAT INSPIRES" "MOVING THAT INSPIRES"~',
    descriptionEn:
      'The theme of this exhibition, "WRAP UP" inherently involves some form of mobility. \n\nThe Mobility Design Project explores diverse modes of movement within the present and the future paradigm of mobility. Such movements aims to propose creative and innovative mobility ideas that inspire new possibilities by addressing the human and social issues that accompany mobility and by reflecting on new emerging technologies and environmental shifts. \n\n"MOVEMENT THAT INSPIRES" "MOBILITY THAT INSPIRES" "MOVING THAT INSPIRES"**',
  },
};
