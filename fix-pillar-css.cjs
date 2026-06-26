const fs = require("fs");

const path = "app/globals.css";
let css = fs.readFileSync(path, "utf8");

css = css.replace(
  `.pillar-kicker { margin: auto 0 8px; color: var(--pink); font-size: .72rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }`,
  `.pillar-kicker {
  margin: 28px 0 8px;
  color: var(--pink);
  font-size: .72rem;
  font-weight: 800;
  letter-spacing: .08em;
  text-transform: uppercase;
}`
);

css = css.replace(
  `.pillar-grid article { min-height: 410px; display: flex; flex-direction: column; padding: 32px; border-right: 1px solid rgba(255,255,255,.28); border-bottom: 1px solid rgba(255,255,255,.28); }`,
  `.pillar-grid article {
  min-height: 410px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 32px;
  border-right: 1px solid rgba(255,255,255,.28);
  border-bottom: 1px solid rgba(255,255,255,.28);
}`
);

css = css.replace(
  `.pillar-grid { display: grid-template-columns: repeat(4, minmax(0, 1fr));`,
  `.pillar-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));`
);

css = css.replace(
  `h2 { font-size: clamp(1.55rem, 7vw, 2.2rem); }s`,
  `h2 { font-size: clamp(1.55rem, 7vw, 2.2rem); }`
);

fs.writeFileSync(path, css);
console.log("Fixed pillar grid alignment.");
