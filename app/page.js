import React from 'react'
import { HeroSection } from './HomePage/HeroSection'   
import CareerSkillsSection from './HomePage/CareerSkillsSection'
import AICareerHero from './HomePage/AICareerHero' 
import CourseSection from './HomePage/CourseSection'

const page = () => {
  return (
     <>
     <HeroSection/>  
     <CareerSkillsSection/>
     <AICareerHero/> 
     <CourseSection/>
     </>
  )
}

export default page