# Safe Pro - 스마트 의료 헬스케어 플랫폼

## 프로젝트 개요

- **이름**: Safe Pro (구 Scan AI)
- **목표**: 스마트폰 카메라 1대로 병원 접근성이 낮은 환경에서도 1차 의료 가이드 제공
- **주요 기능**:
  - 상처·피부질환 촬영 → AI 위험도 분류 (Green/Yellow/Red)
  - 약품·영양제 라벨 스캔 → 성분·상호작용 위험 분석
  - 아토피성 질환 측정·관리 (EASI/SCORAD)
  - 요양시설·지자체 B2B/B2G 패키지 지원

## 공개 URL

- **개발 서버**: https://3000-ind1d5eossiw6nvw41p5g-2e1b9533.sandbox.novita.ai
- **프로덕션**: (배포 후 업데이트 예정)

## 완료된 기능

### ✅ 핵심 기능
1. **7개 언어 다국어 지원**
   - 한국어, 영어, 중국어, 일본어, 독일어, 스페인어, 아랍어
   - localStorage 기반 언어 설정 저장 및 자동 복원
   - 실시간 언어 전환 (페이지 새로고침 불필요)

2. **상처·피부질환 분석 (MVP)**
   - 이미지 업로드 및 미리보기
   - AI 위험도 자동 분류 시뮬레이션 (Green/Yellow/Red)
   - 위험도별 의학적 가이드 제공
   - PDF 내보내기 및 공유 기능 UI

3. **네비게이션 및 UI**
   - 직관적인 5개 메뉴 (홈, 상처 분석, 약품 스캔, 아토피 관리, 대시보드)
   - 반응형 디자인 (모바일/태블릿/데스크톱)
   - 그라데이션 기반 현대적인 UI/UX
   - Font Awesome 아이콘 및 Tailwind CSS 스타일링

4. **데이터 구조**
   - 현재 프론트엔드 전용 (서버리스 아키텍처)
   - 향후 Cloudflare D1/KV/R2 통합 예정

## 개발 환경 구조

```
safe-pro/
├── src/
│   ├── index.tsx           # Hono 앱 메인 진입점 (서버)
│   ├── i18n.ts             # 7개 언어 다국어 번역 시스템
│   └── renderer.tsx        # (사용 안 함 - 직접 HTML 반환 방식 사용)
├── public/
│   └── static/
│       ├── app.jsx         # React 앱 (CDN React 사용)
│       └── style.css       # 커스텀 CSS
├── dist/                   # 빌드 출력 (배포용)
├── ecosystem.config.cjs    # PM2 설정
├── wrangler.jsonc          # Cloudflare 설정
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 기술 스택

### 백엔드
- **Hono** - 경량 웹 프레임워크 (Cloudflare Workers)
- **Cloudflare Pages** - 엣지 배포 플랫폼
- **TypeScript** - 타입 안전성

### 프론트엔드
- **React 18** (CDN 방식) - UI 라이브러리
- **Tailwind CSS** (CDN) - 유틸리티 CSS
- **Font Awesome** (CDN) - 아이콘
- **Vanilla JavaScript** - 추가 번들 없는 경량 구조

### 개발 도구
- **Vite** - 빌드 도구
- **Wrangler** - Cloudflare CLI
- **PM2** - 프로세스 관리 (개발 환경)
- **Git** - 버전 관리

## 로컬 개발 가이드

### 사전 요구사항
- Node.js 18+
- npm

### 설치 및 실행
```bash
# 의존성 설치
npm install

# 빌드
npm run build

# PM2로 개발 서버 시작
pm2 start ecosystem.config.cjs

# 서비스 상태 확인
pm2 list

# 로그 확인
pm2 logs safe-pro --nostream

# 서비스 재시작
pm2 restart safe-pro

# 서비스 중지
pm2 stop safe-pro
```

### 테스트
```bash
# 로컬 테스트
curl http://localhost:3000

