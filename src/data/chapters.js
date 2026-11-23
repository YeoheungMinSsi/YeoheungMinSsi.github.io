export const CHAPTERS = [
  {
    id: 'intro',
    number: '01',
    title: 'Intro',
    accent: '#60a5fa',
    pages: [
      {
        kicker: 'CHAPTER 01 · INTRO',
        heading: '안녕하세요, 개발자 포트폴리오입니다.',
        description:
          '문제의 본질을 단순하게 해결하고, 읽기 좋은 코드와 빠른 사용자 경험을 만드는 데 집중합니다.',
        tags: ['Frontend', 'UI Engineering', 'Web Performance'],
      },
      {
        kicker: 'CHAPTER 01 · HIGHLIGHTS',
        heading: '핵심 강점 요약',
        description:
          '기획부터 구현·배포까지 End-to-End로 제품을 완성하며, 유지보수 가능한 구조를 설계합니다.',
        items: [
          { label: 'Focus', value: '사용자 중심의 직관적인 인터페이스 설계' },
          { label: 'Principle', value: '불필요한 복잡도를 줄이는 간결한 코드' },
          { label: 'Goal', value: '빠르고 안정적인 웹 프로덕트 구축' },
        ],
      },
    ],
  },
  {
    id: 'about',
    number: '02',
    title: 'About',
    accent: '#34d399',
    pages: [
      {
        kicker: 'CHAPTER 02 · ABOUT ME',
        heading: '작은 디테일이 완성도를 결정합니다.',
        description:
          '협업 과정에서 명확한 커뮤니케이션과 문서화를 중시하며, 반복되는 비효율을 자동화하는 것을 좋아합니다.',
        tags: ['Problem Solving', 'Collaboration', 'Clean Architecture'],
      },
      {
        kicker: 'CHAPTER 02 · VALUES',
        heading: '일하는 방식',
        description: '팀과 함께 성장하기 위해 지키는 세 가지 기준입니다.',
        items: [
          { label: '01', value: '가설을 세우고 빠르게 검증하며 개선합니다.' },
          { label: '02', value: '동료가 한눈에 이해할 수 있는 코드를 작성합니다.' },
          { label: '03', value: '사용자 피드백을 제품에 신속하게 반영합니다.' },
        ],
      },
    ],
  },
  {
    id: 'skills',
    number: '03',
    title: 'Skills',
    accent: '#a78bfa',
    pages: [
      {
        kicker: 'CHAPTER 03 · TECH STACK',
        heading: '주요 기술 스택',
        description: '실무와 개인 프로젝트에서 주로 사용하는 프론트엔드 및 도구 스택입니다.',
        tags: ['React', 'TypeScript', 'Vite', 'HTML/CSS', 'Git', 'GitHub Actions'],
      },
      {
        kicker: 'CHAPTER 03 · CAPABILITIES',
        heading: '영역별 역량',
        description: '프로젝트 성격에 맞춰 가장 단순하고 안정적인 기술을 선택합니다.',
        items: [
          { label: 'Frontend', value: 'React, JavaScript(ES6+), TypeScript, CSS Grid/Flex' },
          { label: 'Tooling', value: 'Vite, pnpm, ESLint, GitHub Pages / Actions' },
          { label: 'Design', value: '반응형 레이아웃, 접근성(a11y), 인터랙션 구현' },
        ],
      },
    ],
  },
  {
    id: 'experience',
    number: '04',
    title: 'Experience',
    accent: '#f472b6',
    pages: [
      {
        kicker: 'CHAPTER 04 · EXPERIENCE',
        heading: '경력 및 주요 이력',
        description: '그동안 참여했던 조직과 역할의 흐름을 정리했습니다.',
        items: [
          { label: '2024 — 현재', value: 'Frontend Developer · 웹 서비스 개발 및 성능 개선' },
          { label: '2022 — 2024', value: 'Web Developer · 사내 어드민 및 대시보드 구축' },
        ],
      },
      {
        kicker: 'CHAPTER 04 · IMPACT',
        heading: '주요 성과',
        description: '수치와 결과로 확인된 개선 사례입니다.',
        items: [
          { label: '성능', value: '초기 번들 크기 축소 및 페이지 로딩 시간 단축' },
          { label: '생산성', value: '공통 UI 컴포넌트 정리 및 배포 자동화 파이프라인 구축' },
        ],
      },
    ],
  },
  {
    id: 'project-1',
    number: '05',
    title: 'Project I',
    accent: '#fb923c',
    pages: [
      {
        kicker: 'CHAPTER 05 · PROJECT 01',
        heading: '대표 프로젝트 A',
        description:
          '프로젝트의 배경과 해결하고자 했던 문제를 한 문단으로 정리하는 공간입니다. 실제 프로젝트 내용으로 교체해 주세요.',
        tags: ['React', 'Vite', 'TypeScript'],
      },
      {
        kicker: 'CHAPTER 05 · PROJECT 01 DETAIL',
        heading: '역할 및 결과',
        description: '담당한 핵심 기능과 기술적 의사결정을 요약합니다.',
        items: [
          { label: 'Role', value: '프론트엔드 설계 및 전체 UI 구현' },
          { label: 'Result', value: '정적 호스팅 기반 무중단 배포 및 모바일 최적화 완료' },
        ],
      },
    ],
  },
  {
    id: 'project-2',
    number: '06',
    title: 'Project II',
    accent: '#facc15',
    pages: [
      {
        kicker: 'CHAPTER 06 · PROJECT 02',
        heading: '대표 프로젝트 B',
        description:
          '두 번째 대표 프로젝트 소개 영역입니다. 스크린샷 링크나 데모 URL을 추가해 확장할 수 있습니다.',
        tags: ['JavaScript', 'CSS', 'GitHub Pages'],
      },
      {
        kicker: 'CHAPTER 06 · PROJECT 02 DETAIL',
        heading: '트러블슈팅 & 배운 점',
        description: '개발 중 마주친 병목과 해결 과정을 기록합니다.',
        items: [
          { label: 'Issue', value: '대량 리스트 렌더링 시 프레임 드랍 발생' },
          { label: 'Solution', value: '렌더링 범위 최소화 및 메모이제이션 적용으로 해결' },
        ],
      },
    ],
  },
  {
    id: 'archive',
    number: '07',
    title: 'Archive',
    accent: '#38bdf8',
    pages: [
      {
        kicker: 'CHAPTER 07 · ARCHIVE',
        heading: '활동 · 스터디 · 기록',
        description: '오픈소스 기여, 기술 블로그, 사이드 실험 등 작은 기록들을 모아둡니다.',
        items: [
          { label: 'Blog', value: '학습한 개념과 트러블슈팅 정리' },
          { label: 'Study', value: '웹 표준, 알고리즘, 프론트엔드 아키텍처 스터디' },
        ],
      },
      {
        kicker: 'CHAPTER 07 · SIDE WORKS',
        heading: '사이드 프로젝트 모음',
        description: '아이디어를 빠르게 프로토타이핑한 작은 도구들입니다.',
        tags: ['CLI Tools', 'Mini Web Apps', 'Design Systems'],
      },
    ],
  },
  {
    id: 'contact',
    number: '08',
    title: 'Contact',
    accent: '#4ade80',
    pages: [
      {
        kicker: 'CHAPTER 08 · CONTACT',
        heading: '함께 이야기 나눠요.',
        description:
          '새로운 프로젝트 제안, 협업, 채용 관련 문의 모두 환영합니다. 아래 채널로 편하게 연락해 주세요.',
        items: [
          { label: 'GitHub', value: 'github.com/YeoheungMinSsi' },
          { label: 'Email', value: 'hello@example.com' },
        ],
      },
      {
        kicker: 'CHAPTER 08 · END',
        heading: '끝까지 봐주셔서 감사합니다.',
        description:
          '포트폴리오는 계속 업데이트됩니다. 아래 버튼으로 첫 챕터로 돌아갈 수 있습니다.',
        tags: ['Thank You', '2026 Portfolio'],
      },
    ],
  },
];
