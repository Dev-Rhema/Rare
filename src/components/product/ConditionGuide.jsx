import { CONDITIONS } from '../../data/catalog';
import { useTone } from '../../theme/tones';
import { cn } from '../../utils/cn';
import Badge from '../ui/Badge';
import Card from '../ui/Card';

/**
 * The five-step condition scale.
 * variant "rules" = ruled columns (home), "cards" = rounded cards (products page).
 */
export default function ConditionGuide({ variant = 'rules', className }) {
  const tone = useTone();
  const asCards = variant === 'cards';

  return (
    <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-5', !asCards && 'gap-y-8 lg:gap-6', className)}>
      {CONDITIONS.map((condition) =>
        asCards ? (
          <Card key={condition.id} className="p-5">
            <Badge variant="blue">{condition.id}</Badge>
            <h3 className="mt-4 text-lg font-bold">{condition.label}</h3>
            <p className="mt-1 text-sm text-muted">{condition.description}</p>
          </Card>
        ) : (
          <div key={condition.id} className="border-t-2 border-current pt-4">
            <h3 className="text-lg font-bold">{condition.label}</h3>
            <p className={cn('mt-1 text-sm', tone.muted)}>{condition.description}</p>
          </div>
        )
      )}
    </div>
  );
}
