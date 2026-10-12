/* =====================================================================
   BLACK CLOVER REPUBLIC — SITE CONFIG
   ---------------------------------------------------------------------
   This is the ONLY file you need to touch for day-to-day updates.
   Change a value, save, refresh the page. Every page reads from here.
   ===================================================================== */

window.BCR = {
  /* ---------- Server ---------- */
  server: {
    // Leave "" until the IP is public. When you fill it in, the site will
    // show a live online/offline status + player count and a "Copy IP" button.
    ip: "",
    minecraftVersion: "1.21.1",
    // Loader not decided yet — change to "NeoForge", "Forge" or "Fabric" when known.
    loader: "TBA",
    // Optional: the exact loader version players need (e.g. "21.1.77").
    loaderVersion: "",
  },

  /* ---------- Release / beta ---------- */
  release: {
    // Countdown target (ISO date). Beta starts Oct 16 (may move to Oct 23).
    betaStart: "2026-10-16T00:00:00Z",
    betaEnd: "2026-10-23T23:59:59Z",
    betaWindow: "Oct 16 – 23, 2026",
    betaNote: "Dates could shift one week to Oct 23 – 30.",
    publicRelease: "End of October 2026",
    // Paste the direct mod download link here at release.
    // While it's "" the download button stays locked.
    modDownloadUrl: "",
    modVersion: "Beta",
  },

  /* ---------- Links ---------- */
  links: {
    discord: "https://discord.gg/aAUehag5Uk",
    discordInviteCode: "aAUehag5Uk", // used to fetch the live member count
    patreon: "https://www.patreon.com/c/BlackCloverRepublic",
    youtube: "https://youtube.com/@blackcloverrepublic",
    tiktok: "https://www.tiktok.com/@blackcloverrepublic",
    instagram: "https://www.instagram.com/blackcloverrepublic",
    trailer: "https://www.tiktok.com/t/ZPLB3urBQ/",
    // Your Tebex (or other) store URL once it exists. "" = ranks show "Coming at launch".
    store: "",
    // Staff application form. Set staffApplicationsOpen to true when it's open again.
    staffApplications: "https://docs.google.com/forms/d/e/1FAIpQLSfpgGwnGkxj_ysUYVnF_pGr6ijhUkEIpU_vDFIui0IMVPl0mw/viewform",
    staffApplicationsOpen: false,
  },

  /* ---------- Fallback stats (live values replace these when available) ---------- */
  stats: {
    grimoires: 30,
    spells: 162,
    guildBases: 9,
    discordMembers: 3000, // shown as "3,000+" if the live count can't load
  },

  /* ---------- YouTube devlogs (video IDs) ---------- */
  devlogs: [
    { id: "VFQD3AbYgkY", title: "Devlog #1 — Lightning Magic", tag: "VFX" },
    { id: "34ZDflR-ibU", title: "Devlog #2 — The best GUI ever", tag: "Systems" },
  ],

  /* ---------- TikTok ----------
     Where most sneak peeks drop. Add new clips to the TOP of the list.
     thumb/preview = files in assets/media (preview plays on hover; both optional).
     sigil = fallback art if there's no thumbnail (any magic name from magic-data.js). */
  tiktok: {
    handle: "blackcloverrepublic",
    followers: "1,100+",
    clips: [
      { title: "Official Trailer", tag: "Trailer", date: "Oct 12", isNew: true,
        url: "https://www.tiktok.com/t/ZPLB3urBQ/", color: "#ff2d3a", sigil: "Anti-Magic",
        thumb: "tt-trailer.webp", preview: "tt-trailer.mp4",
        desc: "What if Black Clover was in Minecraft?" },
      { title: "Noelle's Water Valkyrie", tag: "Transformation", date: "Oct 11",
        url: "https://www.tiktok.com/t/ZPLkfD3Lu/", color: "#2fa8ff", sigil: "Water",
        thumb: "tt-noelle.webp", preview: "tt-noelle.mp4",
        desc: "The last of the transformation trilogy." },
      { title: "Yuno's Spirit Dive", tag: "Transformation", date: "Oct 9",
        url: "https://www.tiktok.com/t/ZPL6G1rFN/", color: "#45e0a0", sigil: "Wind",
        thumb: "tt-spirit.webp", preview: "tt-spirit.mp4",
        desc: "Part two of the transformation trilogy." },
      { title: "Asta's Devil Transformation", tag: "Cutscene", date: "Oct 8",
        url: "https://www.tiktok.com/t/ZPLja1LEe/", color: "#b0204a", sigil: "Curse",
        thumb: "tt-asta.webp", preview: "tt-asta.mp4",
        desc: "Off by default. Turn it on with a gamerule." },
      { title: "Grimoire Cutscene", tag: "Cutscene", date: "Oct 7",
        url: "https://www.tiktok.com/t/ZPLY5vncy/", color: "#d4af37", sigil: "Time",
        thumb: "tt-cutscenes.webp", preview: "tt-cutscenes.mp4",
        desc: "Your magic type gets rolled in the tower." },
      { title: "Dante vs Vanica", tag: "Boss VFX", date: "Oct 6",
        url: "https://www.tiktok.com/@blackcloverrepublic", color: "#ff3b30", sigil: "Fire",
        thumb: "tt-vanica.webp", preview: "tt-vanica.mp4",
        desc: "Upgraded boss fight effects in the arena." },
      { title: "Zagred vs Dante", tag: "NPC fight", date: "",
        url: "https://www.tiktok.com/@blackcloverrepublic", color: "#ff5fa2", sigil: "Curse",
        thumb: "tt-zagred.webp", preview: "tt-zagred.mp4",
        desc: "NPCs fight it out. Who should fight next?" },
    ],
  },

  /* ---------- Vote sites ----------
     Add entries like { name: "Minecraft-MP", url: "https://..." }.
     Empty list = "Vote sites go live at launch". */
  voteSites: [],

  /* ---------- Staff ----------
     mc = Minecraft username (shows their skin head). Leave "" for an initial badge. */
  staff: [
    { name: "Vez", role: "Owner & Developer", mc: "", group: "owner",
      bio: "Creator of the BCR mod. Also runs Naruto Republic." },
    { name: "TBA", role: "Administrator", mc: "", group: "admin", bio: "" },
    { name: "TBA", role: "Moderator", mc: "", group: "mod", bio: "" },
    { name: "TBA", role: "Moderator", mc: "", group: "mod", bio: "" },
    { name: "Recruiting", role: "Media Team", mc: "", group: "media", bio: "" },
  ],

  /* ---------- Store ranks (EXAMPLES — edit names, prices, perks) ----------
     Keep perks cosmetic: Minecraft's usage guidelines don't allow
     selling gameplay advantages. */
  ranks: [
    { name: "Squire", price: "4.99", color: "#9aa3ad",
      perks: ["[Squire] chat prefix", "Coloured name in chat", "1 cosmetic grimoire cover", "Supporter Discord role"] },
    { name: "Royal", price: "9.99", color: "#e11d2a",
      perks: ["Everything in Squire", "[Royal] animated prefix", "Spell-trail particle effect", "3 cosmetic grimoire covers", "Priority queue on launch days"] },
    { name: "Captain", price: "19.99", color: "#ff3b3b", featured: true,
      perks: ["Everything in Royal", "[Captain] prefix & name glow", "Exclusive captain's robe cosmetic", "Custom join message", "6 cosmetic grimoire covers"] },
    { name: "Wizard King", price: "34.99", color: "#ffd166",
      perks: ["Everything in Captain", "[Wizard King] prefix", "Royal mantle cosmetic set", "Pet familiar cosmetic", "All grimoire covers"] },
  ],
};
