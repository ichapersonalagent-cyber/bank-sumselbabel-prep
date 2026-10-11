/* Modal konfirmasi custom pengganti confirm() bawaan browser.
   API: showConfirm(judul, pesan, labelYa) -> Promise<boolean>
   true  = pengguna menekan tombol konfirmasi
   false = pengguna menekan "Batal", mengklik overlay, atau menekan Escape */
let _modalDoneAktif = null; // done() dari konfirmasi yang sedang terbuka (jika ada)

function showConfirm(judul, pesan, labelYa) {
  return new Promise(resolve => {
    let overlay = document.getElementById("modal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "modal-overlay";
      overlay.className = "modal-overlay";
      overlay.innerHTML =
        '<div class="modal-box" role="dialog" aria-modal="true">' +
          '<div class="modal-accent"></div>' +
          '<h2 class="modal-title" id="modal-title"></h2>' +
          '<p class="modal-msg" id="modal-msg"></p>' +
          '<div class="modal-actions">' +
            '<button type="button" class="btn ghost" id="modal-cancel">Batal</button>' +
            '<button type="button" class="btn primary" id="modal-ok">Ya</button>' +
          '</div>' +
        "</div>";
      document.body.appendChild(overlay);
    }

    const titleEl = overlay.querySelector("#modal-title");
    const msgEl = overlay.querySelector("#modal-msg");
    const okBtn = overlay.querySelector("#modal-ok");
    const cancelBtn = overlay.querySelector("#modal-cancel");

    let settled = false;
    function done(val) {
      if (settled) return;
      settled = true;
      if (_modalDoneAktif === done) _modalDoneAktif = null;
      overlay.classList.remove("open");
      document.removeEventListener("keydown", onKey);
      resolve(val);
    }
    function onKey(e) {
      if (e.key === "Escape") done(false);
    }

    // Jika ada konfirmasi yang masih terbuka, tutup dengan jawaban false.
    if (_modalDoneAktif) _modalDoneAktif(false);
    _modalDoneAktif = done;

    titleEl.textContent = judul || "Konfirmasi";
    msgEl.textContent = pesan || "";
    okBtn.textContent = labelYa || "Ya, lanjutkan";

    okBtn.onclick = () => done(true);
    cancelBtn.onclick = () => done(false);
    overlay.onclick = e => { if (e.target === overlay) done(false); };
    document.addEventListener("keydown", onKey);

    overlay.classList.add("open");
    // Fokus ke tombol konfirmasi agar bisa dipakai via keyboard; di HP tidak mengganggu.
    setTimeout(() => { try { okBtn.focus({ preventScroll: true }); } catch (e) {} }, 50);
  });
}
