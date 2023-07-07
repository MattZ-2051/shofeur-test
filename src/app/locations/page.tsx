import Card from '@/components/Card';
import { locationsMockData } from '@/mockData';
import { Metadata } from 'next';

async function getData() {
  // const res = await fetch('https://api.example.com/...');
  const res = {
    ok: true,
    data: locationsMockData
  };

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res;
  // return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Locations',
    alternates: {
      canonical: 'https://www.shofeur.com/locations'
    }
  };
}

export default async function Page() {
  const { data } = await getData();

  return (
    <div>
      <p className="text-5xl font-semibold text-gray-700">Locations</p>
      <div className="w-full h-[2px] my-4 bg-black" />
      <div className="flex flex-col items-center justify-center p-0 lg:grid-cols-3 lg:!grid lg:flex-none gap-y-8">
        {data.map((location, index) => {
          if (index > 5) return null;
          return (
            <div key={location.id}>
              <Card
                title={location.title}
                description={location.description}
                imgSrc={location.img}
                href={`/locations/${location.name}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
