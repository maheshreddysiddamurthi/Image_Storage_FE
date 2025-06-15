import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StoriesDownloadSection from '@/components/StoriesDownloadSection';

export default function StoriesDownloadPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div
        className="relative flex-grow flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/logos/landing-page-7.png')`,
        }}
      >
        <StoriesDownloadSection />
      </div>
      <Footer />
    </main>
  );
} 