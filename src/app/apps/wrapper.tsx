import { AppIntro, FadeIn, FadeInStagger, PageLinks, Section } from '@/components';
import { App } from '@/lib/mdx';
import Image from 'next/image';

export default function AppsLayout({ appData, children }: { appData?: App; children: React.ReactNode }) {
  const fallbackData = {
    title: 'Default Title',
    description: 'Default Description',
    industry: 'Default Industry',
    date: '2024',
    service: 'Default Service',
    image: '/path/to/default-image.jpg',
  };

  const data = appData || fallbackData;

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden @container">
      <article>
        <header>
          <Section id="about">
            <FadeInStagger once>
              <FadeIn>
                <AppIntro eyebrow="Case Study" title={data.title}>
                  <p>{data.description}</p>
                </AppIntro>
              </FadeIn>
              <FadeIn>
                <div className="mt-24 border-gray-500/20 border-y bg-gray-900/20">
                  <div className="mx-auto max-w-5xl">
                    <dl className="grid grid-cols-1 text-sm text-gray-500 sm:mx-0 sm:grid-cols-3">
                      <div className="px-6 py-4 sm:border-l border-gray-500/20">
                        <dt className="font-semibold text-blue-100">Industry</dt>
                        <dd>{data.industry}</dd>
                      </div>
                      <div className="px-6 py-4 sm:border-l border-gray-500/20">
                        <dt className="font-semibold text-blue-100">Year</dt>
                        <dd>
                          <time dateTime={data.date.split('-')[0]}>{data.date.split('-')[0]}</time>
                        </dd>
                      </div>
                      <div className="px-6 py-4 sm:border-l border-gray-500/20">
                        <dt className="font-semibold text-blue-100">Service</dt>
                        <dd>{data.service}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div className="p-4 @lg:p-12 @3xl:p-24 @6xl:p-32 app-gradient-bg">
                  <Image src={data.image} alt="" className="m-auto" sizes="(min-width: 1216px) 76rem, 100vw" priority />
                </div>
              </FadeIn>
            </FadeInStagger>
          </Section>
        </header>

        <FadeIn>{children}</FadeIn>
      </article>
    </div>
  );
}
