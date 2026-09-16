import { TONES, ToneContext } from '../../theme/tones';
import { cn } from '../../utils/cn';
import Container from './Container';

const SPACING = {
  default: 'py-16 md:py-24',
  compact: 'py-12 md:py-16',
};

export default function Section({ tone = 'white', spacing = 'default', id, className, containerClassName, children }) {
  const theme = TONES[tone];
  return (
    <ToneContext.Provider value={theme}>
      <section id={id} className={cn(theme.bg, theme.text, SPACING[spacing], className)}>
        <Container className={containerClassName}>{children}</Container>
      </section>
    </ToneContext.Provider>
  );
}
