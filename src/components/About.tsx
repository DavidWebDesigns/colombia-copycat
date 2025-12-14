import concreteBlocksImg from '@/assets/concrete-blocks.jpg';

const About = () => {
  return (
    <section id="nosotros" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Prefabricados Colombia Comercial SAS
            </h2>
            <p className="text-secondary text-lg leading-relaxed">
              Contamos con variedad de productos, excelente atención y asesoría a nuestros clientes.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              Suministramos prefabricados con diseños especiales y atenderemos tus pedidos con gran agilidad
            </p>
          </div>
          <div className="relative">
            <img
              src={concreteBlocksImg}
              alt="Bloques de concreto prefabricados"
              className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
