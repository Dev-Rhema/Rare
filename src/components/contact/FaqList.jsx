import Card from '../ui/Card';
import Disclosure from '../ui/Disclosure';

export default function FaqList({ items }) {
  return (
    <div className="grid items-start gap-3 md:grid-cols-2">
      {items.map((item, index) => (
        <Card key={item.question} className="px-6 py-5">
          <Disclosure
            title={item.question}
            defaultOpen={index === 0}
            headerClassName="font-bold"
            panelClassName="mt-3 text-sm leading-relaxed text-muted"
          >
            {item.answer}
          </Disclosure>
        </Card>
      ))}
    </div>
  );
}
