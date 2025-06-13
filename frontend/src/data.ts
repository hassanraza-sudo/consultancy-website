import { Service, TeamMember, Testimonial } from './types';

export const services: Service[] = [
  {
    id: 'university-admission',
    title: 'University Admission Assistance',
    description: 'Expert guidance through the entire university application process in Germany and internationally.',
    icon: 'GraduationCap'
  },
  {
    id: 'visa-guidance',
    title: 'Student Visa Guidance',
    description: 'Complete support with visa application process, documentation, and interview preparation.',
    icon: 'Passport'
  },
  {
    id: 'scholarship',
    title: 'Scholarship & Funding Support',
    description: 'Access to extensive database of scholarships and guidance on funding opportunities.',
    icon: 'Award'
  },
  {
    id: 'language-prep',
    title: 'Language Preparation',
    description: 'Specialized coaching for IELTS, TOEFL, and TestDaF examinations.',
    icon: 'Languages'
  },
  {
    id: 'career-counseling',
    title: 'Career Counseling',
    description: 'Professional guidance to align your academic choices with career goals.',
    icon: 'Briefcase'
  },
  {
    id: 'accommodation',
    title: 'Accommodation Support',
    description: 'Assistance in finding and securing suitable student accommodation.',
    icon: 'Home'
  }
];

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Sarah Schmidt',
    role: 'Founder & Lead Consultant',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    bio: 'Former professor with 15+ years experience in international education.'
  },
  {
    id: '2',
    name: 'Marcus Weber',
    role: 'German University Specialist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    bio: 'Expert in German university admissions with background in student affairs.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Emma Chen',
    university: 'Technical University of Munich',
    content: 'Go Abroad made my dream of studying in Germany a reality. Their guidance was invaluable!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Miguel Rodriguez',
    university: 'University of Hamburg',
    content: 'The visa guidance and language preparation services were exceptional.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  }
];