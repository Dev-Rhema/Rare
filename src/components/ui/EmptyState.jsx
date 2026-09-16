import Card from "./Card";
import { SearchIcon } from "./Icons";

export default function EmptyState({ title, description, action }) {
  return (
    <Card className="flex flex-col items-center px-6 py-16 text-center">
      <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow text-on-yellow">
        <SearchIcon />
      </span>
      <h3 className="text-lg font-bold">{title}</h3>
      {description && (
        <p className="mt-2 max-w-sm text-sm text-muted">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </Card>
  );
}
