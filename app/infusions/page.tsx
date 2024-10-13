import dynamic from 'next/dynamic';

const InfusionForm = dynamic(() => import('@/components/InfusionForm'), {
  ssr: false,
});

export default function InfusionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Record Infusion</h1>
      <InfusionForm />
    </div>
  );
}