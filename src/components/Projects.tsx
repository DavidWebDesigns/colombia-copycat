const projects = [
  { 
    name: 'VIAS DE URBANISMO CIUDAD VERDE', 
    image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/Captura-de-pantalla-2024-08-05-151709.png' 
  },
  { 
    name: 'Baldosa en Granito', 
    image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/Baldosa-instalada1-e1725294104497-1024x675.jpeg' 
  },
  { 
    name: 'CENTRO COMERCIAL EL EDEN', 
    image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/Centro_comercial_El_Eden_desde_la_Avenida_Boyaca-1024x492.jpg' 
  },
  { 
    name: 'URBANISMO CIUDAD VERDE', 
    image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/Ciudad-verde-apartamentos-1024x512.jpeg' 
  },
  { 
    name: 'URBANISMO FUNZA', 
    image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/unnamed.jpg' 
  },
  { 
    name: 'OBRAS DE URBANISMO', 
    image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/Urbanismo-prosperidad.png' 
  },
];

const Projects = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4 max-w-4xl mx-auto leading-relaxed">
          Nuestra calidad en prefabricados aseguran tus proyectos duraderos a lo largo del tiempo
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Eso lo demuestran nuestros proyectos en los que hemos suministrado nuestros productos
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="project-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/90 to-transparent">
                <h3 className="text-primary-foreground font-semibold text-sm uppercase tracking-wide">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
