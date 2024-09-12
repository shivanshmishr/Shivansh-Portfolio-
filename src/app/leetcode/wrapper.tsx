import { AppIntro, FadeIn, FadeInStagger, PageLinks, Section } from '@/components';
import Image from 'next/image';
import { Leetcode } from '@/lib/mdx'; // Keep only the Leetcode type if you need it

export default function AppsLayout({ leetData, children }: { leetData?: Leetcode; children: React.ReactNode }) {
  // Fallback data in case leetData is not provided
  const fallbackLeetData = {
    title: 'Leetcode Default Title',
    description: 'Leetcode Default Description',
    pathname: '/default-path',
    framework: 'default',
  };

  const data = leetData || fallbackLeetData;

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden @container">
      <article>
        <header>
          {/* You can add header content if needed */}
          <Section id="about">
            <FadeInStagger once>
              <FadeIn>
                <AppIntro eyebrow="Case Study" title={data.title}>
                  <p>{data.description}</p>
                </AppIntro>
              </FadeIn>
            </FadeInStagger>
          </Section>
        </header>

        <FadeIn>{children}</FadeIn>
      </article>
    </div>
  );
}
