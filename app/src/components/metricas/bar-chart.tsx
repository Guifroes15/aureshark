import type { PontoAlcance } from "@/lib/data";

const WIDTH = 700;
const HEIGHT = 250;
const LEFT = 56;
const RIGHT = 690;
const TOP = 20;
const BOTTOM = 210;

function formatMil(v: number) {
  if (v >= 1000) {
    const mil = v / 1000;
    return `${mil.toLocaleString("pt-BR", { maximumFractionDigits: 1 })} mil`;
  }
  return v.toLocaleString("pt-BR");
}

export default function BarChart({ data }: { data: PontoAlcance[] }) {
  const max = Math.max(...data.map((d) => d.valor));
  const scale = (BOTTOM - TOP) / (max * 1.08);
  const n = data.length;
  const gap = (RIGHT - LEFT) / n;
  const barWidth = gap * 0.58;

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="block h-auto w-full"
      role="img"
      aria-label={`Gráfico de colunas do alcance: de ${formatMil(data[0].valor)} até ${formatMil(data[n - 1].valor)}.`}
    >
      <line x1={LEFT} x2={RIGHT} y1={BOTTOM} y2={BOTTOM} stroke="#D5CFE7" strokeWidth={1} />
      <line x1={LEFT} x2={RIGHT} y1={TOP + (BOTTOM - TOP) * 0.35} y2={TOP + (BOTTOM - TOP) * 0.35} stroke="#E9EEF4" strokeWidth={1} />
      <line x1={LEFT} x2={RIGHT} y1={TOP + (BOTTOM - TOP) * 0.7} y2={TOP + (BOTTOM - TOP) * 0.7} stroke="#E9EEF4" strokeWidth={1} />
      <text x={LEFT - 10} y={BOTTOM + 4} textAnchor="end" fontFamily="IBM Plex Mono, monospace" fontSize={11} fill="#6B7A8C">
        0
      </text>

      {data.map((d, i) => {
        const x = LEFT + i * gap + (gap - barWidth) / 2;
        const h = d.valor * scale;
        const y = BOTTOM - h;
        const isEdge = i === 0 || i === n - 1;
        return (
          <g key={d.label}>
            <path
              d={`M${x} ${BOTTOM} L${x} ${y + 4} Q${x} ${y} ${x + 4} ${y} L${x + barWidth - 4} ${y} Q${x + barWidth} ${y} ${x + barWidth} ${y + 4} L${x + barWidth} ${BOTTOM} Z`}
              fill="#146B9C"
            />
            {isEdge && (
              <text
                x={x + barWidth / 2}
                y={y - 8}
                textAnchor="middle"
                fontFamily="Archivo, sans-serif"
                fontSize={12}
                fontWeight={700}
                fill="#101826"
              >
                {formatMil(d.valor)}
              </text>
            )}
            <text
              x={x + barWidth / 2}
              y={BOTTOM + 20}
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize={10.5}
              fill="#6B7A8C"
            >
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
