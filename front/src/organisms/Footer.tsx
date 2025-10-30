import LinkMolecule from '@/molecules/Link';
import Heading from '@/atoms/Heading';
import Paragraph from '@/atoms/Paragraph';
import Icon from '@/atoms/Icon';

const FooterOrganism = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-right">
            <Heading level={3} className="mb-4">نمک</Heading>
            <Paragraph size="md" className="text-gray-300 leading-relaxed">
              سفره‌ای از برکت حسین، برای حذف گرسنگی در خانواده‌های ایرانی
            </Paragraph>
          </div>

          <div className="text-right">
            <Heading level={4} className="text-lg font-semibold mb-4">لینک‌های مفید</Heading>
            <ul className="space-y-2">
              <li><LinkMolecule variant="footer" href="/">خانه</LinkMolecule></li>
              <li><LinkMolecule variant="footer" href="#about">درباره ما</LinkMolecule></li>
              <li><LinkMolecule variant="footer" href="#features">ویژگی‌ها</LinkMolecule></li>
              <li><LinkMolecule variant="footer" href="#download">دانلود</LinkMolecule></li>
            </ul>
          </div>

          <div className="text-right">
            <Heading level={4} className="text-lg font-semibold mb-4">تماس با ما</Heading>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center justify-end space-x-reverse space-x-2">
                <Icon name="phone" size="md" />
                <span>+۹۸ ۲۱ ۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center justify-end space-x-reverse space-x-2">
                <Icon name="email" size="md" />
                <span>info@namak.ir</span>
              </li>
              <li className="flex items-center justify-end space-x-reverse space-x-2">
                <Icon name="globe" size="md" />
                <span>www.namak.ir</span>
              </li>
            </ul>
          </div>

          <div className="text-right">
            <Heading level={4} className="text-lg font-semibold mb-4">ما را دنبال کنید</Heading>
            <div className="flex justify-end space-x-reverse space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-xl">
                <Icon name="instagram" size="md" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-xl">
                <Icon name="twitter" size="md" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <Paragraph size="md">© {new Date().getFullYear()} نمک - تمامی حقوق محفوظ است.</Paragraph>
        </div>
      </div>
    </footer>
  );
};

export default FooterOrganism;
