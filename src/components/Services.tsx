import { Building, Calendar, Truck, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: Building,
    title: 'Obras de Urbanismo e infraestructuras',
    description: 'Suministramos prefabricados en concreto para las obras de urbanismo residencial e infraestructura',
  },
  {
    icon: Calendar,
    title: 'Programación de fabricación y entrega',
    description: 'Programación y entrega de nuestros productos de acuerdo a las necesidades de nuestros cliente',
  },
  {
    icon: Truck,
    title: 'Entrega del producto',
    description: 'Al adquirir nuestros productos entregamos directamente a su obra y nos aseguramos que el producto este en perfectas condiciones',
  },
  {
    icon: HeadphonesIcon,
    title: 'Seguimiento y atención al cliente',
    description: 'Estamos atentos a las solicitudes de nuestros clientes en todo momento brindando respuesta inmediata',
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4 uppercase">
          Acompañamiento continuo
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Desde el momento de su solicitud de cotización hasta la finalización de su obra
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
