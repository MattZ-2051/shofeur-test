import { locationsMockData } from '@/mockData';
import { ImageResponse } from 'next/server';

export const size = {
  width: 900,
  height: 450
};

export const contentType = 'image/png';

interface Props {
  params: {
    slug: string;
  };
}

export default async function og({ params }: Props) {
  const location = locationsMockData[0];

  return new ImageResponse(
    (
      <div tw="relative flex items-center justify-center">
        <img src={location.img} alt={location.title} />
        <div tw="absolute flex bg-black opacity-50 inset-0 " />
        <div tw="absolute flex items-center top-2 w-full ">
          <p tw="text-white text-4xl flex font-bold m-5">{location?.title}</p>
        </div>
      </div>
    ),
    size
  );
}
