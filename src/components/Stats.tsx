import { useEffect, useState, useRef } from 'react';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
}

const StatItem = ({ value, label, suffix = '' }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground font-medium uppercase tracking-wide text-sm">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { value: 150, label: 'Proyectos', suffix: '+' },
    { value: 50, label: 'Variedad de Productos', suffix: '+' },
    { value: 500, label: 'Número de Clientes', suffix: '+' },
    { value: 3, label: 'Plantas de Producción' },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
