import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    jobTitle: 'Software Engineer Intern',
    company: 'CoolGreenPower',
    startDate: 'May 2025',
    endDate: 'Aug 2025',
    description: 'Developed Python and JavaScript code to automate NYSERDA-compliant HVAC energy reports using Pandas, processing IoT data at 10-second intervals from Azure Blob Storage and emailing results to users with Nodemailerto eliminate manual analysis, reducing company validation costs by 15%. Built a React frontend and Express.js backend to validate Coolnomix installations by analyzing sensor readings with CSV parsing and statistical logic, enabling real-time verification across 7 installation categories.',
  },

  {
    jobTitle: 'Energy Storage Innovation Intern',
    company: 'Smart Electric Power Alliance',
    startDate: 'June 2024',
    endDate: 'Dec 2024',
    description: 'Developed a greenfield Streamlit application to streamline electricity net metering analysis by integrating EIA API and CSV data with dynamic Pandas and Plotly visualizations. Co-authored a technical blog on the DOE’s Energy Earthshots initiative, shared with SEPA’s network of 1,000+ member organizations.',
  },

  {
    jobTitle: 'Data Analyst Intern',
    company: 'State Street',
    startDate: 'June 2021',
    endDate: 'Aug 2021',
    description: 'Worked in the loans department, developing extensive Excel and presentation skills by analyzing and preparing financial data while collaborating with State Street team members.',
  },
  
];
