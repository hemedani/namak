import { LightBulbIcon, UserGroupIcon, HeartIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      icon: <LightBulbIcon className="h-10 w-10 text-nemak-gold" />,
      title: 'سفارش غذای نذری',
      description: 'امکان سفارش غذای نذری برای خود یا دیگران با الهام از سنت نذری برای امام حسین (ع)'
    },
    {
      icon: <Cog6ToothIcon className="h-10 w-10 text-nemak-gold" />,
      title: 'شخصی‌سازی با هوش مصنوعی',
      description: 'سیستم هوشمندی که غذاها را با توجه به نیازهای سلامتی هر فرد شخصی‌سازی می‌کند'
    },
    {
      icon: <UserGroupIcon className="h-10 w-10 text-nemak-gold" />,
      title: 'حمایت مردم‌محور',
      description: 'سیستمی که از همکاری جامعه و داوطلبان برای توزیع غذا حمایت می‌کند'
    },
    {
      icon: <HeartIcon className="h-10 w-10 text-nemak-gold" />,
      title: 'تمرکز بر خانواده',
      description: 'تمرکز بر ارائه حمایت به خانواده‌هایی که نیاز به کمک دارند'
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">ویژگی‌های نمک</h2>
          <div className="w-24 h-1 bg-nemak-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-nemak-green/10 p-4 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
