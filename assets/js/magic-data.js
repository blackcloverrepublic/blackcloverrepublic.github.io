/* =====================================================================
   The 30 grimoires in the BCR mod.
   - group:    filter tab on the Magic page
   - color:    accent colour for the card + sigil
   - spells:   number of spells if announced (null = not announced yet)
   - showcase: link to the reveal video/post ("" = none)
   Descriptions are short flavour text — edit freely.
   ===================================================================== */

const P = "https://www.patreon.com/BlackCloverRepublic/posts/";

window.BCR_GROUPS = [
  { id: "all", label: "All" },
  { id: "elemental", label: "Elemental" },
  { id: "nature", label: "Nature & Beast", short: "Nature" },
  { id: "arcane", label: "Arcane" },
  { id: "forbidden", label: "Forbidden & Unique", short: "Forbidden" },
];

window.BCR_MAGIC = [
  // ---------- Forbidden & unique ----------
  { name: "Anti-Magic", group: "forbidden", color: "#ff1f2d", spells: 8, featured: true,
    desc: "No mana, no limits. Cut through every spell in the kingdom and break magic itself.",
    showcase: P + "anti-magic-all-8-165385835" },
  { name: "Curse", group: "forbidden", color: "#b0204a", spells: null,
    desc: "Brand your enemies with lingering hexes that weaken, bind and slowly unravel them.",
    showcase: P + "curse-magic-169733622" },
  { name: "Legion", group: "forbidden", color: "#ff6a3d", spells: null,
    desc: "Never fight alone. Summon a host that overwhelms the battlefield by sheer numbers.",
    showcase: P + "legion-magic-171326346" },
  { name: "Vez", group: "forbidden", color: "#ff2244", spells: null, original: true,
    desc: "The developer's own magic, made just for BCR. Nobody knows what it does yet.",
    showcase: "" },

  // ---------- Elemental ----------
  { name: "Fire", group: "elemental", color: "#ff5a1f", spells: null,
    desc: "Raw, roaring flame. Scorch the ground, rain down infernos and burn through defenses.",
    showcase: "" },
  { name: "Water", group: "elemental", color: "#2fa8ff", spells: 8,
    desc: "Torrents, tidal shields and a battle form clad in water. Graceful and crushing.",
    showcase: P + "water-magic-8-167126413" },
  { name: "Wind", group: "elemental", color: "#45e0a0", spells: null,
    desc: "Blades of air, cyclones and impossible speed. Control the sky.",
    showcase: P + "wind-magic-166142231" },
  { name: "Earth", group: "elemental", color: "#b48a4f", spells: null,
    desc: "Raise walls, split the ground and turn the battlefield against your foes.",
    showcase: P + "earth-magic-169555249" },
  { name: "Lightning", group: "elemental", color: "#ffe14d", spells: null,
    desc: "Strike at the speed of thunder. Chain bolts and blitz across the field.",
    showcase: "https://www.youtube.com/watch?v=VFQD3AbYgkY" },
  { name: "Ice", group: "elemental", color: "#8fe3ff", spells: null,
    desc: "Freeze, shatter and imprison. Cold, precise control magic.",
    showcase: P + "ice-magic-167256512" },
  { name: "Snow", group: "elemental", color: "#dfeeff", spells: null,
    desc: "Blizzards and drifting snowfall that bury, slow and blind.",
    showcase: P + "snow-magic-171263600" },
  { name: "Sand", group: "elemental", color: "#e0b56a", spells: null,
    desc: "Shifting dunes that swallow, grind and shield. The desert answers to you.",
    showcase: P + "sand-magic-171275670" },
  { name: "Mercury", group: "elemental", color: "#c3cad6", spells: null,
    desc: "Liquid metal that shapes itself into blades, shields and a deadly rain.",
    showcase: P + "mercury-magic-168250003" },
  { name: "Light", group: "elemental", color: "#fff1a6", spells: null,
    desc: "Move faster than anyone can see. Piercing beams and radiant swords.",
    showcase: P + "light-magic-166049900" },
  { name: "Dark", group: "elemental", color: "#7b5cff", spells: null,
    desc: "Shadow that swallows spells whole and cuts through dimensions.",
    showcase: P + "dark-magic-165985829" },

  // ---------- Nature & beast ----------
  { name: "World Tree", group: "nature", color: "#5fbf4a", spells: null,
    desc: "Call up colossal roots and ancient wood that drain the power out of your enemies.",
    showcase: P + "world-tree-magic-167256364" },
  { name: "Briar", group: "nature", color: "#e0457b", spells: null,
    desc: "Thorned vines and rose-briar prisons. Beautiful and brutal.",
    showcase: P + "briar-magic-168250118" },
  { name: "Beast", group: "nature", color: "#d9822b", spells: null,
    desc: "Take on the strength of beasts. Claws, fangs and feral instinct.",
    showcase: P + "beast-magic-168446949" },
  { name: "Bone", group: "nature", color: "#e9e1cf", spells: null,
    desc: "Spears, armour and cages of bone, pulled from the ground or from yourself.",
    showcase: P + "bone-magic-one-167798686" },
  { name: "Poison", group: "nature", color: "#8bdc2a", spells: null,
    desc: "Toxins and venom clouds. Every hit keeps hurting long after it lands.",
    showcase: P + "poison-magic-171262632" },

  // ---------- Arcane ----------
  { name: "Time", group: "arcane", color: "#d4af37", spells: 5,
    desc: "Stop, steal and rewind time. One of the rarest and most feared magics.",
    showcase: P + "time-magic-165861727" },
  { name: "Spatial", group: "arcane", color: "#8f6bff", spells: null,
    desc: "Tear open portals, warp across the map and fold space around your enemies.",
    showcase: P + "spatial-magic-167850395" },
  { name: "Gravity", group: "arcane", color: "#a24bd6", spells: null,
    desc: "Make the ground pull harder, or let go of it completely. Crush and float.",
    showcase: P + "gravity-magic-167786685" },
  { name: "Mirror", group: "arcane", color: "#b6c8e6", spells: null,
    desc: "Reflect, redirect and copy. Fight with a hall of mirrors at your back.",
    showcase: P + "mirror-magic-166888915" },
  { name: "Dream", group: "arcane", color: "#ff8ad8", spells: null,
    desc: "Pull enemies into a dream where you make all the rules.",
    showcase: P + "dream-magic-169263883" },
  { name: "Paint", group: "arcane", color: "#ff4fa3", spells: null,
    desc: "Turn every brushstroke into a weapon. Splash, coat and rewrite the battlefield.",
    showcase: P + "paint-magic-168345311" },
  { name: "Key", group: "arcane", color: "#f0c040", spells: null,
    desc: "Lock and unlock anything. Doors, spaces and even other people's magic.",
    showcase: P + "key-magic-171326192" },
  { name: "Barrier", group: "arcane", color: "#5ad1ff", spells: null,
    desc: "Unbreakable walls and domes. Straight from the movie.",
    showcase: P + "barrier-magic-167769970" },
  { name: "Sealing", group: "arcane", color: "#c9a227", spells: null,
    desc: "Seal wounds, seal spells, seal enemies. Precise and supportive.",
    showcase: P + "sealing-magic-168039787" },
  { name: "Chain", group: "arcane", color: "#9aa3ad", spells: null,
    desc: "Bind, drag and restrain. Heavy chains that pin the strongest foes in place.",
    showcase: P + "chain-magic-cool-168048897" },
];
