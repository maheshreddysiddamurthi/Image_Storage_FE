import Image from 'next/image';
import Link from 'next/link';

const DownloadCTA = () => {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Sync? Download SnapSync Today
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link 
            href="https://apps.apple.com/app/snapsync" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/logos/iphone.png"
              alt="Download on App Store"
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
    </section>
  );
};

export default DownloadCTA; 