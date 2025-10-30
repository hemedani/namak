import Button from '@/atoms/Button';
import Heading from '@/atoms/Heading';
import Paragraph from '@/atoms/Paragraph';

const HeroOrganism = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-nemak-warm/10 to-nemak-green/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 text-right">
          <Heading level={1} className="text-gray-800 mb-6 leading-tight">
            نمک: <span className="text-nemak-green">سفره‌ای از برکت حسین</span>
          </Heading>
          <Paragraph size="lg" className="text-gray-600 mb-4 leading-relaxed">
            نمک سفره‌مان از اباعبدالله باشد
          </Paragraph>
          <Paragraph size="md" className="text-gray-500 mb-8 italic">
            با یاد امیر چلویی، که تا وقتی زنده بود، هیچ‌کس در همدان گرسنه نخوابید
          </Paragraph>
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button
              as="link"
              href="#signup"
              variant="primary"
              className="text-center"
            >
              شروع کنید
            </Button>
            <Button
              as="link"
              href="#about"
              variant="secondary"
              className="text-center"
            >
              بیشتر بدانید
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-nemak-warm/20 border-2 border-dashed border-nemak-warm rounded-full w-80 h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto" />
              <Paragraph size="md" className="mt-4 text-gray-500">
                دستی که کاسه گرم غذا را نگه می‌دارد
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOrganism;
