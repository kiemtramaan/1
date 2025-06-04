/* ==================== Reset Cơ Bản ==================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  width: 100%;
  height: 100%;
}
body {
  background: #000;
  font-family: 'Share Tech Mono', monospace;
  color: #00ff00;
  overflow: hidden;
  position: relative;
}

/* ==================== Canvas Matrix Rain (phía sau) ==================== */
#matrix {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

/* ==================== Cửa sổ chính (terminal-window) ==================== */
.terminal-window {
  width: 600px;
  max-width: 90%;
  border: 2px solid #00ff00;
  border-radius: 6px;
  background: #000;
  box-shadow: 0 0 20px #00ff00;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1;
}

/* -------------------- Thanh tiêu đề -------------------- */
.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #00ff00;
  padding: 6px 10px;
  border-bottom: 2px solid #00ff00;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.title-bar .title {
  font-size: 16px;
  font-weight: bold;
  color: #000;
  text-shadow: 0 0 2px #000;
}
.window-controls {
  display: flex;
  gap: 6px;
}
.window-controls .control {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid #000;
}
.window-controls .minimize { background: #00ff00; }
.window-controls .maximize,
.window-controls .close { background: #000; }

/* -------------------- Thanh Tabs -------------------- */
.tabs {
  display: flex;
  background: #000;
  border-bottom: 2px solid #00ff00;
}
.tab {
  flex: 1;
  text-align: center;
  padding: 8px 0;
  cursor: pointer;
  position: relative;
  color: #00ff00;
  user-select: none;
  font-size: 14px;
  transition: background 0.2s;
}
.tab:hover {
  background: rgba(0, 255, 0, 0.1);
}
.tab.active {
  background: #00ff00;
  color: #000;
}
.tab.active::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #000;
}

/* ==================== Nội dung của từng Tab ==================== */
.tab-content {
  display: none;
  flex: 1;
  padding: 16px;
  background: #000;
  color: #00ff00;
  overflow-y: auto;
  flex-direction: column;
}
.tab-content.active {
  display: flex;
}

/* -------------------- Các ô input chung -------------------- */
.tab-content .field {
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.tab-content .field label {
  margin-bottom: 4px;
  color: #00ff00;
  font-weight: bold;
}
.tab-content .field input {
  width: 100%;
  max-width: 300px;
  padding: 8px 10px;
  background: rgba(0,0,0,0.6);
  border: 1px solid #00ff00;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.tab-content .field input:focus {
  border-color: #00ff00;
  box-shadow: 0 0 6px #00ff00;
}
.tab-content .field input::placeholder {
  color: #555;
}

/* ---------- Nút START chung (Tab1 & Tab2 & Tab3) ---------- */
.action-btn {
  display: inline-block;
  width: 100px;
  height: 36px;
  line-height: 36px;       /* Căn chữ dọc */
  background: transparent;
  color: #00ff00;
  border: 2px solid #00ff00;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;      /* Căn chữ ngang */
  cursor: not-allowed;
  margin-top: 14px;        /* Khoảng cách phía trên */
  margin-bottom: 16px;
  transition: all 0.2s ease;
  opacity: 0.5;
  user-select: none;
}
.action-btn.enabled {
  cursor: pointer;
  opacity: 1;
  background: rgba(0, 255, 0, 0.05);
  box-shadow: 0 0 8px #00ff00;
}
.action-btn.enabled:hover {
  background: rgba(0, 255, 0, 0.15);
}

/* ==================== Tab 1: Hai cột (Form + Ô kết quả) ==================== */
.tab1-flex {
  display: flex;
  width: 100%;
  gap: 12px;           /* Khoảng cách giữa 2 cột */
  margin-bottom: 12px;
}
.tab1-form {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.tab1-form .action-btn {
  margin-top: 4px;     /* Sát ngay dưới input cuối */
}
.tab1-countdown {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
  border-radius: 6px;
  box-shadow: 0 0 10px #00ff00;
  min-height: 190px;    /* Đủ cao để chứa nội dung */
  padding: 8px;
  text-align: center;
  user-select: none;
}
.tab1-countdown .ip-display {
  font-size: 16px;
  margin-bottom: 8px;
}
.tab1-countdown .blink {
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 0 6px #00ff00;
  animation: blinkWarning 1s steps(2, start) infinite;
  margin: 4px 0;
}

/* ==================== Tab 2: Hai cột (giữ nguyên) ==================== */
.tab2-flex {
  display: flex;
  width: 100%;
  margin-bottom: 12px;
  gap: 12px;  /* Khoảng cách giữa cột trái và cột phải */
}
.tab2-form {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.tab2-form .action-btn {
  margin-top: 4px;  /* Sát ngay dưới input cuối */
}
.tab2-countdown {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
  border-radius: 6px;
  box-shadow: 0 0 10px #00ff00;
  min-height: 150px;
  padding: 8px;
  text-align: center;
  user-select: none;
}
.tab2-countdown .blink {
  color: #00ff00;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 0 6px #00ff00;
  animation: blinkWarning 1s steps(2, start) infinite;
  margin: 4px 0;
}

/* ==================== Tab 3: Một cột (Form + Ô kết quả) ==================== */
.tab3-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}
.tab3-form .action-btn {
  margin-top: 4px;  /* Sát dưới input */
}
.tab3-countdown {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
  border-radius: 6px;
  box-shadow: 0 0 10px #00ff00;
  padding: 12px;
  min-height: 140px;
  color: #00ff00;
  user-select: none;
}
.tab3-countdown em {
  font-style: italic;
  color: #fff;
  margin-bottom: 8px;
}
.tab3-countdown .result-line {
  margin-bottom: 6px;
}
.tab3-countdown .percent {
  font-weight: bold;
  color: #00ff00;
}

/* -------------------- Animation nhấp nháy chung -------------------- */
@keyframes blinkWarning {
  50% { opacity: 0; }
  100% { opacity: 1; }
}
