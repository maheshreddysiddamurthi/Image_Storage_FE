import Image from 'next/image';
import Link from 'next/link';

const StoriesDownloadSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-12 text-white">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
        Your Stories Deserve to Travel—Download Now
      </h1>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        <Link 
          href="https://apps.apple.com/app/snapsync" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105"
        >
          <Image
            src="/logos/iphone.png"
            alt="Download on the App Store"
            width={180}
            height={60}
            className="h-auto"
          />
        </Link>
        <Link 
          href="https://play.google.com/store/apps/details?id=com.snapsync.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105"
        >
          <Image
            src="/logos/android.png"
            alt="Get it on Google Play"
            width={180}
            height={60}
            className="h-auto"
          />
        </Link>
      </div>
    </div>
  );
};

export default StoriesDownloadSection; 