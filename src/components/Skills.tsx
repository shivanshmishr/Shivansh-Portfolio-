
'use client';
import { FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type SkillCategory = 'Languages' | 'Front' | 'Back' | 'Tools';

const skillsTitles: Record<SkillCategory, string> = {
  Languages: 'Programming Languages',
  Front: 'Frontend',
  Back: 'Backend',
  Tools: 'Tools',
};

const skillsLogos: Record<string, { name: string; image: string }[]> = {
  ['Languages']: [
    { name: 'JavaScript', image: '/logos/js-logo.png' },
    { name: 'TypeScript', image: '/logos/ts-logo.png' },
    { name: 'Python', image: '/logos/python-logo.png' },


  ],
  ['Front']: [
    { name: 'HTML5', image: '/logos/html5-logo.png' },
    { name: 'CSS3', image: '/logos/css-logo.png' },
    { name: 'ReactJS', image: '/logos/react-logo.png' },
    { name: 'NextJS', image: '/logos/nextjs-logo.png' },
    { name: 'Native', image: '/logos/rnative-logo.png' },
    { name: 'TailwindCSS', image: '/logos/tailwindcss-logo.jpg' },
    { name: 'Sass', image: '/logos/sass-logo.png' },
    { name: 'JQuery', image: '/logos/jquery-logo.webp' },
    { name: 'Svelte', image: '/logos/svelte-logo.png' },
    { name: 'Bootstrap', image: '/logos/bootstrap-logo.svg' },
    { name: 'MaterialUI', image: '/logos/materialui-logo.png' },
    { name: 'LeafletJS', image: '/logos/leaflet-logo.jpg' },

  ],
  ['Back']: [
    { name: 'NodeJS', image: '/logos/nodejs-logo.png' },
    { name: 'MongoDB', image: '/logos/mongodb-logo.webp' },
    { name: 'Firebase', image: '/logos/firebase-logo.jpg' },
    { name: 'DigitalOcean', image: '/logos/digital-ocean-logo.svg' },
    { name: 'Stripe', image: '/logos/stripe-logo.png' },
    { name: 'awsS3', image: '/logos/s3-logo.png' },
    { name: 'SanityCMS', image: '/logos/sanity-cms-logo.png' },
  ],
  ['Tools']: [
    { name: 'Git', image: '/logos/git-logo.png' },
    { name: 'Github', image: '/logos/github-logo.webp' },
    { name: 'Docker', image: '/logos/docker-logo.png' },
    { name: 'EsLint', image: '/logos/eslint-logo.png' },
    { name: 'Redux', image: '/logos/redux-logo.png' },
    { name: 'Figma', image: '/logos/figma-logo.webp' },
    { name: 'Mailchimp', image: '/logos/mailchimp-logo.webp' },
    { name: 'Postmark', image: '/logos/postmark-logo.png' },

  ],
};

const skills = [
  { skill: 'Languages', buttonClassNames: 'rounded-tl-full', textClassNames: '-translate-x-5' },
  { skill: 'Front', buttonClassNames: 'rounded-tr-full', textClassNames: 'translate-x-3 translate-y-1' },
  { skill: 'Back', buttonClassNames: 'rounded-bl-full', textClassNames: 'translate-x-8 -translate-y-3' },
  { skill: 'Tools', buttonClassNames: 'rounded-br-full', textClassNames: 'translate-x-3 -translate-y-3' },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<SkillCategory>('Languages');
  const controls = useAnimationControls();

  const handleChangeSkill = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const skill = e.currentTarget.textContent as SkillCategory;
    if (skill === activeSkill) return;
    setActiveSkill(skill);
    await controls.start('hidden');
    await controls.start('visible');
  };

  return (
    <div className="@container">
      <FadeInStagger animate={controls} className="relative z-10 grid grid-cols-3 @lg:grid-cols-4 mt-20 @2xl:grid-cols-5 @3xl:grid-cols-6 @4xl:grid-cols-8" faster>
        <div className="row-start-4 col-span-3 h-[115px] flex items-center justify-center @2xl:col-start-4 @2xl:row-start-1 @3xl:col-start-4 @4xl:col-start-4 @4xl:col-span-5 @3xl:justify-start @2xl:h-[40px] @3xl:mt-auto">
          <h2 className="text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
            {skillsTitles[activeSkill]}
          </h2>
        </div>
        <div className="skills-picker w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] xl:w-[325px] xl:h-[325px] col-span-3 row-span-3 place-self-center isolate">
          <div className="rounded-full inset-6 absolute grid grid-cols-2 p-2 gap-2 rotate-45">
            {skills.map((skill) => (
              <button
                onClick={handleChangeSkill}
                key={skill.skill}
                className={clsx('rounded-[500px] skills-buttons', skill.buttonClassNames, activeSkill === skill.skill && 'skills-buttons-active')}
              >
                <p
                  className={clsx(
                    'text-2xl md:text-3xl lg:text-4xl text-white font-semibold tracking-wide w-min -rotate-45',
                    skill.textClassNames
                  )}
                >
                  {skill.skill}
                  <span className={clsx('transition-all duration-300 -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full', activeSkill === skill.skill ? 'h-[18px]' : 'h-[2px]')}></span>
                </p>
              </button>
            ))}
          </div>
        </div>
        {skillsLogos[activeSkill].map((skill, index) => (
          <FadeIn key={skill.name} className="h-[115px] w-24 place-self-center flex flex-col">
            <div className="mt-auto">
              <Image
                src={skill.image}
                className="object-contain rounded-md m-auto"
                alt=""
                height={64}
                width={64}
                style={{
                  width: 64,
                  height: 64,
                }}
              />
              <h3 className="text-sm font-semibold tracking-tight text-[#525df3] text-center bg-white rounded-full w-min px-2 m-2 mx-auto">
                {skill.name}
              </h3>
            </div>
          </FadeIn>
        ))}
      </FadeInStagger>
    </div>
  );
}
