import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const experience = [
  {
    title: 'Frontend Developer | Kirana Friends.',
    date: 'Dec 2023 - Present',
    description: [
      'Developed Kirana Friends app using React Native and Node.js, delivering features like Forum, Reels, In-app Sharing, and more',
      'Developed and maintained React Native components, screens, and features for the mobile app using TDD practices.',
      'Managed media storage with AWS S3, frontend deployment with Vercel, and backend deployment with AWS EC2',
      'Implemented real-time event tracking with CleverTap, crash analytics with Firebase, and overall performance monitoring with Google Analytics.',
      'Collaborated with other developers to implement new features in a way that is consistent with existing codebase conventions.',
    ],
    image: { url: '/work/kiranan.png', height: 86, width: 182, className: 'rounded-none' },
  },
  {
    title: 'Hope Eak Asha | FullStack Developer.',
    date: 'Oct 2022 - Nov 2022',
    description: [
      'Built an Employee Database Management System and successfully integrated it with frontend.',
      'Implemented necessary security measures, such as SSL certificates and data encryption.',
      "Implemented SEO best practices to optimize the website's visibility on search engines",
      'Developed software by following the Agile Methodology.',
    ],
    image: { url: '/work/hope.png', height: 64, width: 210, className: '' },
  },
  {
    title: 'IEEE Bombay Section| Marketing Manager.',
    date: 'Jug 2022 - Aug 2023',
    description: [
      'Worked on their B2B saas platform by communicating with users and making the appropriate changes to the platform.',
      'Organized more than 30+ Seminars/webinars and brought an sponsorship ammount of Rs 1.34 Lakhs.',
      'Worked on recommended requirement section for Tenders Quotations, handled a working committee of 60+ student.',
    ],
    image: { url: '/work/IEEE_logo.svg', height: 96, width: 96, className: '' },
  },

];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date} image={item.image}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({
  children,
  title,
  date,
  image,
}: {
  children: React.ReactNode;
  title: string;
  date?: string;
  image: { url: string; className: string; height: number; width: number };
}) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        {/* Date and logo for large screens */}
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">
          {date}
        </p>
        <div
          className={clsx(
            'flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto',
            image.className
          )}
        >
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        {/* Logo and title for smaller screens */}
        <div className="flex flex-col @lg:flex-row mb-4 items-center">
          {/* Hide logo in desktop view */}
          <div
            className={clsx(
              'flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden',
              image.className
            )}
          >
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div className="text-center @lg:text-left">
            <p className="font-semibold text-work_experience_orange text-lg">
              {title}
            </p>
            {/* Date only shown on mobile */}
            <p className="mt-2 text-white text-sm @lg:hidden">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
