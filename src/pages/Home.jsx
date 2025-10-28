import React from 'react'
import Hero from '../components/Hero'
import AboutPreview from '../components/AboutPreview'
import WorkExperience from '../components/WorkExperience'
import Brands from '../components/Brands'
import PartnerBrands from '../components/PartnerBrands'
import PortfolioPreview from '../components/PortfolioPreview'
import Team from '../components/Team'

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <AboutPreview />
      <WorkExperience />
      <Brands />
      <PartnerBrands />
      <PortfolioPreview />
      <Team />
    </div>
  )
}
