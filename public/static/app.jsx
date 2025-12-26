// Safe Pro - 7개 언어 다국어 지원 시스템
// 한국어, 영어, 중국어, 일본어, 독일어, 스페인어, 아랍어

const translations = {
  ko: {
    nav: {
      home: '홈',
      wound: '상처 분석',
      drug: '약품 스캔',
      atopy: '아토피 관리',
      dashboard: '대시보드',
      reports: '리포트',
    },
    home: {
      title: 'Safe Pro',
      subtitle: '스마트 의료 헬스케어 플랫폼',
      tagline: '스마트폰 카메라 1대로 병원 접근성이 낮은 환경에서도 1차 의료 가이드 제공',
      features: {
        wound: {
          title: '상처·피부질환 분석',
          desc: 'AI 기반 위험도 자동 분류 및 의학적 가이드 제공 (Green/Yellow/Red)',
        },
        drug: {
          title: '약품 라벨 스캔',
          desc: '성분 인식 및 상호작용 위험 분석, 금기 조합 자동 경고',
        },
        atopy: {
          title: '아토피 측정·관리',
          desc: 'EASI/SCORAD 자동 계산, 플레어 이벤트 추적 및 경과 모니터링',
        },
        b2b: {
          title: 'B2B/B2G 패키지',
          desc: '요양시설·지자체 전용 계정, 리포팅, 통계 분석 기능 제공',
        },
      },
    },
    wound: {
      title: '상처·피부질환 분석',
      upload: '이미지 업로드',
      analyze: '분석 시작',
      result: '분석 결과',
      riskLevel: {
        green: '안전 (가정 관리 가능)',
        yellow: '주의 (모니터링 필요)',
        red: '위험 (즉시 진료 권고)',
      },
      guidance: {
        green: '일반적인 가정 관리로 충분합니다. 위생 유지 및 연고 사용을 권장합니다.',
        yellow: '단기간 모니터링이 필요합니다. 증상이 악화되면 병원 방문을 권장합니다.',
        red: '즉시 의료진 상담이 필요합니다. 응급실 방문을 고려하십시오.',
      },
    },
    drug: {
      title: '약품·영양제 라벨 스캔',
      scan: '라벨 스캔',
      ingredients: '성분 분석',
      interaction: '상호작용',
      warning: '경고',
      safe: '안전',
      caution: '주의',
      danger: '위험',
    },
    atopy: {
      title: '아토피 측정·관리',
      easi: 'EASI 지수',
      scorad: 'SCORAD 점수',
      tracking: '경과 추적',
      history: '기록 히스토리',
      flare: '플레어 이벤트',
      dryness: '건조도',
    },
    dashboard: {
      title: '요양시설 대시보드',
      stats: '통계',
      cases: '케이스 관리',
      reports: '보고서',
      newCase: '신규 케이스',
      pending: '대기중',
      completed: '완료',
    },
    common: {
      save: '저장',
      cancel: '취소',
      delete: '삭제',
      export: 'PDF 내보내기',
      share: '공유',
      language: '언어',
    },
  },
  en: {
    nav: {
      home: 'Home',
      wound: 'Wound Analysis',
      drug: 'Drug Scan',
      atopy: 'Atopy Management',
      dashboard: 'Dashboard',
      reports: 'Reports',
    },
    home: {
      title: 'Safe Pro',
      subtitle: 'Smart Healthcare Platform',
      tagline: 'Providing primary medical guidance with just a smartphone camera, even in environments with low hospital accessibility',
      features: {
        wound: {
          title: 'Wound & Skin Analysis',
          desc: 'AI-based automatic risk classification and medical guidance (Green/Yellow/Red)',
        },
        drug: {
          title: 'Drug Label Scan',
          desc: 'Ingredient recognition and interaction risk analysis, automatic contraindication alerts',
        },
        atopy: {
          title: 'Atopy Measurement & Management',
          desc: 'Automatic EASI/SCORAD calculation, flare event tracking and progress monitoring',
        },
        b2b: {
          title: 'B2B/B2G Package',
          desc: 'Dedicated accounts for nursing facilities and local governments, reporting and statistical analysis',
        },
      },
    },
    wound: {
      title: 'Wound & Skin Disease Analysis',
      upload: 'Upload Image',
      analyze: 'Start Analysis',
      result: 'Analysis Result',
      riskLevel: {
        green: 'Safe (Home Care Possible)',
        yellow: 'Caution (Monitoring Required)',
        red: 'Danger (Immediate Medical Attention)',
      },
      guidance: {
        green: 'General home care is sufficient. Maintain hygiene and use ointment as recommended.',
        yellow: 'Short-term monitoring is required. Visit a hospital if symptoms worsen.',
        red: 'Immediate medical consultation is required. Consider visiting the emergency room.',
      },
    },
    drug: {
      title: 'Drug & Supplement Label Scan',
      scan: 'Scan Label',
      ingredients: 'Ingredient Analysis',
      interaction: 'Interaction',
      warning: 'Warning',
      safe: 'Safe',
      caution: 'Caution',
      danger: 'Danger',
    },
    atopy: {
      title: 'Atopy Measurement & Management',
      easi: 'EASI Index',
      scorad: 'SCORAD Score',
      tracking: 'Progress Tracking',
      history: 'Record History',
      flare: 'Flare Event',
      dryness: 'Dryness',
    },
    dashboard: {
      title: 'Facility Dashboard',
      stats: 'Statistics',
      cases: 'Case Management',
      reports: 'Reports',
      newCase: 'New Case',
      pending: 'Pending',
      completed: 'Completed',
    },
    common: {
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      export: 'Export PDF',
      share: 'Share',
      language: 'Language',
    },
  },
  zh: {
    nav: {
      home: '首页',
      wound: '伤口分析',
      drug: '药品扫描',
      atopy: '特应性管理',
      dashboard: '仪表板',
      reports: '报告',
    },
    home: {
      title: 'Safe Pro',
      subtitle: '智能医疗保健平台',
      tagline: '仅需智能手机摄像头，即可在医院可及性较低的环境中提供初级医疗指导',
      features: {
        wound: {
          title: '伤口·皮肤病分析',
          desc: '基于AI的风险自动分类及医学指导（绿色/黄色/红色）',
        },
        drug: {
          title: '药品标签扫描',
          desc: '成分识别及相互作用风险分析，禁忌组合自动警告',
        },
        atopy: {
          title: '特应性测量·管理',
          desc: '自动计算EASI/SCORAD，追踪发作事件及进展监测',
        },
        b2b: {
          title: 'B2B/B2G套餐',
          desc: '为养老机构·地方政府提供专用账户、报告及统计分析功能',
        },
      },
    },
    wound: {
      title: '伤口·皮肤病分析',
      upload: '上传图片',
      analyze: '开始分析',
      result: '分析结果',
      riskLevel: {
        green: '安全（可居家护理）',
        yellow: '注意（需要监测）',
        red: '危险（建议立即就诊）',
      },
      guidance: {
        green: '一般家庭护理即可。建议保持卫生并使用药膏。',
        yellow: '需要短期监测。如症状恶化请就医。',
        red: '需要立即咨询医务人员。请考虑前往急诊室。',
      },
    },
    drug: {
      title: '药品·营养品标签扫描',
      scan: '扫描标签',
      ingredients: '成分分析',
      interaction: '相互作用',
      warning: '警告',
      safe: '安全',
      caution: '注意',
      danger: '危险',
    },
    atopy: {
      title: '特应性测量·管理',
      easi: 'EASI指数',
      scorad: 'SCORAD评分',
      tracking: '进展追踪',
      history: '记录历史',
      flare: '发作事件',
      dryness: '干燥度',
    },
    dashboard: {
      title: '养老机构仪表板',
      stats: '统计',
      cases: '病例管理',
      reports: '报告',
      newCase: '新病例',
      pending: '待处理',
      completed: '已完成',
    },
    common: {
      save: '保存',
      cancel: '取消',
      delete: '删除',
      export: '导出PDF',
      share: '分享',
      language: '语言',
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      wound: '傷の分析',
      drug: '薬品スキャン',
      atopy: 'アトピー管理',
      dashboard: 'ダッシュボード',
      reports: 'レポート',
    },
    home: {
      title: 'Safe Pro',
      subtitle: 'スマート医療ヘルスケアプラットフォーム',
      tagline: 'スマートフォンカメラ1台で、病院へのアクセスが低い環境でも一次医療ガイドを提供',
      features: {
        wound: {
          title: '傷・皮膚疾患分析',
          desc: 'AI基盤のリスク自動分類及び医学的ガイド提供（緑/黄/赤）',
        },
        drug: {
          title: '薬品ラベルスキャン',
          desc: '成分認識及び相互作用リスク分析、禁忌組合せ自動警告',
        },
        atopy: {
          title: 'アトピー測定・管理',
          desc: 'EASI/SCORAD自動計算、フレアイベント追跡及び経過モニタリング',
        },
        b2b: {
          title: 'B2B/B2Gパッケージ',
          desc: '介護施設・自治体専用アカウント、レポート、統計分析機能提供',
        },
      },
    },
    wound: {
      title: '傷・皮膚疾患分析',
      upload: '画像アップロード',
      analyze: '分析開始',
      result: '分析結果',
      riskLevel: {
        green: '安全（家庭管理可能）',
        yellow: '注意（モニタリング必要）',
        red: '危険（即時診療推奨）',
      },
      guidance: {
        green: '一般的な家庭管理で十分です。衛生維持及び軟膏使用を推奨します。',
        yellow: '短期間のモニタリングが必要です。症状が悪化したら病院訪問を推奨します。',
        red: '即時医療スタッフとの相談が必要です。救急室訪問を検討してください。',
      },
    },
    drug: {
      title: '薬品・栄養剤ラベルスキャン',
      scan: 'ラベルスキャン',
      ingredients: '成分分析',
      interaction: '相互作用',
      warning: '警告',
      safe: '安全',
      caution: '注意',
      danger: '危険',
    },
    atopy: {
      title: 'アトピー測定・管理',
      easi: 'EASI指数',
      scorad: 'SCORADスコア',
      tracking: '経過追跡',
      history: '記録履歴',
      flare: 'フレアイベント',
      dryness: '乾燥度',
    },
    dashboard: {
      title: '介護施設ダッシュボード',
      stats: '統計',
      cases: 'ケース管理',
      reports: 'レポート',
      newCase: '新規ケース',
      pending: '待機中',
      completed: '完了',
    },
    common: {
      save: '保存',
      cancel: 'キャンセル',
      delete: '削除',
      export: 'PDF出力',
      share: '共有',
      language: '言語',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      wound: 'Wundanalyse',
      drug: 'Medikamentenscan',
      atopy: 'Atopie-Management',
      dashboard: 'Dashboard',
      reports: 'Berichte',
    },
    home: {
      title: 'Safe Pro',
      subtitle: 'Intelligente Gesundheitsplattform',
      tagline: 'Medizinische Erstversorgung mit nur einer Smartphone-Kamera, auch in Umgebungen mit geringem Zugang zu Krankenhäusern',
      features: {
        wound: {
          title: 'Wund- und Hauterkrankungsanalyse',
          desc: 'KI-basierte automatische Risikoeinstufung und medizinische Anleitung (Grün/Gelb/Rot)',
        },
        drug: {
          title: 'Medikamentenetikett-Scan',
          desc: 'Inhaltsstofferkennung und Wechselwirkungsrisikoanalyse, automatische Kontraindikationswarnung',
        },
        atopy: {
          title: 'Atopie-Messung und -Management',
          desc: 'Automatische EASI/SCORAD-Berechnung, Schub-Tracking und Verlaufsüberwachung',
        },
        b2b: {
          title: 'B2B/B2G-Paket',
          desc: 'Dedizierte Konten für Pflegeeinrichtungen und Kommunen, Berichterstattung und Statistikanalyse',
        },
      },
    },
    wound: {
      title: 'Wund- und Hauterkrankungsanalyse',
      upload: 'Bild hochladen',
      analyze: 'Analyse starten',
      result: 'Analyseergebnis',
      riskLevel: {
        green: 'Sicher (Häusliche Pflege möglich)',
        yellow: 'Vorsicht (Überwachung erforderlich)',
        red: 'Gefahr (Sofortige medizinische Behandlung)',
      },
      guidance: {
        green: 'Allgemeine häusliche Pflege ist ausreichend. Hygiene wahren und Salbe verwenden.',
        yellow: 'Kurzfristige Überwachung erforderlich. Bei Verschlechterung Krankenhaus aufsuchen.',
        red: 'Sofortige ärztliche Beratung erforderlich. Notaufnahme in Betracht ziehen.',
      },
    },
    drug: {
      title: 'Medikamenten- und Nahrungsergänzungsetikett-Scan',
      scan: 'Etikett scannen',
      ingredients: 'Inhaltsstoffanalyse',
      interaction: 'Wechselwirkung',
      warning: 'Warnung',
      safe: 'Sicher',
      caution: 'Vorsicht',
      danger: 'Gefahr',
    },
    atopy: {
      title: 'Atopie-Messung und -Management',
      easi: 'EASI-Index',
      scorad: 'SCORAD-Score',
      tracking: 'Verlaufsverfolgung',
      history: 'Aufzeichnungsverlauf',
      flare: 'Schubereignis',
      dryness: 'Trockenheit',
    },
    dashboard: {
      title: 'Einrichtungs-Dashboard',
      stats: 'Statistiken',
      cases: 'Fallverwaltung',
      reports: 'Berichte',
      newCase: 'Neuer Fall',
      pending: 'Ausstehend',
      completed: 'Abgeschlossen',
    },
    common: {
      save: 'Speichern',
      cancel: 'Abbrechen',
      delete: 'Löschen',
      export: 'PDF exportieren',
      share: 'Teilen',
      language: 'Sprache',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      wound: 'Análisis de Heridas',
      drug: 'Escaneo de Medicamentos',
      atopy: 'Gestión de Atopia',
      dashboard: 'Panel',
      reports: 'Informes',
    },
    home: {
      title: 'Safe Pro',
      subtitle: 'Plataforma Inteligente de Salud',
      tagline: 'Proporcionando orientación médica primaria con solo una cámara de smartphone, incluso en entornos con bajo acceso hospitalario',
      features: {
        wound: {
          title: 'Análisis de Heridas y Enfermedades de la Piel',
          desc: 'Clasificación automática de riesgos basada en IA y orientación médica (Verde/Amarillo/Rojo)',
        },
        drug: {
          title: 'Escaneo de Etiqueta de Medicamentos',
          desc: 'Reconocimiento de ingredientes y análisis de riesgo de interacción, alertas automáticas de contraindicaciones',
        },
        atopy: {
          title: 'Medición y Gestión de Atopia',
          desc: 'Cálculo automático de EASI/SCORAD, seguimiento de eventos de brote y monitoreo de progreso',
        },
        b2b: {
          title: 'Paquete B2B/B2G',
          desc: 'Cuentas dedicadas para instalaciones de enfermería y gobiernos locales, informes y análisis estadístico',
        },
      },
    },
    wound: {
      title: 'Análisis de Heridas y Enfermedades de la Piel',
      upload: 'Subir Imagen',
      analyze: 'Iniciar Análisis',
      result: 'Resultado del Análisis',
      riskLevel: {
        green: 'Seguro (Cuidado en Casa Posible)',
        yellow: 'Precaución (Monitoreo Requerido)',
        red: 'Peligro (Atención Médica Inmediata)',
      },
      guidance: {
        green: 'El cuidado general en el hogar es suficiente. Mantener la higiene y usar pomada según lo recomendado.',
        yellow: 'Se requiere monitoreo a corto plazo. Visitar un hospital si los síntomas empeoran.',
        red: 'Se requiere consulta médica inmediata. Considerar visitar la sala de emergencias.',
      },
    },
    drug: {
      title: 'Escaneo de Etiqueta de Medicamentos y Suplementos',
      scan: 'Escanear Etiqueta',
      ingredients: 'Análisis de Ingredientes',
      interaction: 'Interacción',
      warning: 'Advertencia',
      safe: 'Seguro',
      caution: 'Precaución',
      danger: 'Peligro',
    },
    atopy: {
      title: 'Medición y Gestión de Atopia',
      easi: 'Índice EASI',
      scorad: 'Puntuación SCORAD',
      tracking: 'Seguimiento de Progreso',
      history: 'Historial de Registros',
      flare: 'Evento de Brote',
      dryness: 'Sequedad',
    },
    dashboard: {
      title: 'Panel de Instalaciones',
      stats: 'Estadísticas',
      cases: 'Gestión de Casos',
      reports: 'Informes',
      newCase: 'Nuevo Caso',
      pending: 'Pendiente',
      completed: 'Completado',
    },
    common: {
      save: 'Guardar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      export: 'Exportar PDF',
      share: 'Compartir',
      language: 'Idioma',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      wound: 'تحليل الجروح',
      drug: 'فحص الأدوية',
      atopy: 'إدارة التأتب',
      dashboard: 'لوحة التحكم',
      reports: 'التقارير',
    },
    home: {
      title: 'Safe Pro',
      subtitle: 'منصة الرعاية الصحية الذكية',
      tagline: 'توفير التوجيه الطبي الأولي بكاميرا هاتف ذكي واحدة فقط، حتى في البيئات ذات إمكانية الوصول المنخفضة للمستشفيات',
      features: {
        wound: {
          title: 'تحليل الجروح والأمراض الجلدية',
          desc: 'تصنيف تلقائي للمخاطر بالذكاء الاصطناعي وتوجيه طبي (أخضر/أصفر/أحمر)',
        },
        drug: {
          title: 'فحص ملصق الدواء',
          desc: 'التعرف على المكونات وتحليل مخاطر التفاعل، تنبيهات موانع الاستعمال التلقائية',
        },
        atopy: {
          title: 'قياس وإدارة التأتب',
          desc: 'حساب تلقائي لـ EASI/SCORAD، تتبع أحداث التفاقم ومراقبة التقدم',
        },
        b2b: {
          title: 'حزمة B2B/B2G',
          desc: 'حسابات مخصصة لمرافق التمريض والحكومات المحلية، التقارير والتحليل الإحصائي',
        },
      },
    },
    wound: {
      title: 'تحليل الجروح والأمراض الجلدية',
      upload: 'تحميل الصورة',
      analyze: 'بدء التحليل',
      result: 'نتيجة التحليل',
      riskLevel: {
        green: 'آمن (الرعاية المنزلية ممكنة)',
        yellow: 'تحذير (المراقبة مطلوبة)',
        red: 'خطر (عناية طبية فورية)',
      },
      guidance: {
        green: 'الرعاية المنزلية العامة كافية. حافظ على النظافة واستخدم المرهم حسب التوصية.',
        yellow: 'المراقبة قصيرة المدى مطلوبة. قم بزيارة المستشفى إذا ساءت الأعراض.',
        red: 'الاستشارة الطبية الفورية مطلوبة. فكر في زيارة غرفة الطوارئ.',
      },
    },
    drug: {
      title: 'فحص ملصق الأدوية والمكملات',
      scan: 'فحص الملصق',
      ingredients: 'تحليل المكونات',
      interaction: 'التفاعل',
      warning: 'تحذير',
      safe: 'آمن',
      caution: 'تحذير',
      danger: 'خطر',
    },
    atopy: {
      title: 'قياس وإدارة التأتب',
      easi: 'مؤشر EASI',
      scorad: 'نقاط SCORAD',
      tracking: 'تتبع التقدم',
      history: 'سجل التاريخ',
      flare: 'حدث التفاقم',
      dryness: 'الجفاف',
    },
    dashboard: {
      title: 'لوحة تحكم المنشأة',
      stats: 'إحصائيات',
      cases: 'إدارة الحالات',
      reports: 'التقارير',
      newCase: 'حالة جديدة',
      pending: 'معلق',
      completed: 'مكتمل',
    },
    common: {
      save: 'حفظ',
      cancel: 'إلغاء',
      delete: 'حذف',
      export: 'تصدير PDF',
      share: 'مشاركة',
      language: 'اللغة',
    },
  },
};

