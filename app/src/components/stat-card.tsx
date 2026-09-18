type StatCardProps = {
  value: number | string;
  label: string;
  tone?: "default" | "primary" | "success";
};

const toneClasses: Record<NonNullable<StatCardProps["tone"]>, string> = {
  default: "text-ink",
  primary: "text-primary",
  success: "text-success",
};

export default function StatCard({ value, label, tone = "default" }: StatCardProps) {
  return (
    <div className="flex flex-col gap-0.5 rounded-xl border border-line bg-surface px-[18px] py-4">
      <span className={`font-display text-[28px] font-extrabold tracking-[-0.03em] ${toneClasses[tone]}`}>
        {value}
      </span>
      <span className="text-[12.5px] text-ink-secondary">{label}</span>
    </div>
  );
}
