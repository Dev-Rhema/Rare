import Card from '../ui/Card';
import { ClockIcon, MailIcon, MapPinIcon } from '../ui/Icons';

const ICONS = { mail: MailIcon, clock: ClockIcon, pin: MapPinIcon };

export default function InfoCard({ icon, title, lines, action }) {
  const Icon = ICONS[icon];
  return (
    <Card className="flex gap-4 p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow"><Icon /></span>
      <div>
        <h3 className="font-bold">{title}</h3>
        {lines.map((line) => <p key={line} className="text-sm text-muted">{line}</p>)}
        {action && (
          <a href={action.href} className="mt-2 inline-block text-sm font-semibold text-brand-blue hover:underline">{action.label}</a>
        )}
      </div>
    </Card>
  );
}
