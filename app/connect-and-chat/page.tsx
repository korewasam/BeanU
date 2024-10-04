import React from 'react';
import Image from 'next/image';

const socialIcons = [
  { name: 'Twitter', src: '/imageT.png' ,link: 'https://x.com/Bean__You' },
  { name: 'Facebook', src: '/facebook.png',link: 'https://www.facebook.com/profile.php?id=61563809891807' },
  { name: 'TikTok', src: '/imageTK.png',link: 'https://www.tiktok.com/@bean__you' },
  { name: 'Instagram', src: '/instagram-icon.png' },
  { name: 'Reddit', src: '/imageR.png',link: 'https://www.reddit.com/user/Bean__You/' },
];

export default function ConnectAndChat() {
  return (
    <div className="contactpage__container bg-red-900 min-h-screen flex items-center justify-center p-4">
      <div className="contactpage w-full max-w-7xl bg-red-800 rounded-3xl p-8 relative">
        
        <div className="socials flex flex-col md:flex-row gap-8">
          <div className="socials__container flex  md:w-1/2">
        <h1 className="connect text-5xl text-white mb-8 ">Connect and Chat</h1>
            <h2 className="socials__title socialtext-2xl text-white mb-6">SOCIAL MEDIA</h2>
            <div className="socials__icons flex flex-wrap gap-6 mb-8">
              {socialIcons.map((icon) => (
                <div key={icon.name} className="socials__icon w-12 h-12 relative">
                <a href={icon.link} target='_blank'>
                  <Image src={icon.src} alt={icon.name} layout="fill" objectFit="contain" />
                  </a>
                </div>
              ))}
              {/* <div className="w-16 h-16 flex items-center justify-center">
                <span className="text-white text-4xl">&gt;</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 relative">
                <Image src="/whatsapp-icon.png" alt="WhatsApp" layout="fill" objectFit="contain" />
              </div> 
              <span className="text-white text-4xl">&gt;</span>
            </div>
            <div className="mt-12 flex items-center justify-center relative"> */}
        </div>
          <div className="beancup__figure  w-24 h-24">
            <Image className='beancup__figure__image' src="/coffee-cup.png" alt="Bean Cup" layout="fill" objectFit="contain" />
          </div>
          </div>
          
          <form className="md:w-1/2 bg-red-700 rounded-3xl p-6">
            <div className="mb-4">
              <label htmlFor="name" className="text-white block mb-1">NAME</label>
              <input type="text" id="name" className="w-full bg-transparent border-b border-white text-white focus:outline-none" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-white block mb-1">EMAIL</label>
              <input type="email" id="email" className="w-full bg-transparent border-b border-white text-white focus:outline-none" />
            </div>
            <div className="mb-4">
              <label htmlFor="comment" className="text-white block mb-1">Any questions or comment?</label>
              <textarea id="comment" rows={4} className="w-full bg-red-300 rounded-xl p-2 text-black resize-none focus:outline-none"></textarea>
            </div>
            <div className="attach__icon flex items-center gap-2 mb-4">
              <Image src="/paperClip.png" alt="Attach" width={20} height={20} />
              <span className="text-white text-sm">attach cv/social media credentials</span>
            </div>
            <button type="submit" className="bg-red-500 text-white rounded-full px-8 py-2 hover:bg-red-600 transition-colors w-full">Send</button>
          </form>
        </div>
        
        {/* <div className="mt-12 flex items-center justify-center relative">
          <div className="beancup__figure absolute -bottom-10 w-24 h-24">
            <Image src=" beancup__figure__image /coffee-cup.png" alt="Bean Cup" layout="fill" objectFit="contain" />
          </div>
        </div> */}
        
        {/* <div className="absolute bottom-4 left-4 text-white text-xs">
          terms and conditions @beanyou.com 2024
        </div> */}
        {/* <div className="absolute bottom-4 right-4 text-white text-xs flex items-center">
          product of:
          <Image src="/asili-coffee-logo.png" alt="Asili Coffee" width={50} height={20} className="ml-2" />
        </div> */}
      </div>
    </div>
  );
}