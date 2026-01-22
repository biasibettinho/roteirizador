
// Fix: Import React to resolve 'Cannot find namespace React' for React.ReactNode type definition
import React from 'react';

export interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
}

export interface FormData {
  name: string;
  company: string;
  phone: string;
}
