import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

const app = new Hono();

// 정적 파일 제공
app.use('/static/*', serveStatic({ root: './' }));

// 루트 경로 HTML 반환
app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Safe Pro - Smart Healthcare Platform</title>
  <link rel="icon" href="/static/favicon.ico" type="image/x-icon">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; }
    .container { max-width: 1400px; margin: 0 auto; padding: 0 20px; }
    .card { background: white; border-radius: 16px; padding: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .card:hover { transform: translateY(-5px); box-shadow: 0 15px 50px rgba(0,0,0,0.15); }
    .btn { padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; border: none; display: inline-block; }
    .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
    .btn-primary:hover { transform: scale(1.05); box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4); }
    .risk-green { background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; }
    .risk-yellow { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; }
    .risk-red { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); color: white; }
    .nav-link { padding: 10px 16px; border-radius: 8px; color: white; text-decoration: none; font-weight: 500; transition: all 0.3s ease; display: inline-block; cursor: pointer; }
    .nav-link:hover { background: rgba(255,255,255,0.2); transform: scale(1.05); }
    .nav-link.active { background: rgba(255,255,255,0.3); }
    .language-selector { position: relative; display: inline-block; }
    .language-dropdown { background: rgba(255, 255, 255, 0.95); border-radius: 8px; padding: 12px 16px; color: #4a5568; font-weight: 600; cursor: pointer; border: 2px solid rgba(255,255,255,0.3); transition: all 0.3s ease; display: flex; align-items: center; gap: 8px; }
    .language-dropdown:hover { background: white; border-color: rgba(255,255,255,0.5); }
    .language-menu { position: absolute; top: 110%; right: 0; background: white; border-radius: 8px; box-shadow: 0 10px 40px rgba(0,0,0,0.15); padding: 8px; min-width: 180px; z-index: 1000; display: none; }
    .language-menu.open { display: block; }
    .language-option { padding: 10px 16px; border-radius: 6px; cursor: pointer; transition: all 0.2s ease; color: #2d3748; font-weight: 500; }
    .language-option:hover { background: #f7fafc; color: #667eea; }
    .language-option.active { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
    .feature-icon { width: 64px; height: 64px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 28px; margin-bottom: 16px; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .fade-in { animation: fadeIn 0.6s ease-out; }
    .upload-zone { border: 3px dashed #cbd5e0; border-radius: 12px; padding: 40px; text-align: center; cursor: pointer; transition: all 0.3s ease; }
    .upload-zone:hover { border-color: #667eea; background: rgba(102, 126, 234, 0.05); }
    .upload-zone.dragover { border-color: #667eea; background: rgba(102, 126, 234, 0.1); }
  </style>
</head>
<body>
  <div id="root"></div>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script>
    // React 로드 확인 후 앱 스크립트 로드
    window.addEventListener('DOMContentLoaded', function() {
      if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
        document.body.innerHTML = '<div style="color:white;text-align:center;padding:50px;"><h1>Loading...</h1><p>React 라이브러리를 로드하는 중입니다.</p></div>';
        setTimeout(function() { location.reload(); }, 2000);
      } else {
        var script = document.createElement('script');
        script.src = '/static/app.js';
        script.onerror = function() {
          console.error('❌ Failed to load Safe Pro app');
        };
        document.body.appendChild(script);
      }
    });
  </script>
</body>
</html>`);
});

export default app;
