import ReactMarkdown from 'react-markdown';

import { Job } from '@/types/Job';

export interface WorkCardProps {
  job: Job;
}

const WorkCard: React.FC<WorkCardProps> = ({ job }) => {
  return (
    <div className='mb-1 flex'>
      <div className='my-2 flex w-[29.5%] flex-col items-end justify-between border-e-[1.5px] border-slate-300 pe-3'>
        <div className='flex flex-col items-end'>
          <span className='mt-1 text-sm font-light'>{job.dates}</span>
          <span className='text-[15.8px]'>{job.jobTitle}</span>
        </div>

        <div className='flex flex-col items-end'>
          {job.skills.map((skill, id) => (
            <span key={id} className='text-xs'>
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className='my-2 flex w-[70.5%] flex-col ps-4'>
        <span className='text-lg font-semibold'>{job.name}</span>
        <ReactMarkdown className='p-xs job-description me-2 text-justify font-light'>
          {job.description}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default WorkCard;
