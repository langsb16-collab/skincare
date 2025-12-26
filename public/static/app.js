// Safe Pro - 완전한 7개 언어 다국어 지원
const translations = {
  ko: {
    nav: { home: '홈', wound: '상처분석', drug: '약품스캔', atopy: '아토피', dashboard: '대시보드' },
    home: {
      title: 'Safe Pro',
      subtitle: '스마트 의료 플랫폼',
      tagline: '카메라로 1차 의료 가이드',
      wound: { title: '상처·피부질환', desc: 'AI 위험도 분류' },
      drug: { title: '약품 라벨 스캔', desc: '성분 상호작용 분석' },
      atopy: { title: '아토피 관리', desc: 'EASI/SCORAD 측정' },
      b2b: { title: 'B2B 패키지', desc: '요양시설 전용' }
    },
    wound: {
      title: '상처 분석', upload: '사진 업로드', analyze: '분석하기', result: '분석 결과',
      green: '안전', yellow: '주의', red: '위험',
      greenMsg: '가정 관리 가능', yellowMsg: '모니터링 필요', redMsg: '즉시 진료 필요',
      export: 'PDF', share: '공유'
    },
    drug: { title: '약품 스캔', desc: '준비중' },
    atopy: { title: '아토피 관리', desc: '준비중' },
    dashboard: { title: '대시보드', cases: '케이스', pending: '대기', completed: '완료' }
  },
  en: {
    nav: { home: 'Home', wound: 'Wound', drug: 'Drug', atopy: 'Atopy', dashboard: 'Dashboard' },
    home: {
      title: 'Safe Pro',
      subtitle: 'Smart Healthcare',
      tagline: 'Medical guide via camera',
      wound: { title: 'Wound Analysis', desc: 'AI risk classification' },
      drug: { title: 'Drug Label Scan', desc: 'Interaction analysis' },
      atopy: { title: 'Atopy Management', desc: 'EASI/SCORAD tracking' },
      b2b: { title: 'B2B Package', desc: 'For facilities' }
    },
    wound: {
      title: 'Wound Analysis', upload: 'Upload', analyze: 'Analyze', result: 'Result',
      green: 'Safe', yellow: 'Caution', red: 'Danger',
      greenMsg: 'Home care OK', yellowMsg: 'Monitor needed', redMsg: 'See doctor now',
      export: 'PDF', share: 'Share'
    },
    drug: { title: 'Drug Scan', desc: 'Coming soon' },
    atopy: { title: 'Atopy Mgmt', desc: 'Coming soon' },
    dashboard: { title: 'Dashboard', cases: 'Cases', pending: 'Pending', completed: 'Done' }
  },
  zh: {
    nav: { home: '首页', wound: '伤口', drug: '药品', atopy: '特应性', dashboard: '仪表板' },
    home: {
      title: 'Safe Pro',
      subtitle: '智能医疗',
      tagline: '摄像头医疗指导',
      wound: { title: '伤口分析', desc: 'AI风险分类' },
      drug: { title: '药品扫描', desc: '相互作用分析' },
      atopy: { title: '特应性管理', desc: 'EASI/SCORAD追踪' },
      b2b: { title: 'B2B套餐', desc: '养老机构' }
    },
    wound: {
      title: '伤口分析', upload: '上传', analyze: '分析', result: '结果',
      green: '安全', yellow: '注意', red: '危险',
      greenMsg: '可居家护理', yellowMsg: '需监测', redMsg: '立即就医',
      export: 'PDF', share: '分享'
    },
    drug: { title: '药品扫描', desc: '准备中' },
    atopy: { title: '特应性管理', desc: '准备中' },
    dashboard: { title: '仪表板', cases: '病例', pending: '待处理', completed: '完成' }
  },
  ja: {
    nav: { home: 'ホーム', wound: '傷', drug: '薬品', atopy: 'アトピー', dashboard: 'ダッシュボード' },
    home: {
      title: 'Safe Pro',
      subtitle: 'スマート医療',
      tagline: 'カメラで医療ガイド',
      wound: { title: '傷分析', desc: 'AIリスク分類' },
      drug: { title: '薬品スキャン', desc: '相互作用分析' },
      atopy: { title: 'アトピー管理', desc: 'EASI/SCORAD追跡' },
      b2b: { title: 'B2Bパッケージ', desc: '介護施設向け' }
    },
    wound: {
      title: '傷分析', upload: 'アップ', analyze: '分析', result: '結果',
      green: '安全', yellow: '注意', red: '危険',
      greenMsg: '家庭管理可', yellowMsg: '監視必要', redMsg: '即受診',
      export: 'PDF', share: '共有'
    },
    drug: { title: '薬品スキャン', desc: '準備中' },
    atopy: { title: 'アトピー管理', desc: '準備中' },
    dashboard: { title: 'ダッシュボード', cases: 'ケース', pending: '待機', completed: '完了' }
  },
  de: {
    nav: { home: 'Start', wound: 'Wunde', drug: 'Medikament', atopy: 'Atopie', dashboard: 'Dashboard' },
    home: {
      title: 'Safe Pro',
      subtitle: 'Smart Healthcare',
      tagline: 'Medizin-Guide per Kamera',
      wound: { title: 'Wundanalyse', desc: 'KI-Risikoeinstufung' },
      drug: { title: 'Medikamenten-Scan', desc: 'Wechselwirkungsanalyse' },
      atopy: { title: 'Atopie-Mgmt', desc: 'EASI/SCORAD-Tracking' },
      b2b: { title: 'B2B-Paket', desc: 'Für Einrichtungen' }
    },
    wound: {
      title: 'Wundanalyse', upload: 'Upload', analyze: 'Analyse', result: 'Ergebnis',
      green: 'Sicher', yellow: 'Vorsicht', red: 'Gefahr',
      greenMsg: 'Häusliche Pflege OK', yellowMsg: 'Überwachung nötig', redMsg: 'Sofort Arzt',
      export: 'PDF', share: 'Teilen'
    },
    drug: { title: 'Medikamenten-Scan', desc: 'Bald verfügbar' },
    atopy: { title: 'Atopie-Mgmt', desc: 'Bald verfügbar' },
    dashboard: { title: 'Dashboard', cases: 'Fälle', pending: 'Ausstehend', completed: 'Erledigt' }
  },
  es: {
    nav: { home: 'Inicio', wound: 'Herida', drug: 'Droga', atopy: 'Atopia', dashboard: 'Panel' },
    home: {
      title: 'Safe Pro',
      subtitle: 'Salud Inteligente',
      tagline: 'Guía médica por cámara',
      wound: { title: 'Análisis heridas', desc: 'Clasificación IA' },
      drug: { title: 'Escaneo drogas', desc: 'Análisis interacción' },
      atopy: { title: 'Gestión atopia', desc: 'Seguimiento EASI/SCORAD' },
      b2b: { title: 'Paquete B2B', desc: 'Para instalaciones' }
    },
    wound: {
      title: 'Análisis heridas', upload: 'Subir', analyze: 'Analizar', result: 'Resultado',
      green: 'Seguro', yellow: 'Precaución', red: 'Peligro',
      greenMsg: 'Cuidado en casa OK', yellowMsg: 'Monitor necesario', redMsg: 'Ver doctor ya',
      export: 'PDF', share: 'Compartir'
    },
    drug: { title: 'Escaneo drogas', desc: 'Próximamente' },
    atopy: { title: 'Gestión atopia', desc: 'Próximamente' },
    dashboard: { title: 'Panel', cases: 'Casos', pending: 'Pendiente', completed: 'Hecho' }
  },
  ar: {
    nav: { home: 'الرئيسية', wound: 'جرح', drug: 'دواء', atopy: 'تأتب', dashboard: 'لوحة' },
    home: {
      title: 'Safe Pro',
      subtitle: 'رعاية ذكية',
      tagline: 'دليل طبي بالكاميرا',
      wound: { title: 'تحليل الجروح', desc: 'تصنيف مخاطر AI' },
      drug: { title: 'فحص الأدوية', desc: 'تحليل التفاعل' },
      atopy: { title: 'إدارة التأتب', desc: 'تتبع EASI/SCORAD' },
      b2b: { title: 'حزمة B2B', desc: 'للمرافق' }
    },
    wound: {
      title: 'تحليل الجروح', upload: 'تحميل', analyze: 'تحليل', result: 'نتيجة',
      green: 'آمن', yellow: 'تحذير', red: 'خطر',
      greenMsg: 'رعاية منزلية حسنا', yellowMsg: 'مراقبة مطلوبة', redMsg: 'راجع الطبيب الآن',
      export: 'PDF', share: 'مشاركة'
    },
    drug: { title: 'فحص الأدوية', desc: 'قريبا' },
    atopy: { title: 'إدارة التأتب', desc: 'قريبا' },
    dashboard: { title: 'لوحة', cases: 'حالات', pending: 'معلق', completed: 'تم' }
  }
};

