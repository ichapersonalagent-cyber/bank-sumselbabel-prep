/* Engine kuis: latihan (pembahasan langsung) & simulasi (timer). */
const Quiz = (() => {
  let S = null, timerId = null;

  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function soalById(id) { return ((typeof SOAL !== "undefined" ? SOAL : []) || []).find(s => s.id === id); }

  function buildList(o) {
    let list = ((typeof SOAL !== "undefined" ? SOAL : []) || []).slice();
    if (o.modul && o.modul !== "semua") list = list.filter(s => s.modul === o.modul);
    if (o.kategori && o.kategori !== "semua") list = list.filter(s => s.kategori === o.kategori);
    if (o.level && o.level !== "semua") list = list.filter(s => s.level === Number(o.level));
    if (o.onlyFav) { const f = Store.favs(); list = list.filter(s => f.includes(s.id)); }
    if (o.onlyWrong) {
      const wrong = new Set();
      Store.history().forEach(h => (h.rincian || []).forEach(r => { if (!r.benar) wrong.add(r.id); }));
      list = list.filter(s => wrong.has(s.id));
    }
    list = shuffle(list);
    if (o.jumlah && o.jumlah > 0) list = list.slice(0, Math.min(o.jumlah, list.length));
    return list;
  }

  function start(config) {
    const soal = config.soalIds.map(soalById).filter(Boolean);
    if (!soal.length) return null;
    S = {
      mode: config.mode, judul: config.judul || "Kuis",
      ids: soal.map(s => s.id),
      order: shuffle(soal.map(s => s.id)),
      answers: {}, revealed: {},
      idx: 0,
      durasiDetik: (config.durasiMenit || 0) * 60,
      endTs: config.durasiMenit ? Date.now() + config.durasiMenit * 60000 : null,
      startTs: Date.now()
    };
    persist(); render();
    return S;
  }
  function resume() {
    const q = Store.quiz();
    if (!q || !q.order || !q.order.length) return false;
    S = q; render(); return true;
  }
  function persist() { if (S) Store.setQuiz(S); }
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

  function remaining() {
    if (!S || !S.endTs) return null;
    return Math.max(0, Math.round((S.endTs - Date.now()) / 1000));
  }
  function fmt(sec) {
    sec = Math.max(0, sec);
    const m = Math.floor(sec / 60), s = sec % 60;
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }

  function cur() { return soalById(S.order[S.idx]); }

  function render() {
    stopTimer();
    const v = document.getElementById("view");
    const s = cur(), total = S.order.length, i = S.idx;
    const huruf = ["A", "B", "C", "D", "E"];
    const rem = remaining();
    if (S.mode === "simulasi" && S.endTs) {
      timerId = setInterval(() => {
        const el = document.getElementById("qtimer");
        const r = remaining();
        if (el) { el.textContent = fmt(r); el.classList.toggle("danger", r < 300); }
        if (r <= 0) { finish(true); }
      }, 1000);
    }
    const isLat = S.mode === "latihan";
    const revealed = !!S.revealed[s.id];
    const ans = S.answers[s.id];
    let opsiHtml = s.opsi.map((op, k) => {
      let cls = "opsi";
      if (revealed) {
        if (k === s.kunci) cls += " benar";
        else if (k === ans) cls += " salah";
        else cls += " mati";
      } else if (k === ans) cls += " pilih";
      const dis = (isLat && revealed) ? "disabled" : "";
      return `<button class="${cls}" data-k="${k}" ${dis}><span class="huruf">${huruf[k]}</span><span>${esc(op)}</span></button>`;
    }).join("");
    let feedback = "";
    if (isLat && revealed) {
      const ok = ans === s.kunci;
      feedback = `<div class="feedback ${ok ? "ok" : "no"}">
        <b>${ok ? "Benar!" : "Kurang tepat."}</b>
        <p><b>Pembahasan:</b> ${esc(s.pembahasan)}</p>
        <button class="btn" data-act="next">${i + 1 < total ? "Soal berikutnya →" : "Lihat hasil →"}</button>
      </div>`;
    }
    const isFav = Store.favs().includes(s.id);
    const flagged = isFav ? " aktif" : "";
    v.innerHTML = `
    <div class="quiz-head">
      <div><b>${esc(S.judul)}</b><div class="muted">Soal ${i + 1} dari ${total} · ${isLat ? "Mode latihan" : "Mode simulasi"}</div></div>
      ${S.endTs ? `<div class="timer" id="qtimer">${fmt(rem)}</div>` : ""}
    </div>
    <div class="progress"><div style="width:${Math.round(((i + 1) / total) * 100)}%"></div></div>
    <div class="card soal-card">
      <div class="soal-meta"><span class="badge">${esc(s.kategori)}</span><span class="badge lvl">Level ${s.level}</span></div>
      <p class="soal-teks">${esc(s.soal)}</p>
      <div class="opsi-list">${opsiHtml}</div>
      ${feedback}
    </div>
    <div class="quiz-nav">
      <button class="btn ghost" data-act="prev" ${i === 0 ? "disabled" : ""}>← Sebelumnya</button>
      <button class="btn ghost flag${flagged}" data-act="flag">${isFav ? "★ Ditandai" : "☆ Tandai"}</button>
      ${(!isLat || revealed) ? `<button class="btn ghost" data-act="next" ${i + 1 >= total ? "disabled" : ""}>Berikutnya →</button>` : ""}
    </div>
    <div class="quiz-foot">
      <div class="muted">Terjawab: ${Object.keys(S.answers).length}/${total}</div>
      <button class="btn primary" data-act="finish">Selesaikan</button>
    </div>`;
    v.querySelectorAll(".opsi").forEach(b => b.addEventListener("click", () => answer(Number(b.dataset.k))));
    v.querySelectorAll("[data-act]").forEach(b => b.addEventListener("click", async () => {
      const a = b.dataset.act;
      if (a === "prev") { if (S.idx > 0) { S.idx--; persist(); render(); } }
      if (a === "next") { if (S.idx < S.order.length - 1) { S.idx++; persist(); render(); } else await finish(false); }
      if (a === "flag") { Store.toggleFav(s.id); persist(); render(); }
      if (a === "finish") await finish(false);
    }));
    window.scrollTo(0, 0);
  }

  function answer(k) {
    const s = cur();
    if (S.mode === "latihan" && S.revealed[s.id]) return;
    S.answers[s.id] = k;
    if (S.mode === "latihan") S.revealed[s.id] = true;
    persist(); render();
  }

  async function finish(auto) {
    stopTimer();
    if (!S) return;
    if (!auto && S.mode === "simulasi") {
      const un = S.order.filter(id => S.answers[id] === undefined).length;
      if (un > 0) {
        const ya = await showConfirm("Selesaikan simulasi?", `Masih ada ${un} soal belum dijawab. Selesaikan sekarang?`, "Ya, selesaikan");
        if (!ya) { render(); return; }
      }
    }
    const rincian = S.order.map(id => {
      const s = soalById(id);
      return { id, benar: S.answers[id] === s.kunci, kategori: s.kategori, modul: s.modul };
    });
    const benar = rincian.filter(r => r.benar).length;
    const total = rincian.length;
    const skor = total ? Math.round((benar / total) * 100) : 0;
    const durasiDetik = Math.round((Date.now() - S.startTs) / 1000);
    const perKategori = {};
    rincian.forEach(r => {
      perKategori[r.kategori] = perKategori[r.kategori] || { benar: 0, total: 0 };
      perKategori[r.kategori].total++;
      if (r.benar) perKategori[r.kategori].benar++;
    });
    Store.addHistory({
      id: "H" + Date.now(), tgl: new Date().toISOString(),
      mode: S.mode, judul: S.judul, total, benar, skor, durasiDetik, rincian
    });
    const hasil = { judul: S.judul, mode: S.mode, total, benar, skor, durasiDetik, perKategori, order: S.order, answers: S.answers, auto };
    S = null; Store.clearQuiz();
    App.showHasil(hasil);
  }

  return { start, resume, buildList, shuffle, soalById, finish, get state() { return S; } };
})();
