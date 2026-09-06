import { STATS } from '@/data/stats';
import StatCard from '@/components/cards/StatCard';

/** "Golden Way Infotech — By The Numbers". */
export default function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden bg-night" aria-label="Company figures">
      <div className="hairline" aria-hidden="true" />

      <div className="container py-16 md:py-20">
        <p className="mx-auto max-w-2xl text-center text-[0.9375rem] leading-[1.85] text-white/55">
          Founded in Dubai in 2012, Golden Way Infotech has grown across four offices, 30+
          countries, and 2,500+ professionals — fourteen years of technology delivery and training
          built on genuine, global reach.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-y-4 border-gold-500/15 lg:grid-cols-4 lg:[&>*:not(:first-child)]:border-l lg:[&>*:not(:first-child)]:border-gold-500/15">
          {STATS.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>

      <div className="hairline" aria-hidden="true" />
    </section>
  );
}
