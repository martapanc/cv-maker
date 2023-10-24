import bjss from '@/data/bjss.md';
import booking from '@/data/booking.md';
import resourcify from '@/data/resourcify.md';

import WorkCard from '@/components/cv/cards/WorkCard';
import SectionHeader from '@/components/headers/SectionHeader';

import { Job } from '@/types/Job';

export interface BodyProps {
  jobs: Job[];
}

const Body = (props: BodyProps) => {
  const fileMappings: { [key: string]: string } = {
    bjss: bjss,
    booking: booking,
    resourcify: resourcify,
  };

  props.jobs.map((job) => {
    if (job.description.endsWith('md')) {
      const jobName = job.description.replace('.md', '');
      job.description = fileMappings[jobName];
    }
  });

  return (
    <div className='w-[790px] px-3 py-6'>
      <div className='py-2 pe-3 ps-5'>
        <SectionHeader title='Work experience' />
      </div>

      {props.jobs.map((job, id) => (
        <div key={id}>
          <WorkCard job={job} />
        </div>
      ))}
    </div>
  );
};

export default Body;
