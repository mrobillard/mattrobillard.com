import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export default function WritingPage() {
  return (
    <div className="bg-background flex min-h-screen w-full flex-col items-start">
      <Navbar pathname="writing" />
      <main className="flex-1 grow"></main>
      <Footer />
    </div>
  );
}
