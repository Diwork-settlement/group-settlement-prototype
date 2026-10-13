/* 合作集团线上结算 — 原型交互 */

function getScenario() {
  const params = new URLSearchParams(location.search);
  return params.get('scenario') || params.get('status') || 'default';
}

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('show');
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('show');
}

function toggleFeeGroup(header) {
  header.closest('.fee-group').classList.toggle('collapsed');
}

function toast(msg) {
  let t = document.getElementById('proto-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'proto-toast';
    t.style.cssText = 'position:fixed;top:24px;left:50%;transform:translateX(-50%);background:#333;color:#fff;padding:10px 20px;border-radius:4px;font-size:13px;z-index:9999;opacity:0;transition:opacity .2s';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; }, 2000);
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('show');
  }
});
