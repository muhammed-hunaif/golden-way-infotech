import { BrainCircuit, ChartColumn, LineChart, Sparkles } from 'lucide-react';
import artificialIntelligenceImage from '@/assets/emerging/artificial-intelligence.png';
import machineLearningImage from '@/assets/emerging/machine-learning.png';
import dataScienceImage from '@/assets/emerging/data-science.png';
import dataAnalyticsImage from '@/assets/emerging/data-analytics.png';

/**
 * Emerging Technologies — the four domains the company profile names under
 * "a separate strand of capability". Each carries its own 16:9 picture; the
 * files are all the same size so the cards line up.
 */
export const EMERGING_TECHNOLOGIES = [
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    keyPoint: 'Intelligent Automation',
    icon: BrainCircuit,
    image: artificialIntelligenceImage,
    description:
      'Systems that process information, recognize patterns, and make decisions with reduced manual input.',
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    keyPoint: 'Predictive Modeling',
    icon: Sparkles,
    image: machineLearningImage,
    description:
      'Models that learn from historical data to make predictions or classifications on new inputs.',
  },
  {
    id: 'data-science',
    title: 'Data Science',
    keyPoint: 'Data-Driven Insight',
    icon: LineChart,
    image: dataScienceImage,
    description:
      'Large or unstructured datasets collected, cleaned, and analyzed to uncover patterns that inform business decisions.',
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    keyPoint: 'Performance Reporting',
    icon: ChartColumn,
    image: dataAnalyticsImage,
    description:
      'Existing datasets processed to identify trends, measure performance, and support reporting across a business.',
  },
];

export const EMERGING_INTRO =
  'A separate strand of capability centers on artificial intelligence, machine learning, data science, and analytics, aimed at organizations looking to convert operational data into usable insight and automation.';
