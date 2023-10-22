import { BsTelephone } from 'react-icons/bs';
import { TfiEmail, TfiLocationPin, TfiWorld } from 'react-icons/tfi';

import './style.css';

export interface HeaderProps {
  name: string;
  jobTitle: string;
  email: string;
  website: string;
  location: string;
  phoneNumber: string;
  intro: string[];
}

const Header = (props: HeaderProps) => {
  return (
    <div className='flex h-[230px] bg-sky-900 p-8 text-white'>
      <div className='w-9/12'>
        <div className='mb-1.5'>
          <span className='text-45xl font-bold'>{props.name}</span>
        </div>

        <div className='mb-6'>
          <span className='text-3xl'>{props.jobTitle}</span>
        </div>

        {props.intro.map((paragraph, id) => (
          <p className='p-sm mb-1 font-extralight' key={id}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className='flex w-3/12 flex-col'>
        <div className='mb-5 mt-2 flex'>
          <TfiEmail className='me-5 mt-0.5 text-2xl' />
          {props.email}
        </div>
        <div className='mb-5 flex'>
          <TfiWorld className='me-5 mt-0.5 text-2xl' />
          <a href={props.website}>{props.website}</a>
        </div>
        <div className='mb-5 flex'>
          <TfiLocationPin className='me-5 mt-0.5 text-2xl' />
          {props.location}
        </div>
        <div className='mb-5 flex'>
          <BsTelephone className='me-5 mt-0.5 text-2xl' />
          {props.phoneNumber}
        </div>
      </div>
    </div>
  );
};

export default Header;
