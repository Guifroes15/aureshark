type ProductThumbProps = {
  size?: number;
  bg?: string;
  fill?: string;
};

export default function ProductThumb({ size = 54, bg = "#E7D7C6", fill = "#241C17" }: ProductThumbProps) {
  return (
    <span
      className="flex flex-shrink-0 items-center justify-center rounded-[9px] border border-line"
      style={{ width: size, height: size, background: bg }}
    >
      <svg viewBox="0 0 120 64" className="h-auto w-[66%]" aria-hidden="true">
        <path
          d="M14 40C16 26 22 18 34 15c10-3 18-1 24 4l14 12c8 6 20 10 32 12 6 1 8 4 8 7v2c0 2-2 3-4 3H18c-4 0-8-3-8-8Z"
          fill={fill}
        />
        <path d="M11 48h101" stroke={bg} strokeWidth={3} />
        <path d="M34 21l10 6M40 18l10 6M46 16l10 6" stroke={bg} strokeWidth={2} />
      </svg>
    </span>
  );
}
