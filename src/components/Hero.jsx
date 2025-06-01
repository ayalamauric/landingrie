import React from 'react'
import { ArrowRight, Play, Star, Users, MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium">
                <MapPin className="h-4 w-4 mr-2" />
                Pronto en toda la Argentina, disponible en Resistencia y  Corrientes
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Encontrá los mejores
                <span className="text-primary-600 block">dentistas</span>
                cerca de vos
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Conectamos pacientes con profesionales odontológicos de confianza. 
                Reservá tu cita de forma rápida y sencilla, cuando y donde lo necesites.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary-600" />
                <span className="text-gray-600">+1000 dentistas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-600">4.8 estrellas</span>
              </div>
              <div className="flex items-center space-x-2">
                <img 
                  src="/images/rie-icon.svg" 
                  alt="Rie+ Icon" 
                  className="w-5 h-5"
                />
                <span className="text-gray-600">+50K sonrisas</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Descargar en Play Store
              </a>
              
              <button className="inline-flex items-center justify-center btn-secondary">
                <Play className="h-5 w-5 mr-2" />
                Ver cómo funciona
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Profesionales verificados y habilitados</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Colegio Odontológico</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Atención 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative animate-slide-up">
            <div className="relative mx-auto w-80 h-96">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gray-900 rounded-3xl shadow-2xl transform rotate-6 animate-float">
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-700 rounded-full"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl overflow-hidden">
                  {/* Mock App Interface */}
                  <div className="p-6 text-white">
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
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="h-3 bg-white/40 rounded w-1/2"></div>
                          <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                        </div>
                        <div className="h-2 bg-white/20 rounded w-3/4 mb-1"></div>
                        <div className="h-2 bg-white/20 rounded w-1/2"></div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="h-3 bg-white/40 rounded w-2/3"></div>
                          <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                        </div>
                        <div className="h-2 bg-white/20 rounded w-1/2 mb-1"></div>
                        <div className="h-2 bg-white/20 rounded w-2/3"></div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="h-3 bg-white/40 rounded w-1/3"></div>
                          <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                        </div>
                        <div className="h-2 bg-white/20 rounded w-2/3 mb-1"></div>
                        <div className="h-2 bg-white/20 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-200 rounded-full opacity-60 animate-pulse flex items-center justify-center">
                <span className="text-primary-600 text-xl">🦷</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-300 rounded-full opacity-70 animate-pulse delay-1000 flex items-center justify-center">
                <img 
                  src="/images/rie-icon.svg" 
                  alt="Rie+ Icon" 
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 