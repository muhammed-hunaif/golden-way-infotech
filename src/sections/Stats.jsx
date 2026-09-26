import { STATS } from '@/data/stats';
import StatCard from '@/components/cards/StatCard';

/**
 * "Golden Way Infotech — By The Numbers".
 *
 * A light strip of four large figures with a short label under each, after
 * the reference theme's figures band. It sits directly under the dark hero,
 * so the change to a light ground marks where the page proper begins.
 */
export default function Stats() {
  return (
    <section
      id="stats"
      data-nav-tone="light"
      className="relative overflow-hidden bg-cream"
      aria-label="Company figures"
    >
      <div className="container py-12 md:py-14">
        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:[&>*:not(:first-child)]:border-l lg:[&>*:not(:first-child)]:border-black/[0.08]">
          {STATS.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
