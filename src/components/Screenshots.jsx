import React from 'react'
import { Search, Calendar, MapPin, Star } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Buscá tu dentista",
      description: "Encuentra profesionales cerca de tu ubicación",
      icon: <Search className="h-8 w-8" />,
      gradient: "from-blue-500 to-purple-600",
      mockContent: (
        <div className="p-6 text-white h-full">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/images/rie-icon.svg" 
                alt="Rie+ Icon" 
                className="w-6 h-6 bg-white rounded p-1"
              />
              <h3 className="text-lg font-semibold">rie+</h3>
            </div>
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          </div>
          
          <div className="mb-4">
            <div className="bg-white/20 rounded-lg p-3 mb-3">
              <div className="h-3 bg-white/40 rounded w-1/3 mb-2"></div>
              <div className="h-2 bg-white/30 rounded w-full"></div>
            </div>
          </div>
          
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-3 bg-white/40 rounded mb-1"></div>
                  <div className="h-2 bg-white/20 rounded w-2/3"></div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-yellow-300 rounded-full mr-1"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      step: "02",
      title: "Elegí fecha y hora",
      description: "Selecciona el horario que mejor te convenga",
      icon: <Calendar className="h-8 w-8" />,
      gradient: "from-green-500 to-teal-600",
      mockContent: (
        <div className="p-6 text-white h-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Agendar Cita</h3>
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-7 gap-1 mb-4">
            {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day) => (
              <div key={day} className="text-center text-xs font-medium py-2">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1 mb-4">
            {Array.from({ length: 21 }, (_, i) => (
              <div
                key={i}
                className={`aspect-square flex items-center justify-center text-xs rounded ${
                  i === 10 ? 'bg-white text-green-600 font-bold' : 'bg-white/10'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          
          <div className="space-y-2">
            {['09:00', '10:30', '14:00', '16:30'].map((time, i) => (
              <div key={time} className={`p-2 rounded text-center text-sm ${
                i === 1 ? 'bg-white text-green-600 font-medium' : 'bg-white/10'
              }`}>
                {time}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      step: "03",
      title: "Confirmá tu turno",
      description: "Recibí la confirmación y recordatorios automáticos",
      icon: <MapPin className="h-8 w-8" />,
      gradient: "from-purple-500 to-pink-600",
      mockContent: (
        <div className="p-6 text-white h-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Confirmación</h3>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">✓</span>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4 mb-4">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 bg-white/20 rounded-full mr-3"></div>
              <div>
                <div className="h-3 bg-white/40 rounded w-24 mb-1"></div>
                <div className="h-2 bg-white/20 rounded w-16"></div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-3">
              <div className="h-2 bg-white/30 rounded w-20 mb-2"></div>
              <div className="h-2 bg-white/20 rounded w-16 mb-2"></div>
              <div className="h-2 bg-white/20 rounded w-24"></div>
            </div>
          </div>
          
          <div className="bg-green-400/20 rounded-lg p-3 text-center">
            <div className="text-lg mb-1">🎉</div>
            <div className="text-sm font-medium">¡Turno confirmado!</div>
          </div>
        </div>
      )
    },
    {
      step: "04",
      title: "Calificá tu experiencia",
      description: "Ayuda a otros pacientes con tu opinión",
      icon: <Star className="h-8 w-8" />,
      gradient: "from-orange-500 to-red-600",
      mockContent: (
        <div className="p-6 text-white h-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Calificar</h3>
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          </div>
          
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3"></div>
            <div className="h-3 bg-white/40 rounded w-32 mx-auto mb-2"></div>
            <div className="h-2 bg-white/20 rounded w-24 mx-auto"></div>
          </div>
          
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-yellow-300 rounded-full mx-1 flex items-center justify-center">
                <span className="text-orange-600 text-lg">★</span>
              </div>
            ))}
          </div>
          
          <div className="bg-white/10 rounded-lg p-3 mb-3">
            <div className="h-2 bg-white/20 rounded w-full mb-2"></div>
            <div className="h-2 bg-white/20 rounded w-3/4 mb-2"></div>
            <div className="h-2 bg-white/20 rounded w-1/2"></div>
          </div>
          
          <div className="bg-primary-400 rounded-lg p-2 text-center">
            <div className="text-sm font-medium">Enviar Reseña</div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona
            <span className="text-primary-600"> rie+</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En solo 4 pasos simples, conectamos con el dentista perfecto para vos. 
            Rápido, fácil y seguro.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                {step.step}
              </div>
              
              {/* Phone Mockup */}
              <div className="group relative overflow-hidden rounded-3xl shadow-2xl card-hover">
                <div className="relative bg-gray-900 rounded-3xl p-2">
                  <div className="relative bg-gray-800 rounded-2xl overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                    
                    {/* Screen Content */}
                    <div className={`h-80 bg-gradient-to-br ${step.gradient} relative overflow-hidden`}>
                      {step.mockContent}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 text-center">
                <div className="inline-flex p-3 bg-primary-100 rounded-xl text-primary-600 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>

              {/* Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para cuidar tu sonrisa?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Descarga rie+ y conecta con los mejores dentistas de Argentina en minutos
            </p>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-primary-600 font-medium py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Descargar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 