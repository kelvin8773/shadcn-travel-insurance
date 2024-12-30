import { InsuranceForm } from '@/components/insurance/insurance-form';

export function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <InsuranceForm />
        </div>
      </div>
    </div>
  );
}