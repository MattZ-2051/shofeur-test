import Image from 'next/image';

interface IProps {
  description: string;
  imgSrc: string;
  title: string;
  href: string;
}

const Card = ({ imgSrc, description, title, href }: IProps) => {
  return (
    <div className="rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-96">
      <a href={href}>
        <Image src={imgSrc} alt="" className="w-full rounded-t-lg" width={100} height={100} />
      </a>
      <div className="p-6">
        <h5 className="pl-4 mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <div className="px-4 overflow-scroll max-h-24">
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
