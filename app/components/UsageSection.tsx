import Button from '@rescui/button';
import { cardCn } from '@rescui/card/lib/index.js';
import { useTextStyles } from '@rescui/typography';
import { ThemeProvider } from '@rescui/ui-contexts';
import cn from 'classnames';

import { Container, Section } from './layout';
import { testimonials } from './UsageData';

function UsageSectionContent({ sort, tab }: { sort: 'default' | 'name'; tab: string }) {
  const textCn = useTextStyles();
  const sortByName = sort === 'name';
  const sortedTestimonials = sortByName ? [...testimonials].sort((a, b) => a.company.localeCompare(b.company)) : testimonials;

  return (
    <Section className="usage-section">
      <Container>
        <div id="usage" />
        <h2 className={textCn('rs-hero')}>Kotlin Usage Highlights</h2>

        <div className="kto-offset-top-16 usage-section__sort" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button mode="outline" size="s" href={`/?tab=${tab}&sort=${sortByName ? 'default' : 'name'}#usage`}>
            Sort: {sortByName ? 'A-Z' : 'Default'}
          </Button>
        </div>

        <div className="kto-grid kto-grid-gap-16 kto-offset-top-48">
          {sortedTestimonials.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                cardCn({ theme: 'light', mode: 'classic', isClickable: true }),
                'usage-section__card kto-col-4 kto-col-md-6 kto-col-sm-12',
              )}
            >
              <img
                src={item.logo}
                alt={item.company}
                className={cn('usage-section__logo', {
                  'usage-section__logo_spring': item.company === 'Spring',
                })}
              />
              <p className={cn(textCn('rs-text-2'), 'kto-offset-top-8')}>{item.text}</p>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function UsageSection({ sort, tab }: { sort: 'default' | 'name'; tab: string }) {
  return (
    <ThemeProvider theme="light">
      <UsageSectionContent sort={sort} tab={tab} />
    </ThemeProvider>
  );
}
