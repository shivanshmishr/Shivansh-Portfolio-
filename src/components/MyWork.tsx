'use client';
import { ExpandArrowLink, GlowCard } from '@/components';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { askmishraji, ganpati, hope, ieee, kedar, kiranafriends, koshour, sales } from '../../public/projects/';

interface Project {
  href: string;
  name: string;
  description: string;
  full: boolean;
  image: {
    src: StaticImageData;
  };
}

const projects: Project[] = [
  {
    href: 'https://kedarkanthyoga.com/',
    name: 'Kedarkanth Yoga',
    full: true,
    description: ' provide services related to YOGA with team of expert teachers.',
    image: { src: kedar },
  },
  {
    href: 'https://koshurindia.com/',
    name: 'Koshour India',
    full: true,
    description: 'an E-commerce website developed on Shopify to sell pashmina and silk cloths form women',
    image: { src: koshour },
  },
  {
    href: 'https://kiranafriends.com/',
    name: 'Kirana Friends ',
    full: false,
    description: 'created the digital identity for business.',
    image: { src: kiranafriends },
  },
  {
    href: 'https://ieee.tcetmumbai.in/',
    name: 'IEEE',
    full: false,
    description: ' static website for taking events registrations ',
    image: { src: ieee },
  },
  {
    href: 'https://misraji.kiranafriends.com/',
    name: 'Ask Misraji',
    full: true,
    description: ' an AI chatbot developed in python.',
    image: { src: askmishraji },
  },
  {
    href: 'https://www.hopeekasha.org/',
    name: 'Hope Eak Asha',
    full: true,
    description: ' an NGO helps Alzimers patients and Dean time care.',
    image: { src: hope },
  },
  {
    href: 'https://sales-analysis-kf-web.vercel.app/',
    name: 'Sales Analytics',
    full: false,
    description: ' an webpage to collects user data.',
    image: { src: sales },
  },
  {
    href: '/apps/impulseux',
    name: 'ImpulseUX',
    full: false,
    description: ' static website for design and development agency.',
    image: { src: ganpati },
  },
];

export default function MyWork() {
  return (
    <div className="relative z-10 mt-20 @container">
      <div className="grid grid-cols-1 gap-8 pt-10 @3xl:grid-cols-2">
        {projects.map((project) => (
          <GlowCard
            key={project.name}
            className={clsx(
              'hover:shadow-my_work_yellow/90',
              project.full ? 'h-[60vh] @2xl:h-[50vh] @3xl:col-span-2' : 'h-auto @3xl:col-span-1'
            )}
            glowClassName="from-[#ffdc8b] to-[#ffdc8b]"
          >
            <div
              className={clsx(
                'flex justify-between h-full',
                project.full ? 'flex-col md:flex-row' : 'flex-col'
              )}
            >
              {/* Text block for both large and small divs */}
              <div className={clsx(project.full ? 'w-full md:w-[60%] p-4' : 'w-full p-4')}>
                <h3 className={clsx('text-xl @2xl:text-3xl text-white dark:text-white/90')}>
                  <span className="text-2xl @2xl:text-4xl text-my_work_yellow">
                    {project.name}
                  </span>
                  {project.description}
                </h3>
              </div>

              {/* Image block */}
              <div
                className={clsx(
                  project.full ? 'w-full md:w-[50%] h-60 md:h-full relative overflow-hidden' : 'w-full h-60 relative overflow-hidden'
                )}
              >
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    placeholder="blur"
                    className="absolute w-full h-full object-cover"
                    src={project.image.src}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
