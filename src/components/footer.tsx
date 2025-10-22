import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/SyedTalha71x", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/syed-talha-hussain-93b490253/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:syedtalha71x@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-background border-t border-accent/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, color: "#facc15" }}
                  whileTap={{ scale: 0.95 }}
                  className="text-foreground/60 hover:text-accent transition-colors"
                  aria-label={social.label}
                  target="_blank"
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/60 rethink-sans-font-600 text-center text-sm"
          >
            Made by <Heart className="inline w-4 h-4 text-accent mx-1" /> by Talha | © 2025
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