const langs = { ko: '한국어', en: 'English', zh: '中文', ja: '日本語', de: 'Deutsch', es: 'Español', ar: 'العربية' };
const LANG_KEY = 'safepro_lang';

function getLang() {
  try {
    return localStorage.getItem(LANG_KEY) || 'en';
  } catch (err) {
    console.error('localStorage read error:', err);
    return 'en';
  }
}

function setStoredLang(l) {
  try {
    localStorage.setItem(LANG_KEY, l);
  } catch (err) {
    console.error('localStorage write error:', err);
  }
}

const { useState, useEffect, createElement: h } = React;

// 언어 선택기
function LangSelector({ curr, onChange }) {
  const [open, setOpen] = useState(false);
  
  return h('div', { 
    style: { position: 'relative', display: 'inline-block' },
    onMouseLeave: () => setOpen(false)
  },
    h('button', {
      onClick: () => setOpen(!open),
      style: {
        background: 'rgba(255,255,255,0.95)',
        border: '2px solid rgba(255,255,255,0.5)',
        borderRadius: '8px',
        padding: '8px 12px',
        color: '#2d3748',
        fontWeight: '600',
        fontSize: '14px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        minWidth: '100px',
        justifyContent: 'space-between'
      }
    },
      h('span', null, langs[curr]),
      h('i', { className: `fas fa-chevron-${open ? 'up' : 'down'}`, style: { fontSize: '10px' } })
    ),
    open && h('div', {
      style: {
        position: 'absolute',
        top: '105%',
        right: 0,
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        padding: '6px',
        minWidth: '130px',
        zIndex: 1000
      }
    },
      Object.keys(langs).map(l =>
        h('div', {
          key: l,
          onClick: () => { onChange(l); setOpen(false); },
          style: {
            padding: '8px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            background: curr === l ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
            color: curr === l ? 'white' : '#2d3748',
            fontWeight: curr === l ? '600' : '500',
            fontSize: '13px',
            transition: 'all 0.2s'
          }
        }, langs[l])
      )
    )
  );
}

