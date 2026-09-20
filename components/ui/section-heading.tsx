export function SectionHeading({ number, eyebrow, title, description }: {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-label"><span>{number}</span><span className="label-line" />{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
