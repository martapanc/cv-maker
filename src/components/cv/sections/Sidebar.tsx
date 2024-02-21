import clsx from 'clsx';

import SectionHeader from '@/components/headers/SectionHeader';

import { Award } from '@/types/Award';
import { Language } from '@/types/Language';
import { ProgrammingLanguage } from '@/types/ProgrammingLanguage';
import { School } from '@/types/School';
import { Skill } from '@/types/Skill';

export interface SidebarProps {
  education: School[];
  programming: ProgrammingLanguage[];
  skills: Skill[];
  languages: Language[];
  awards: Award[];
  hobbies: string[];
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div className='flex w-[310px] flex-col bg-slate-200 px-6 pb-6 pt-8'>
      <div className='education' aria-label='education'>
        <SectionHeader title='Education' />

        {props.education.map((entry, id) => (
          <div key={id} className='my-4 flex flex-col'>
            <span className='font-medium'>{entry.school}</span>
            <i className='p-sm font-normal-light'>{entry.degree}</i>
            <div className='flex justify-between'>
              <span>{entry.years}</span>
              <span>{entry.grade}</span>
            </div>
          </div>
        ))}
      </div>

      <div className='programming mt-4' aria-label='programming'>
        <SectionHeader title='Programming' />

        {props.programming.map((entry, id) => (
          <div key={id} className='my-3 flex'>
            <div className='w-2/5'>{entry.language}</div>
            <div className='w-3/5'>
              <div className='my-2 h-2.5 w-full rounded-full bg-white'>
                <div
                  className={clsx(
                    'h-2.5 rounded-full bg-blue-600',
                    entry.score,
                  )}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='skills mt-4' aria-label='skills'>
        <SectionHeader title='Skills' />

        {props.skills.map((entry, id) => (
          <div key={id} className='my-2.5'>
            <div>
              <strong className='font-semibold'>{entry.group}:</strong>
              &nbsp;
              <span className='font-light'>{entry.names}</span>
            </div>
          </div>
        ))}
      </div>

      <div className='languages mb-12 mt-4' aria-label='languages'>
        <SectionHeader title='Languages' />

        {props.languages.map((entry, id) => (
          <div key={id} className='my-2'>
            <div className='flex'>
              <strong className='w-1/3 font-semibold'>{entry.name}</strong>
              <span className='w-2/3 font-light'>{entry.level}</span>
            </div>
          </div>
        ))}
      </div>

      <div className='awards mt-[70px]' aria-label='Awards & Achievements'>
        <SectionHeader title='Awards & Achievements' />

        {props.awards.map((award, id) => (
          <div key={id} className='flex flex-col font-light'>
            <span className='mt-4'>{award.yearSchool}</span>
            <i className='mt-0.5'>{award.name}</i>
          </div>
        ))}
      </div>

      <div className='hobbies mt-7' aria-label='Hobbies & Activities'>
        <div className='mb-5'>
          <SectionHeader title='Hobbies & Activities' />
        </div>

        {props.hobbies.map((hobby, id) => (
          <div key={id} className='mt-4 font-light'>
            <span>{hobby}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
