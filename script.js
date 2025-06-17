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
  // ... phần còn lại giữ nguyên ...
