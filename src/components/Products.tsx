const products = [
  { name: 'Sardinel', image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/CAM00495.jpg' },
  { name: 'Cárcamos y Rejillas', image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/carcamos-y-rejillas.png' },
  { name: 'Topellanta', image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/CAM00492-copia.jpg' },
  { name: 'Alcantarillado', image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/Cargue-170-25-alcantarillado.png' },
  { name: 'Adoquín', image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/Adoquin.jpg' },
  { name: 'Bloques', image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/IMG_20211118_083654-scaled.jpg' },
  { name: 'Cañuela A-120', image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/A-120-PROFUNDA-X5-e1724268491756.png' },
  { name: 'Cañuela A-125', image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/CAnuela-A-125-22.5-40-80-1.jpg' },
  { name: 'Postes', image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/IMG-20161129-WA0004-1.jpg' },
  { name: 'Cárcamo C-25', image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/Carcamo-25-40-100.png' },
  { name: 'Banca Kary', image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-04-01-at-16.31.53.jpg' },
  { name: 'Banca Corbatín', image: 'https://www.prefabricadoscolombia.com/wp-content/uploads/2024/08/M-40-4.jpg' },
];

const Products = () => {
  return (
    <section id="productos" className="section-padding bg-muted">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Fabricamos y suministramos los espacios para tu vida​
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="product-card bg-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
