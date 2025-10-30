import Card from '@/molecules/Card';
import Icon from '@/atoms/Icon';
import Heading from '@/atoms/Heading';

const FeaturesOrganism = () => {
  const features = [
    {
      icon: <Icon name="lightbulb" className="text-nemak-gold" size="xl" />,
      title: 'سفارش غذای نذری',
      description: 'امکان سفارش غذای نذری برای خود یا دیگران با الهام از سنت نذری برای امام حسین (ع)'
    },
    {
      icon: <Icon name="cog" className="text-nemak-gold" size="xl" />,
      title: 'شخصی‌سازی با هوش مصنوعی',
      description: 'سیستم هوشمندی که غذاها را با توجه به نیازهای سلامتی هر فرد شخصی‌سازی می‌کند'
    },
    {
      icon: <Icon name="user-group" className="text-nemak-gold" size="xl" />,
      title: 'حمایت مردم‌محور',
      description: 'سیستمی که از همکاری جامعه و داوطلبان برای توزیع غذا حمایت می‌کند'
    },
    {
      icon: <Icon name="heart" className="text-nemak-gold" size="xl" />,
      title: 'تمرکز بر خانواده',
      description: 'تمرکز بر ارائه حمایت به خانواده‌هایی که نیاز به کمک دارند'
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Heading level={2} className="text-gray-800 mb-4">ویژگی‌های نمک</Heading>
          <div className="w-24 h-1 bg-nemak-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOrganism;
