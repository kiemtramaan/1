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
  return /^0\d{9}$/.test(phone);
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
  const countdownDisplay2 = document