const languageNames = {
  ko: '한국어',
  en: 'English',
  zh: '中文',
  ja: '日本語',
  de: 'Deutsch',
  es: 'Español',
  ar: 'العربية',
};

const LANGUAGE_KEY = 'safepro_language';

function getStoredLanguage() {
  const stored = localStorage.getItem(LANGUAGE_KEY);
  return stored || 'en';
}

function setStoredLanguage(lang) {
  localStorage.setItem(LANGUAGE_KEY, lang);
}

// React 앱 (CDN 방식)
const { useState, useEffect, createElement: h } = React;

// 언어 선택 컴포넌트
function LanguageSelector({ currentLang, onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageClick = (lang) => {
    onLanguageChange(lang);
    setIsOpen(false);
  };

  return h('div', { className: 'language-selector' },
    h('div', {
      className: 'language-dropdown',
      onClick: () => setIsOpen(!isOpen)
    },
      h('i', { className: 'fas fa-globe' }),
      h('span', null, languageNames[currentLang]),
      h('i', {
        className: `fas fa-chevron-${isOpen ? 'up' : 'down'}`,
        style: { fontSize: '12px' }
      })
    ),
    h('div', { className: `language-menu ${isOpen ? 'open' : ''}` },
      Object.keys(languageNames).map(lang =>
        h('div', {
          key: lang,
          className: `language-option ${currentLang === lang ? 'active' : ''}`,
          onClick: () => handleLanguageClick(lang)
        }, languageNames[lang])
      )
    )
  );
}

// 네비게이션
function Navigation({ currentPage, onPageChange, t, currentLang, onLanguageChange }) {
  return h('nav', { style: { background: 'rgba(255,255,255,0.1)', padding: '16px 0', marginBottom: '32px' } },
    h('div', { className: 'container' },
      h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' } },
        h('div', { style: { display: 'flex', gap: '16px', flexWrap: 'wrap' } },
          h('a', {
            className: `nav-link ${currentPage === 'home' ? 'active' : ''}`,
            onClick: () => onPageChange('home')
          }, h('i', { className: 'fas fa-home' }), ' ', t.nav.home),
          h('a', {
            className: `nav-link ${currentPage === 'wound' ? 'active' : ''}`,
            onClick: () => onPageChange('wound')
          }, h('i', { className: 'fas fa-band-aid' }), ' ', t.nav.wound),
          h('a', {
            className: `nav-link ${currentPage === 'drug' ? 'active' : ''}`,
            onClick: () => onPageChange('drug')
          }, h('i', { className: 'fas fa-pills' }), ' ', t.nav.drug),
          h('a', {
            className: `nav-link ${currentPage === 'atopy' ? 'active' : ''}`,
            onClick: () => onPageChange('atopy')
          }, h('i', { className: 'fas fa-heartbeat' }), ' ', t.nav.atopy),
          h('a', {
            className: `nav-link ${currentPage === 'dashboard' ? 'active' : ''}`,
            onClick: () => onPageChange('dashboard')
          }, h('i', { className: 'fas fa-chart-line' }), ' ', t.nav.dashboard)
        ),
        h(LanguageSelector, { currentLang, onLanguageChange })
      )
    )
  );
}