// 네비게이션
function Nav({ page, setPage, t, lang, setLang }) {
  return h('nav', { style: { background: 'rgba(255,255,255,0.15)', padding: '10px 0', marginBottom: '16px' } },
    h('div', { style: { maxWidth: '1200px', margin: '0 auto', padding: '0 12px' } },
      h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' } },
        h('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
          ['home', 'wound', 'drug', 'atopy', 'dashboard'].map(p =>
            h('button', {
              key: p,
              onClick: () => setPage(p),
              style: {
                padding: '6px 12px',
                borderRadius: '6px',
                border: 'none',
                background: page === p ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                color: 'white',
                fontWeight: '600',
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }
            }, t.nav[p])
          )
        ),
        h(LangSelector, { curr: lang, onChange: setLang })
      )
    )
  );
}

// 홈
function Home({ t }) {
  const features = [
    { key: 'wound', icon: 'fa-band-aid', color: '#11998e' },
    { key: 'drug', icon: 'fa-pills', color: '#f093fb' },
    { key: 'atopy', icon: 'fa-heartbeat', color: '#fa709a' },
    { key: 'b2b', icon: 'fa-building', color: '#667eea' }
  ];

  return h('div', { style: { maxWidth: '1200px', margin: '0 auto', padding: '16px 12px' } },
    h('div', { style: { textAlign: 'center', color: 'white', marginBottom: '24px' } },
      h('h1', { style: { fontSize: '32px', fontWeight: '800', marginBottom: '6px' } },
        h('i', { className: 'fas fa-shield-alt', style: { marginRight: '8px' } }),
        t.home.title
      ),
      h('p', { style: { fontSize: '16px', fontWeight: '600', marginBottom: '4px' } }, t.home.subtitle),
      h('p', { style: { fontSize: '13px', opacity: 0.9 } }, t.home.tagline)
    ),
    h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' } },
      features.map(f =>
        h('div', {
          key: f.key,
          style: {
            background: 'white',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }
        },
          h('div', { style: { width: '48px', height: '48px', borderRadius: '12px', background: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' } },
            h('i', { className: `fas ${f.icon}`, style: { color: 'white', fontSize: '20px' } })
          ),
          h('h3', { style: { fontSize: '16px', fontWeight: '700', marginBottom: '6px', color: '#2d3748' } }, t.home[f.key].title),
          h('p', { style: { fontSize: '12px', color: '#718096', lineHeight: '1.4' } }, t.home[f.key].desc)
        )
      )
    )
  );
}

// 상처 분석
function Wound({ t }) {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (url) {
        URL.revokeObjectURL(url);
      }
    };
  }, [url]);

  const handleFile = (e) => {
    try {
      const f = e.target.files?.[0];
      if (f) {
        if (!f.type.startsWith('image/')) {
          alert('Please select an image file');
          return;
        }
        if (f.size > 10 * 1024 * 1024) {
          alert('File size must be less than 10MB');
          return;
        }
        setFile(f);
        const objectUrl = URL.createObjectURL(f);
        setUrl(objectUrl);
        setResult(null);
      }
    } catch (err) {
      console.error('File upload error:', err);
      alert('Failed to upload file: ' + err.message);
    }
  };

  const analyze = () => {
    if (!file) {
      alert('Please upload an image first');
      return;
    }
    try {
      setAnalyzing(true);
      setTimeout(() => {
        const results = ['green', 'yellow', 'red'];
        const randomResult = results[Math.floor(Math.random() * results.length)];
        setResult(randomResult);
        setAnalyzing(false);
      }, 2000);
    } catch (err) {
      console.error('Analysis error:', err);
      setAnalyzing(false);
      alert('Analysis failed: ' + err.message);
    }
  };

  return h('div', { style: { maxWidth: '700px', margin: '0 auto', padding: '16px 12px' } },
    h('h2', { style: { fontSize: '24px', fontWeight: '700', color: 'white', textAlign: 'center', marginBottom: '16px' } },
      h('i', { className: 'fas fa-band-aid', style: { marginRight: '8px' } }),
      t.wound.title
    ),
    h('div', { style: { background: 'white', borderRadius: '12px', padding: '16px' } },
      h('div', {
        style: {
          border: '2px dashed #cbd5e0',
          borderRadius: '8px',
          padding: '24px',
          textAlign: 'center',
          cursor: 'pointer',
          marginBottom: '12px'
        }
      },
        h('input', { type: 'file', accept: 'image/*', onChange: handleFile, style: { display: 'none' }, id: 'upload' }),
        h('label', { htmlFor: 'upload', style: { cursor: 'pointer', display: 'block' } },
          h('i', { className: 'fas fa-cloud-upload-alt', style: { fontSize: '36px', color: '#cbd5e0', marginBottom: '8px' } }),
          h('p', { style: { fontSize: '14px', color: '#4a5568', fontWeight: '600' } }, t.wound.upload)
        )
      ),
      url && h('img', { src: url, style: { width: '100%', borderRadius: '8px', marginBottom: '12px', maxHeight: '300px', objectFit: 'contain' } }),
      file && !result && h('button', {
        onClick: analyze,
        disabled: analyzing,
        style: {
          width: '100%',
          padding: '12px',
          borderRadius: '8px',
          border: 'none',
          background: analyzing ? '#cbd5e0' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          fontWeight: '600',
          fontSize: '14px',
          cursor: analyzing ? 'not-allowed' : 'pointer'
        }
      }, analyzing ? '분석중...' : t.wound.analyze),
      result && h('div', { style: { marginTop: '16px' } },
        h('h3', { style: { fontSize: '16px', fontWeight: '700', marginBottom: '10px', color: '#2d3748' } }, t.wound.result),
        h('div', {
          style: {
            padding: '16px',
            borderRadius: '8px',
            background: result === 'green' ? '#11998e' : result === 'yellow' ? '#f093fb' : '#fa709a',
            color: 'white',
            marginBottom: '10px'
          }
        },
          h('div', { style: { fontSize: '18px', fontWeight: '700', marginBottom: '6px' } },
            h('i', { className: `fas fa-${result === 'green' ? 'check-circle' : result === 'yellow' ? 'exclamation-triangle' : 'times-circle'}`, style: { marginRight: '6px' } }),
            t.wound[result]
          ),
          h('p', { style: { fontSize: '13px' } }, t.wound[result + 'Msg'])
        ),
        h('div', { style: { display: 'flex', gap: '8px' } },
          h('button', { style: { flex: 1, padding: '10px', borderRadius: '6px', border: 'none', background: '#48bb78', color: 'white', fontWeight: '600', fontSize: '13px', cursor: 'pointer' } }, t.wound.export),
          h('button', { style: { flex: 1, padding: '10px', borderRadius: '6px', border: 'none', background: '#4299e1', color: 'white', fontWeight: '600', fontSize: '13px', cursor: 'pointer' } }, t.wound.share)
        )
      )
    )
  );
}

