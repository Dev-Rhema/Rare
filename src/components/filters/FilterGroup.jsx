import Disclosure from '../ui/Disclosure';

export default function FilterGroup({ title, defaultOpen = true, children }) {
  return (
    <Disclosure
      title={title}
      defaultOpen={defaultOpen}
      className="py-4"
      headerClassName="rounded-lg px-2 text-sm font-bold"
      panelClassName="mt-3 space-y-1"
    >
      {children}
    </Disclosure>
  );
}
