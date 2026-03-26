import { motion } from "framer-motion"
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react"
import AnimatedButton from "./AnimatedButton"
import CountingStats from "./CountingStats"

export default function Hero() {
  const stats = [
    { value: 100, suffix: "K+", label: "Охват аудитории" },
    { value: 3000, suffix: "+", label: "Зрителей офлайн" },
    { value: 6, suffix: "", label: "Пакетов спонсорства" },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/abe03775-1f57-4127-9771-1c7fcf82acd5/files/b49f705a-1360-4e37-a39f-1dccc0ade613.jpg"
          alt="Красавица города 2026"
          className="w-full h-full object-cover opacity-70"
          style={{ filter: "brightness(0.75) contrast(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-yellow-500/20 border border-white/30 rounded-full text-sm text-white font-medium backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 animate-pulse" />
              Коммерческое предложение для спонсоров
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-2"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="block text-white">КРАСАВИЦА</span>
                <span
                  className="block bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                  style={{ textShadow: "none", filter: "drop-shadow(0 0 30px rgba(236,72,153,0.4))" }}
                >
                  ГОРОДА
                </span>
                <span className="block text-white text-4xl sm:text-5xl lg:text-6xl">2026</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Главный конкурс красоты и таланта Мордовии. Ваш бренд — в центре внимания тысяч гостей, 
              СМИ и онлайн-аудитории. Станьте частью события, которое запомнится городу.
            </motion.p>

            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5">
                <Calendar className="w-4 h-4 text-pink-400" />
                <span className="text-white text-sm font-medium">11 июля 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-white text-sm font-medium">Огарев Арена, Саранск</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5">
                <Users className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-medium">Аудитория 18–50 лет</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <a href="#packages">
                <AnimatedButton variant="slim" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 border-0">
                  <span className="flex items-center">
                    Смотреть пакеты
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </AnimatedButton>
              </a>
              <a href="#contact">
                <AnimatedButton variant="slim" className="bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20">
                  Связаться с нами
                </AnimatedButton>
              </a>
            </motion.div>

            {/* Stats */}
            <CountingStats stats={stats} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
