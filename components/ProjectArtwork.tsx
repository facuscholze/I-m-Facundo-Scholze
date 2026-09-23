import type { SiteCopy } from "@/lib/translations";

type Project = SiteCopy["projects"]["items"][number];

type ProjectArtworkProps = {
  project: Project;
  number: string;
};

// CSS/SVG product vignettes give each project a distinct visual without heavy
// screenshots or stock photography in the static export.
export function ProjectArtwork({ project, number }: ProjectArtworkProps) {
  return (
    <div className={`project-art project-art--${project.visual}`} aria-hidden="true">
      <div className="project-art-topline">
        <span className="art-eyebrow"><i />{project.visualEyebrow}</span>
        <span className="art-counter">{number} / 03</span>
      </div>

      {project.visual === "rental" ? (
        <div className="rental-visual-content">
          <div className="rental-visual-heading">
            <span>{project.visualTitle}</span>
            <span className="art-live-dot" />
          </div>
          <span className="rental-visual-subline">{project.visualSubline}</span>
          <div className="rental-road-line"><i /><i /><i /></div>
          <svg className="rental-car" viewBox="0 0 520 185" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M94 112 120 73c8-13 19-20 34-23l66-12c22-4 37-2 53 10l56 43 79 12c16 3 28 13 34 28l10 23H74l8-25c2-7 6-13 12-17Z" fill="url(#carPaint)" stroke="#D2F4C6" strokeOpacity=".7" strokeWidth="2" />
            <path d="m160 76 63-12c15-3 26-1 37 7l42 32H132l17-23c3-2 7-4 11-4Z" fill="#0B1310" stroke="#B9EFA2" strokeOpacity=".52" strokeWidth="2" />
            <path d="m237 65-1 38m31-30 33 30" stroke="#B9EFA2" strokeOpacity=".4" strokeWidth="2" />
            <path d="M100 130h336" stroke="#C4F77A" strokeOpacity=".5" strokeWidth="2" strokeDasharray="7 11" />
            <circle cx="154" cy="151" r="26" fill="#080D0B" stroke="#C5F77A" strokeWidth="3" />
            <circle cx="154" cy="151" r="9" fill="#B7C5BB" />
            <circle cx="384" cy="151" r="26" fill="#080D0B" stroke="#C5F77A" strokeWidth="3" />
            <circle cx="384" cy="151" r="9" fill="#B7C5BB" />
            <defs>
              <linearGradient id="carPaint" x1="93" y1="77" x2="383" y2="190" gradientUnits="userSpaceOnUse">
                <stop stopColor="#23372C" />
                <stop offset="1" stopColor="#111C16" />
              </linearGradient>
            </defs>
          </svg>
          <div className="rental-visual-foot">
            {project.visualNodes.map((node, index) => (
              <span key={node}><i>0{index + 1}</i>{node}</span>
            ))}
          </div>
        </div>
      ) : null}

      {project.visual === "agents" ? (
        <div className="agent-visual-content">
          <div className="agent-visual-title">
            <div><span>{project.visualTitle}</span><small>{project.visualSubline}</small></div>
            <div className="agent-spark" aria-hidden="true">✳</div>
          </div>
          <div className="agent-flow">
            {project.visualNodes.map((node, index) => (
              <div className="agent-flow-step" key={node}>
                <div className={`agent-flow-node agent-flow-node--${index + 1}`}>
                  <span className="agent-node-index">0{index + 1}</span>
                  <span className="agent-node-glyph">{index === 0 ? "⌘" : index === 1 ? "✳" : "↗"}</span>
                  <span className="agent-node-label">{node}</span>
                </div>
                {index < project.visualNodes.length - 1 ? <span className="agent-flow-connector" /> : null}
              </div>
            ))}
          </div>
          <div className="agent-visual-foot"><span /><span /><span /><span /><b>{project.visualFooter}</b></div>
        </div>
      ) : null}

      {project.visual === "whatsapp" ? (
        <div className="whatsapp-visual-content">
          <div className="whatsapp-window">
            <div className="whatsapp-window-top">
              <span className="whatsapp-avatar">AI</span>
              <span className="whatsapp-chat-name">{project.visualNodes[0]} <small>● {project.visualNodes[1]}</small></span>
              <span className="whatsapp-menu">···</span>
            </div>
            <div className="whatsapp-chat-lines">
              <span className="chat-bubble chat-bubble--in">{project.visualTitle}</span>
              <span className="chat-bubble chat-bubble--out">{project.visualNodes[2]} <i>09:41 ✓✓</i></span>
              <span className="chat-bubble chat-bubble--in chat-bubble--short"><i /><i /><i /></span>
            </div>
            <div className="whatsapp-input"><span>+</span><i /><b>↗</b></div>
          </div>
          <div className="whatsapp-orbit whatsapp-orbit--one" />
          <div className="whatsapp-orbit whatsapp-orbit--two" />
          <div className="whatsapp-art-foot"><span>{project.visualFooter}</span><span>AI / 03</span></div>
        </div>
      ) : null}
    </div>
  );
}
