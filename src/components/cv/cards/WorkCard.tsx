import ReactMarkdown from 'react-markdown';

import { Job } from '@/types/Job';

export interface WorkCardProps {
  job: Job;
}

const WorkCard: React.FC<WorkCardProps> = ({ job }) => {
  return (
    <div className='mb-4 flex'>
      <div className='flex w-[28%] flex-col items-end pe-4'>
        <span>{job.dates}</span>
        <span>{job.jobTitle}</span>
      </div>
      <div className='flex w-[72%] flex-col ps-4'>
        <span className='text-lg font-semibold'>{job.name}</span>
        <ReactMarkdown className='p-xs job-description me-2 text-justify font-light'>
          {job.description}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default WorkCard;
