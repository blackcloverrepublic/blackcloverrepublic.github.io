/* =====================================================================
   BLACK CLOVER REPUBLIC — shared site script
   Builds the header/footer, runs effects and live widgets.
   You normally don't need to edit this file — use config.js.
   ===================================================================== */
(() => {
  "use strict";
  const C = window.BCR;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------
     Icons
  ------------------------------------------------------------------ */
  const s = (d, extra = "") =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
  const f = (d) => `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${d}</svg>`;

  const ICONS = {
    discord: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M19.6 5.3a16.6 16.6 0 0 0-4.2-1.3l-.5 1.1a15.4 15.4 0 0 0-5.8 0L8.6 4a16.6 16.6 0 0 0-4.2 1.3C1.8 9.2 1 13 1.4 16.8a16.8 16.8 0 0 0 5.1 2.6l1.1-1.8a10.8 10.8 0 0 1-1.7-.8l.4-.3a11.9 11.9 0 0 0 11.4 0l.4.3c-.5.3-1.1.6-1.7.8l1.1 1.8a16.8 16.8 0 0 0 5.1-2.6c.5-4.4-.8-8.2-3-11.5ZM8.7 14.5c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z"/></svg>`,
    youtube: f(`<path d="M22.5 7.2a2.8 2.8 0 0 0-2-2C18.8 4.8 12 4.8 12 4.8s-6.8 0-8.5.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1.1 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.7.4 8.5.4 8.5.4s6.8 0 8.5-.4a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .4-4.8 29 29 0 0 0-.4-4.8ZM9.8 15.1V8.9l5.6 3.1-5.6 3.1Z"/>`),
    tiktok: f(`<path d="M16.6 2.5c.4 2.3 1.9 3.8 4.2 4v3.3a7.7 7.7 0 0 1-4.1-1.2v6.6a6.1 6.1 0 1 1-6.1-6.1c.3 0 .6 0 .9.1v3.4a2.8 2.8 0 1 0 1.9 2.6V2.5h3.2Z"/>`),
    instagram: s(`<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r=".6" fill="currentColor"/>`),
    patreon: f(`<circle cx="14.8" cy="9.6" r="6.6"/><rect x="2.6" y="3" width="3.6" height="18"/>`),
    arrow: s(`<path d="M5 12h14M13 6l6 6-6 6"/>`),
    ext: s(`<path d="M7 17L17 7M8 7h9v9"/>`),
    external: s(`<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>`),
    play: f(`<path d="M7 4.5v15l13-7.5-13-7.5Z"/>`),
    copy: s(`<rect x="8" y="8" width="12" height="12" rx="1"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>`),
    check: s(`<path d="M4 12.5l5 5L20 6.5"/>`),
    lock: s(`<rect x="4.5" y="10.5" width="15" height="10" rx="1"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>`),
    book: s(`<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H19v15H5.5A1.5 1.5 0 0 0 4 19.5v-15Z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H19v-3"/><path d="M11.5 7.5l1.2 2.3 2.3 1.2-2.3 1.2-1.2 2.3-1.2-2.3L8 11l2.3-1.2 1.2-2.3Z"/>`),
    gui: s(`<rect x="3" y="3.5" width="18" height="17" rx="1"/><path d="M3 8.5h18M9 8.5v12M12.5 12h5M12.5 15.5h5M5.5 6h.01M8 6h.01"/>`),
    scroll: s(`<path d="M7 3h11a2 2 0 0 1 2 2v1h-4"/><path d="M16 6v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1h10"/><path d="M7 3a2 2 0 0 0-2 2v13M9 8h4M9 11.5h4"/>`),
    castle: s(`<path d="M3 21V9l2-1.5L7 9v3h2V5l3-2 3 2v7h2V9l2-1.5L21 9v12H3Z"/><path d="M10 21v-4a2 2 0 0 1 4 0v4M12 8.5h.01"/>`),
    skull: s(`<path d="M12 3a8 8 0 0 0-8 8c0 2.6 1.3 4.6 3 5.8V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3.2c1.7-1.2 3-3.2 3-5.8a8 8 0 0 0-8-8Z"/><circle cx="9" cy="11.5" r="1.6"/><circle cx="15" cy="11.5" r="1.6"/><path d="M10.5 21v-2.5M13.5 21v-2.5"/>`),
    flame: s(`<path d="M12 21c4 0 7-2.7 7-6.6 0-3.1-2-5.4-3.4-6.9.1 1.9-.8 3.3-2 3.6C14 7.6 12.2 4.6 9.6 3c.4 3-1.5 5-3 6.8C5.6 11.1 5 12.6 5 14.4 5 18.3 8 21 12 21Z"/><path d="M12 21c-1.7 0-3-1.2-3-3 0-1.6 1.2-2.6 2-3.7.6 1.2 1.5 1.6 2.3 1.6.3.6.7 1.3.7 2.1 0 1.8-.3 3-2 3Z"/>`),
    sword: s(`<path d="M14.5 3H21v6.5L9.5 21 6 21l0-3.5L17.5 6"/><path d="M4 15l5 5M3 21l2-2"/>`),
    users: s(`<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.4 3.2-5.5 6.5-5.5s5.9 2.1 6.5 5.5"/><path d="M15.5 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c2 .8 3.2 2.6 3.5 5.2"/>`),
    shield: s(`<path d="M12 3l8 3v6c0 4.6-3.3 8-8 9-4.7-1-8-4.4-8-9V6l8-3Z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>`),
    search: s(`<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>`),
    close: s(`<path d="M5 5l14 14M19 5L5 19"/>`),
    download: s(`<path d="M12 3v12M6.5 10l5.5 5.5 5.5-5.5M4 21h16"/>`),
    info: s(`<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.5h.01"/>`),
    star: s(`<path d="M12 3l2.6 5.9 6.4.6-4.9 4.3 1.5 6.2L12 16.8 6.4 20l1.5-6.2L3 9.5l6.4-.6L12 3Z"/>`),
    bolt: s(`<path d="M13 2.5L4.5 13.5H11l-1 8 8.5-11H12l1-8Z"/>`),
    eye: s(`<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>`),
    gift: s(`<rect x="3" y="8" width="18" height="4"/><path d="M5 12v9h14v-9M12 8v13M12 8c-2-3.5-6-3.5-6-1s4 1 6 1Zm0 0c2-3.5 6-3.5 6-1s-4 1-6 1Z"/>`),
    map: s(`<path d="M9 4L3 6.5v13.5l6-2.5 6 2.5 6-2.5V4l-6 2.5L9 4Z"/><path d="M9 4v13.5M15 6.5V20"/>`),
    film: s(`<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>`),
    gamepad: s(`<path d="M6.5 7h11A4.5 4.5 0 0 1 22 11.5v1.8a3.7 3.7 0 0 1-6.6 2.3L14 14h-4l-1.4 1.6A3.7 3.7 0 0 1 2 13.3v-1.8A4.5 4.5 0 0 1 6.5 7Z"/><path d="M7.5 10v3.5M5.8 11.8h3.5M16 11h.01M18 12.8h.01"/>`),
  };
  window.BCR_ICONS = ICONS;

  /* ------------------------------------------------------------------
     Procedural magic sigils (unique circle per magic name)
  ------------------------------------------------------------------ */
  function hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function rng(seed) {
    return () => {
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function sigil(name) {
    const r = rng(hash(name));
    const cx = 50, cy = 50;
    const pt = (rad, a) => [cx + rad * Math.cos(a), cy + rad * Math.sin(a)];
    const fx = (n) => n.toFixed(2);
    let out = "";
    // rings
    out += `<circle cx="50" cy="50" r="47" stroke-width="1.6"/>`;
    out += `<circle cx="50" cy="50" r="41" stroke-width=".7" opacity=".55"/>`;
    // ticks between rings
    const ticks = 16 + Math.floor(r() * 4) * 8;
    for (let i = 0; i < ticks; i++) {
      const a = (i / ticks) * Math.PI * 2;
      const long = i % 4 === 0;
      const [x1, y1] = pt(41, a), [x2, y2] = pt(long ? 47 : 44, a);
      out += `<line x1="${fx(x1)}" y1="${fx(y1)}" x2="${fx(x2)}" y2="${fx(y2)}" stroke-width="${long ? 1.2 : .6}" opacity="${long ? .9 : .5}"/>`;
    }
    // star polygon
    // 7-, 8- and 9-point stars only: arcane-looking, no pentagrams or hexagrams
    const pts = [7, 8, 9, 7, 8][Math.floor(r() * 5)];
    const skip = pts === 8 ? 3 : pts === 9 ? (r() < 0.5 ? 2 : 4) : 2 + Math.floor(r() * 2);
    const rot = r() * Math.PI;
    const R = 38;
    let d = "";
    const verts = [];
    for (let i = 0; i < pts; i++) verts.push(pt(R, rot + (i / pts) * Math.PI * 2));
    let i = 0;
    d = "M" + verts[0].map(fx).join(" ");
    for (let n = 0; n < pts; n++) { i = (i + skip) % pts; d += "L" + verts[i].map(fx).join(" "); }
    d += "Z";
    out += `<path d="${d}" stroke-width="1.2" stroke-linejoin="round"/>`;
    // vertex dots
    verts.forEach(([x, y]) => (out += `<circle cx="${fx(x)}" cy="${fx(y)}" r="2.2" fill="currentColor" stroke="none"/>`));
    // inner circle + core glyph
    const ir = 11 + r() * 8;
    out += `<circle cx="50" cy="50" r="${fx(ir)}" stroke-width="1.1"/>`;
    const spokes = 3 + Math.floor(r() * 4);
    const so = r() * Math.PI;
    for (let i = 0; i < spokes; i++) {
      const a = so + (i / spokes) * Math.PI * 2;
      const [x1, y1] = pt(ir * (0.25 + r() * 0.3), a), [x2, y2] = pt(ir, a);
      out += `<line x1="${fx(x1)}" y1="${fx(y1)}" x2="${fx(x2)}" y2="${fx(y2)}" stroke-width="1.1"/>`;
    }
    out += `<circle cx="50" cy="50" r="${fx(2 + r() * 2.5)}" fill="currentColor" stroke="none"/>`;
    // orbit marks
    const orbits = 1 + Math.floor(r() * 3);
    for (let i = 0; i < orbits; i++) {
      const [x, y] = pt(ir + (R - ir) * (0.35 + r() * 0.4), r() * Math.PI * 2);
      out += `<circle cx="${fx(x)}" cy="${fx(y)}" r="${fx(2.5 + r() * 2.5)}" stroke-width=".9"/>`;
    }
    return `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" aria-hidden="true">${out}</svg>`;
  }
  window.BCR_SIGIL = sigil;

  /* ------------------------------------------------------------------
     Header, mobile nav, announcement bar, footer
  ------------------------------------------------------------------ */
  const NAV = [
    { href: "index.html", label: "Home", id: "home" },
    { href: "magic.html", label: "Magic", id: "magic" },
    { href: "join.html", label: "Join", id: "join" },
    { href: "store.html", label: "Store", id: "store" },
    { href: "rules.html", label: "Rules", id: "rules" },
    { href: "team.html", label: "Team", id: "team" },
    { href: C.links.wiki, label: "Wiki", id: "wiki", external: true },
  ];
  const ext = (n) => (n.external ? ' target="_blank" rel="noopener"' : "");
  const page = document.body.dataset.page || "";
  const now = Date.now();
  const betaStart = Date.parse(C.release.betaStart);
  const betaEnd = Date.parse(C.release.betaEnd);
  const phase = now < betaStart ? "pre" : now <= betaEnd ? "beta" : "post";
  // Short date label used in tags, e.g. "Oct 16"
  C.release.betaStartLabel = new Date(betaStart).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
  window.BCR_PHASE = phase;

  function announceHTML() {
    if (phase === "pre")
      return `<span class="dot"></span>Closed beta · ${C.release.betaWindow} · Patreon supporters &amp; giveaway winners<a href="join.html#beta">Get access</a>`;
    if (phase === "beta")
      return `<span class="dot"></span>The closed beta is live now<a href="join.html#beta">How to get in</a>`;
    return `<span class="dot"></span>Public release: ${C.release.publicRelease}<a href="${C.links.discord}" target="_blank" rel="noopener">Join the Discord</a>`;
  }

  function buildChrome() {
    const links = NAV.map((n) => `<a href="${n.href}"${ext(n)}${n.id === page ? ' aria-current="page"' : ""}${n.external ? ' class="nav__ext"' : ""}>${n.label}${n.external ? ICONS.ext : ""}</a>`).join("");
    const header = `
      <div class="announce" role="note">${announceHTML()}</div>
      <header class="site-header" id="top">
        <div class="container nav">
          <a class="brand" href="index.html" aria-label="Black Clover Republic home">
            <img src="assets/img/logo-96.webp" alt="" width="42" height="42">
            <span class="brand__name"><b>Black Clover</b><small>Republic</small></span>
          </a>
          <nav class="nav__links" aria-label="Main">${links}</nav>
          <a class="nav__icon" href="${C.links.tiktok}" target="_blank" rel="noopener" aria-label="TikTok" title="Follow us on TikTok">${ICONS.tiktok}</a>
          <a class="btn btn--discord btn--sm nav__cta" href="${C.links.discord}" target="_blank" rel="noopener">${ICONS.discord}Discord</a>
          <button class="nav__toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav"><span></span></button>
        </div>
      </header>
      <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile">
        ${NAV.map((n) => `<a href="${n.href}"${ext(n)}${n.id === page ? ' aria-current="page"' : ""}>${n.label}${(n.external ? ICONS.ext : ICONS.arrow).replace("<svg", '<svg width="22" height="22"')}</a>`).join("")}
        <a class="btn btn--discord btn--block" href="${C.links.discord}" target="_blank" rel="noopener">${ICONS.discord}Join the Discord</a>
        <a class="btn btn--ghost btn--block" style="margin-top:10px" href="${C.links.tiktok}" target="_blank" rel="noopener">${ICONS.tiktok}Follow on TikTok</a>
      </nav>`;
    const headerSlot = $("#site-header");
    if (headerSlot) headerSlot.outerHTML = header;

    const year = new Date().getFullYear();
    const footer = `
      <footer class="site-footer">
        <div class="container footer__grid">
          <div class="footer__brand">
            <a class="brand" href="index.html"><img src="assets/img/logo-96.webp" alt="" width="42" height="42"><span class="brand__name"><b>Black Clover</b><small>Republic</small></span></a>
            <p>A custom Minecraft ${C.server.minecraftVersion} mod and server set in the world of Black Clover. ${C.stats.grimoires} grimoires, ${C.stats.spells} spells and a full storyline.</p>
            <div class="socials">${socialsHTML()}</div>
          </div>
          <div class="footer__col"><h4>Explore</h4>
            <a href="magic.html">Magic &amp; Grimoires</a><a href="${C.links.wiki}" target="_blank" rel="noopener">Mod Wiki</a><a href="join.html">How to Join</a><a href="join.html#beta">Closed Beta</a><a href="store.html">Store</a>
          </div>
          <div class="footer__col"><h4>Community</h4>
            <a href="${C.links.discord}" target="_blank" rel="noopener">Discord</a><a href="rules.html">Rules</a><a href="rules.html#faq">FAQ</a><a href="team.html">Staff Team</a>
          </div>
          <div class="footer__col"><h4>Follow</h4>
            <a href="${C.links.youtube}" target="_blank" rel="noopener">YouTube</a><a href="${C.links.tiktok}" target="_blank" rel="noopener">TikTok</a><a href="${C.links.instagram}" target="_blank" rel="noopener">Instagram</a><a href="${C.links.patreon}" target="_blank" rel="noopener">Patreon</a>
          </div>
        </div>
        <div class="container"><div class="footer__legal">
          <span>© ${year} Black Clover Republic. Fan-made project, not affiliated with Shueisha, Yūki Tabata or the Black Clover anime.</span>
          <span>Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.</span>
        </div></div>
      </footer>
      <div class="toast" role="status" aria-live="polite"></div>`;
    const footerSlot = $("#site-footer");
    if (footerSlot) footerSlot.outerHTML = footer;

    // mobile nav toggle
    const toggle = $(".nav__toggle");
    toggle?.addEventListener("click", () => {
      const hb = $(".site-header").getBoundingClientRect().bottom;
      $(".mobile-nav").style.top = Math.max(0, hb) + "px";
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    });
    $$(".mobile-nav a").forEach((a) => a.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      document.body.style.overflow = "";
    }));

    // header shadow on scroll
    const h = $(".site-header");
    const onScroll = () => h?.classList.toggle("is-scrolled", window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function socialsHTML() {
    return [
      ["discord", C.links.discord, "Discord"],
      ["youtube", C.links.youtube, "YouTube"],
      ["tiktok", C.links.tiktok, "TikTok"],
      ["instagram", C.links.instagram, "Instagram"],
      ["patreon", C.links.patreon, "Patreon"],
    ].map(([k, url, label]) => `<a class="social" href="${url}" target="_blank" rel="noopener" aria-label="${label}">${ICONS[k]}</a>`).join("");
  }
  window.BCR_SOCIALS = socialsHTML;

  /* ------------------------------------------------------------------
     Toast
  ------------------------------------------------------------------ */
  let toastTimer;
  function toast(msg) {
    const t = $(".toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-show"), 2200);
  }
  window.BCR_TOAST = toast;

  /* ------------------------------------------------------------------
     Fill [data-bind] text from config + server address widgets
  ------------------------------------------------------------------ */
  function bindConfig() {
    const get = (path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), C);
    $$("[data-bind]").forEach((el) => {
      const v = get(el.dataset.bind);
      if (v !== undefined && v !== "") el.textContent = v;
    });
    $$("[data-href]").forEach((el) => {
      const v = get(el.dataset.href);
      if (v) el.setAttribute("href", v);
    });
    $$("[data-icon]").forEach((el) => { el.innerHTML = ICONS[el.dataset.icon] || ""; });
    $$("[data-socials]").forEach((el) => { el.innerHTML = socialsHTML(); });

    // Server address boxes
    $$("[data-ip]").forEach((el) => {
      el.textContent = C.server.ip || "Revealed at launch";
    });
    $$("[data-copy-ip]").forEach((btn) => {
      if (!C.server.ip) { btn.disabled = true; btn.textContent = "Soon"; return; }
      btn.addEventListener("click", async () => {
        try { await navigator.clipboard.writeText(C.server.ip); }
        catch {
          const ta = document.createElement("textarea");
          ta.value = C.server.ip; document.body.appendChild(ta); ta.select();
          document.execCommand("copy"); ta.remove();
        }
        toast("Server IP copied");
        btn.textContent = "Copied";
        setTimeout(() => (btn.textContent = "Copy IP"), 1800);
      });
    });
  }

  /* ------------------------------------------------------------------
     Live server status (mcsrvstat.us) — only when an IP is set
  ------------------------------------------------------------------ */
  function setStatus(state, text, players) {
    $$("[data-status]").forEach((el) => {
      el.innerHTML = `<span class="status-dot status-dot--${state}"></span>${text}`;
    });
    $$("[data-players]").forEach((el) => { el.textContent = players; });
  }
  async function serverStatus() {
    if (!$("[data-status]") && !$("[data-players]")) return;
    if (!C.server.ip) {
      const label = phase === "pre" ? "Opens " + C.release.betaWindow.split("–")[0].trim() : phase === "beta" ? "Beta testers only" : "Coming soon";
      setStatus("soon", label, "—");
      return;
    }
    setStatus("soon", "Checking…", "…");
    try {
      const res = await fetch(`https://api.mcsrvstat.us/3/${encodeURIComponent(C.server.ip)}`);
      const data = await res.json();
      if (data.online) setStatus("on", "Online", `${data.players?.online ?? 0} / ${data.players?.max ?? "?"}`);
      else setStatus("off", "Offline", "0");
    } catch {
      setStatus("soon", "Status unavailable", "—");
    }
  }

  /* ------------------------------------------------------------------
     Live Discord member count (falls back to config number)
  ------------------------------------------------------------------ */
  const fmt = (n) => n.toLocaleString("en-US");
  async function discordCount() {
    const els = $$("[data-discord-members]");
    const online = $$("[data-discord-online]");
    els.forEach((el) => (el.innerHTML = `${fmt(C.stats.discordMembers)}<em>+</em>`));
    if (!els.length && !online.length) return;
    try {
      const res = await fetch(`https://discord.com/api/v10/invites/${C.links.discordInviteCode}?with_counts=true`);
      if (!res.ok) throw 0;
      const d = await res.json();
      if (d.approximate_member_count) {
        els.forEach((el) => (el.textContent = fmt(d.approximate_member_count)));
        online.forEach((el) => (el.textContent = fmt(d.approximate_presence_count || 0) + " online now"));
      }
    } catch { /* keep fallback */ }
  }

  /* ------------------------------------------------------------------
     Countdown
  ------------------------------------------------------------------ */
  function countdown() {
    const el = $("[data-countdown]");
    if (!el) return;
    const target = phase === "pre" ? betaStart : null;
    const title = $("[data-countdown-title]");
    if (!target) {
      if (title) title.textContent = phase === "beta" ? "The closed beta is live" : "Public release: " + C.release.publicRelease;
      el.style.display = "none";
      return;
    }
    const units = { d: $("[data-d]", el), h: $("[data-h]", el), m: $("[data-m]", el), s: $("[data-s]", el) };
    const pad = (n) => String(n).padStart(2, "0");
    const tick = () => {
      let diff = Math.max(0, target - Date.now());
      const d = Math.floor(diff / 864e5); diff -= d * 864e5;
      const h = Math.floor(diff / 36e5); diff -= h * 36e5;
      const m = Math.floor(diff / 6e4); diff -= m * 6e4;
      const sec = Math.floor(diff / 1e3);
      units.d.textContent = pad(d); units.h.textContent = pad(h); units.m.textContent = pad(m); units.s.textContent = pad(sec);
    };
    tick();
    setInterval(tick, 1000);
  }

  /* ------------------------------------------------------------------
     YouTube "lite" embeds — only load the player on click
  ------------------------------------------------------------------ */
  function videos() {
    $$("[data-videos]").forEach((wrap) => {
      wrap.innerHTML = C.devlogs.map((v, i) => `
        <article class="video reveal" style="--d:${i * 0.1}s" data-yt="${v.id}" tabindex="0" role="button" aria-label="Play ${v.title}">
          <div class="card card--hover"><div class="card__in">
            <div class="video__frame">
              <img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="" loading="lazy" onerror="this.remove()">
              <span class="video__play">${ICONS.play}</span>
            </div>
            <div class="video__meta"><h3>${v.title}</h3><small>${v.tag}</small></div>
          </div></div>
        </article>`).join("");
    });
    $$("[data-yt]").forEach((el) => {
      const play = () => {
        const frame = $(".video__frame", el);
        if (frame.querySelector("iframe")) return;
        frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${el.dataset.yt}?autoplay=1&rel=0" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      };
      el.addEventListener("click", play);
      el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); play(); } });
    });
  }

  /* ------------------------------------------------------------------
     TikTok clips rail
  ------------------------------------------------------------------ */
  function tiktok() {
    const T = C.tiktok;
    if (!T) return;
    $$("[data-tt-handle]").forEach((el) => (el.textContent = "@" + T.handle));
    $$("[data-tt-followers]").forEach((el) => (el.textContent = T.followers ? `${T.followers} followers` : "Follow for sneak peeks"));
    const M = "assets/media/";
    const canPreview = !reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    $$("[data-tt-clips]").forEach((rail) => {
      rail.innerHTML = T.clips.map((c, i) => `
        <a class="clip reveal${c.thumb ? " clip--media" : ""}" style="--cc:${c.color};--d:${i * 0.06}s" href="${c.url}" target="_blank" rel="noopener" aria-label="Watch ${c.title} on TikTok">
          ${c.thumb
            ? `<img class="clip__thumb" src="${M + c.thumb}" alt="" loading="lazy" width="360" height="640">`
            : `<span class="clip__sigil" aria-hidden="true">${sigil(c.sigil || c.title)}</span>`}
          ${c.preview && canPreview ? `<video class="clip__video" muted loop playsinline preload="none" data-src="${M + c.preview}" aria-hidden="true"></video>` : ""}
          <div class="clip__top"><span class="clip__tag">${c.tag}</span>${c.isNew ? `<span class="clip__new">New</span>` : ""}</div>
          <span class="clip__play" aria-hidden="true">${ICONS.play}</span>
          <div class="clip__meta">
            <h3>${c.title}</h3>
            ${c.desc ? `<p>${c.desc}</p>` : ""}
            <div class="clip__foot"><span>${c.date || "TikTok"}</span><span>Watch ›</span></div>
          </div>
        </a>`).join("");
      // Hover previews: load the short muted loop only when someone hovers a card
      $$(".clip", rail).forEach((card) => {
        const v = $(".clip__video", card);
        if (!v) return;
        card.addEventListener("mouseenter", () => {
          if (!v.src) v.src = v.dataset.src;
          v.play().then(() => card.classList.add("is-playing")).catch(() => {});
        });
        card.addEventListener("mouseleave", () => { v.pause(); card.classList.remove("is-playing"); });
      });
    });
  }

  /* ------------------------------------------------------------------
     Scroll reveal
  ------------------------------------------------------------------ */
  function reveal() {
    const els = $$(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach((e) => io.observe(e));
  }
  window.BCR_REVEAL = reveal;

  /* ------------------------------------------------------------------
     Anti-magic ash: black flakes with red-hot edges + embers rising
  ------------------------------------------------------------------ */
  function ash() {
    if (reduceMotion) return;
    const cvs = document.createElement("canvas");
    cvs.id = "ash-canvas";
    document.body.prepend(cvs);
    const ctx = cvs.getContext("2d");
    let W, H, dpr, parts = [];
    const count = () => (window.innerWidth < 700 ? 34 : 70);

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = cvs.width = Math.floor(window.innerWidth * dpr);
      H = cvs.height = Math.floor(window.innerHeight * dpr);
    }
    function make(initial) {
      const ember = Math.random() < 0.42;
      return {
        ember,
        x: Math.random() * W,
        y: initial ? Math.random() * H : H + 20 * dpr,
        size: (ember ? 0.8 + Math.random() * 1.8 : 2 + Math.random() * 5) * dpr,
        vy: -(0.15 + Math.random() * (ember ? 0.9 : 0.45)) * dpr,
        vx: (Math.random() - 0.5) * 0.25 * dpr,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.02,
        phase: Math.random() * Math.PI * 2,
        life: 0.4 + Math.random() * 0.6,
        shape: Array.from({ length: 5 }, () => 0.5 + Math.random() * 0.6),
      };
    }
    function init() { resize(); parts = Array.from({ length: count() }, () => make(true)); }

    let running = true, t = 0;
    function frame() {
      if (!running) return;
      t += 0.016;
      ctx.clearRect(0, 0, W, H);
      for (const p of parts) {
        p.x += p.vx + Math.sin(t * 0.8 + p.phase) * 0.25 * dpr;
        p.y += p.vy;
        p.rot += p.vr;
        if (p.y < -30 * dpr) Object.assign(p, make(false));
        const fade = Math.min(1, p.y / (H * 0.25)) * p.life;
        if (p.ember) {
          const flick = 0.6 + Math.sin(t * 6 + p.phase) * 0.4;
          ctx.globalAlpha = Math.max(0, fade * flick);
          ctx.fillStyle = "#ff4a2a";
          ctx.shadowColor = "#ff2a1a";
          ctx.shadowBlur = 8 * dpr;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          ctx.save();
          ctx.translate(p.x, p.y); ctx.rotate(p.rot);
          ctx.globalAlpha = Math.max(0, fade * 0.85);
          ctx.beginPath();
          p.shape.forEach((r, i) => {
            const a = (i / p.shape.length) * Math.PI * 2;
            const px = Math.cos(a) * p.size * r, py = Math.sin(a) * p.size * r * 0.7;
            i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
          });
          ctx.closePath();
          ctx.fillStyle = "#050303";
          ctx.fill();
          ctx.strokeStyle = "rgba(255, 50, 40, .55)";
          ctx.lineWidth = 0.8 * dpr;
          ctx.stroke();
          ctx.restore();
        }
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(frame);
    }
    init();
    frame();
    let rt;
    window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(init, 200); });
    document.addEventListener("visibilitychange", () => {
      running = !document.hidden;
      if (running) requestAnimationFrame(frame);
    });
  }

  /* ------------------------------------------------------------------
     Boot
  ------------------------------------------------------------------ */
  buildChrome();
  bindConfig();
  videos();
  tiktok();
  serverStatus();
  discordCount();
  countdown();
  ash();
  // page scripts can register extra builders before reveal runs
  (window.BCR_PAGE || []).forEach((fn) => fn());
  reveal();
})();
