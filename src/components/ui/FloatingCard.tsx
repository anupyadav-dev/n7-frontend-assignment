type FloatingCardProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export default function FloatingCard({
  title,
  subtitle,
  className = "",
}: FloatingCardProps) {
  return (
    <div
      className={`absolute rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-lg ${className}`}
    >
      <p className="text-sm text-gray-400">{subtitle}</p>

      <h3 className="mt-1 font-semibold text-white">{title}</h3>
    </div>
  );
}
