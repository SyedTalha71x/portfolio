import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Three Tier Application on AWS EKS",
    description: "Automated the entire application lifecycle from infrastructure provisioning to continuous deployment and observability using modern cloud-native and DevSecOps tools.",
    tech: ["Amazon EKS", "Jenkins", "Trivy", "Sonarqube", "ArgoCD", "Docker", "Terraform", "Prometheus", "Grafana", "Amazon ECR"],
    github: "https://github.com/SyedTalha71x/three-tier-kubernetes-devsecops-deployment",
  },
  {
    title: "DevSecOps CI/CD Pipeline", 
    description: "Developed end to end CI/CD pipeline integrating security scanning tools to ensure code quality and security compliance before deployment.",
    tech: ["Github Actions", "Trivy", "Amazon EKS", "Docker", "Github CR"],
    github: "https://github.com/SyedTalha71x/devsecops-pipeline-cicd",
  },

]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent rethink-sans-font mb-4">
            Projects
          </h2>
          <p className="text-foreground/70 rethink-sans-font-600 text-lg">
            A selection of projects I've worked on, showcasing my expertise in cloud infrastructure and DevOps.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col justify-between bg-background/50 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group">
                <div>
                  <CardHeader>
                    <CardTitle className="text-xl rethink-sans-font-700 text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-foreground/60 rethink-sans-font-600">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 mt-5 space-y-4">
                    <div className="grid md:grid-cols-3 grid-cols-2  gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-auto py-1 flex justify-center items-center bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/30 rethink-sans-font-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>

                {/* Button pinned at bottom */}
                <div className="px-6 pb-6 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-center border-accent/30 text-accent hover:bg-accent/10 bg-transparent rethink-sans-font-700"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