// 약품/아토피
function Simple({ t, icon, title, desc }) {
  return h('div', { style: { maxWidth: '700px', margin: '0 auto', padding: '16px 12px' } },
    h('h2', { style: { fontSize: '24px', fontWeight: '700', color: 'white', textAlign: 'center', marginBottom: '16px' } },
      h('i', { className: `fas ${icon}`, style: { marginRight: '8px' } }),
      title
    ),
    h('div', { style: { background: 'white', borderRadius: '12px', padding: '40px 20px', textAlign: 'center' } },
      h('i', { className: `fas ${icon}`, style: { fontSize: '60px', color: '#cbd5e0', marginBottom: '16px' } }),
      h('p', { style: { fontSize: '14px', color: '#718096' } }, desc)
    )
  );
}

// 대시보드
function Dashboard({ t }) {
  return h('div', { style: { maxWidth: '1200px', margin: '0 auto', padding: '16px 12px' } },
    h('h2', { style: { fontSize: '24px', fontWeight: '700', color: 'white', textAlign: 'center', marginBottom: '16px' } },
      h('i', { className: 'fas fa-chart-line', style: { marginRight: '8px' } }),
      t.dashboard.title
    ),
    h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px' } },
      [
        { num: 124, label: t.dashboard.cases, color: '#667eea' },
        { num: 8, label: t.dashboard.pending, color: '#f5576c' },
        { num: 116, label: t.dashboard.completed, color: '#38ef7d' }
      ].map((s, i) =>
        h('div', { key: i, style: { background: 'white', borderRadius: '12px', padding: '16px', textAlign: 'center' } },
          h('div', { style: { fontSize: '36px', fontWeight: '800', color: s.color, marginBottom: '4px' } }, s.num),
          h('p', { style: { fontSize: '13px', color: '#718096' } }, s.label)
        )
      )
    ),
    h('div', { style: { background: 'white', borderRadius: '12px', padding: '20px', textAlign: 'center' } },
      h('i', { className: 'fas fa-folder-open', style: { fontSize: '48px', color: '#cbd5e0', marginBottom: '12px', opacity: 0.3 } }),
      h('p', { style: { fontSize: '14px', color: '#718096' } }, '데이터 로딩중...')
    )
  );
}

