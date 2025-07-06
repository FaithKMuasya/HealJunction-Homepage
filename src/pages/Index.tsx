import React from "react";
import Slider from "react-slick";
import { MdEmail } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUserMd, FaMoneyBillWave, FaPlane, FaSpa } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaLinkedinIn
} from "react-icons/fa";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Star, Globe, Users, Clock, Award } from "lucide-react";



const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">HealJunction</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text font-normal hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Find Care</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Health Network</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Partnership</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Request a quote</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Contact Us</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Event</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">About Us</a>




            </nav>
            {/* <div className="flex items-center space-x-4">
              <Button variant="outline">Sign In</Button>
              <Button>Get Started</Button>
            </div> */}
          </div>
        </div>
      </header>

      

      {/* Hero Section */}
      <section   className="w-full h-screen"
  style={{
    background: "linear-gradient(to right, #116093 0%, #C0E2F7 100%)",
  }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <button className="mt-8 text-[#CC5630] bg-[#F8EADC] px-6 py-3 rounded-full font-normal">
  • Empowering Your Wellness Journey
</button>

              <h1 className="mt-2 text-4xl lg:text-6xl font-bold mb-6">
                Connect with World-Class Specialized Care Anywhere
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Unlock Tailored Healthcare Excellent with Premier Global Specialists and 
                Facilities
              </p>
              <Button size="lg" className="bg-[#BF5630] hover:bg-[#391711] text-white px-6 py-3 rounded-full">
                Start Your Journey
              </Button>
            </div>
            <div className="relative w-full">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                  src="https://healjunction.co.ke/assets/home/Heroo.png"
                  alt="Hero doctor"
                  className="rounded-xl  w-[700px] h-full object-cover -mt-40 -mb-10"/>
                </div>
<div className="absolute top-[65%] left-20 transform -translate-y-1/2 bg-[#C0E2F7] p-4 rounded-xl shadow-md w-[250px] z-10">
  <h3 className="text-[#157ECA] text-lg font-semibold mb-2">
    Elites Care Awaits You
  </h3>
  <p className="text-[#736065] text-sm">
    Explosive cost-effective, high-quality medical services tailored to your needs.
  </p>
</div>

          </div>
          
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Search for a Medical Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="Speciality, Facility, Procedure..." 
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="Location..." 
                  className="pl-10"
                />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

{/* Partners Section */}
<section className="py-12 bg-[#116093]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <p className="text-center text-white mb-8 text-2xl">
      In Collaboration with Top Medical Institutions
    </p>
<div className=" -mx-4 sm:-mx-6 lg:-mx-8">
    <div className="overflow-hidden bg-[#C0E2F7] w-full py-8 ">
      <div className="flex gap-12 whitespace-nowrap animate-scroll ">
        {/* Duplicate logos to create a seamless loop */}
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <img src="https://healjunction.co.ke/assets/home/bupa-logo.svg" alt="Bupa" className="h-10 object-contain" />
            <img src="https://healjunction.co.ke/assets/home/Hillgan.png" alt="Hillgan" className="h-10 object-contain" />
            <img src="https://healjunction.co.ke/assets/home/MetLife.png" alt="MetLife" className="h-7 object-contain" />
            <img src="https://healjunction.co.ke/assets/home/Allianz.png" alt="Allianz" className="h-10 object-contain" />
            <img src="https://healjunction.co.ke/assets/home/Hudson.png" alt="Hudson" className="h-10 object-contain" />
            <img src="https://healjunction.co.ke/assets/home/Aetna.png" alt="Aetna" className="h-7 object-contain" />
            <img src="https://healjunction.co.ke/assets/home/Cigna.png" alt="Cigna" className="h-10 object-contain" />
            <img src="https://healjunction.co.ke/assets/home/Aia.png" alt="AIA" className="h-10 object-contain" />
          </React.Fragment>
        ))}
      </div>
    </div>
    </div>
  </div>
</section>

