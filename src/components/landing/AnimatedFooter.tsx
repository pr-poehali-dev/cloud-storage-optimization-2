import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Youtube, Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react"
import AnimatedButton from "./AnimatedButton"

export default function AnimatedFooter() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setName("")
    setEmail("")
    setCompany("")
  }

  return (
    <footer id="contact" className="relative bg-black border-t border-gray-800/50">

      {/* CTA / Contact Section */}
      <div className="relative z-10 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm text-pink-400 font-medium">
                Заключение
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Готовы стать частью
                <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  главного события Саранска?
                </span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Мы открыты к обсуждению индивидуальных условий сотрудничества. 
                Свяжитесь с нами — и мы подберём оптимальный пакет под цели вашего бренда.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-pink-500/10 border border-pink-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Email</div>
                    <span className="font-medium">sponsor@krasavica2026.ru</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Телефон</div>
                    <span className="font-medium">+7 (834) 2 XX-XX-XX</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Место проведения</div>
                    <span className="font-medium">Огарев Арена, Саранск</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                {[
                  { icon: Instagram, href: "#", label: "Instagram", color: "hover:border-pink-500/50 hover:text-pink-400" },
                  { icon: Youtube, href: "#", label: "YouTube", color: "hover:border-red-500/50 hover:text-red-400" },
                  { icon: Send, href: "#", label: "Telegram", color: "hover:border-blue-500/50 hover:text-blue-400" },
                ].map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`w-10 h-10 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-200 ${color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/40 border border-gray-800 rounded-3xl p-8"
            >
              <h4 className="text-xl font-bold text-white mb-6">Оставить заявку</h4>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <p className="text-green-400 font-medium text-lg">Заявка отправлена!</p>
                  <p className="text-gray-400 text-sm mt-2">Мы свяжемся с вами в течение 24 часов</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Ваше имя</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Иван Иванов"
                      required
                      className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Компания</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Название компании"
                      className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="mail@company.ru"
                      required
                      className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                    />
                  </div>
                  <AnimatedButton
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 border-0"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Отправить заявку
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </AnimatedButton>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
              Красавица города 2026
            </span>
            <p className="text-gray-600 text-sm mt-1">© 2026 Все права защищены.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Условия
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
