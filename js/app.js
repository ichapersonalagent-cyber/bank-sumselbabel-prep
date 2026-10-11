/* Router & tampilan aplikasi. */
const App = (() => {
  const HURUF = ["A", "B", "C", "D", "E"];
  const MODUL_LABEL = {
    "dasar-perbankan": "Dasar Perbankan",
    "regulasi-kepatuhan": "Regulasi & Kepatuhan",
    "analisis-kredit": "Analisis Kredit",
    "slik-rasio-hitungan": "SLIK, Laporan & Rasio",
    "risiko-kesehatan-bank": "Risiko & Kesehatan Bank",
    "studi-kasus": "Studi Kasus"
  };
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, c =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  window.esc = esc;
  function materi() { return (typeof MATERI !== "undefined" ? MATERI : []) || []; }
  function soal() { return (typeof SOAL !== "undefined" ? SOAL : []) || []; }

  function navActive() {
    const h = location.hash;
    document.querySelectorAll(".bottomnav a").forEach(a => {
      const r = a.getAttribute("href").replace("#", "");
      a.classList.toggle("aktif", h === r || (r === "/dashboard" && (h === "" || h === "#/")));
    });
  }

  function route() {
    const raw = location.hash.replace(/^#/, "") || "/dashboard";
    const segs = raw.split("?")[0].split("/"); // ["", "materi", "mid", "sid?"]
    const page = segs[1] || "dashboard";
    navActive();
    switch (page) {
      case "dashboard": return vDashboard();
      case "materi": return segs[3] ? vMateriDetail(segs[2], segs[3]) : segs[2] ? vMateriDetail(segs[2]) : vMateri();
      case "latihan": return vLatihan();
      case "quiz":
        if (!Quiz.resume()) location.hash = "#/latihan";
        return;
      case "riwayat": return vRiwayat();
      case "salah": return vSalah();
      case "favorit": return vFavorit();
      case "wawancara": return vWawancara();
      case "flashcard": return vFlashcard();
      case "glosarium": return vGlosarium();
      case "rumus": return vRumus();
      case "ringkasan": return vRingkasan();
      case "checklist": return vChecklist();
      case "sumber": return vSumber();
      case "menu": return vMenu();
      default: return vDashboard();
    }
  }

  /* ---------- Dashboard ---------- */
  function materiProgress() {
    const read = Store.readMateri();
    let total = 0, done = 0;
    const perModul = {};
    materi().forEach(m => {
      perModul[m.id] = { judul: m.judul, total: 0, done: 0 };
      (m.sections || []).forEach(s => {
        total++; perModul[m.id].total++;
        if (read[s.id]) { done++; perModul[m.id].done++; }
      });
    });
    return { total, done, pct: total ? Math.round(done / total * 100) : 0, perModul };
  }
  function weakTopics() {
    const agg = {};
    Store.history().forEach(h => (h.rincian || []).forEach(r => {
      agg[r.kategori] = agg[r.kategori] || { benar: 0, total: 0 };
      agg[r.kategori].total++;
      if (r.benar) agg[r.kategori].benar++;
    }));
    return Object.entries(agg)
      .map(([k, v]) => ({ kategori: k, akurasi: Math.round(v.benar / v.total * 100), total: v.total }))
      .filter(x => x.total >= 3).sort((a, b) => a.akurasi - b.akurasi).slice(0, 5);
  }
  function vDashboard() {
    const v = document.getElementById("view");
    const mp = materiProgress();
    const hist = Store.history();
    const avg = hist.length ? Math.round(hist.slice(0, 10).reduce((a, h) => a + h.skor, 0) / Math.min(hist.length, 10)) : null;
    const weak = weakTopics();
    const q = Store.quiz();
    const bars = Object.entries(mp.perModul).map(([id, m]) => `
      <a class="mprog" href="#/materi/${id}">
        <div class="mprog-top"><b>${esc(m.judul)}</b><span>${m.done}/${m.total}</span></div>
        <div class="progress sm"><div style="width:${m.total ? Math.round(m.done / m.total * 100) : 0}%"></div></div>
      </a>`).join("");
    const riw = hist.slice(0, 5).map(h => `
      <div class="riw-item"><div><b>${esc(h.judul)}</b><div class="muted">${tgl(h.tgl)} · ${h.benar}/${h.total} benar</div></div>
      <div class="skor ${h.skor >= 70 ? "baik" : h.skor >= 50 ? "cukup" : "kurang"}">${h.skor}</div></div>`).join("");
    const weakHtml = weak.length ? weak.map(w => `
      <a class="weak-item" href="#/latihan?kategori=${encodeURIComponent(w.kategori)}">
        <span>${esc(w.kategori)}</span><b class="kurang">${w.akurasi}%</b></a>`).join("")
      : `<p class="muted">Belum ada data. Kerjakan latihan dulu, topik yang sering salah akan muncul di sini.</p>`;
    v.innerHTML = `
    <div class="hero">
      <div><h1>Siap Tes Analis Kredit</h1><p>Bank Sumsel Babel · persiapan terstruktur & bank soal</p></div>
      <div class="hero-num">${soal().length}<span>soal</span></div>
    </div>
    ${q ? `<a class="banner-lanjut" href="#/quiz">▶ Lanjutkan ${esc(q.judul)} (${q.order.length} soal)</a>` : ""}
    <div class="grid2">
      <div class="card stat"><div class="stat-num">${mp.pct}%</div><div class="muted">Progres materi</div></div>
      <div class="card stat"><div class="stat-num">${avg === null ? "–" : avg}</div><div class="muted">Rata-rata nilai</div></div>
      <div class="card stat"><div class="stat-num">${hist.length}</div><div class="muted">Tes dikerjakan</div></div>
      <div class="card stat"><div class="stat-num">${Store.favs().length}</div><div class="muted">Soal favorit</div></div>
    </div>
    <h2>Progres materi</h2><div class="card">${bars || '<p class="muted">Materi belum tersedia.</p>'}</div>
    <h2>Topik perlu diulang</h2><div class="card">${weakHtml}</div>
    <h2>Riwayat terakhir</h2><div class="card">${riw || '<p class="muted">Belum ada riwayat tes.</p>'}<a class="link-more" href="#/riwayat">Lihat semua →</a></div>
    <div class="cta-row">
      <a class="btn primary" href="#/latihan">Mulai latihan</a>
      <a class="btn" href="#/materi">Baca materi</a>
    </div>`;
  }
  function tgl(iso) {
    try { return new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }); }
    catch (e) { return ""; }
  }

  /* ---------- Materi ---------- */
  function vMateri() {
    const v = document.getElementById("view");
    const cards = materi().map(m => {
      const read = Store.readMateri();
      const done = (m.sections || []).filter(s => read[s.id]).length;
      return `<a class="card modul-card" href="#/materi/${m.id}">
        <b>${esc(m.judul)}</b><p class="muted">${esc(m.ringkas || "")}</p>
        <div class="progress sm"><div style="width:${m.sections.length ? Math.round(done / m.sections.length * 100) : 0}%"></div></div>
        <span class="muted kecil">${done}/${m.sections.length} bagian selesai</span></a>`;
    }).join("");
    v.innerHTML = `<h1>Materi Belajar</h1>
      <input id="cari" class="search" placeholder="Cari materi… (mis. CAR, 5C, SLIK)">
      <div id="hasil-cari"></div>
      <div class="modul-list">${cards || '<p class="muted">Materi belum tersedia.</p>'}</div>
      <div class="card sumber-note"><b>Catatan sumber:</b> materi latihan ini disusun untuk belajar dan <b>bukan</b> dokumen resmi bank. Fakta tentang Bank Sumsel Babel, OJK, BI, dan LPS merujuk ke sumber resmi — lihat <a href="#/sumber">Daftar Sumber</a>.</div>`;
    const inp = document.getElementById("cari");
    inp.addEventListener("input", () => {
      const q = inp.value.trim().toLowerCase();
      const box = document.getElementById("hasil-cari");
      if (q.length < 3) { box.innerHTML = ""; return; }
      const hits = [];
      materi().forEach(m => (m.sections || []).forEach(s => {
        const teks = (s.judul + " " + stripHtml(s.html) + " " + (s.poin || []).join(" ")).toLowerCase();
        if (teks.includes(q)) hits.push({ m, s });
      }));
      box.innerHTML = hits.length ? `<div class="card"><b>${hits.length} hasil:</b>` +
        hits.slice(0, 20).map(h => `<a class="hit" href="#/materi/${h.m.id}/${h.s.id}">${esc(h.m.judul)} → ${esc(h.s.judul)}</a>`).join("") + "</div>"
        : `<p class="muted">Tidak ditemukan.</p>`;
    });
  }
  function stripHtml(h) { const d = document.createElement("div"); d.innerHTML = h || ""; return d.textContent; }
  function vMateriDetail(id, anchor) {
    const m = materi().find(x => x.id === id);
    const v = document.getElementById("view");
    if (!m) { v.innerHTML = "<p>Materi tidak ditemukan.</p>"; return; }
    const read = Store.readMateri();
    const secs = (m.sections || []).map(s => `
      <div class="card section" id="sec-${s.id}">
        <div class="sec-head"><h3>${esc(s.judul)}</h3>
          <button class="btn sm ${read[s.id] ? "primary" : "ghost"}" data-sec="${s.id}">${read[s.id] ? "✓ Selesai" : "Tandai selesai"}</button></div>
        <div class="materi-html">${s.html}</div>
        ${(s.poin && s.poin.length) ? `<div class="poin"><b>Poin penting:</b><ul>${s.poin.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>` : ""}
      </div>`).join("");
    v.innerHTML = `<a class="back" href="#/materi">← Semua materi</a>
      <h1>${esc(m.judul)}</h1><p class="muted">${esc(m.ringkas || "")}</p>${secs}`;
    v.querySelectorAll("[data-sec]").forEach(b => b.addEventListener("click", () => {
      const done = Store.toggleMateri(b.dataset.sec);
      b.textContent = done ? "✓ Selesai" : "Tandai selesai";
      b.className = "btn sm " + (done ? "primary" : "ghost");
    }));
    if (anchor) {
      const el = document.getElementById("sec-" + anchor);
      if (el) setTimeout(() => el.scrollIntoView(), 50);
    }
  }

  /* ---------- Latihan setup ---------- */
  function vLatihan() {
    const v = document.getElementById("view");
    const params = new URLSearchParams((location.hash.split("?")[1] || ""));
    const preKat = params.get("kategori") || "semua";
    const mods = Object.entries(MODUL_LABEL).map(([k, l]) => `<option value="${k}">${l}</option>`).join("");
    const kats = [...new Set(soal().map(s => s.kategori))].sort()
      .map(k => `<option value="${esc(k)}" ${k === preKat ? "selected" : ""}>${esc(k)}</option>`).join("");
    v.innerHTML = `<h1>Latihan & Simulasi</h1>
    <div class="card form">
      <label>Mode
        <div class="radio-row">
          <label><input type="radio" name="mode" value="latihan" checked> Latihan <span class="muted kecil">(pembahasan langsung)</span></label>
          <label><input type="radio" name="mode" value="simulasi"> Simulasi <span class="muted kecil">(timer + nilai akhir)</span></label>
        </div></label>
      <label>Modul <select id="f-modul"><option value="semua">Semua modul</option>${mods}</select></label>
      <label>Kategori <select id="f-kat"><option value="semua">Semua kategori</option>${kats}</select></label>
      <label>Tingkat kesulitan <select id="f-level"><option value="semua">Semua</option><option value="1">1 - Mudah</option><option value="2">2 - Sedang</option><option value="3">3 - Sulit</option></select></label>
      <label>Jumlah soal <select id="f-jumlah"><option>10</option><option>20</option><option selected>30</option><option>50</option><option value="0">Semua</option></select></label>
      <label id="w-durasi" style="display:none">Durasi simulasi <select id="f-durasi"><option value="30">30 menit</option><option value="60" selected>60 menit</option><option value="90">90 menit</option><option value="120">120 menit</option></select></label>
      <button class="btn primary big" id="mulai">Mulai</button>
      <p class="muted kecil" id="info-jumlah"></p>
    </div>
    <div class="grid2">
      <a class="card link-card" href="#/salah"><b>Latihan soal yang pernah salah</b><p class="muted">Fokus ke kelemahanmu</p></a>
      <a class="card link-card" href="#/favorit"><b>Soal favorit (${Store.favs().length})</b><p class="muted">Yang kamu tandai ★</p></a>
    </div>`;
    const upd = () => {
      document.getElementById("w-durasi").style.display =
        document.querySelector('input[name=mode]:checked').value === "simulasi" ? "" : "none";
      const n = Quiz.buildList(baca()).length;
      document.getElementById("info-jumlah").textContent = `Tersedia ${n} soal sesuai filter (akan diacak).`;
    };
    const baca = () => ({
      modul: document.getElementById("f-modul").value,
      kategori: document.getElementById("f-kat").value,
      level: document.getElementById("f-level").value,
      jumlah: Number(document.getElementById("f-jumlah").value)
    });
    document.querySelectorAll('input[name=mode]').forEach(r => r.addEventListener("change", upd));
    ["f-modul", "f-kat", "f-level", "f-jumlah"].forEach(id => document.getElementById(id).addEventListener("change", upd));
    document.getElementById("mulai").addEventListener("click", () => {
      const mode = document.querySelector('input[name=mode]:checked').value;
      const f = baca();
      const list = Quiz.buildList(f);
      if (!list.length) { alert("Tidak ada soal sesuai filter."); return; }
      Quiz.start({
        mode, judul: (mode === "latihan" ? "Latihan" : "Simulasi") + " · " + list.length + " soal",
        soalIds: list.map(s => s.id),
        durasiMenit: mode === "simulasi" ? Number(document.getElementById("f-durasi").value) : 0
      });
      location.hash = "#/quiz";
    });
    upd();
  }

  /* ---------- Hasil ---------- */
  function showHasil(h) {
    const v = document.getElementById("view");
    const katRows = Object.entries(h.perKategori).map(([k, x]) => `
      <tr><td>${esc(k)}</td><td>${x.benar}/${x.total}</td><td>${Math.round(x.benar / x.total * 100)}%</td></tr>`).join("");
    const salah = h.order.map(id => ({ s: Quiz.soalById(id), j: h.answers[id] }))
      .filter(x => x.j !== x.s.kunci);
    const review = salah.map(x => `
      <div class="card review">
        <p><b>${esc(x.s.soal)}</b></p>
        <p>Jawabanmu: <span class="salah">${HURUF[x.j] || "–"}${x.j !== undefined ? ". " + esc(x.s.opsi[x.j]) : " (kosong)"}</span><br>
        Kunci: <span class="benar">${HURUF[x.s.kunci]}. ${esc(x.s.opsi[x.s.kunci])}</span></p>
        <p class="muted"><b>Pembahasan:</b> ${esc(x.s.pembahasan)}</p>
        <button class="btn sm ghost" data-fav="${x.s.id}">${Store.favs().includes(x.s.id) ? "★ Favorit" : "☆ Jadikan favorit"}</button>
      </div>`).join("");
    const menit = Math.floor(h.durasiDetik / 60), det = h.durasiDetik % 60;
    v.innerHTML = `
    <h1>Hasil ${h.mode === "simulasi" ? "Simulasi" : "Latihan"}</h1>
    <div class="card hasil-card">
      <div class="skor-besar ${h.skor >= 70 ? "baik" : h.skor >= 50 ? "cukup" : "kurang"}">${h.skor}</div>
      <p><b>${h.benar}</b> benar dari <b>${h.total}</b> soal · ${menit}m ${det}d ${h.auto ? "(waktu habis)" : ""}</p>
      <p class="muted">${h.skor >= 70 ? "Bagus! Pertahankan." : h.skor >= 50 ? "Lumayan — ulangi topik yang salah." : "Perlu banyak latihan lagi. Fokus ke pembahasan di bawah."}</p>
    </div>
    <h2>Per kategori</h2>
    <div class="card"><table class="tbl"><tr><th>Kategori</th><th>Benar</th><th>Akurasi</th></tr>${katRows}</table></div>
    <h2>Pembahasan soal yang salah (${salah.length})</h2>
    ${review || '<div class="card"><p class="benar"><b>Sempurna — tidak ada yang salah! 🎉</b></p></div>'}
    <div class="cta-row">
      <button class="btn primary" id="ulangi-salah" ${salah.length ? "" : "disabled"}>Ulangi yang salah (${salah.length})</button>
      <a class="btn" href="#/dashboard">Dashboard</a>
      <a class="btn" href="#/latihan">Latihan lagi</a>
    </div>`;
    v.querySelectorAll("[data-fav]").forEach(b => b.addEventListener("click", () => {
      const on = Store.toggleFav(b.dataset.fav);
      b.textContent = on ? "★ Favorit" : "☆ Jadikan favorit";
    }));
    const u = document.getElementById("ulangi-salah");
    if (u) u.addEventListener("click", () => {
      Quiz.start({ mode: "latihan", judul: "Ulangi soal yang salah", soalIds: salah.map(x => x.s.id), durasiMenit: 0 });
      location.hash = "#/quiz";
    });
    window.scrollTo(0, 0);
  }

  /* ---------- Riwayat / Salah / Favorit ---------- */
  function vRiwayat() {
    const v = document.getElementById("view");
    const hist = Store.history();
    v.innerHTML = `<h1>Riwayat Tes</h1>
      ${hist.length ? `<button class="btn sm ghost" id="hapus">Hapus riwayat</button>` : ""}
      <div class="card">${hist.map(h => `
        <div class="riw-item"><div><b>${esc(h.judul)}</b><div class="muted">${tgl(h.tgl)} · ${h.benar}/${h.total} · ${h.mode}</div></div>
        <div class="skor ${h.skor >= 70 ? "baik" : h.skor >= 50 ? "cukup" : "kurang"}">${h.skor}</div></div>`).join("") || '<p class="muted">Belum ada riwayat.</p>'}</div>`;
    const b = document.getElementById("hapus");
    if (b) b.addEventListener("click", () => { if (confirm("Hapus semua riwayat?")) { Store.clearHistory(); route(); } });
  }
  function vSalah() {
    const v = document.getElementById("view");
    const wrong = new Set();
    Store.history().forEach(h => (h.rincian || []).forEach(r => { if (!r.benar) wrong.add(r.id); }));
    const list = [...wrong].map(id => Quiz.soalById(id)).filter(Boolean);
    v.innerHTML = `<h1>Soal yang Pernah Salah (${list.length})</h1>
      ${list.length ? `<button class="btn primary" id="lat-salah">Latihan ${Math.min(list.length, 30)} soal ini</button>` : '<div class="card"><p class="muted">Belum ada — bagus!</p></div>'}
      ${list.map(s => `<div class="card"><p><b>${esc(s.soal)}</b></p><p class="muted">${esc(s.kategori)} · Kunci: ${HURUF[s.kunci]}</p></div>`).join("")}`;
    const b = document.getElementById("lat-salah");
    if (b) b.addEventListener("click", () => {
      const ids = Quiz.shuffle(list.map(s => s.id)).slice(0, 30);
      Quiz.start({ mode: "latihan", judul: "Latihan soal salah", soalIds: ids, durasiMenit: 0 });
      location.hash = "#/quiz";
    });
  }
  function vFavorit() {
    const v = document.getElementById("view");
    const list = Store.favs().map(id => Quiz.soalById(id)).filter(Boolean);
    v.innerHTML = `<h1>Soal Favorit (${list.length})</h1>
      ${list.length ? `<button class="btn primary" id="lat-fav">Latihan favorit</button>` : '<div class="card"><p class="muted">Tandai soal dengan ☆ saat latihan.</p></div>'}
      ${list.map(s => `<div class="card"><p><b>${esc(s.soal)}</b></p><p class="muted">${esc(s.kategori)} · Kunci: ${HURUF[s.kunci]}. ${esc(s.opsi[s.kunci])}</p>
        <button class="btn sm ghost" data-unfav="${s.id}">Hapus dari favorit</button></div>`).join("")}`;
    v.querySelectorAll("[data-unfav]").forEach(b => b.addEventListener("click", () => { Store.toggleFav(b.dataset.unfav); route(); }));
    const b = document.getElementById("lat-fav");
    if (b) b.addEventListener("click", () => {
      Quiz.start({ mode: "latihan", judul: "Latihan favorit", soalIds: Quiz.shuffle(list.map(s => s.id)), durasiMenit: 0 });
      location.hash = "#/quiz";
    });
  }

  /* ---------- Wawancara ---------- */
  function vWawancara() {
    const v = document.getElementById("view");
    const data = (typeof WAWANCARA !== "undefined" ? WAWANCARA : []) || [];
    const kat = [...new Set(data.map(w => w.kategori))];
    v.innerHTML = `<h1>Simulasi Wawancara</h1>
      <p class="muted">Latihan menjawab dengan lantang. Klik untuk melihat tips & contoh kerangka jawaban.</p>
      <div class="chip-row">${["Semua", ...kat].map((k, i) => `<button class="chip${i === 0 ? " aktif" : ""}" data-k="${esc(k)}">${esc(k)}</button>`).join("")}</div>
      <div id="wlist"></div>`;
    const render = k => {
      document.getElementById("wlist").innerHTML = data.filter(w => k === "Semua" || w.kategori === k).map((w, i) => `
        <div class="card"><p><b>${i + 1}. ${esc(w.pertanyaan)}</b></p><span class="badge">${esc(w.kategori)}</span>
        <details><summary>Tips & kerangka jawaban</summary>
          <ul>${(w.tips || []).map(t => `<li>${esc(t)}</li>`).join("")}</ul>
          ${w.contoh ? `<p class="muted"><b>Contoh kerangka:</b> ${esc(w.contoh)}</p>` : ""}
        </details></div>`).join("") || '<p class="muted">Belum ada data.</p>';
    };
    v.querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => {
      v.querySelectorAll(".chip").forEach(x => x.classList.remove("aktif"));
      c.classList.add("aktif"); render(c.dataset.k);
    }));
    render("Semua");
  }

  /* ---------- Flashcard ---------- */
  function vFlashcard() {
    const v = document.getElementById("view");
    let deck = ((typeof FLASHCARD !== "undefined" ? FLASHCARD : []) || []).slice();
    let i = 0, balik = false;
    const mods = ["Semua", ...new Set(deck.map(f => f.modul || "Umum"))];
    function draw() {
      const f = deck[i];
      document.getElementById("fc-body").innerHTML = f
        ? `<div class="fc ${balik ? "balik" : ""}" id="fc"><div class="fc-depan">${esc(f.depan)}</div><div class="fc-belakang">${esc(f.belakang)}</div></div>
           <p class="muted kecil">Ketuk kartu untuk membalik</p>`
        : `<p class="muted">Tidak ada kartu.</p>`;
      document.getElementById("fc-pos").textContent = deck.length ? `${i + 1} / ${deck.length}` : "0 / 0";
      const el = document.getElementById("fc");
      if (el) el.addEventListener("click", () => { balik = !balik; draw(); });
    }
    v.innerHTML = `<h1>Flashcard</h1>
      <div class="chip-row">${mods.map((m, x) => `<button class="chip${x === 0 ? " aktif" : ""}" data-m="${esc(m)}">${esc(m)}</button>`).join("")}</div>
      <div class="card fc-wrap"><div id="fc-body"></div>
      <div class="fc-nav"><button class="btn ghost" id="fc-prev">←</button><span id="fc-pos" class="muted"></span>
      <button class="btn ghost" id="fc-next">→</button><button class="btn sm ghost" id="fc-shuf">Acak</button></div></div>`;
    draw();
    document.getElementById("fc-prev").addEventListener("click", () => { i = (i - 1 + deck.length) % Math.max(deck.length, 1); balik = false; draw(); });
    document.getElementById("fc-next").addEventListener("click", () => { i = (i + 1) % Math.max(deck.length, 1); balik = false; draw(); });
    document.getElementById("fc-shuf").addEventListener("click", () => { deck = Quiz.shuffle(deck); i = 0; balik = false; draw(); });
    v.querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => {
      v.querySelectorAll(".chip").forEach(x => x.classList.remove("aktif"));
      c.classList.add("aktif");
      const m = c.dataset.m;
      deck = ((typeof FLASHCARD !== "undefined" ? FLASHCARD : []) || []).filter(f => m === "Semua" || (f.modul || "Umum") === m);
      i = 0; balik = false; draw();
    }));
  }

  /* ---------- Glosarium / Rumus / Ringkasan / Checklist / Sumber / Menu ---------- */
  function vGlosarium() {
    const v = document.getElementById("view");
    v.innerHTML = `<h1>Glosarium</h1><input id="g-cari" class="search" placeholder="Cari istilah…"><div id="g-list"></div>`;
    const draw = q => {
      const list = ((typeof GLOSARIUM !== "undefined" ? GLOSARIUM : []) || []).filter(g =>
        !q || g.istilah.toLowerCase().includes(q) || g.definisi.toLowerCase().includes(q));
      document.getElementById("g-list").innerHTML = list.map(g =>
        `<div class="card glos"><b>${esc(g.istilah)}</b><p>${esc(g.definisi)}</p></div>`).join("") || '<p class="muted">Tidak ditemukan.</p>';
    };
    document.getElementById("g-cari").addEventListener("input", e => draw(e.target.value.trim().toLowerCase()));
    draw("");
  }
  function vRumus() {
    const v = document.getElementById("view");
    v.innerHTML = `<h1>Rumus Penting</h1>` + (((typeof RUMUS !== "undefined" ? RUMUS : []) || []).map(r => `
      <div class="card"><b>${esc(r.nama)}</b><div class="rumus">${esc(r.rumus)}</div>
      <p>${esc(r.keterangan || "")}</p>${r.contoh ? `<p class="muted kecil"><b>Contoh:</b> ${esc(r.contoh)}</p>` : ""}</div>`).join("") || '<p class="muted">Belum ada data.</p>');
  }
  function vRingkasan() {
    const v = document.getElementById("view");
    v.innerHTML = `<h1>Ringkasan Cepat</h1><p class="muted">Bacaan 5 menit sebelum tes.</p>` +
      (((typeof RINGKASAN !== "undefined" ? RINGKASAN : []) || []).map(r => `
      <details class="card"><summary><b>${esc(r.judul)}</b></summary>
      <ul>${(r.poin || []).map(p => `<li>${esc(p)}</li>`).join("")}</ul></details>`).join("") || '<p class="muted">Belum ada data.</p>');
  }
  function vChecklist() {
    const v = document.getElementById("view");
    const done = Store.checklist();
    const pct = ((typeof CHECKLIST !== "undefined" ? CHECKLIST : []) || []).length ? Math.round(Object.keys(done).length / (typeof CHECKLIST !== "undefined" ? CHECKLIST : []).length * 100) : 0;
    v.innerHTML = `<h1>Checklist Wawancara</h1>
      <div class="card"><b>${pct}% siap</b><div class="progress sm"><div style="width:${pct}%"></div></div></div>` +
      (((typeof CHECKLIST !== "undefined" ? CHECKLIST : []) || []).map((c, i) => `
      <label class="card check"><input type="checkbox" data-c="${i}" ${done[i] ? "checked" : ""}>
      <span><b>${esc(c.item)}</b><br><span class="muted">${esc(c.detail || "")}</span></span></label>`).join("") || '<p class="muted">Belum ada data.</p>');
    v.querySelectorAll("[data-c]").forEach(cb => cb.addEventListener("change", () => { Store.toggleChecklist(cb.dataset.c); route(); }));
  }
  function vSumber() {
    const v = document.getElementById("view");
    const items = ((typeof SUMBER !== "undefined" ? SUMBER : []) || []).map(s => `
      <div class="card"><b>${esc(s.nama)}</b> <span class="badge ${s.jenis === "resmi" ? "resmi" : "pengalaman"}">${s.jenis === "resmi" ? "Sumber resmi" : "Pengalaman pribadi"}</span>
      <p class="muted kecil">Diakses: ${esc(s.tanggal || "-")}</p>
      <p>${esc(s.catatan || "")}</p><a class="link-more" href="${esc(s.url)}" target="_blank" rel="noopener">Buka sumber →</a></div>`).join("");
    v.innerHTML = `<h1>Daftar Sumber</h1>
      <div class="card sumber-note"><b>Penting:</b> konten latihan (soal & pembahasan) adalah buatan untuk belajar, <b>bukan</b> bocoran tes resmi. Fakta tentang bank & regulasi merujuk ke sumber resmi di bawah ini. Cerita pengalaman kandidat diberi label jelas dan bukan pola tes resmi.</div>${items || '<p class="muted">Belum ada data.</p>'}`;
  }
  function vMenu() {
    const v = document.getElementById("view");
    const links = [
      ["#/riwayat", "Riwayat Tes", "Nilai & hasil sebelumnya"],
      ["#/salah", "Soal Pernah Salah", "Fokus ke kelemahan"],
      ["#/favorit", "Soal Favorit", "Yang ditandai ★"],
      ["#/flashcard", "Flashcard", "Hafalan cepat"],
      ["#/glosarium", "Glosarium", "Istilah perbankan"],
      ["#/rumus", "Rumus Penting", "Rasio & hitungan"],
      ["#/ringkasan", "Ringkasan Cepat", "Bacaan 5 menit"],
      ["#/checklist", "Checklist Wawancara", "Persiapan hari-H"],
      ["#/sumber", "Daftar Sumber", "Referensi resmi"]
    ];
    v.innerHTML = `<h1>Menu</h1><div class="grid2">` + links.map(([h, t, d]) =>
      `<a class="card link-card" href="${h}"><b>${t}</b><p class="muted">${d}</p></a>`).join("") + "</div>";
  }

  window.addEventListener("hashchange", route);

  return { route, showHasil, tgl };
})();
document.addEventListener("DOMContentLoaded", () => App.route());
