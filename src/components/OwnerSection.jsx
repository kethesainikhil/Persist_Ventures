import React from 'react'
import MartyWeiner from "../assets/MartyWeiner.jpeg"
import TimDraper from "../assets/TimDraper.jpeg"
import JohnDevadoss from "../assets/JohnDevadoss.jpeg"
import Card from './card'
import CardCarousel from './CardCarousel'
const OwnerSection = () => {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-black">
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    <div>
        <Card img={MartyWeiner} name="Marty Weiner" designation="Former CTO, Reddit Ideaflow Advisor" message='“A key step to realizing the potential of the Web as a medium for collective intelligence.”'  /> 
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <Card
          img={JohnDevadoss}
          name="John Devadossr"
          designation="Founding Director, Microsoft Digital Consulting"
          message="Ideaflow is the force multiplier for business productivity in this new normal."
        />
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <Card
          img={TimDraper}
          name="Tim Draper"
          designation="Founder, DFJ Ideaflow Investor"
          message="The amount of value that can be unlocked by connecting the right people and ideas together is incredible. I’m very excited for what Ideaflow is building."
        />
      </div>
  </div>
</div>

    </div>
  )
}

export default OwnerSection
