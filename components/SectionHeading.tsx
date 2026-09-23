type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "split";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "split",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div className="section-heading-main">
        <p className="section-eyebrow">
          <span className="eyebrow-spark" aria-hidden="true">✳</span>
          {eyebrow}
        </p>
        <h2 className="section-title" id={id}>{title}</h2>
      </div>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}
