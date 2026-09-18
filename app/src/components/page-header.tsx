type PageHeaderProps = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
};

export default function PageHeader({ eyebrow, title, children }: PageHeaderProps) {
  return (
    <header className="flex h-[70px] flex-shrink-0 items-center gap-4 border-b border-line bg-surface px-7">
      <span className="flex flex-grow flex-col">
        <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-ink-tertiary">
          {eyebrow}
        </span>
        <span className="font-display text-xl font-bold tracking-[-0.02em] text-ink">
          {title}
        </span>
      </span>
      {children}
    </header>
  );
}
