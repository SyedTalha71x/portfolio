import { motion } from "framer-motion"

export default function Story() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="story" className="py-20 md:py-32 px-4 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl rethink-sans-font md:text-5xl font-bold mb-12 text-accent">
            My Story
          </motion.h2>

          <div className="space-y-6 text-lg rethink-sans-font-600 text-foreground/80 leading-relaxed">
            <motion.p variants={itemVariants}>
              I'm a passionate Cloud & DevOps Engineer with a deep love for building scalable, reliable infrastructure.
              My journey in tech started with a curiosity about how systems work at scale, and it has evolved into a
              career dedicated to automating, optimizing, and securing cloud environments.
            </motion.p>

            <motion.p variants={itemVariants}>
              Over the years, I've worked with cutting-edge technologies like Kubernetes, Docker, Terraform, and various
              cloud platforms. I believe in the power of infrastructure as code and continuous integration/deployment to
              deliver value faster and more reliably. My passion lies in solving complex problems and mentoring others
              in the DevOps space.
            </motion.p>

            <motion.p variants={itemVariants}>
              When I'm not working on infrastructure challenges, you'll find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the community. I'm always excited about the
              intersection of development and operations, and how we can build better systems together.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
