import dynamic from 'next/dynamic';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const PatientRegistrationForm = dynamic(() => import('@/components/PatientRegistrationForm'), {
  ssr: false,
});

const InfusionForm = dynamic(() => import('@/components/InfusionForm'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Patient Management System</h1>
      <Card>
        <Tabs defaultValue="registration" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="registration">Patient Registration</TabsTrigger>
            <TabsTrigger value="infusions">Record Infusion</TabsTrigger>
          </TabsList>
          <CardContent>
            <TabsContent value="registration">
              <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Patient Registration</h2>
                <PatientRegistrationForm />
              </div>
            </TabsContent>
            <TabsContent value="infusions">
              <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Record Infusion</h2>
                <InfusionForm />
              </div>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
}