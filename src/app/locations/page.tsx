import Card from '@/components/Card';
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
    <div className="">
      <p className="mb-8 text-5xl font-semibold text-gray-700">Locations</p>
      <div className="grid grid-cols-3 gap-y-8">
        {data.map((location) => (
          <div key={location.id}>
            <Card
              title={location.title}
              description={location.description}
              imgSrc={vegasImgSrc}
              href={`/locations/${location.name}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
