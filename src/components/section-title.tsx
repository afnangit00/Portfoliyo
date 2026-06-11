type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-14">
      <p className="text-violet-400 font-medium mb-2">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>
    </div>
  );
}