# 정적 파일 테스트
curl http://localhost:3000/static/app.jsx
```

## Cloudflare Pages 배포 (예정)

### 1. Cloudflare API 키 설정
```bash
# API 키 설정 도구 실행
setup_cloudflare_api_key
```

### 2. 프로젝트 생성 및 배포
```bash
# 빌드
npm run build

# Cloudflare Pages 프로젝트 생성
npx wrangler pages project create safe-pro \
  --production-branch main \
  --compatibility-date 2024-01-01

# 배포
npx wrangler pages deploy dist --project-name safe-pro
```

## 현재 상태 및 다음 단계

### 완료됨 ✅
- [x] React + TypeScript + Hono 프로젝트 구조
- [x] 7개 언어 다국어 시스템 (localStorage 기반)
- [x] 상처 분석 MVP (이미지 업로드 및 시뮬레이션)
- [x] 반응형 UI/UX
- [x] PM2 기반 로컬 개발 환경

### 준비 중 🚧
- [ ] 약품 라벨 스캔 기능
- [ ] 아토피 측정·관리 기능 (EASI/SCORAD)
- [ ] 요양시설 대시보드 (케이스 관리, 통계)
- [ ] PDF 보고서 생성
- [ ] Cloudflare D1 데이터베이스 통합
- [ ] 실제 AI 모델 통합 (현재는 시뮬레이션)

### 향후 계획 📋
1. **Phase 1**: 약품 스캔 및 아토피 관리 기능 구현
2. **Phase 2**: Cloudflare D1 데이터베이스 연동
3. **Phase 3**: B2B/B2G 대시보드 및 리포팅 기능
4. **Phase 4**: AI 모델 통합 (실제 이미지 분석)
5. **Phase 5**: 프로덕션 배포 및 최적화

## 주요 API 엔드포인트

현재 구현된 엔드포인트:
- `GET /` - 메인 앱 (React SPA)
- `GET /static/app.jsx` - React 앱 스크립트
- `GET /static/style.css` - 커스텀 CSS

향후 추가 예정:
- `POST /api/analyze/wound` - 상처 분석 API
- `POST /api/analyze/drug` - 약품 스캔 API
- `POST /api/analyze/atopy` - 아토피 측정 API
- `GET /api/dashboard/stats` - 대시보드 통계 API
- `GET /api/report/:id.pdf` - PDF 보고서 생성

## 데이터 아키텍처 (계획)

### Cloudflare D1 (SQLite)
- **Cases** - 케이스 기록 (상처, 약품, 아토피)
- **Users** - 사용자 계정 (요양시설 직원, 보호자)
- **Facilities** - 요양시설 정보
- **Reports** - 생성된 보고서 메타데이터

### Cloudflare KV
- 설정 데이터
- 캐시

### Cloudflare R2
- 업로드된 이미지
- 생성된 PDF 파일

## 사용자 가이드

### 언어 변경
1. 우측 상단 언어 드롭다운 클릭
2. 원하는 언어 선택 (한국어, English, 中文, 日本語, Deutsch, Español, العربية)
3. 페이지가 즉시 선택한 언어로 전환됨

### 상처 분석
1. "상처 분석" 메뉴 클릭
2. "이미지 업로드" 클릭하여 사진 선택
3. "분석 시작" 버튼 클릭
4. 위험도 결과 확인 (안전/주의/위험)
5. PDF 내보내기 또는 공유

## 배포 상태

- **개발 환경**: ✅ 활성 (PM2)
- **프로덕션**: ❌ 미배포
- **플랫폼**: Cloudflare Pages
- **마지막 업데이트**: 2025-12-26

## 라이선스

All rights reserved.

## 문의

프로젝트 관련 문의사항은 개발팀에 연락하시기 바랍니다.

---

**Safe Pro** - 스마트폰 카메라 1대로 시작하는 의료 접근성 혁신
