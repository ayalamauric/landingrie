import React from 'react'
import { 
  Calendar, 
  MapPin, 
  Shield, 
  Clock, 
  Star, 
  CreditCard,
  Users,
  Smartphone,
  CheckCircle,
  Heart
} from 'lucide-react'

const Features = () => {
  const services = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Reservas Online",
      description: "Agenda tu cita con dentistas verificados en tiempo real, 24/7 desde tu celular.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Cerca de Vos",
      description: "Encuentra profesionales odontológicos en tu zona con geolocalización precisa.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Profesionales Verificados",
      description: "Todos nuestros dentistas están habilitados por el Colegio Odontológico.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Atención Inmediata",
      description: "Urgencias dentales atendidas en el momento. Conectamos con dentistas de guardia.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Reseñas Reales",
      description: "Lee opiniones de otros pacientes y elige el mejor profesional para vos.",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Pagos Seguros",
      description: "Paga de forma segura a través de la app. Aceptamos obras sociales y prepagas.",
      color: "from-pink-500 to-rose-600"
    }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Sin Turnos Perdidos",
      description: "Recordatorios automáticos y reprogramación fácil"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Cuidado Integral",
      description: "Desde limpieza hasta tratamientos especializados"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Para Toda la Familia",
      description: "Odontopediatría y tratamientos para adultos"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Fácil de Usar",
      description: "Interfaz simple e intuitiva para todas las edades"
    }
  ]

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Servicios que
            <span className="text-primary-600"> cuidan</span> tu sonrisa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conectamos pacientes con los mejores profesionales odontológicos de Argentina. 
            Tu salud bucal en las mejores manos, cuando y donde lo necesites.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 card-hover"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir rie+?
            </h3>
            <p className="text-lg text-gray-600">
              La forma más moderna y confiable de cuidar tu salud bucal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-white rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary-600">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Specialties Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Especialidades Disponibles
            </h3>
            <p className="text-lg text-gray-600">
              Encuentra el especialista que necesitas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Odontología General", emoji: "🦷" },
              { name: "Ortodoncia", emoji: "😬" },
              { name: "Endodoncia", emoji: "🔧" },
              { name: "Periodoncia", emoji: "🩺" },
              { name: "Odontopediatría", emoji: "👶" },
              { name: "Cirugía Oral", emoji: "⚕️" },
              { name: "Estética Dental", emoji: "✨" },
              { name: "Implantes", emoji: "🔩" },
              { name: "Prótesis", emoji: "🦷" },
              { name: "Blanqueamiento", emoji: "💎" },
              { name: "Urgencias", emoji: "🚨" },
              { name: "Preventiva", emoji: "🛡️" }
            ].map((specialty, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-200">
                <div className="text-2xl mb-2">{specialty.emoji}</div>
                <div className="text-sm font-medium text-gray-700">{specialty.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features 