import clsx from 'clsx';

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
    <div className='w-[320px] bg-slate-200 px-6 py-10'>
      <div className='education' aria-label='education'>
        <div className='w-full border-b-2 border-slate-400 text-xl'>
          <span>EDUCATION</span>
        </div>

        {props.education.map((entry, id) => (
          <div key={id} className='my-4 flex flex-col'>
            <strong>{entry.school}</strong>
            <i className=''>{entry.degree}</i>
            <div className='flex justify-between'>
              <span>{entry.years}</span>
              <span>{entry.grade}</span>
            </div>
          </div>
        ))}
      </div>

      <div className='programming mt-8' aria-label='programming'>
        <div className='w-full border-b-2 border-slate-400 text-xl'>
          <span>PROGRAMMING</span>
        </div>

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

      <div className='skills mt-8' aria-label='skills'>
        <div className='w-full border-b-2 border-slate-400 text-xl'>
          <span>SKILLS</span>
        </div>

        {props.skills.map((entry, id) => (
          <div key={id} className='my-3'>
            <div>
              <strong className='font-semibold'>{entry.group}:</strong>
              &nbsp;
              <span className='font-light'>{entry.names}</span>
            </div>
          </div>
        ))}
      </div>

      <div className='languages mt-8' aria-label='languages'>
        <div className='w-full border-b-2 border-slate-400 text-xl'>
          <span>LANGUAGES</span>
        </div>

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
