import Image from "next/image";
import { Mochiy_Pop_One } from 'next/font/google';

const mochiyPopOne = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mochiy-pop-one',
});

export default function FaceOfBeanYou() {
  return (
    <div className={`min-h-screen bg-[#E67E22] flex items-center justify-center p-4 ${mochiyPopOne.className}`}>
      <div className="beanforyou__container w-full max-w-6xl aspect-[16/9] flex flex-col md:flex-row items-stretch shadow-lg rounded-3xl overflow-hidden">
        <div className="bean__text__wrapper md:w-1/2 bg-[#D35400] p-8 flex flex-col justify-center">
          <h1 className="bean__text__title text-4xl md:text-5xl font-bold mb-6 text-white">
            Face of Bean you
          </h1>
          <p className="bean__text__description text-lg md:text-xl text-black font-semibold">
            &ldquo;Yo, we&apos;re on the hunt for fresh, authentic Kenyan Gen
            Z vibes to rep Bean You across socials and TV! If you&apos;re creative,
            real, and all about standing out, this is your time to shine. Let&apos;s show
            the world what being unapologetically you is all about!&rdquo;
          </p>
        </div>
        <div className="md:w-1/2 relative bg-[#E67E22] overflow-hidden">
          <div className="absolute top-20 left-48 w-32 h-32 z-20">
            <Image
              src="/stan.png"
              alt="I STAN GEN Z sticker"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="mid__coffee__beans absolute inset-0 z-0">
            <Image
              src="/splash.png"
              alt="Coffee beans"
              layout="fill"
              objectFit="contain"
              objectPosition="right"
            />
          </div>
          <div className="absolute -bottom-4 right-0 w-full h-[120%] z-10">
            <Image
              src="/girl.png"
              alt="Excited young woman with long braids"
              layout="fill"
              objectFit="contain"
              objectPosition="bottom right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}