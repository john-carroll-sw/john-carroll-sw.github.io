export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-background to-purple-950/10 rounded-xl my-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gradient bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-6">
          Hi, I'm John Carroll—a passionate software engineer and technologist. I specialize in building modern, scalable web applications and AI-powered solutions. My expertise spans full-stack development, cloud architecture, and developer experience, with a focus on delivering impactful products and delightful user experiences.
        </p>
        <p className="text-base md:text-lg text-muted-foreground mb-4">
          I enjoy working with cutting-edge technologies, collaborating with diverse teams, and sharing my knowledge through talks and blog posts. Whether it's architecting robust backends, crafting beautiful frontends, or exploring the latest in AI, I thrive on solving complex problems and learning new things.
        </p>
        <p className="text-base md:text-lg text-muted-foreground">
          Let's connect if you'd like to collaborate, discuss technology, or just say hello!
        </p>
      </div>
    </section>
  )
}
