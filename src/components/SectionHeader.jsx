function SectionHeader({ eyebrow, title, subtitle, align = "left", tone = "dark" }) {
  return (
    <div className={`section-header align-${align} tone-${tone}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}

export default SectionHeader;
