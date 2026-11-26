// =========================================================================
// Desmos Graphing Calculator Widget (Official Digital SAT Version)
// Provides a unified, draggable, resizable Desmos calculator across all test screens
// =========================================================================
(function() {
  if (window.__desmosWidgetInitialized) return;
  window.__desmosWidgetInitialized = true;

  // Global toggle function declared early so any inline onclick finds it
  window.toggleDesmosCalculator = function() {
    ensureDesmosReady();
    const w = document.getElementById('desmosWindow');
    if (!w) return;
    const isOpen = w.classList.toggle('open');
    updateButtonsState(isOpen);
  };

  function updateButtonsState(isOpen) {
    const allBtns = document.querySelectorAll('.desmos-btn-pill, #btnCalc, .btn-calc');
    allBtns.forEach(b => {
      if (isOpen) b.classList.add('active');
      else b.classList.remove('active');
    });
  }

  let frameLoaded = false;
  function ensureDesmosReady() {
    const frame = document.getElementById('desmosFrame');
    const loader = document.getElementById('desmosLoader');
    if (frame && !frameLoaded) {
      frameLoaded = true;
      frame.src = 'https://www.desmos.com/testing/cb-digital-sat/graphing';
      frame.onload = function() {
        if (loader) {
          loader.style.opacity = '0';
          setTimeout(() => { loader.style.display = 'none'; }, 250);
        }
      };
    }
  }

  function initDesmos() {
    // 1. Inject Styles
    if (!document.getElementById('desmos-widget-style')) {
      const style = document.createElement('style');
      style.id = 'desmos-widget-style';
      style.textContent = `
        /* Desmos Tool Button */
        .desmos-btn-pill {
          display: inline-flex !important;
          align-items: center;
          gap: 6px;
          background: #eff6ff !important;
          color: #2563eb !important;
          border: 1.5px solid #93c5fd !important;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
          font-size: 0.84rem !important;
          font-weight: 700 !important;
          padding: 6px 14px !important;
          border-radius: 8px !important;
          cursor: pointer !important;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
          user-select: none !important;
          white-space: nowrap !important;
          box-shadow: 0 1px 3px rgba(37, 99, 235, 0.1) !important;
          text-decoration: none !important;
          line-height: 1.4 !important;
          margin: 0 6px !important;
          vertical-align: middle !important;
          z-index: 9999;
        }
        .desmos-btn-pill:hover {
          background: #2563eb !important;
          color: #ffffff !important;
          border-color: #2563eb !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25) !important;
        }
        .desmos-btn-pill.active, #btnCalc.active {
          background: #1d4ed8 !important;
          color: #ffffff !important;
          border-color: #1d4ed8 !important;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2) !important;
        }
        .desmos-floating-trigger {
          position: fixed;
          top: 14px;
          right: 170px;
          z-index: 999999;
        }

        /* Desmos Draggable Window */
        #desmosWindow {
          position: fixed;
          top: 65px;
          right: 24px;
          width: 600px;
          max-width: calc(100vw - 32px);
          height: 540px;
          max-height: calc(100vh - 85px);
          background: #ffffff;
          border-radius: 12px;
          border: 1.5px solid #cbd5e1;
          box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.45), 0 0 0 1px rgba(15, 23, 42, 0.08);
          z-index: 10000000;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          resize: both;
          min-width: 350px;
          min-height: 320px;
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
          transform: scale(0.96) translateY(-8px);
          transition: opacity 0.18s cubic-bezier(0.16, 1, 0.3, 1), transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.18s;
        }
        #desmosWindow.open {
          visibility: visible !important;
          opacity: 1 !important;
          pointer-events: auto !important;
          transform: scale(1) translateY(0) !important;
        }
        #desmosWindow.maximized {
          top: 10px !important;
          left: 10px !important;
          right: 10px !important;
          bottom: 10px !important;
          width: calc(100vw - 20px) !important;
          height: calc(100vh - 20px) !important;
          max-width: none !important;
          max-height: none !important;
          border-radius: 8px !important;
          resize: none !important;
        }

        .desmos-win-hdr {
          background: #0f172a;
          color: #f8fafc;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: grab;
          user-select: none;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.2px;
          border-bottom: 1px solid #334155;
          flex-shrink: 0;
        }
        .desmos-win-hdr:active {
          cursor: grabbing;
        }
        .desmos-win-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .desmos-win-badge {
          background: #2563eb;
          color: #fff;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .desmos-win-ctrls {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .desmos-ctrl-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 15px;
          line-height: 1;
          transition: all 0.15s;
        }
        .desmos-ctrl-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
        }
        .desmos-ctrl-btn.close:hover {
          background: #ef4444;
          color: #ffffff;
        }
        .desmos-win-body {
          flex: 1;
          width: 100%;
          height: 100%;
          min-height: 0;
          background: #ffffff;
          position: relative;
        }
        .desmos-win-body iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }
        .desmos-loader {
          position: absolute;
          inset: 0;
          background: #f8fafc;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #475569;
          font-size: 0.9rem;
          font-weight: 600;
          transition: opacity 0.25s ease;
          z-index: 5;
        }
        .desmos-spinner {
          width: 32px;
          height: 32px;
          border: 3.5px solid #e2e8f0;
          border-top-color: #2563eb;
          border-radius: 50%;
          animation: desmosSpin 0.8s linear infinite;
        }
        @keyframes desmosSpin {
          to { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }

    // 2. Build DOM for Draggable Desmos Window if not present
    let win = document.getElementById('desmosWindow');
    if (!win && document.body) {
      win = document.createElement('div');
      win.id = 'desmosWindow';
      win.innerHTML = `
        <div class="desmos-win-hdr" id="desmosDragHdr">
          <div class="desmos-win-title">
            <span>📐</span>
            <span>Desmos Graphing Calculator</span>
            <span class="desmos-win-badge">Digital SAT</span>
          </div>
          <div class="desmos-win-ctrls">
            <button class="desmos-ctrl-btn" id="desmosMinBtn" title="Minimize">—</button>
            <button class="desmos-ctrl-btn" id="desmosMaxBtn" title="Maximize/Restore">🗖</button>
            <button class="desmos-ctrl-btn close" id="desmosCloseBtn" title="Close Calculator">&times;</button>
          </div>
        </div>
        <div class="desmos-win-body">
          <div class="desmos-loader" id="desmosLoader">
            <div class="desmos-spinner"></div>
            <span>Loading Digital SAT Desmos Calculator...</span>
          </div>
          <iframe id="desmosFrame" src="about:blank" title="Desmos Graphing Calculator" allow="clipboard-read; clipboard-write"></iframe>
        </div>
      `;
      document.body.appendChild(win);

      // Event Listeners for Header Controls
      document.getElementById('desmosCloseBtn').onclick = () => window.toggleDesmosCalculator();
      document.getElementById('desmosMinBtn').onclick = () => window.toggleDesmosCalculator();
      document.getElementById('desmosMaxBtn').onclick = () => {
        win.classList.toggle('maximized');
      };

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && win.classList.contains('open')) {
          window.toggleDesmosCalculator();
        }
      });

      // Draggable window physics
      const hdr = document.getElementById('desmosDragHdr');
      const frame = document.getElementById('desmosFrame');
      let isDragging = false;
      let startX = 0, startY = 0;
      let initialLeft = 0, initialTop = 0;

      hdr.addEventListener('mousedown', (e) => {
        if (e.target.closest('.desmos-ctrl-btn')) return;
        if (win.classList.contains('maximized')) return;
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        const rect = win.getBoundingClientRect();
        initialLeft = rect.left;
        initialTop = rect.top;
        win.style.right = 'auto';
        win.style.bottom = 'auto';
        win.style.left = initialLeft + 'px';
        win.style.top = initialTop + 'px';
        // Disable iframe pointer events during drag so mousemove doesn't get captured
        if (frame) frame.style.pointerEvents = 'none';
        document.body.style.userSelect = 'none';

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      });

      function onMouseMove(e) {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newLeft = Math.max(0, Math.min(window.innerWidth - win.offsetWidth, initialLeft + dx));
        const newTop = Math.max(0, Math.min(window.innerHeight - 40, initialTop + dy));
        win.style.left = newLeft + 'px';
        win.style.top = newTop + 'px';
      }

      function onMouseUp() {
        if (!isDragging) return;
        isDragging = false;
        if (frame) frame.style.pointerEvents = 'auto';
        document.body.style.userSelect = '';
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }
    }

    // 3. Attach or wire Button on page
    attachButton();
  }

  function attachButton() {
    // If page already has #btnCalc (e.g. in sat_hard_mock_*.html)
    const existingBtn = document.getElementById('btnCalc');
    if (existingBtn) {
      existingBtn.style.display = 'inline-flex';
      existingBtn.onclick = function(e) {
        if (e) e.preventDefault();
        window.toggleDesmosCalculator();
      };
      // remove old static calcModal if present
      const oldModal = document.getElementById('calcModal');
      if (oldModal) oldModal.remove();
      return;
    }

    // If already attached our header button, return
    if (document.getElementById('desmosHeaderBtn')) return;

    // Try finding header tools, hdr-tools, or timer
    const targets = [
      document.querySelector('.hdr-tools'),
      document.querySelector('.hdr-right'),
      document.querySelector('.header-tools'),
      document.querySelector('.header-right'),
      document.querySelector('.nav-right'),
      document.querySelector('.tools'),
      document.getElementById('timerBox'),
      document.querySelector('.timerBox'),
      document.querySelector('.timer'),
      document.querySelector('header .timer'),
      document.querySelector('.hdr-brand'),
      document.querySelector('.hdr'),
      document.querySelector('header')
    ];

    let attached = false;
    for (const t of targets) {
      if (t) {
        const btn = document.createElement('button');
        btn.id = 'desmosHeaderBtn';
        btn.type = 'button';
        btn.className = 'desmos-btn-pill';
        btn.innerHTML = '📐 Desmos Calculator';
        btn.title = 'Open Desmos Graphing Calculator (Digital SAT)';
        btn.onclick = function(e) {
          e.preventDefault();
          window.toggleDesmosCalculator();
        };

        if (t.classList && (t.classList.contains('hdr-tools') || t.classList.contains('tools'))) {
          t.insertBefore(btn, t.firstChild);
        } else if (t.id === 'timerBox' || t.classList.contains('timer')) {
          // Insert right before or after the timer
          if (t.parentElement) {
            t.parentElement.insertBefore(btn, t);
          } else {
            t.appendChild(btn);
          }
        } else if (t.parentElement && (t.parentElement.tagName === 'HEADER' || t.parentElement.classList.contains('hdr'))) {
          t.parentElement.appendChild(btn);
        } else {
          t.appendChild(btn);
        }
        attached = true;
        break;
      }
    }

    if (!attached && !document.querySelector('.desmos-floating-trigger')) {
      // Floating button in top right
      const floatWrap = document.createElement('div');
      floatWrap.className = 'desmos-floating-trigger';
      const btn = document.createElement('button');
      btn.id = 'desmosHeaderBtn';
      btn.type = 'button';
      btn.className = 'desmos-btn-pill';
      btn.innerHTML = '📐 Desmos Calculator';
      btn.title = 'Open Desmos Graphing Calculator (Digital SAT)';
      btn.onclick = function(e) {
        e.preventDefault();
        window.toggleDesmosCalculator();
      };
      floatWrap.appendChild(btn);
      document.body.appendChild(floatWrap);
    }
  }

  // Ensure DOM is ready before building elements
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDesmos);
  } else {
    initDesmos();
  }

  // Fallback observer: if dynamic routing or module changes re-render headers
  setInterval(() => {
    if (!document.body) return;
    const existingBtn = document.getElementById('btnCalc');
    if (existingBtn) {
      if (existingBtn.style.display === 'none' && !document.getElementById('breakScreen')?.classList?.contains('open')) {
        existingBtn.style.display = 'inline-flex';
      }
    } else if (!document.getElementById('desmosHeaderBtn') && !document.querySelector('.desmos-floating-trigger')) {
      attachButton();
    }
  }, 1000);
})();
