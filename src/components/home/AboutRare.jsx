import { ABOUT_PARAGRAPHS } from '../../data/site';
import ConditionGuide from '../product/ConditionGuide';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

export default function AboutRare() {
  return (
    <Section tone="gray">
      <SectionHeader title="About RARE" />
      <div className="grid gap-6 text-base leading-relaxed text-muted md:grid-cols-2 md:gap-16">
        {ABOUT_PARAGRAPHS.map((paragraph) => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
      </div>
      <ConditionGuide className="mt-14" />
    </Section>
  );
}
