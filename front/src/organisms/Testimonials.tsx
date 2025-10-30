import Heading from '@/atoms/Heading';
import Paragraph from '@/atoms/Paragraph';

const TestimonialsOrganism = () => {
  const testimonials = [
    {
      name: 'خانم محمدی',
      role: 'مادر خانواده',
      content: 'نمک برکتی بود که سفره ما را گرم نگه داشت. این سیستم نه فقط غذا می‌دهد، بلکه امید می‌آفریند.'
    },
    {
      name: 'آقای احمدی',
      role: 'داوطلب',
      content: 'همکاری با نمک فرصتی بود برای خدمت کردن به همنوعان. دیدن لبخند‌های خانواده‌ها، ارزش تمام تلاش‌ها را داشت.'
    },
    {
      name: 'خانم رضایی',
      role: 'سرپرست خانوار',
      content: 'در دوران سخت، نمک کمک کرد تا کودکانم نگران نباشند. این سیستم نشان می‌دهد که هنوز امید وجود دارد.'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-nemak-green/5 to-nemak-warm/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Heading level={2} className="text-gray-800 mb-4">چه می‌گویند</Heading>
          <Paragraph size="lg" className="text-gray-600 max-w-2xl mx-auto">
            داستان‌هایی از خانواده‌هایی که از سیستم حمایت نمک بهره‌مند شده‌اند
          </Paragraph>
          <div className="w-24 h-1 bg-nemak-green mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md text-right"
            >
              <div className="text-nemak-green mb-4">
                <span className="text-2xl">"</span>
              </div>
              <Paragraph size="md" className="text-gray-600 mb-6 leading-relaxed">{testimonial.content}</Paragraph>
              <div>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-nemak-green text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsOrganism;
