/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ActiveTab = 'home' | 'projects' | 'services' | 'about' | 'faq' | 'contact';

export interface Project {
  id: string;
  title: string;
  before: string;
  after: string;
  gallery: string[];
  category: string;
  challenge: string;
  solution: string;
  client: string;
  year: string;
  size: string;
  location: string;
}

export interface Service {
  id: string;
  title: string;
  iconName: string; // Map to Lucide icon string
  image: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'layanan' | 'biaya' | 'waktu';
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}
