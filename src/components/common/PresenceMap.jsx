import { memo, useId } from 'react';
import { cn } from '@/lib/cn';
import { LOCATIONS, LOCATION_LINKS } from '@/data/locations';

const byId = Object.fromEntries(LOCATIONS.map((location) => [location.id, location]));

/**
 * Map-inspired figure for the Global Presence section.
 *
 * Deliberately abstract: a soft graticule with the four named hubs plotted and
 * gold connection lines between them. It carries no geographic claims beyond the
 * four offices the company profile lists, and is decorative — the accessible
 * information lives in the location cards beside it.
 */
function PresenceMap({ activeId, onSelect }) {
  const uid = useId().replace(/:/g, '');
  const lineId = `presence-line-${uid}`;

  return (
    <div className="relative aspect-[4/3] w-full">
      <svg
        viewBox="0 0 100 75"
        className="h-full w-full"
        role="img"
        aria-label="Abstract map showing the four Golden Way Infotech hubs and the connections between them"
      >
        <defs>
          <linearGradient id={lineId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8A641C" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8A641C" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Graticule */}
        <g stroke="#B8862D" strokeWidth="0.12" opacity="0.16">
          {Array.from({ length: 9 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={(i + 1) * 7.5} x2="100" y2={(i + 1) * 7.5} />
          ))}
          {Array.from({ length: 11 }, (_, i) => (
            <line key={`v${i}`} x1={(i + 1) * 8.33} y1="0" x2={(i + 1) * 8.33} y2="75" />
          ))}
        </g>

        {/* Connections */}
        <g stroke={`url(#${lineId})`} strokeWidth="0.25" fill="none">
          {LOCATION_LINKS.map(([from, to]) => {
            const a = byId[from].coords;
            const b = byId[to].coords;
            // Gentle arc so lines read as routes rather than a wireframe.
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2 - Math.abs(b.x - a.x) * 0.18 - 3;

            return (
              <path
                key={`${from}-${to}`}
                d={`M ${a.x * 0.75} ${a.y * 0.75} Q ${midX * 0.75} ${midY * 0.75} ${b.x * 0.75} ${b.y * 0.75}`}
                strokeDasharray="1.2 1.2"
                className={cn(
                  'transition-opacity duration-500',
                  activeId === from || activeId === to ? 'opacity-100' : 'opacity-45',
                )}
              />
            );
          })}
        </g>

        {/* Hubs */}
        {LOCATIONS.map((location) => {
          const x = location.coords.x * 0.75;
          const y = location.coords.y * 0.75;
          const isActive = activeId === location.id;

          return (
            <g
              key={location.id}
              onMouseEnter={() => onSelect?.(location.id)}
              onClick={() => onSelect?.(location.id)}
              className="cursor-pointer"
            >
              <circle
                cx={x}
                cy={y}
                r={isActive ? 3.4 : 2.6}
                fill="#D4AF37"
                opacity={isActive ? 0.18 : 0.1}
                className="transition-all duration-500"
              />
              <circle
                cx={x}
                cy={y}
                r={location.isHeadOffice ? 1.15 : 0.85}
                fill={isActive ? '#D4AF37' : '#B8862D'}
                className="transition-all duration-500"
              />
              <text
                x={x}
                y={y - 3.6}
                textAnchor="middle"
                className="pointer-events-none select-none transition-all duration-500"
                fill={isActive ? '#D4AF37' : '#FFFFFF'}
                fillOpacity={isActive ? 1 : 0.55}
                style={{ fontSize: '2.4px', letterSpacing: '0.18px', fontWeight: 600 }}
              >
                {location.city.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default memo(PresenceMap);
