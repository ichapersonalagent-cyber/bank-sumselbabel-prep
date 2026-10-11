/* Penyimpanan progres lokal (localStorage). */
const Store = (() => {
  const P = "bsb_";
  function get(key, def) {
    try {
      const raw = localStorage.getItem(P + key);
      return raw === null ? def : JSON.parse(raw);
    } catch (e) { return def; }
  }
  function set(key, val) {
    try { localStorage.setItem(P + key, JSON.stringify(val)); } catch (e) {}
  }
  return {
    get, set,
    readMateri() { return get("materi_read", {}); },
    toggleMateri(id) {
      const m = this.readMateri();
      if (m[id]) delete m[id]; else m[id] = Date.now();
      set("materi_read", m); return !!m[id];
    },
    history() { return get("history", []); },
    addHistory(e) {
      const h = this.history(); h.unshift(e);
      set("history", h.slice(0, 50)); return h;
    },
    clearHistory() { set("history", []); },
    favs() { return get("fav", []); },
    toggleFav(id) {
      let f = this.favs();
      f = f.includes(id) ? f.filter(x => x !== id) : f.concat([id]);
      set("fav", f); return f.includes(id);
    },
    quiz() { return get("quiz", null); },
    setQuiz(q) { set("quiz", q); },
    clearQuiz() { try { localStorage.removeItem(P + "quiz"); } catch (e) {} },
    checklist() { return get("checklist", {}); },
    toggleChecklist(id) {
      const c = this.checklist();
      if (c[id]) delete c[id]; else c[id] = true;
      set("checklist", c); return !!c[id];
    }
  };
})();
