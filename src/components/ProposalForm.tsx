
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProposalForm = () => {
  const { toast } = useToast();
  const [sendToCustomer, setSendToCustomer] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Proposal Generated",
      description: "Your proposal has been successfully generated.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Create New Proposal</h1>
        <p className="text-muted-foreground text-sm">Fill out the form to generate a client proposal</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
          <Input 
            id="firstName" 
            placeholder="Enter client's first name" 
            className="bg-secondary border-border"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
          <Input 
            id="lastName" 
            placeholder="Enter client's last name" 
            className="bg-secondary border-border"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <Input 
            id="email" 
            type="email" 
            placeholder="client@example.com" 
            className="bg-secondary border-border"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">Company</label>
          <Input 
            id="company" 
            placeholder="Client's company name" 
            className="bg-secondary border-border"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="callOutcome" className="text-sm font-medium">Call Outcome</label>
        <div className="relative">
          <Select>
            <select 
              id="callOutcome" 
              className="w-full bg-secondary border-border rounded-md py-2 pl-3 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-forest"
            >
              <option value="">Select the outcome of the call</option>
              <option value="interested">Interested</option>
              <option value="very-interested">Very Interested</option>
              <option value="need-follow-up">Needs Follow-up</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none h-4 w-4" />
          </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="businessDescription" className="text-sm font-medium">Business Description</label>
        <Textarea 
          id="businessDescription" 
          placeholder="One sentence description of their business" 
          className="bg-secondary border-border resize-none min-h-[80px]"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="clientProblem" className="text-sm font-medium">Client's Problem</label>
        <Textarea 
          id="clientProblem" 
          placeholder="What problem is the client facing?" 
          className="bg-secondary border-border resize-none min-h-[80px]"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="proposedSolution" className="text-sm font-medium">Proposed Solution</label>
        <Textarea 
          id="proposedSolution" 
          placeholder="What solution are you proposing?" 
          className="bg-secondary border-border resize-none min-h-[80px]"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="platforms" className="text-sm font-medium">Platforms/Services</label>
        <Textarea 
          id="platforms" 
          placeholder="What platforms/services will you use during development?" 
          className="bg-secondary border-border resize-none min-h-[80px]"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="duration" className="text-sm font-medium">Project Duration</label>
          <Input 
            id="duration" 
            placeholder="e.g., 2 weeks, 3 months" 
            className="bg-secondary border-border"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="charge" className="text-sm font-medium">Charge Amount ($)</label>
          <Input 
            id="charge" 
            type="number" 
            placeholder="0" 
            className="bg-secondary border-border"
          />
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="additionalCosts" className="text-sm font-medium">Additional Costs</label>
          <Input 
            id="additionalCosts" 
            placeholder="Any additional costs" 
            className="bg-secondary border-border"
          />
        </div>
      </div>
      
      <div className="bg-secondary border border-border rounded-lg p-4 flex items-center justify-between">
        <div>
          <p className="font-medium">Send to Customer</p>
          <p className="text-sm text-muted-foreground">Send the generated proposal to the customer via email</p>
        </div>
        <Switch 
          checked={sendToCustomer}
          onCheckedChange={setSendToCustomer}
          className="data-[state=checked]:bg-forest"
        />
      </div>
      
      <div className="flex justify-center pt-4">
        <Button 
          type="submit" 
          className="bg-forest hover:bg-forest-light text-white px-8 py-6 rounded-md flex items-center gap-2 transition-colors"
        >
          Generate Proposal 
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default ProposalForm;
