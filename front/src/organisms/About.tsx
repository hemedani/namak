import Heading from '@/atoms/Heading';
import Paragraph from '@/atoms/Paragraph';

const AboutOrganism = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
          </div>
          <div className="md:w-1/2 md:pr-12 text-right">
            <Heading level={2} className="text-gray-800 mb-6">ماموریت نمک</Heading>
            <Paragraph size="lg" className="text-gray-600 mb-6 leading-relaxed">
              نمک یک پلتفرم اجتماعی است که با الهام از سنت نذری برای امام حسین (ع)،
              کمک می‌کند تا گرسنگی در خانواده‌های ایرانی را به صورت سالانه حذف کند.
            </Paragraph>
            <Paragraph size="lg" className="text-gray-600 mb-6 leading-relaxed">
              ما با استفاده از فناوری هوش مصنوعی و سیستم مردم‌محور،
              امکان سفارش و توزیع غذاهای نذری را برای خانواده‌های نیازمند فراهم می‌کنیم.
            </Paragraph>
            <Paragraph size="lg" className="text-gray-600 mb-8 leading-relaxed">
              هدف ما ایجاد یک جامعه‌ای است که هیچ فردی در آن گرسنه نخوابد،
              با حفظ ارزش‌های اسلامی و ایرانی در کنار هم.
            </Paragraph>
            <div className="flex items-center space-x-reverse space-x-4">
              <div className="bg-nemak-green w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">ن</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">نظام حمایت نذری</h4>
                <p className="text-gray-600 text-sm">بر پایه نیت نذری امام حسین</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOrganism;
