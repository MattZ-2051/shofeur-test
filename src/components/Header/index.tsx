import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const imgSrc =
    'https://static.wixstatic.com/media/161923_890505a73d124ca9865b45fd669bb40e~mv2.png/v1/fill/w_406,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20white%20gold.png';
  return (
    <div className="flex items-center justify-between w-full h-20 px-20 bg-bg-overlay-color">
      <Image src={imgSrc} alt="shofeur logo" height={60} width={200} />
      <div className="text-white">
        <Link href={'/locations'}>Locations</Link>
      </div>
    </div>
  );
};

export default Header;
