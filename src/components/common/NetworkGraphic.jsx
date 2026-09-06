import { memo, useId } from 'react';
import { cn } from '@/lib/cn';

/** Node positions on a 400 × 400 viewBox — deliberately asymmetric, not a grid. */
const NODES = [
  { id: 'n1', x: 200, y: 200, r: 6 },
  { id: 'n2', x: 88, y: 118, r: 3.5 },
  { id: 'n3', x: 312, y: 104, r: 4 },
  { id: 'n4', x: 330, y: 268, r: 3 },
  { id: 'n5', x: 128, y: 312, r: 4.5 },
  { id: 'n6', x: 246, y: 62, r: 2.5 },
  { id: 'n7', x: 60, y: 226, r: 2.5 },
  { id: 'n8', x: 268, y: 336, r: 3 },
  { id: 'n9', x: 360, y: 178, r: 2.5 },
  { id: 'n10', x: 158, y: 78, r: 2.5 },
];

const EDGES = [
  ['n1', 'n2'],
  ['n1', 'n3'],
  ['n1', 'n4'],
  ['n1', 'n5'],
  ['n2', 'n10'],
  ['n10', 'n6'],
  ['n6', 'n3'],
  ['n3', 'n9'],
  ['n9', 'n4'],
  ['n4', 'n8'],
  ['n8', 'n5'],
  ['n5', 'n7'],
  ['n7', 'n2'],
];

const byId = Object.fromEntries(NODES.map((node) => [node.id, node]));

/**
 * Abstract gold network figure used behind the hero and the emerging-technology
 * section. Pure SVG + CSS: concentric rings, connective lines, and slowly
 * pulsing nodes. Elements carry `data-node` / `data-ring` hooks so GSAP can
 * drive them without the component knowing anything about the timeline.
 */
function NetworkGraphic({ className, showRings = true }) {
  const uid = useId().replace(/:/g, '');
  const lineGradient = `net-line-${uid}`;
  const glow = `net-glow-${uid}`;

  return (
    <svg
      viewBox="0 0 400 400"
      className={cn('h-full w-full', className)}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={lineGradient} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8A641C" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#8A641C" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id={glow}>
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.22" />
          <stop offset="70%" stopColor="#B8862D" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#B8862D" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="190" fill={`url(#${glow})`} />

      {showRings && (
        <g fill="none" stroke="#B8862D" strokeWidth="0.75">
          <circle cx="200" cy="200" r="82" opacity="0.28" data-ring />
          <circle cx="200" cy="200" r="126" opacity="0.2" data-ring />
          <circle cx="200" cy="200" r="172" opacity="0.14" strokeDasharray="2 10" data-ring />
        </g>
      )}

      <g stroke={`url(#${lineGradient})`} strokeWidth="0.9">
        {EDGES.map(([from, to]) => (
          <line
            key={`${from}-${to}`}
            x1={byId[from].x}
            y1={byId[from].y}
            x2={byId[to].x}
            y2={byId[to].y}
            data-edge
          />
        ))}
      </g>

      <g>
        {NODES.map((node, index) => (
          <g key={node.id} data-node>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 5}
              fill="#D4AF37"
              opacity="0.08"
              className="animate-pulse-node"
              style={{
                animationDelay: `${index * 0.45}s`,
                transformOrigin: `${node.x}px ${node.y}px`,
              }}
            />
            <circle cx={node.x} cy={node.y} r={node.r} fill="#D4AF37" opacity="0.85" />
          </g>
        ))}
      </g>

      {/* Geometric accents: a thin square and diamond, rotated for balance. */}
      <g fill="none" stroke="#B8862D" strokeWidth="0.6" opacity="0.25">
        <rect x="128" y="128" width="144" height="144" transform="rotate(15 200 200)" />
        <rect x="152" y="152" width="96" height="96" transform="rotate(45 200 200)" />
      </g>
    </svg>
  );
}

export default memo(NetworkGraphic);
