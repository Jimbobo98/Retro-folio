function activateGoblinMode() {
  alert("GOBLIN MODE ACTIVATED 🟢");
}

function toggleManual() {
  document.getElementById("manualOverlay").classList.toggle("open");
}

function showTab(n) {
  document.querySelectorAll('.manual-tab').forEach(tab => tab.style.display = 'none');
  document.getElementById('tab' + n).style.display = 'block';
  
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-btn')[n].classList.add('active');
}