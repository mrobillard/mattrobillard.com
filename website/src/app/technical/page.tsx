import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export default function TechnicalPage() {
  return (
    <div className="bg-background flex min-h-screen w-full flex-col items-start">
      <Navbar pathname="technical" />
      <main className="flex-1 grow"></main>
      <Footer />
    </div>
  );
}
