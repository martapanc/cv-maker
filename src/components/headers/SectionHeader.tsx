export interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  const allCapsTitle = title.toUpperCase();

  return (
    <div className='w-full border-b-2 border-slate-400 text-xl'>
      <span>{allCapsTitle}</span>
    </div>
  );
};

export default SectionHeader;
