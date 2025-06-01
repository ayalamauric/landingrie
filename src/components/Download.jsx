import React from 'react'
import { Download as DownloadIcon, Star, ArrowRight, MapPin } from 'lucide-react'

const Download = () => {
  return (
    <section id="descargar" className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium">
                <MapPin className="h-4 w-4 mr-2" />
                Disponible en Resistencia y Corrientes, pronto en toda la Argentina.
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Descarga rie+ y
                <span className="block">cuida tu sonrisa</span>
              </h2>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Únete a más de 50,000 argentinos que ya confían en rie+ para sus cuidados dentales. 
                Disponible gratis en Google Play Store.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🦷</span>
                </div>
                <span className="text-white/90">Más de 1000 dentistas verificados</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">⏰</span>
                </div>
                <span className="text-white/90">Turnos disponibles 24/7, incluso urgencias</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">💳</span>
                </div>
          
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📍</span>
                </div>
                <span className="text-white/90">Encuentra dentistas cerca de tu ubicación</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-black hover:bg-gray-800 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="h-8 w-8 mr-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Disponible en</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>

              <div className="text-white/80 text-sm">
                Compatible con Android 6.0 y versiones superiores
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.8</div>
                <div className="text-white/80 text-sm">Calificación</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-white/80 text-sm">Dentistas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-white/80 text-sm">Pacientes</div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-96">
              {/* Main Phone */}
              <div className="absolute inset-0 bg-gray-900 rounded-3xl shadow-2xl transform -rotate-6 animate-float">
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-700 rounded-full"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-white to-gray-100 rounded-2xl overflow-hidden">
                  {/* App Store Interface */}
                  <div className="p-6 h-full">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-900">Play Store</h3>
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                    
                    {/* App Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mr-4">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                            <span className="text-primary-500 text-lg">😊</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900">rie+</h4>
                          <p className="text-gray-600 text-sm">Servicios Odontológicos</p>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <span className="text-gray-600 text-xs ml-2">4.8 (2.5K)</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full bg-green-600 text-white font-medium py-3 rounded-lg flex items-center justify-center">
                        <DownloadIcon className="h-5 w-5 mr-2" />
                        Instalar
                      </button>
                      
                      <div className="mt-3 text-center">
                        <span className="text-xs text-gray-500">El precio más conveniente</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Phone */}
              <div className="absolute top-8 right-8 w-64 h-80 bg-gray-800 rounded-2xl shadow-xl transform rotate-12 opacity-60">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                <div className="absolute inset-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/20 rounded-full animate-pulse flex items-center justify-center">
                <span className="text-white text-xl">🦷</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white/30 rounded-full animate-pulse delay-1000 flex items-center justify-center">
                <span className="text-white text-sm">😊</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-white/20 rounded-full animate-pulse delay-500 flex items-center justify-center">
                <span className="text-white text-xs">⭐</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Listo para cuidar tu sonrisa?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Descarga rie+ ahora y conecta con los mejores dentistas de Argentina. 
              Tu salud bucal en las mejores manos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-primary-600 font-medium py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <DownloadIcon className="h-5 w-5 mr-2" />
                Descargar Gratis
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
              <div className="text-white/80 text-sm">
                El precio más conveniente • Dentistas verificados
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download 