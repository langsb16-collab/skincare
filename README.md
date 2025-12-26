# Safe Pro - 스마트 의료 헬스케어 플랫폼

## 🎯 프로젝트 개요

**Safe Pro**는 스마트폰 카메라로 병원 접근성이 낮은 환경에서도 1차 의료 가이드를 제공하는 혁신적인 헬스케어 플랫폼입니다.

### 핵심 가치
> "스마트폰 카메라 1대로 시작하는 의료 접근성 혁신"

### 주요 기능
- 🩹 **상처·피부질환 분석**: AI 기반 위험도 자동 분류 (Green/Yellow/Red)
- 💊 **약품 라벨 스캔**: 성분 인식 및 상호작용 위험 분석 (준비중)
- 🔬 **아토피 측정·관리**: EASI/SCORAD 자동 계산 (준비중)
- 🏥 **요양시설 B2B/B2G**: 전용 대시보드 및 리포팅

## 🌍 7개 언어 완벽 지원

모든 UI 요소가 7개 언어로 완벽 번역되었습니다:
- 🇰🇷 한국어
- 🇺🇸 English
- 🇨🇳 中文
- 🇯🇵 日本語
- 🇩🇪 Deutsch
- 🇪🇸 Español
- 🇸🇦 العربية

## 📱 모바일 최적화

### 반응형 디자인
- 컴팩트한 UI (최소 여백/패딩)
- 작은 글자 크기 (13-16px)
- 2줄 이하 텍스트 표시
- 모바일 우선 설계

### 터치 최적화
- 큰 클릭 영역
- 부드러운 스크롤
- 빠른 페이지 전환

## 🚀 공개 URL

- **개발 서버**: https://3000-ind1d5eossiw6nvw41p5g-2e1b9533.sandbox.novita.ai
- **GitHub**: https://github.com/langsb16-collab/skincare

## ✅ 완료된 기능

### v2.0 (2025-12-26)
- ✅ 모바일 최적화 완료
- ✅ 7개 언어 완전 번역
- ✅ 언어 선택기 드롭다운 개선
- ✅ 모든 버튼 클릭 오류 수정
- ✅ 상처 분석 MVP (이미지 업로드, AI 시뮬레이션)
- ✅ 홈/대시보드/네비게이션 구현
- ✅ localStorage 언어 설정 저장

### v1.0 (초기 버전)
- ✅ Hono + Cloudflare Workers 기반 구조
- ✅ React 18 (CDN) 통합
- ✅ Tailwind CSS 스타일링
- ✅ PM2 프로세스 관리

## 🛠 기술 스택

### Backend
- **Hono** - 경량 웹 프레임워크
- **Cloudflare Workers** - 엣지 서버리스
- **TypeScript** - 타입 안전성

### Frontend
- **React 18** (CDN) - UI 라이브러리
- **Tailwind CSS** (CDN) - 유틸리티 CSS
- **Font Awesome** (CDN) - 아이콘

### DevOps
- **Vite** - 빌드 도구
- **Wrangler** - Cloudflare CLI
- **PM2** - 프로세스 관리
- **Git/GitHub** - 버전 관리

## 📂 프로젝트 구조

```
safe-pro/
├── src/
│   ├── index.tsx           # Hono 앱 메인
│   └── i18n.ts             # 다국어 시스템 (사용 안 함)
├── public/
│   └── static/
│       ├── app.js          # React 앱 (완전히 새로 작성)
│       ├── style.css       # 커스텀 CSS
│       └── favicon.ico     # 파비콘
├── dist/                   # 빌드 출력
├── ecosystem.config.cjs    # PM2 설정
├── wrangler.jsonc          # Cloudflare 설정
├── package.json
└── README.md
```

## 🚦 로컬 개발

### 사전 요구사항
- Node.js 18+
- npm

### 설치 및 실행
```bash
# 저장소 클론
git clone https://github.com/langsb16-collab/skincare.git
cd skincare

# 의존성 설치
npm install

# 빌드
npm run build

# PM2로 개발 서버 시작
pm2 start ecosystem.config.cjs

# 서비스 확인
pm2 list
pm2 logs safe-pro --nostream

# 브라우저에서 확인
# http://localhost:3000
```

### 개발 명령어
```bash
npm run build           # Vite 빌드
npm run clean-port      # 포트 3000 정리
npm run test            # curl 테스트
pm2 restart safe-pro    # 서비스 재시작
pm2 stop safe-pro       # 서비스 중지
```

## 🌐 사용 가이드

### 언어 변경
1. 우측 상단 언어 드롭다운 클릭
2. 원하는 언어 선택
3. 즉시 전체 UI가 선택한 언어로 전환

### 상처 분석 사용
1. "상처분석" 버튼 클릭
2. "사진 업로드" 클릭하여 이미지 선택
3. "분석하기" 버튼 클릭
4. AI 분석 결과 확인 (안전/주의/위험)
5. PDF 내보내기 또는 공유

## 📊 데이터 아키텍처 (계획)

### Cloudflare D1 (SQLite)
- Cases - 케이스 기록
- Users - 사용자 계정
- Facilities - 요양시설 정보
- Reports - 보고서 메타데이터

### Cloudflare KV
- 설정 데이터
- 캐시

### Cloudflare R2
- 업로드된 이미지
- 생성된 PDF

## 🎨 UI/UX 특징

### 색상 시스템
- **Primary**: 보라색 그라데이션 (#667eea → #764ba2)
- **Success/Green**: #11998e → #38ef7d
- **Warning/Yellow**: #f093fb → #f5576c
- **Danger/Red**: #fa709a → #fee140

### 디자인 원칙
- 모바일 우선 (Mobile-first)
- 컴팩트한 레이아웃
- 명확한 시각적 계층
- 접근성 고려
- 빠른 로딩 속도

## 🔄 다음 단계

### Phase 1 (진행중)
- [ ] 약품 라벨 스캔 OCR 기능
- [ ] 아토피 EASI/SCORAD 계산
- [ ] Cloudflare D1 데이터베이스 통합

### Phase 2
- [ ] 실제 AI 모델 통합
- [ ] PDF 보고서 자동 생성
- [ ] 요양시설 대시보드 고도화

### Phase 3
- [ ] B2B/B2G 패키지 완성
- [ ] 실시간 케이스 모니터링
- [ ] 통계 분석 기능

### Phase 4
- [ ] 프로덕션 배포
- [ ] 성능 최적화
- [ ] 사용자 피드백 반영

## 📝 변경 로그

### v2.0 (2025-12-26)
- 모바일 최적화 완료
- 7개 언어 완전 번역
- UI 컴팩트화 (여백/패딩 최소화)
- 언어 선택기 드롭다운 개선
- 모든 버튼 오류 수정
- GitHub langsb16-collab/skincare 저장소에 푸시

### v1.0 (2025-12-26)
- 초기 프로젝트 구조
- Hono + React 통합
- 상처 분석 MVP
- 7개 언어 기본 지원

## 🤝 기여

이 프로젝트는 **langsb16-collab** 팀에서 관리합니다.

### 기여 방법
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 라이선스

All rights reserved.

## 📞 문의

- **GitHub**: https://github.com/langsb16-collab/skincare
- **Repository Owner**: langsb16-collab

---

**Safe Pro** - 스마트폰으로 시작하는 의료 혁신 🏥📱
