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
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Bỏ active trên tất cả tab
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    // Gán active cho tab hiện tại
    tab.classList.add('active');
    // Ẩn hết nội dung tab-content
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    // Hiển thị nội dung tab được chọn
    const tabId = tab.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});

// =========================
// 3. Tạo IP ngẫu nhiên (10–12 chữ số, 4 đoạn)
// =========================
function generateRandomIP() {
  const totalLength = Math.floor(Math.random() * 3) + 10; // 10, 11 hoặc 12
  let segs;
  while (true) {
    const a = Math.floor(Math.random() * 3) + 1;
    const b = Math.floor(Math.random() * 3) + 1;
    const c = Math.floor(Math.random() * 3) + 1;
    const sum3 = a + b + c;
    const d = totalLength - sum3;
    if (d >= 1 && d <= 3) {
      segs = [a, b, c, d];
      break;
    }
  }
  const parts = segs.map(len => {
    let s = "";
    for (let i = 0; i < len; i++) {
      s += Math.floor(Math.random() * 10).toString();
    }
    return s;
  });
  return parts.join(".");
}

// =========================
// 4. Tạo mã ẨN (10 ký tự, chữ hoa + số)
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
// 5. Tạo số phần trăm ngẫu nhiên trong khoảng [min, max]
// =========================
function randomPercent(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// =========================
// 6. Validation chung
// =========================
function validatePhone(phone) {
  return /^0\\d{9}$/.test(phone);
}
function validatePortOrAccount(text) {
  return /^[A-Za-z0-9]{4,}$/.test(text);
}

document.addEventListener('DOMContentLoaded', () => {
  // ----- Tab 1 (Kiểm tra mã Ẩn) -----
  const phoneInput1 = document.getElementById('phone');
  const portInput1  = document.getElementById('game-port');
  const accInput1   = document.getElementById('game-account');
  const startBtn1   = document.getElementById('start-btn1');
  const ipDisplay1  = document.getElementById('ip-display1');
  const countdownDisplay1 = document.getElementById('countdown-display1');

  // ----- Tab 2 (Xóa mã Ẩn) -----
  const phoneInput2       = document.getElementById('del-phone');
  const portInput2        = document.getElementById('del-game-port');
  const accInput2         = document.getElementById('del-game-account');
  const startBtn2         = document.getElementById('start-btn2');
  const ipDisplay2        = document.getElementById('ip-display2');
  const countdownDisplay2 = document.getElementById('countdown-display2');

  // ----- Tab 3 (Kiểm tra cổng game) -----
  const portInput3        = document.getElementById('check-port');
  const startBtn3         = document.getElementById('start-btn3');
  const countdownDisplay3 = document.getElementById('countdown-display3');

  // Danh sách cổng mặc định (viết hoa)
  const defaultPorts = ['AE888', 'ST666', 'DAGA', 'KV999'];

  // Kiểm tra enable START (Tab1)
  function checkTab1Valid() {
    const phone = phoneInput1.value.trim();
    const port  = portInput1.value.trim();
    const acc   = accInput1.value.trim();
    if ( validatePhone(phone)
      && validatePortOrAccount(port)
      && validatePortOrAccount(acc) ) {
      startBtn1.disabled = false;
      startBtn1.classList.add('enabled');
    } else {
      startBtn1.disabled = true;
      startBtn1.classList.remove('enabled');
    }
  }
  // Kiểm tra enable START (Tab2)
  function checkTab2Valid() {
    const phone = phoneInput2.value.trim();
    const port  = portInput2.value.trim();
    const acc   = accInput2.value.trim();
    if ( validatePhone(phone)
      && validatePortOrAccount(port)
      && validatePortOrAccount(acc) ) {
      startBtn2.disabled = false;
      startBtn2.classList.add('enabled');
    } else {
      startBtn2.disabled = true;
      startBtn2.classList.remove('enabled');
    }
  }
  // Kiểm tra enable START (Tab3)
  function checkTab3Valid() {
    const portVal = portInput3.value.trim();
    if (portVal.length > 0) {
      startBtn3.disabled = false;
      startBtn3.classList.add('enabled');
    } else {
      startBtn3.disabled = true;
      startBtn3.classList.remove('enabled');
    }
  }

  // Bắt sự kiện input Tab1
  phoneInput1.addEventListener('input', checkTab1Valid);
  portInput1.addEventListener('input', checkTab1Valid);
  accInput1.addEventListener('input', checkTab1Valid);

  // Bắt sự kiện input Tab2
  phoneInput2.addEventListener('input', checkTab2Valid);
  portInput2.addEventListener('input', checkTab2Valid);
  accInput2.addEventListener('input', checkTab2Valid);

  // Bắt sự kiện input Tab3
  portInput3.addEventListener('input', checkTab3Valid);

  // ===== Xử lý START Tab1 =====
  startBtn1.addEventListener('click', () => {
    // Reset IP & countdown bên phải
    ipDisplay1.textContent = "";
    countdownDisplay1.innerHTML = `<div><em>Vui lòng chờ 5 giây...</em></div>`;

    let countdown = 5;
    const timer1 = setInterval(() => {
      if (countdown > 1) {
        countdown--;
        countdownDisplay1.innerHTML = `<div><em>Vui lòng chờ ${countdown} giây...</em></div>`;
      } else {
        clearInterval(timer1);

        // Tạo IP và kiểm tra cổng
        const ip = generateRandomIP();
        const portVal = portInput1.value.trim().toUpperCase();
        ipDisplay1.innerHTML = `<strong>IP:</strong> ${ip}`;

        if (defaultPorts.includes(portVal)) {
          // Nếu cổng nằm trong list: hiển thị TÀI KHOẢN KHÔNG CÓ MÃ ẨN (màu xanh)
          countdownDisplay1.innerHTML = `
            <div style="color: #00ff00;"><strong>TÀI KHOẢN KHÔNG CÓ MÃ ẨN</strong></div>
          `;
        } else {
          // Ngược lại: hiển thị cảnh báo + mã ẩn
          const code = generateCode(10);
          countdownDisplay1.innerHTML = `
            <div><strong>CẢNH BÁO TÀI KHOẢN CHỨ MÃ ẨN</strong></div>
            <div class="blink">${code}</div>
          `;
        }
      }
    }, 1000);
  });

  // ===== Xử lý START Tab2 (Xóa mã Ẩn) =====
  startBtn2.addEventListener('click', () => {
    // Reset IP & countdown bên phải
    ipDisplay2.textContent = "";
    countdownDisplay2.innerHTML = `<div><em>Vui lòng chờ 5 giây...</em></div>`;

    let countdown2 = 5;
    const timer2 = setInterval(() => {
      if (countdown2 > 1) {
        countdown2--;
        countdownDisplay2.innerHTML = `<div><em>Vui lòng chờ ${countdown2} giây...</em></div>`;
      } else {
        clearInterval(timer2);

        const ip = generateRandomIP();
        const portVal = portInput2.value.trim().toUpperCase();
        ipDisplay2.innerHTML = `<strong>IP:</strong> ${ip}`;

        if (defaultPorts.includes(portVal)) {
          // Nếu cổng nằm trong list: hiển thị TÀI KHOẢN KHÔNG CÓ MÃ ẨN (màu xanh)
          countdownDisplay2.innerHTML = `
            <div style="color: #00ff00;"><strong>TÀI KHOẢN KHÔNG CÓ MÃ ẨN</strong></div>
          `;
        } else {
          // Ngược lại: cảnh báo không thể xóa mã ẩn
          countdownDisplay2.innerHTML = `
            <div class="blink">CẢNH BÁO</div>
            <div class="blink">KHÔNG THỂ XÓA MÃ ẨN</div>
          `;
        }
      }
    }, 1000);
  });

  // ===== Xử lý START Tab3 (Kiểm tra cổng game) =====
  startBtn3.addEventListener('click', () => {
    const portVal = portInput3.value.trim().toUpperCase();
    // Hiển thị đếm ngược
    countdownDisplay3.innerHTML = `<div><em>Vui lòng chờ 5 giây...</em></div>`;

    let countdown3 = 5;
    const timer3 = setInterval(() => {
      if (countdown3 > 1) {
        countdown3--;
        countdownDisplay3.innerHTML = `<div><em>Vui lòng chờ ${countdown3} giây...</em></div>`;
      } else {
        clearInterval(timer3);

        let positionText, uyTinPercent, maAnPercent;
        if (defaultPorts.includes(portVal)) {
          positionText = 'Quốc tế';
          uyTinPercent  = randomPercent(90, 99);
          maAnPercent   = 0;
        } else {
          positionText = 'Cambodia';
          uyTinPercent  = randomPercent(40, 50);
          maAnPercent   = randomPercent(70, 98);
        }

        countdownDisplay3.innerHTML = `
          <div class="result-line"><strong>Vị trí_</strong> ${positionText}</div>
          <div class="result-line"><strong>% Uy tín_</strong> <span class="percent">${uyTinPercent}%</span></div>
          <div class="result-line"><strong>% Mã ẩn_</strong> <span class="percent">${maAnPercent}%</span></div>
        `;
      }
    }, 1000);
  });
});
