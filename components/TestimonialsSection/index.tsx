import React from 'react'
import Testimonial from './Testimonial'
import testimonials from '@/configs/testimonials'

function TestimonialsSection() {
    return (
        <section className="bg-accent/5">
            <div className="max-w-7xl mx-auto p-10 ">
                <h2 className="text-primary md:text-6xl text-5xl font-semibold mb-20">
                    Testimonials
                </h2>
                <div className="testimonials grid md:grid-cols-2 gap-4">
                    {testimonials.map((testimonial, index) => {
                        return <Testimonial {...testimonial} key={index} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
