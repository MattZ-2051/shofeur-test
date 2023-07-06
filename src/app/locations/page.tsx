import Card from '@/components/Card';
import Pagination from '@/components/Pagination';
import { locationsMockData, vegasImgSrc } from '@/mockData';

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

export default async function Page() {
  const { data } = await getData();

  return (
    <div>
      <p className="text-5xl font-semibold text-gray-700">Locations</p>
      <div className="w-full h-[2px] my-4 bg-black" />
      <div className="grid grid-cols-3 gap-y-8">
        {data.map((location, index) => {
          if (index > 5) return null;
          return (
            <div key={location.id}>
              <Card
                title={location.title}
                description={location.description}
                imgSrc={vegasImgSrc}
                href={`/locations/${location.name}`}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-full mt-10">{data.length > 6 && <Pagination />}</div>
    </div>
  );
}
