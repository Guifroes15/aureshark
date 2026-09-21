type PageHeaderProps = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
};

export default function PageHeader({ eyebrow, title, children }: PageHeaderProps) {
  return (
    <header className="flex min-h-[70px] flex-shrink-0 flex-wrap items-center gap-3 border-b border-line bg-surface px-4 py-3 lg:gap-4 lg:px-7">
      <span className="flex flex-grow flex-col">
        <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-ink-tertiary">
          {eyebrow}
        </span>
        <span className="font-display text-xl font-bold tracking-[-0.02em] text-ink">
          {title}
        </span>
      </span>
      <div className="flex flex-wrap items-center gap-2.5 lg:gap-3">{children}</div>
    </header>
  );
}
