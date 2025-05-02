
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Mock data for proposals
  const proposals = [
    { id: 1, clientName: 'John Smith', company: 'Acme Inc.', date: '2025-04-29', amount: 2500 },
    { id: 2, clientName: 'Emma Johnson', company: 'TechGrowth', date: '2025-04-27', amount: 3750 },
    { id: 3, clientName: 'Michael Brown', company: 'Innovate LLC', date: '2025-04-25', amount: 1800 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Proposals Dashboard</h1>
            <Link to="/">
              <Button className="bg-forest hover:bg-forest-light text-white">
                <Plus className="h-4 w-4 mr-2" />
                Create New
              </Button>
            </Link>
          </div>
          
          <div className="bg-card rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left py-4 px-6 font-medium">Client</th>
                    <th className="text-left py-4 px-6 font-medium">Company</th>
                    <th className="text-left py-4 px-6 font-medium">Date</th>
                    <th className="text-left py-4 px-6 font-medium">Amount</th>
                    <th className="text-left py-4 px-6 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {proposals.map((proposal) => (
                    <tr key={proposal.id} className="border-t border-border hover:bg-secondary/50 transition-colors">
                      <td className="py-4 px-6">{proposal.clientName}</td>
                      <td className="py-4 px-6">{proposal.company}</td>
                      <td className="py-4 px-6">{proposal.date}</td>
                      <td className="py-4 px-6">${proposal.amount}</td>
                      <td className="py-4 px-6">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {proposals.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">No proposals yet</p>
                <Link to="/" className="text-forest hover:text-forest-light mt-2 inline-block">
                  Create your first proposal
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