{/* Services Section */}
<section className="py-20 bg-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <h2 className="text-3xl font-bold mb-6 text-[#157EBF] text-center">
      Patient-Centric Services Tailored for You
    </h2>

    {/* Buttons aligned to the right */}
    <div className="flex justify-end mb-12">
      <div className="flex gap-4">
        <button className="bg-[#157EBF] text-white py-2 px-6 rounded-full font-medium">
          Medical Services
        </button>
        <button className="bg-[#C0E2F7] text-[#157EBF] py-2 px-6 rounded-full font-medium">
          Facilitation Services
        </button>
      </div>
    </div>

    {/* Image on Left, Content on Right */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Image */}
      <div className="bg-white rounded-lg shadow-xl p-6">
        <img
          src="https://healjunction.co.ke/assets/home/Patient-Centric.png"
          alt="Healthcare professional"
          className="w-full h-100 object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div>
            <p className="text-gray-600"><span className="text-[#116093] font-semi-bold">In-Person Appointments:</span> <strong>Book direct consultations with elite medical experts in our trusted network</strong></p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div>
            <p className="text-gray-600"><span className="text-[#116093] font-semi-bold">Second Medical Opinion:</span> <strong>Gain confidence with a thorough case review by a distinguished specialist.</strong></p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div>
            <p className="text-gray-600"><span className="text-[#116093] font-semi-bold">International Medical Treatment:</span> <strong>Access world-renowned specialists and premier facilities for treatment abroad.</strong></p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div>
            <p className="text-gray-600"><span className="text-[#116093] font-semi-bold">Personalized Health Packages:</span> <strong>Benefit from customized health plans designed for early detection of critical conditions.</strong></p>
          </div>
        </div>

          <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div>
            <p className="text-gray-600"><span className="text-[#116093] font-semi-bold">Emergency Evacuation:</span> <strong>Secure swift medical evacuations or air ambulance services to our top-tier hospital network.</strong></p>
          </div>
        </div>

          <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div>
            <p className="text-gray-600"><span className="text-[#116093] font-semi-bold">Online Video Consultations:</span> <strong>Engage with leading specialists remotely, streamlining your care with convenience.</strong></p>
          </div>
        </div>
<button className="flex items-center gap-2 bg-[#BF5630] hover:bg-[#391711] text-white py-2 px-4 rounded-full font-medium shadow-md">
  <MdEmail className="text-xl" />
  Connect with a specialist for support
</button>

      </div>
    </div>
  </div>
</section>

{/* Global Network Section */}
<section className="py-20 bg-[#116093] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    {/* Heading with forced line break */}
    <h2 className="text-3xl font-bold mb-10 leading-snug">
      Linking You to Elite Medical Care <br /> via Our Premier Hospital Network Worldwide
    </h2>
  </div>

  {/* Full-width stretched image */}
  <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
    <img 
      src="https://healjunction.co.ke/assets/home/Globe-2.svg" 
      alt="Global Network" 
      className="w-full h-full object-cover"
    />
  </div>

  {/* Stats */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div className="text-3xl font-bold mb-2">11,000+</div>
        <div className="text-blue-200">Patients Assisted</div>
      </div>
      <div>
        <div className="text-3xl font-bold mb-2">1500+</div>
        <div className="text-blue-200">Medical Professionals</div>
      </div>
      <div>
        <div className="text-3xl font-bold mb-2">300+</div>
        <div className="text-blue-200">Hospitals</div>
      </div>
      <div>
        <div className="text-3xl font-bold mb-2">3+</div>
        <div className="text-blue-200">Emergency Evacuation Partners</div>
      </div>
    </div>
  </div>
</section>

{/* Mobile App Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <h2 className="text-3xl text-center mb-12 text-[#2386C3]">
      How Can You Access Our Health Competences?
    </h2>

    {/* Slider */}
    <Slider
      dots={true}
      arrows={false}
      infinite={true}
      autoplay={true}
      speed={600}
      autoplaySpeed={3000}
      slidesToShow={1}
      slidesToScroll={1}
    >
      {/* Slide 1 */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://healjunction.co.ke/assets/home/AccessCarousel1.jpg"
              alt="Person using mobile app"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>

          <div className="bg-[#116093] text-white rounded-lg p-8 h-full flex flex-col gap-4">
            <h3 className="text-2xl font-bold mb-4">1. Find and Choose a Service</h3>
            <p className="mb-6">
              Pinpoint the exact medical expertise you need with our<br></br>
              intuitive search, connecting you to care that's right for you.
            </p>
            <button className="flex items-center gap-2 bg-[#BF5630] hover:bg-[#391711] text-white py-2 px-4 rounded-full font-medium shadow max-w-fit">
              <MdEmail className="text-xl" />
              Connect with a support specialist
            </button>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://healjunction.co.ke/assets/home/AccessCarousel2.jpg"
              alt="Health chat"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>

          <div className="bg-[#116093] text-white rounded-lg p-8 h-full flex flex-col gap-4">
            <h3 className="text-2xl font-bold mb-4">2. Schedule with Seamless Simplicity</h3>
            <p className="mb-6">
              Book your consultation or service effortlessly.Select a date<br></br>
              and time that fits perfectly into your life.
            </p>
            <button className="flex items-center gap-2 bg-[#BF5630] hover:bg-[#391711] text-white py-2 px-4 rounded-full font-medium shadow max-w-fit">
              <MdEmail className="text-xl" />
              Connect with a support specialist
            </button>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://healjunction.co.ke/assets/home/AccessCarousel3.jpg"
              alt="Dashboard"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>

          <div className="bg-[#116093] text-white rounded-lg p-8 h-full flex flex-col gap-4">
            <h3 className="text-2xl font-bold mb-4">3. Experience Dedicated, personalised Guidance</h3>
            <p className="mb-6">
              Your Personal Patient Advisor is with you every step,<br></br>
              ensuring a smooth, supported, and stress-free experience.
            </p>
            <button className="flex items-center gap-2 bg-[#BF5630] hover:bg-[#391711] text-white py-2 px-4 rounded-full font-medium shadow max-w-fit">
              <MdEmail className="text-xl" />
              Connect with a support specialist
            </button>
          </div>
        </div>
      </div>

      {/* Slide 4 */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div>
            <img
              src="https://healjunction.co.ke/assets/home/AccessCarousel4.jpg"
              alt="Global Network"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>

          <div className="bg-[#116093] text-white rounded-lg p-8 h-full flex flex-col gap-4">
            <h3 className="text-2xl font-bold mb-4">4. Meet Your Doctor, Embrace Your Healthier Future</h3>
            <p className="mb-6">
              Attend your appointment ready to collaborate and begin<br></br>
              your personalized journey towards lasting well-being.
            </p>
            <button className="flex items-center gap-2 bg-[#BF5630] hover:bg-[#391711] text-white py-2 px-4 rounded-full font-medium shadow max-w-fit">
              <MdEmail className="text-xl" />
              Connect with a support specialist
            </button>
          </div>
        </div>
      </div>
    </Slider>
  </div>
</section>




     {/* Why Choose Us Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Top Centered Heading */}
    <h2 className="text-3xl text-center text-[#116093] mb-12">
      Why Choose Heal Junction?
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Image */}
      <div>
        <img 
          src="https://healjunction.co.ke/assets/home/WhyChoose.png" 
          alt="Healthcare team" 
          className="rounded-lg shadow-xl w-full h-96 object-cover"
        />
      </div>

      {/* Right Content */}
      <div>
        <h3 className="text-2xl font-semibold text-[#116093] mb-6">Key Features</h3>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <FaUserMd className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text font-normal">
                <span className="text-[#116093] font-semi-bold">Top-Tier Medical Expertise:</span> <strong>Partner with globally recognized specialists and cutting-edge facilities.</strong>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaMoneyBillWave className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text font-normal">
                  <span className="text-[#116093] font-semi-bold">Cost-Effective Solutions:</span> <strong>Reduce healthcare expenses without compromising quality.</strong>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaPlane className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text font-normal">
                 <span className="text-[#116093] font-semi-bold">Effortless Travel Coordination:</span> <strong>We take care of every detail, from travel to recovery, for a seamless experience.</strong>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaSpa className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text font-normal">
                <span className="text-[#116093] font-semi-bold">Healing in Serenity:</span> <strong>Recover in picturesque locations while receiving exceptional care.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="flex items-center gap-2 bg-[#BF5630] hover:bg-[#391711] text-white py-2 px-4 rounded-full font-medium shadow max-w-fit">
          <MdEmail className="text-xl" />
          Connect with a support specialised
        </button>
      </div>
    </div>
  </div>
</section>

{/* Insurance Partners */}
<section className="py-20 bg-[#116093]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Title */}
    <h2 className="text-3xl font-bold text-center text-white mb-12">
      Our Insurance Partners
    </h2>

    {/* Search Bar */}
    <div className="flex justify-center mb-12">
      <input
        type="text"
        placeholder="Search your insurance"
        className="w-full max-w-md px-6 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Scrolling Logos */}
    <div className="-mx-4 sm:-mx-6 lg:-mx-8">
      <div className="overflow-hidden bg-[#C0E2F7] w-full py-8">
        <div className="flex gap-12 whitespace-nowrap animate-scroll">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <img src="https://healjunction.co.ke/assets/home/bupa-logo.svg" alt="Bupa" className="h-10 object-contain" />
              <img src="https://healjunction.co.ke/assets/home/Hillgan.png" alt="Hillgan" className="h-10 object-contain" />
              <img src="https://healjunction.co.ke/assets/home/MetLife.png" alt="MetLife" className="h-7 object-contain" />
              <img src="https://healjunction.co.ke/assets/home/Allianz.png" alt="Allianz" className="h-10 object-contain" />
              <img src="https://healjunction.co.ke/assets/home/Hudson.png" alt="Hudson" className="h-10 object-contain" />
              <img src="https://healjunction.co.ke/assets/home/Aetna.png" alt="Aetna" className="h-7 object-contain" />
              <img src="https://healjunction.co.ke/assets/home/Cigna.png" alt="Cigna" className="h-10 object-contain" />
              <img src="https://healjunction.co.ke/assets/home/Aia.png" alt="AIA" className="h-10 object-contain" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>

    {/* Description Section (Left Aligned) */}
    <div className="mt-16 max-w-3xl text-gray-800">
      <p className="text-lg font-medium mb-8 text-white">
        Seeking treatment through your insurance provider? Our expert team is here to help.
      </p>

      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <div className="w-3 h-3 mt-1 bg-white rounded-full flex-shrink-0"></div>
          <div>
            <h4 className="font-semibold text-white mb-1">Global Coverage</h4>
            <p className="text-sm text-white">
              Our partnerships with premier insurance providers guarantee broad, globally accepted coverage.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-3 h-3 mt-1 bg-white rounded-full flex-shrink-0"></div>
          <div>
            <h4 className="font-semibold text-white mb-1">No Additional Cost</h4>
            <p className="text-sm text-white">
              Our dedicated specialist team guides you through every step, at no extra charge.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-3 h-3 mt-1 bg-white rounded-full flex-shrink-0"></div>
          <div>
            <h4 className="font-semibold text-white mb-1">We Facilitate Unlisted Providers</h4>
            <p className="text-sm text-white">
              For insurance providers not listed, we're here to assist in securing the perfect coverage. Reach out now.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



{/* Patient Reviews */}
<section className="py-20 bg-white text-[#157EBF]">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-normal text-center mb-12">
      Our Patients' Inspiring Journeys
    </h2>

    <Slider
      dots={true}
      infinite={true}
      speed={600}
      autoplay={true}
      autoplaySpeed={3000}
      slidesToShow={1}
      slidesToScroll={1}
      arrows={false}
       responsive={[
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ]}
    >
      {/* Review 1 */}
      <div className="bg-[#F0F0F1] text-gray-900 rounded-lg p-6 shadow-md max-w-md ">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 font-bold text-lg flex items-center justify-center rounded-full mr-4">
            M
          </div>
          <div>
            <h4 className="font-semibold text-lg">Mujinikire Basema</h4>
            <p className="text-sm text-gray-500">London</p>
          </div>
        </div>
        <p className="text-sm">
          "Just wanted to say thank you to the<br></br>
          HealJunction team for the amazing work<br></br>
          you're doing. Your professionalism, care,<br></br>
          and attention to detail truly stand out. Keep<br></br>
          up the great work, you're making a real<br></br>
          difference!"
        </p>
      </div>

      {/* Review 2 */}
      <div className="bg-[#F0F0F1] text-gray-900 rounded-lg p-6 shadow-md max-w-md">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 font-bold text-lg flex items-center justify-center rounded-full mr-4">
            M
          </div>
          <div>
            <h4 className="font-semibold text-lg">Mrs. Metashulunge</h4>
            <p className="text-sm text-gray-500">Burundi</p>
          </div>
        </div>
        <p className="text-sm">
          "Heal Junction made my trip to Nairobi <br></br>smooth.From airport pickup to hospital<br></br>
           care, everything was handled perfectly.<br></br>
            Even without English, they communicated<br>
            </br>for me. I felt safe and cared for--highly recommended!"
        </p>
      </div>

      {/* Review 3 */}
      <div className="bg-[#F0F0F1] text-gray-900 rounded-lg p-6 shadow-md max-w-md">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 font-bold text-lg flex items-center justify-center rounded-full mr-4">
            P
          </div>
          <div>
            <h4 className="font-semibold text-lg">Paul</h4>
            <p className="text-sm text-gray-500">Congo</p>
          </div>
        </div>
        <p className="text-sm">
          "Heal Junction supported us from airport to<br></br>
          hospital. They handled every detail--<br></br>
          transport, stay, and language translation.<br></br>
          We're grateful for their care and hope<br></br>
          others get the samehelp.Truly kind and<br></br>
          dependable people!
          "
        </p>
      </div>

      {/* Review 4 */}
      <div className="bg-[#F0F0F1] text-gray-900 rounded-lg p-6 shadow-md max-w-md">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 font-bold text-lg flex items-center justify-center rounded-full mr-4">
            C
          </div>
          <div>
            <h4 className="font-semibold text-lg">Christine Bora</h4>
            <p className="text-sm text-gray-500">Congo</p>
          </div>
        </div>
        <p className="text-sm">
          "HealJunction, simply the best!. Thanks to<br></br>
          their personalized support, i was able to<br></br>
          receive quality medical care in a reassuring<br></br>
          environment. A responsive, caring, and<br></br>
          professional team. I recommend it without<br></br>
          hesitation to anyone seeking care abroad.
          "
        </p>
      </div>
    </Slider>
  </div>
</section>

{/* FAQ Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-normal text-[#157EBF] mb-12 text-center">Frequently Asked Questions</h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* FAQs on the Left */}
      <div className="space-y-6">
        <div className="border-b pb-6">
          <h3 className="text-lg text-[#276F9A] mb-2 font-medium">What's the process for booking a doctor or specialist appointment through Heal Junction?</h3>
          <p className="text-gray-600">Once you’ve selected a facility, you can browse available doctors or specialists, view their profiles, and book an appointment directly through the platform. Confirmation is sent via email or SMS.</p>
        </div>
        <div className="border-b pb-6">
          <h3 className="text-lg text-[#276F9A] mb-2 font-medium">Can I use my insurance provider for treatments and services through Heal Junction?</h3>
          <p className="text-gray-600">Yes, many of our partner facilities accept international insurance. During booking, simply indicate your provider, and we’ll help verify coverage and coordinate benefits.</p>
        </div>
        <div className="border-b pb-6">
          <h3 className="text-lg text-[#276F9A] mb-2 font-medium">What medical tourism services can I expect from Heal Junction?</h3>
          <p className="text-gray-600">We offer end-to-end support, including treatment coordination, travel planning, accommodation, translation services, and post-treatment follow-up—all designed to give you a stress-free experience.</p>
        </div>
        <div className="border-b pb-6">
          <h3 className="text-lg text-[#276F9A] mb-2 font-medium">What happens after my treatment, surgery, or procedure?</h3>
          <p className="text-gray-600">After your treatment, our team will assist with follow-up care, schedule any necessary check-ups, and ensure you have the support you need during recovery, whether locally or back home.</p>
        </div>
      </div>

      {/* Call-to-Action Card on the Right */}
      <div className="bg-gray-100 rounded-xl p-6 text-center shadow-md">
        <img
          src="https://healjunction.co.ke/woman.png"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-lg font-semibold mb-2">Book a 30-Minutes Discovery Call</h3>
        <p className="text-gray-600 mb-6">
          Contact us and discover our global medical network tailored to your needs.
        </p>
        <button className="flex items-center justify-center gap-2 bg-[#BF5630] hover:bg-[#391711] text-white py-2 px-6 rounded-full font-medium transition">
          Book Now
          <span className="ml-1 text-xl">&rarr;</span>
        </button>
      </div>
    </div>
  </div>
</section>


  {/* Footer */}
<footer className="bg-[#C0E2F7] text-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Top 5 Sections */}
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
      {/* Logo & Description */}
      <div>
        <div className="text-2xl font-bold text-[#157EBF] mb-4">Heal Junction</div>
        <p className="text-[#4B5A60] text-sm mb-6">
          Heal Junction is the premier healthcare facilitation platform, designed to connect patients with world-class medical providers, ensuring seamless access to specialized care, travel coordination, and personalized support—all through one trusted, user-friendly network.
        </p>
      </div>

      {/* Company */}
      <div>
        <h4 className="font-semibold text-[#157EBF] mb-4">Company</h4>
        <ul className="space-y-2 text-blue-200 text-sm">
          <li><a href="#" className="text-[#4B5A60]">Home</a></li>
          <li><a href="#" className="text-[#4B5A60]">About Us</a></li>
          <li><a href="#" className="text-[#4B5A60]">Careers</a></li>
          <li><a href="#" className="text-[#4B5A60]">For Investors</a></li>
          <li><a href="#" className="text-[#4B5A60]">Contact Us</a></li>
        </ul>
      </div>

      {/* For Patients */}
      <div>
        <h4 className="font-semibold text-[#157EBF] mb-4">For Patients</h4>
        <ul className="space-y-2 text-blue-200 text-sm">
          <li><a href="#" className="text-[#4B5A60]">Patient Login</a></li>
          <li><a href="#" className="text-[#4B5A60]">Find a Hospital</a></li>
          <li><a href="#" className="text-[#4B5A60]">Book a Specialist</a></li>
          <li><a href="#" className="text-[#4B5A60]">Request a Quote</a></li>
          <li><a href="#" className="text-[#4B5A60]">Health Articles</a></li>
        </ul>
      </div>

      {/* Partnerships */}
      <div>
        <h4 className="font-semibold text-[#157EBF] mb-4">Partnerships</h4>
        <ul className="space-y-2 text-blue-200 text-sm">
          <li><a href="#" className="text-[#4B5A60]">Global Referral Partner Program</a></li>
          <li><a href="#" className="text-[#4B5A60]">Insurance Collaboration</a></li>
          <li><a href="#" className="text-[#4B5A60]">For Corporates</a></li>
        </ul>
      </div>

      {/* Specialities */}
      <div>
        <h4 className="font-semibold text-[#157EBF] mb-4">Specialities</h4>
        <ul className="space-y-2 text-blue-200 text-sm">
          <li><a href="#" className="text-[#4B5A60]">Cardiology</a></li>
          <li><a href="#" className="text-[#4B5A60]">Orthopedics</a></li>
          <li><a href="#" className="text-[#4B5A60]">Oncology</a></li>
          <li><a href="#" className="text-[#4B5A60]">General Surgery</a></li>
        </ul>
      </div>
    </div>

    {/* Hospital Locations */}
    <div className="text-sm text-blue-200 mb-8">
      <h4 className="font-semibold text-[#157EBF] mb-3">Hospital Locations</h4>
      <div className="flex flex-wrap gap-4">
        <span className="text-[#4B5A60]">Turkey</span>
        <span className="text-[#4B5A60]">United Kingdom</span>
        <span className="text-[#4B5A60]">India</span>
        <span className="text-[#4B5A60]">Kenya</span>
        <span className="text-[#4B5A60]">London</span>
        <span className="text-[#4B5A60]">Thailand</span>
      </div>
    </div>

    {/* Bottom Links & Social Icons */}
    <div className="flex flex-col md:flex-row md:justify-between items-center pt-8 text-sm text-blue-300">
      <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
        <a href="#" className="text-[#4B5A60]">Privacy Policy</a>
        <a href="#" className="text-[#4B5A60]">Terms & Conditions</a>
        <span  className="text-[#4B5A60]">© 2025 Heal Junction. All rights reserved.</span>
      </div>

      <div className="flex space-x-4 text-white text-lg">
        <a href="#" className="text-[#157EBF]"><FaFacebookF /></a>
        <a href="#" className="text-[#157EBF]"><FaInstagram /></a>
        <a href="#" className="text-[#157EBF]"><FaTiktok /></a>
        <a href="#" className="text-[#157EBF]"><FaEnvelope /></a>
        <a href="#" className="text-[#157EBF]"><FaLinkedinIn /></a>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Index;
