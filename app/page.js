import React from 'react' 
import CareerSkillsSection from './HomePage/CareerSkillsSection'
import AICareerHero from './HomePage/AICareerHero' 
import CourseSection from './HomePage/CourseSection'
import { KnowledgeSection } from './HomePage/KnowledgeSection' 
import Certificates from './HomePage/Certificates'
import ForexFeatures from './HomePage/ForexFeatures'
import TestimonialsSection from './HomePage/TestimonialsSection'
import TrendingCourses from './HomePage/TrendingCourses'
import HeroSection from './HomePage/HeroSection'
import HowItWorks from './HomePage/HowItWorks'

const page = () => {
  return (
     <>
     <HeroSection/>  
     <CareerSkillsSection/>
     <AICareerHero/> 
     <CourseSection/>
     <Certificates/>
     <TrendingCourses/>
     <HowItWorks/>
     <KnowledgeSection/>
     <ForexFeatures/>
     <TestimonialsSection/> 
     </>
  )
}

export default page