import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  // Control para activar/desactivar testimonials
  const isTestimonialsActive = false;
  
  // Si está desactivado, no renderizar nada
  if (!isTestimonialsActive) {
    return null;
  }

  const testimonials = [
    {
      name: "María González",
      role: "Paciente de CABA",
      avatar: "MG",
      rating: 5,
      text: "Increíble lo fácil que fue encontrar un dentista cerca de casa. En 10 minutos tenía mi turno confirmado y el Dr. Martínez fue excelente.",
      color: "from-pink-500 to-rose-600"
    },
    {
      name: "Carlos Rodríguez",
      role: "Paciente de Córdoba",
      avatar: "CR",
      rating: 5,
      text: "Tenía una urgencia dental un domingo y rie+ me conectó con un dentista de guardia. Me salvaron el fin de semana, súper recomendable.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Ana Martínez",
      role: "Mamá de 2 hijos",
      avatar: "AM",
      rating: 5,
      text: "Perfecto para llevar a mis hijos al dentista. Los profesionales son muy buenos con los chicos y el sistema de recordatorios es genial.",
      color: "from-purple-500 to-violet-600"
    },
    {
      name: "Luis Fernández",
      role: "Paciente de Rosario",
      avatar: "LF",
      rating: 5,
      text: "La Dra. López que encontré a través de rie+ es excelente. Las reseñas de otros pacientes me ayudaron mucho a elegir.",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Sofia Herrera",
      role: "Paciente de Mendoza",
      avatar: "SH",
      rating: 5,
      text: "Necesitaba ortodoncia y rie+ me ayudó a comparar especialistas en mi zona. El proceso de reserva es súper simple.",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Diego Morales",
      role: "Paciente de La Plata",
      avatar: "DM",
      rating: 5,
      text: "Como trabajo muchas horas, poder agendar turnos desde el celular a cualquier hora es un golazo. Muy buena app.",
      color: "from-indigo-500 to-blue-600"
    }
  ]

  const stats = [
    { number: "1000+", label: "Dentistas Verificados" },
    { number: "4.8", label: "Calificación Promedio" },
    { number: "98%", label: "Pacientes Satisfechos" },
    { number: "50K+", label: "Turnos Agendados" }
  ]

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros
            <span className="text-primary-600"> pacientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Miles de argentinos ya confían en rie+ para cuidar su salud bucal. 
            Descubre por qué nos eligen.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 card-hover relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-12 w-12 text-gray-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-semibold mr-4`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current mx-1" />
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                "rie+ cambió completamente mi experiencia con los dentistas. Ahora es súper fácil 
                encontrar profesionales de confianza y agendar turnos. ¡Una revolución!"
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 flex items-center justify-center text-white font-bold text-xl mr-4">
                  JM
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">
                    Juan Manuel Torres
                  </div>
                  <div className="text-gray-600">
                    Paciente de Buenos Aires
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trabajamos con los mejores profesionales</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              'Colegio Odontológico',
              'OSDE',
              'Swiss Medical',
              'Galeno',
              'Medicus'
            ].map((institution, index) => (
              <div key={index} className="text-gray-400 font-semibold text-lg">
                {institution}
              </div>
            ))}
          </div>
        </div>

        {/* Dental Specialties Badges */}
        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Odontología General", emoji: "🦷" },
              { name: "Ortodoncia", emoji: "😬" },
              { name: "Endodoncia", emoji: "🔧" },
              { name: "Odontopediatría", emoji: "👶" },
              { name: "Estética Dental", emoji: "✨" },
              { name: "Urgencias 24/7", emoji: "🚨" }
            ].map((specialty, index) => (
              <div key={index} className="inline-flex items-center bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                <span className="mr-2">{specialty.emoji}</span>
                {specialty.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 