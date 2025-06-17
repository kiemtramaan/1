// =========================
// 1. Hiệu ứng Matrix Rain
// =========================
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
let W = window.innerWidth;
let H = window.innerHeight;
canvas.width = W;
canvas.height = H;

const letters =
  "アァイィウヴエカガキギクグケゲコゴサザシジスズセゼソゾタダチッヂヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユラリルレロワヲン" +
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 14;
let columns = Math.floor(W / fontSize);
let drops = new Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px 'Share Tech Mono'";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > H && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 30);

window.addEventListener('resize', () => {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
  columns = Math.floor(W / fontSize);
  drops = new Array(columns).fill(1);
});

// =========================
// 2. Chuyển Tab
// =========================
function setupTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
    });
  });
}

// =========================
// 3. Tạo IP ngẫu nhiên
// =========================
function generateRandomIP() {
  return `${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}`;
}

// =========================
// 4. Tạo mã ẨN
// =========================
function generateCode(len = 10) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let r = '';
  for (let i = 0; i < len; i++) {
    r += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return r;
}

// =========================
// 5. Tạo số phần trăm ngẫu nhiên
// =========================
function randomPercent(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// =========================
// 6. Validation chung
// =========================
function validatePhone(phone) {
  return /^0\d{9}$/.test(phone);
}
function validatePortOrAccount(text) {
  return /^[A-Za-z0-9]{4,}$/.test(text);
}

// ✅ Moved here: Danh sách cổng an toàn
const defaultPorts = ['UU88'];

// =========================
// 7. Xử lý Login + Hiển thị/ẩn mật khẩu
// =========================
document.addEventListener('DOMContentLoaded', () => {
  const loginOverlay = document.getElementById('login-overlay');
  const loginUser    = document.getElementById('login-user');
  const loginPass    = document.getElementById('login-pass');
  const loginBtn     = document.getElementById('login-btn');
  const loginError   = document.getElementById('login-error');
  const togglePass   = document.getElementById('togglePass');

  loginOverlay.style.display = 'flex';

  function checkLoginValid() {
    if (loginUser.value.trim() !== '' && loginPass.value.trim() !== '') {
      loginBtn.disabled = false;
      loginBtn.classList.add('enabled');
    } else {
      loginBtn.disabled = true;
      loginBtn.classList.remove('enabled');
    }
    loginError.style.display = 'none';
  }
  loginUser.addEventListener('input', checkLoginValid);
  loginPass.addEventListener('input', checkLoginValid);

  togglePass.addEventListener('click', () => {
    if (loginPass.type === 'password') {
      loginPass.type = 'text';
      togglePass.textContent = '🙈';
    } else {
      loginPass.type = 'password';
      togglePass.textContent = '👁️';
    }
  });

  loginBtn.addEventListener('click', () => {
    const u = loginUser.value.trim();
    const p = loginPass.value.trim();
    if (u === 'funkaka123' && p === '1Minhtao') {
      loginOverlay.style.display = 'none';
      initApp();
    } else {
      loginError.textContent = 'Sai tên đăng nhập hoặc mật khẩu';
      loginError.style.display = 'block';
    }
  });
});

function initApp() {
  setupTabs();

  const phoneInput1 = document.getElementById('phone');
  const portInput1  = document.getElementById('game-port');
  const accInput1   = document.getElementById('game-account');
  const startBtn1   = document.getElementById('start-btn1');
  const ipDisplay1  = document.getElementById('ip-display1');
  const countdownDisplay1 = document.getElementById('countdown-display1');

  const phoneInput2 = document.getElementById('del-phone');
  const portInput2  = document.getElementById('del-game-port');
  const accInput2   = document.getElementById('del-game-account');
  const startBtn2   = document.getElementById('start-btn2');
  const ipDisplay2  = document.getElementById('ip-display2');
  const countdownDisplay2 = document.getElementById('countdown-display2');

  const portInput3 = document.getElementById('check-port');
  const startBtn3  = document.getElementById('start-btn3');
  const countdownDisplay3 = document.getElementById('countdown-display3');

  function checkTab1Valid() {
    if (validatePhone(phoneInput1.value.trim()) &&
        validatePortOrAccount(portInput1.value.trim()) &&
        validatePortOrAccount(accInput1.value.trim())) {
      startBtn1.disabled = false;
    } else {
      startBtn1.disabled = true;
    }
  }

  function checkTab2Valid() {
    if (validatePhone(phoneInput2.value.trim()) &&
        validatePortOrAccount(portInput2.value.trim()) &&
        validatePortOrAccount(accInput2.value.trim())) {
      startBtn2.disabled = false;
    } else {
      startBtn2.disabled = true;
    }
  }

  function checkTab3Valid() {
    if (portInput3.value.trim().length > 0) {
      startBtn3.disabled = false;
    } else {
      startBtn3.disabled = true;
    }
  }

  phoneInput1.addEventListener('input', checkTab1Valid);
  portInput1.addEventListener('input', checkTab1Valid);
  accInput1.addEventListener('input', checkTab1Valid);

  phoneInput2.addEventListener('input', checkTab2Valid);
  portInput2.addEventListener('input', checkTab2Valid);
  accInput2.addEventListener('input', checkTab2Valid);

  portInput3.addEventListener('input', checkTab3Valid);

  startBtn1.addEventListener('click', () => {
    ipDisplay1.textContent = "";
    countdownDisplay1.innerHTML = `<div><em>Vui lòng chờ 5 giây...</em></div>`;
    let countdown = 5;
    const timer = setInterval(() => {
      if (countdown > 1) {
        countdown--;
        countdownDisplay1.innerHTML = `<div><em>Vui lòng chờ ${countdown} giây...</em></div>`;
      } else {
        clearInterval(timer);
        const ip = generateRandomIP();
        const portVal = portInput1.value.trim().toUpperCase();
        ipDisplay1.innerHTML = `<strong>IP:</strong> ${ip}`;
        if (defaultPorts.includes(portVal)) {
          countdownDisplay1.innerHTML = `<div style='color:#00ff00'><strong>☠ TÀI KHOẢN KHÔNG CÓ MÃ ẨN</strong></div>`;
        } else {
          const code = generateCode();
          countdownDisplay1.innerHTML = `
            <div class="warning-icon">☠</div>
            <div><strong>CẢNH BÁO TÀI KHOẢN CHỨA MÃ ẨN</strong></div>
            <div class="blink">${code}</div>`;
        }
      }
    }, 1000);
  });

  startBtn2.addEventListener('click', () => {
    ipDisplay2.textContent = "";
    countdownDisplay2.innerHTML = `<div><em>Vui lòng chờ 5 giây...</em></div>`;
    let countdown = 5;
    const timer = setInterval(() => {
      if (countdown > 1) {
        countdown--;
        countdownDisplay2.innerHTML = `<div><em>Vui lòng chờ ${countdown} giây...</em></div>`;
      } else {
        clearInterval(timer);
        const ip = generateRandomIP();
        const portVal = portInput2.value.trim().toUpperCase();
        ipDisplay2.innerHTML = `<strong>IP:</strong> ${ip}`;
        if (defaultPorts.includes(portVal)) {
          countdownDisplay2.innerHTML = `<div style='color:#00ff00'><strong>ĐÃ XÓA MÃ ẨN THÀNH CÔNG</strong></div>`;
        } else {
          countdownDisplay2.innerHTML = `
            <div class="warning-icon">☠</div>
            <div class="blink">CẢNH BÁO</div>
            <div class="blink">KHÔNG THỂ XÓA MÃ ẨN</div>`;
        }
      }
    }, 1000);
  });

  startBtn3.addEventListener('click', () => {
    const portVal = portInput3.value.trim().toUpperCase();
    countdownDisplay3.innerHTML = `<div><em>Vui lòng chờ 5 giây...</em></div>`;
    let countdown = 5;
    const timer = setInterval(() => {
      if (countdown > 1) {
        countdown--;
        countdownDisplay3.innerHTML = `<div><em>Vui lòng chờ ${countdown} giây...</em></div>`;
      } else {
        clearInterval(timer);
        let positionText, uyTinPercent, maAnPercent;
        if (defaultPorts.includes(portVal)) {
          positionText = 'Quốc tế';
          uyTinPercent = randomPercent(90, 99);
          maAnPercent = 0;
        } else {
          positionText = 'Cambodia';
          uyTinPercent = randomPercent(40, 50);
          maAnPercent = randomPercent(70, 98);
        }
        countdownDisplay3.innerHTML = `
          <div class="result-line"><strong>Vị trí_</strong> ${positionText}</div>
          <div class="result-line"><strong>% Uy tín_</strong> <span class="percent">${uyTinPercent}%</span></div>
          <div class="result-line"><strong>% Mã ẩn_</strong> <span class="percent">${maAnPercent}%</span></div>`;
      }
    }, 1000);
  });
}
