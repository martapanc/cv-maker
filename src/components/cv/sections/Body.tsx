import appetize from '@/data/appetize.md';
import bjss from '@/data/bjss.md';
import booking from '@/data/booking.md';
import resourcify from '@/data/resourcify.md';

import WorkCard from '@/components/cv/cards/WorkCard';
import SectionHeader from '@/components/headers/SectionHeader';

import { Job } from '@/types/Job';
import { Project } from '@/types/Project';
import { Publication } from '@/types/Publication';

export interface BodyProps {
  jobs: Job[];
  publications: Publication[];
  projects: Project[];
}

const Body = (props: BodyProps) => {
  const fileMappings: { [key: string]: string } = {
    appetize: appetize,
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
      <div className='work-experience mb-5' aria-label='Work Experience'>
        <div className='py-2 pe-3 ps-5'>
          <SectionHeader title='Work experience' />
        </div>

        {props.jobs.map((job, id) => (
          <div key={id}>
            <WorkCard job={job} />
          </div>
        ))}
      </div>

      <div className='publications pt-10' aria-label='Publications'>
        <div className='py-2 pe-3 ps-5'>
          <div className='pb-4'>
            <SectionHeader title='Publications' />
          </div>

          {props.publications.map((publication, id) => (
            <div key={id} className='mx-3 mb-3 flex text-[15px]'>
              <div className='w-1/12'>{publication.year}</div>
              <div className='w-11/12'>
                <div className='mb-0.5 text-justify'>
                  <span className='font-medium'>{publication.type}:</span>
                  &nbsp;
                  <span className='font-light'>{publication.title}</span>
                </div>

                <div className='flex justify-end'>
                  <i className='text-xs'>{publication.publisher}</i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='projects pt-1.5' aria-label='Projects'>
        <div className='py-2 pe-3 ps-5'>
          <div className='pb-4'>
            <SectionHeader title='Projects' />
          </div>

          {props.projects.map((project, id) => (
            <div key={id} className='mx-3 mb-3 flex text-[14.5px]'>
              <div className='w-1/12'>{project.year}</div>
              <div className='w-11/12'>
                <div className='mb-0.5 text-justify'>
                  <span className='font-medium'>{project.title}:</span>
                  &nbsp;
                  <span className='font-light'>{project.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