// 홈 페이지
function HomePage({ t }) {
  return h('div', { className: 'fade-in' },
    h('div', { className: 'container', style: { paddingTop: '40px', paddingBottom: '80px' } },
      h('div', { style: { textAlign: 'center', color: 'white', marginBottom: '60px' } },
        h('h1', { style: { fontSize: '56px', fontWeight: '800', marginBottom: '16px', textShadow: '0 4px 20px rgba(0,0,0,0.2)' } },
          h('i', { className: 'fas fa-shield-alt', style: { marginRight: '16px' } }),
          t.home.title
        ),
        h('p', { style: { fontSize: '24px', fontWeight: '600', marginBottom: '12px', opacity: 0.95 } },
          t.home.subtitle
        ),
        h('p', { style: { fontSize: '18px', maxWidth: '900px', margin: '0 auto', opacity: 0.9, lineHeight: '1.6' } },
          t.home.tagline
        )
      ),
      h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' } },
        h('div', { className: 'card' },
          h('div', { className: 'feature-icon', style: { background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' } },
            h('i', { className: 'fas fa-band-aid', style: { color: 'white' } })
          ),
          h('h3', { style: { fontSize: '22px', fontWeight: '700', marginBottom: '12px', color: '#2d3748' } },
            t.home.features.wound.title
          ),
          h('p', { style: { color: '#718096', lineHeight: '1.6' } },
            t.home.features.wound.desc
          )
        ),
        h('div', { className: 'card' },
          h('div', { className: 'feature-icon', style: { background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' } },
            h('i', { className: 'fas fa-pills', style: { color: 'white' } })
          ),
          h('h3', { style: { fontSize: '22px', fontWeight: '700', marginBottom: '12px', color: '#2d3748' } },
            t.home.features.drug.title
          ),
          h('p', { style: { color: '#718096', lineHeight: '1.6' } },
            t.home.features.drug.desc
          )
        ),
        h('div', { className: 'card' },
          h('div', { className: 'feature-icon', style: { background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' } },
            h('i', { className: 'fas fa-heartbeat', style: { color: 'white' } })
          ),
          h('h3', { style: { fontSize: '22px', fontWeight: '700', marginBottom: '12px', color: '#2d3748' } },
            t.home.features.atopy.title
          ),
          h('p', { style: { color: '#718096', lineHeight: '1.6' } },
            t.home.features.atopy.desc
          )
        ),
        h('div', { className: 'card' },
          h('div', { className: 'feature-icon', style: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' } },
            h('i', { className: 'fas fa-building', style: { color: 'white' } })
          ),
          h('h3', { style: { fontSize: '22px', fontWeight: '700', marginBottom: '12px', color: '#2d3748' } },
            t.home.features.b2b.title
          ),
          h('p', { style: { color: '#718096', lineHeight: '1.6' } },
            t.home.features.b2b.desc
          )
        )
      )
    )
  );
}

// 상처 분석 페이지
function WoundPage({ t }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handleAnalyze = () => {
    if (!selectedFile) return;
    setAnalyzing(true);
    setTimeout(() => {
      const results = ['green', 'yellow', 'red'];
      setResult(results[Math.floor(Math.random() * results.length)]);
      setAnalyzing(false);
    }, 2000);
  };

  return h('div', { className: 'fade-in' },
    h('div', { className: 'container', style: { paddingTop: '40px', paddingBottom: '80px' } },
      h('div', { style: { textAlign: 'center', color: 'white', marginBottom: '40px' } },
        h('h2', { style: { fontSize: '40px', fontWeight: '700', marginBottom: '12px' } },
          h('i', { className: 'fas fa-band-aid', style: { marginRight: '12px' } }),
          t.wound.title
        )
      ),
      h('div', { className: 'card', style: { maxWidth: '800px', margin: '0 auto' } },
        h('div', { className: 'upload-zone', style: { marginBottom: '24px' } },
          h('input', {
            type: 'file',
            accept: 'image/*',
            onChange: handleFileSelect,
            style: { display: 'none' },
            id: 'wound-upload'
          }),
          h('label', { htmlFor: 'wound-upload', style: { cursor: 'pointer', display: 'block' } },
            h('i', { className: 'fas fa-cloud-upload-alt', style: { fontSize: '48px', color: '#cbd5e0', marginBottom: '16px' } }),
            h('p', { style: { fontSize: '18px', color: '#4a5568', fontWeight: '600' } }, t.wound.upload),
            h('p', { style: { fontSize: '14px', color: '#a0aec0', marginTop: '8px' } }, 'JPG, PNG (Max 10MB)')
          )
        ),
        previewUrl && h('div', { style: { marginBottom: '24px' } },
          h('img', { src: previewUrl, alt: 'Preview', style: { width: '100%', borderRadius: '12px', maxHeight: '400px', objectFit: 'contain' } })
        ),
        selectedFile && !result && h('button', {
          className: 'btn btn-primary',
          onClick: handleAnalyze,
          disabled: analyzing,
          style: { width: '100%', fontSize: '18px', padding: '16px' }
        },
          analyzing ?
            h(React.Fragment, null,
              h('i', { className: 'fas fa-spinner fa-spin', style: { marginRight: '8px' } }),
              '분석 중...'
            ) :
            h(React.Fragment, null,
              h('i', { className: 'fas fa-search', style: { marginRight: '8px' } }),
              t.wound.analyze
            )
        ),
        result && h('div', { className: 'fade-in', style: { marginTop: '32px' } },
          h('h3', { style: { fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: '#2d3748' } },
            t.wound.result
          ),
          h('div', { className: `risk-${result}`, style: { padding: '24px', borderRadius: '12px', marginBottom: '16px' } },
            h('div', { style: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' } },
              h('i', { className: `fas fa-${result === 'green' ? 'check-circle' : result === 'yellow' ? 'exclamation-triangle' : 'times-circle'}`, style: { fontSize: '32px' } }),
              h('span', { style: { fontSize: '22px', fontWeight: '700' } },
                t.wound.riskLevel[result]
              )
            ),
            h('p', { style: { fontSize: '16px', lineHeight: '1.6' } },
              t.wound.guidance[result]
            )
          ),
          h('div', { style: { display: 'flex', gap: '12px' } },
            h('button', { className: 'btn', style: { flex: 1, background: '#48bb78', color: 'white' } },
              h('i', { className: 'fas fa-file-pdf', style: { marginRight: '8px' } }),
              t.common.export
            ),
            h('button', { className: 'btn', style: { flex: 1, background: '#4299e1', color: 'white' } },
              h('i', { className: 'fas fa-share-alt', style: { marginRight: '8px' } }),
              t.common.share
            )
          )
        )
      )
    )
  );
}

// 약품/아토피/대시보드 페이지 (준비 중)
function DrugPage({ t }) {
  return h('div', { className: 'fade-in' },
    h('div', { className: 'container', style: { paddingTop: '40px', paddingBottom: '80px' } },
      h('div', { style: { textAlign: 'center', color: 'white', marginBottom: '40px' } },
        h('h2', { style: { fontSize: '40px', fontWeight: '700', marginBottom: '12px' } },
          h('i', { className: 'fas fa-pills', style: { marginRight: '12px' } }),
          t.drug.title
        )
      ),
      h('div', { className: 'card', style: { maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '60px 24px' } },
        h('i', { className: 'fas fa-barcode', style: { fontSize: '80px', color: '#cbd5e0', marginBottom: '24px' } }),
        h('p', { style: { fontSize: '18px', color: '#718096' } }, '약품 라벨 스캔 기능 준비 중입니다')
      )
    )
  );
}

function AtopyPage({ t }) {
  return h('div', { className: 'fade-in' },
    h('div', { className: 'container', style: { paddingTop: '40px', paddingBottom: '80px' } },
      h('div', { style: { textAlign: 'center', color: 'white', marginBottom: '40px' } },
        h('h2', { style: { fontSize: '40px', fontWeight: '700', marginBottom: '12px' } },
          h('i', { className: 'fas fa-heartbeat', style: { marginRight: '12px' } }),
          t.atopy.title
        )
      ),
      h('div', { className: 'card', style: { maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '60px 24px' } },
        h('i', { className: 'fas fa-chart-line', style: { fontSize: '80px', color: '#cbd5e0', marginBottom: '24px' } }),
        h('p', { style: { fontSize: '18px', color: '#718096' } }, '아토피 측정 기능 준비 중입니다')
      )
    )
  );
}

function DashboardPage({ t }) {
  return h('div', { className: 'fade-in' },
    h('div', { className: 'container', style: { paddingTop: '40px', paddingBottom: '80px' } },
      h('div', { style: { textAlign: 'center', color: 'white', marginBottom: '40px' } },
        h('h2', { style: { fontSize: '40px', fontWeight: '700', marginBottom: '12px' } },
          h('i', { className: 'fas fa-chart-line', style: { marginRight: '12px' } }),
          t.dashboard.title
        )
      ),
      h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' } },
        h('div', { className: 'card', style: { textAlign: 'center' } },
          h('div', { style: { fontSize: '48px', fontWeight: '800', color: '#667eea', marginBottom: '8px' } }, '124'),
          h('p', { style: { color: '#718096', fontSize: '16px' } }, t.dashboard.cases)
        ),
        h('div', { className: 'card', style: { textAlign: 'center' } },
          h('div', { style: { fontSize: '48px', fontWeight: '800', color: '#f5576c', marginBottom: '8px' } }, '8'),
          h('p', { style: { color: '#718096', fontSize: '16px' } }, t.dashboard.pending)
        ),
        h('div', { className: 'card', style: { textAlign: 'center' } },
          h('div', { style: { fontSize: '48px', fontWeight: '800', color: '#38ef7d', marginBottom: '8px' } }, '116'),
          h('p', { style: { color: '#718096', fontSize: '16px' } }, t.dashboard.completed)
        )
      ),
      h('div', { className: 'card' },
        h('h3', { style: { fontSize: '22px', fontWeight: '700', marginBottom: '16px', color: '#2d3748' } }, '최근 케이스'),
        h('div', { style: { color: '#718096', textAlign: 'center', padding: '40px' } },
          h('i', { className: 'fas fa-folder-open', style: { fontSize: '48px', marginBottom: '16px', opacity: 0.3 } }),
          h('p', null, '케이스 데이터를 불러오는 중입니다')
        )
      )
    )
  );
}

// 메인 앱
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    const storedLang = getStoredLanguage();
    setCurrentLang(storedLang);
  }, []);

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    setStoredLanguage(lang);
  };

  const t = translations[currentLang];

  return h(React.Fragment, null,
    h(Navigation, {
      currentPage,
      onPageChange: setCurrentPage,
      t,
      currentLang,
      onLanguageChange: handleLanguageChange
    }),
    currentPage === 'home' && h(HomePage, { t }),
    currentPage === 'wound' && h(WoundPage, { t }),
    currentPage === 'drug' && h(DrugPage, { t }),
    currentPage === 'atopy' && h(AtopyPage, { t }),
    currentPage === 'dashboard' && h(DashboardPage, { t })
  );
}

// 앱 마운트
const root = document.getElementById('root');
if (root) {
  const reactRoot = ReactDOM.createRoot(root);
  reactRoot.render(h(App));
}
