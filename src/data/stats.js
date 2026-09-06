import { Building2, CalendarClock, Globe, Users } from 'lucide-react';

/**
 * "Golden Way Infotech — By The Numbers" from the company profile.
 * `value` is the number the counter animates to; `prefix`/`suffix` are rendered verbatim.
 */
export const STATS = [
  {
    id: 'years',
    value: 14,
    suffix: '+',
    label: 'Years of Excellence',
    icon: CalendarClock,
  },
  {
    id: 'staff',
    value: 2500,
    suffix: '+',
    label: 'Staff Worldwide',
    icon: Users,
  },
  {
    id: 'countries',
    value: 30,
    suffix: '+',
    label: 'Countries Served',
    icon: Globe,
  },
  {
    id: 'offices',
    value: 4,
    suffix: '',
    label: 'Office Locations',
    icon: Building2,
  },
];
