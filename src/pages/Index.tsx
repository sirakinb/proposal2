
import React from 'react';
import Navbar from '@/components/Navbar';
import ProposalForm from '@/components/ProposalForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10 px-6 md:px-10">
        <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-md p-6 md:p-8">
          <ProposalForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
