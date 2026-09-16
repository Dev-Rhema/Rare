import ContactForm from "../components/contact/ContactForm";
import FaqList from "../components/contact/FaqList";
import InfoCard from "../components/contact/InfoCard";
import Card from "../components/ui/Card";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import { CONTACT_CHANNELS, FAQS, SELL_CTA } from "../data/site";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Talk to the people holding your cards."
        description="Questions about an order, a card's condition or selling a collection? Someone on the shop floor replies, usually the same day."
      />

      <Section>
        <div className="grid items-start gap-8 lg:grid-cols-[1.6fr_1fr]">
          <ContactForm />
          <aside className="space-y-4">
            {CONTACT_CHANNELS.map((channel) => (
              <InfoCard key={channel.title} {...channel} />
            ))}
            <Card variant="blue" className="p-6">
              <h3 className="text-xl font-extrabold">{SELL_CTA.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {SELL_CTA.description}
              </p>
              <p className="mt-4 inline-block rounded-lg bg-brand-yellow px-3 py-1.5 text-xs font-semibold text-on-yellow">
                {SELL_CTA.label}
              </p>
            </Card>
          </aside>
        </div>
      </Section>

      <Section tone="yellow">
        <SectionHeader
          title="Before you write in"
          description="The questions we answer most often."
        />
        <FaqList items={FAQS} />
      </Section>
    </>
  );
}
