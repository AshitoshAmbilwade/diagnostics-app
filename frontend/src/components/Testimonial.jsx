import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    quote:
      "Very easy to book, maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Practo for making it simple.",
    name: "Jyothi Bhatia",
  },
  {
    quote:
      "Really smooth experience. I booked my appointment in under a minute and got all reminders via SMS and email. Amazing work!",
    name: "Rahul Verma",
  },
  {
    quote:
      "Helpful for finding doctors with real reviews. I could consult and get prescriptions without stepping out. Highly recommend!",
    name: "Sneha Mehta",
  },
]

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center relative">
      {/* Title */}
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
        What our users have to say
      </h2>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        style={{
          background: "transparent",
          border: "none",
          position: "absolute",
          left: "0.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          padding: 0,
        }}
        className="hidden lg:flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5 text-gray-400" />
      </button>

      {/* Testimonial Content */}
      <div className="transition-all duration-500">
        <p className="text-lg lg:text-xl text-black mb-6 leading-relaxed px-4">
          {testimonials[currentIndex].quote}
        </p>

        {/* Name */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
            <span>👤</span>
          </div>
          <span className="text-sm font-semibold text-gray-800">{testimonials[currentIndex].name}</span>
        </div>

{/* Dots */}
<div className="flex justify-center space-x-2 mt-4">
  {testimonials.map((_, idx) => (
    <button
      key={idx}
      onClick={() => setCurrentIndex(idx)}
      style={{
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: idx === currentIndex ? "#6b7280" : "#f3f4f6", // active: gray-600, inactive: gray-100
        border: "1px solid #d1d5db", // light gray border for all
        padding: 0,
        outline: "none",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
    />
  ))}
</div>


      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        style={{
          background: "transparent",
          border: "none",
          position: "absolute",
          right: "0.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          padding: 0,
        }}
        className="hidden lg:flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </button>
    </div>
  )
}

export default Testimonial
