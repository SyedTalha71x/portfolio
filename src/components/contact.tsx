/* eslint-disable @typescript-eslint/no-unused-vars */
import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatePresence } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)   
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="contact" className="min-h-screen bg-background py-20 px-2 sm:px-2 lg:px-8">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-accent" />
              <h2 className="text-4xl sm:text-5xl font-bold rethink-sans-font text-accent">Reach to Me</h2>
            </div>
            <p className="text-foreground/70 text-lg rethink-sans-font-600   max-w-xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you. Drop me a message and I'll get
              back to you as soon as possible.
            </p>
          </motion.div>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-6 bg-secondary/30 backdrop-blur-sm border border-accent/20 rounded-2xl md:p-8 p-4"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block rethink-sans-font-600 text-sm font-medium text-foreground">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background/50 rethink-sans-font-600 border-accent/30 focus:border-accent focus:ring-accent/50 text-foreground placeholder:text-foreground/40"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block rethink-sans-font-600 text-sm font-medium text-foreground">
                Your Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background/50 rethink-sans-font-600 border-accent/30 focus:border-accent focus:ring-accent/50 text-foreground placeholder:text-foreground/40"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block rethink-sans-font-600 text-sm font-medium text-foreground">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Drop your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-background/50 rethink-sans-font-600 border-accent/30 focus:border-accent focus:ring-accent/50 text-foreground placeholder:text-foreground/40 resize-none"
              />
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 rethink-sans-font-600 text-background font-semibold py-3 rounded-lg transition-all duration-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </motion.div>

            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center"
                >
                  ✗ Something went wrong. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-secondary/30 rethink-sans-font-600 backdrop-blur-sm border border-accent/20 rounded-xl p-6 text-center hover:border-accent/40 transition-colors">
              <h3 className="text-accent font-semibold mb-2">Email</h3>
              <a href="mailto:syedtalha71x@gmail.com" className="text-foreground/70 hover:text-accent transition-colors">
                talha@example.com
              </a>
            </div>
            <div className="bg-secondary/30 rethink-sans-font-600 backdrop-blur-sm border border-accent/20 rounded-xl p-6 text-center hover:border-accent/40 transition-colors">
              <h3 className="text-accent font-semibold mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/syed-talha-hussain-93b490253/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                linkedin.com/in/syed-talha-hussain
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
