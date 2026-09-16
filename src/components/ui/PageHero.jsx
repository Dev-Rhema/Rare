import { TONES } from '../../theme/tones';
import { cn } from '../../utils/cn';
import Section from './Section';

/** Coloured page intro shared by Products, Contact and 404. */
export default function PageHero({ title, description, tone = 'blue', aside, children }) {
  const theme = TONES[tone];
  return (
    <Section tone={tone} spacing="compact">
      <div className="grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h1 className="text-4xl font-black leading-[0.95] tracking-tighter sm:text-5xl md:text-6xl">{title}</h1>
          {description && <p className={cn('mt-5 max-w-xl text-base md:text-lg', theme.muted)}>{description}</p>}
          {children && <div className="mt-8 max-w-xl">{children}</div>}
        </div>
        {aside}
      </div>
    </Section>
  );
}
