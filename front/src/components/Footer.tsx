import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">نمک</h3>
            <p className="text-gray-300 leading-relaxed">
              سفره‌ای از برکت حسین، برای حذف گرسنگی در خانواده‌های ایرانی
            </p>
          </div>

          <div className="text-right">
            <h4 className="text-lg font-semibold mb-4">لینک‌های مفید</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  خانه
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  ویژگی‌ها
                </Link>
              </li>
              <li>
                <Link
                  href="#download"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  دانلود
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-right">
            <h4 className="text-lg font-semibold mb-4">تماس با ما</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center justify-end space-x-reverse space-x-2">
                <span className="text-lg">📞</span>
                <span>+۹۸ ۲۱ ۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center justify-end space-x-reverse space-x-2">
                <span className="text-lg">✉️</span>
                <span>info@namak.ir</span>
              </li>
              <li className="flex items-center justify-end space-x-reverse space-x-2">
                <span className="text-lg">🌐</span>
                <span>www.namak.ir</span>
              </li>
            </ul>
          </div>

          <div className="text-right">
            <h4 className="text-lg font-semibold mb-4">ما را دنبال کنید</h4>
            <div className="flex justify-end space-x-reverse space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-xl"
              >
                📷
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-xl"
              >
                🐦
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} نمک - تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
