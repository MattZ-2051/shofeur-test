import Image from 'next/image';

const Rentals = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-12 text-3xl font-bold text-center">Rentals Available</h2>
      <div className="flex flex-wrap items-center justify-center w-[1000px] gap-12">
        <div>
          <p className="text-neutral-500 dark:text-neutral-300">Luxury SUV Up to 6 people</p>
          <Image
            src={
              'https://static.wixstatic.com/media/161923_e71c300089e54b058615d5ce9defe29c~mv2.png/v1/fill/w_440,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SUV.png'
            }
            height={200}
            className="w-[150px] h-[80px]"
            width={200}
            alt=""
          />
        </div>
        <div>
          <p className="text-neutral-500 dark:text-neutral-300">Limousine Up to 10 people</p>
          <Image
            src={
              'https://static.wixstatic.com/media/161923_479d0ef3bd9747f49c2dd8a317905cd4~mv2.png/v1/fill/w_440,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/limo.png'
            }
            height={200}
            className="w-[150px] h-[80px]"
            width={200}
            alt=""
          />
        </div>
        <div>
          <p className="text-neutral-500 dark:text-neutral-300">Small Party Bus Up to 16 people</p>
          <Image
            src={
              'https://static.wixstatic.com/media/161923_4360d262e85c4aee9b2d2351348b56a2~mv2.png/v1/fill/w_440,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Mercedes-Sprinter-Vehicle.png'
            }
            height={200}
            className="w-[150px] h-[80px]"
            width={200}
            alt=""
          />
        </div>
        <div>
          <p className="text-neutral-500 dark:text-neutral-300">Medium Party Bus Up to 30 people</p>
          <Image
            src={
              'https://static.wixstatic.com/media/161923_e71c300089e54b058615d5ce9defe29c~mv2.png/v1/fill/w_440,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SUV.png'
            }
            height={200}
            className="w-[150px] h-[80px]"
            width={200}
            alt=""
          />
        </div>
        <div>
          <p className="text-neutral-500 dark:text-neutral-300">Large Party Bus Up to 50 people</p>
          <Image
            src={
              'https://static.wixstatic.com/media/161923_bd686ef6b53941dbbba20ab903c20d11~mv2.png/v1/fill/w_438,h_248,al_c,lg_1,q_85,enc_auto/50%20person%20bus.png'
            }
            height={200}
            className="w-[150px] h-[80px]"
            width={200}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Rentals;
