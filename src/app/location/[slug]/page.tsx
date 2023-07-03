import { Metadata } from 'next';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  return {
    title: slug
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="justify-start w-full">
      <h1>Location {params.slug} </h1>
    </div>
  );
}