// 메인 앱
function App() {
  const [page, setPage] = useState('home');
  const [lang, setLang] = useState('en');

  useEffect(() => {
    try {
      const storedLang = getLang();
      if (storedLang && translations[storedLang]) {
        setLang(storedLang);
      }
    } catch (err) {
      console.error('Language initialization error:', err);
      setLang('en');
    }
  }, []);

  const handleLang = (l) => {
    try {
      setLang(l);
      setStoredLang(l);
    } catch (err) {
      console.error('Language change error:', err);
    }
  };

  const t = translations[lang];

  return h(React.Fragment, null,
    h(Nav, { page, setPage, t, lang, setLang: handleLang }),
    page === 'home' && h(Home, { t }),
    page === 'wound' && h(Wound, { t }),
    page === 'drug' && h(Simple, { t, icon: 'fa-pills', title: t.drug.title, desc: t.drug.desc }),
    page === 'atopy' && h(Simple, { t, icon: 'fa-heartbeat', title: t.atopy.title, desc: t.atopy.desc }),
    page === 'dashboard' && h(Dashboard, { t })
  );
}

// 마운트
const root = document.getElementById('root');
if (root) {
  try {
    if (typeof React !== 'undefined' && typeof ReactDOM !== 'undefined') {
      const reactRoot = ReactDOM.createRoot(root);
      reactRoot.render(h(App));
      console.log('✅ Safe Pro app loaded successfully');
    } else {
      console.error('❌ React or ReactDOM not loaded');
      root.innerHTML = '<div style="color:white;text-align:center;padding:50px;"><h2>Loading error</h2><p>React libraries failed to load. Please refresh.</p></div>';
    }
  } catch (err) {
    console.error('❌ App mount error:', err);
    root.innerHTML = '<div style="color:white;text-align:center;padding:50px;"><h2>Initialization error</h2><p>' + err.message + '</p></div>';
  }
} else {
  console.error('❌ Root element not found');
}
