import clsx from 'clsx';

import SectionHeader from '@/components/headers/SectionHeader';

import { Language } from '@/types/Language';
import { ProgrammingLanguage } from '@/types/ProgrammingLanguage';
import { School } from '@/types/School';
import { Skill } from '@/types/Skill';

export interface SidebarProps {
  education: School[];
  programming: ProgrammingLanguage[];
  skills: Skill[];
  languages: Language[];
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div className='w-[310px] bg-slate-200 px-6 pb-10 pt-8'>
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

      <div className='programming mt-7' aria-label='programming'>
        <SectionHeader title='Programming' />

        {props.programming.map((entry, id) => (
          <div key={id} className='my-3 flex'>
            <div className='w-2/5'>{entry.language}</div>
            <div className='w-3/5'>
              <div className='my-2 h-2.5 w-full rounded-full bg-white'>
                <div
                  className={clsx(
                    'h-2.5 rounded-full bg-blue-600',
                    entry.score
                  )}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='skills mt-7' aria-label='skills'>
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

      <div className='languages mt-7' aria-label='languages'>
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
    </div>
  );
};

export default Sidebar;
