import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-nemak-warm/10 to-nemak-green/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 text-right">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            نمک: <span className="text-nemak-green">سفره‌ای از برکت حسین</span>
          </h1>
          <p className="text-xl text-gray-600 mb-4 leading-relaxed">
            نمک سفره‌مان از اباعبدالله باشد
          </p>
          <p className="text-lg text-gray-500 mb-8 italic">
            با یاد امیر چلویی، که تا وقتی زنده بود، هیچ‌کس در همدان گرسنه
            نخوابید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Link
              href="#signup"
              className="inline-block bg-nemak-green text-white font-medium py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors duration-300 text-center"
            >
              شروع کنید
            </Link>
            <Link
              href="#about"
              className="inline-block bg-white border-2 border-nemak-green text-nemak-green font-medium py-3 px-8 rounded-lg hover:bg-nemak-green hover:text-white transition-colors duration-300 text-center"
            >
              بیشتر بدانید
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-nemak-warm/20 border-2 border-dashed border-nemak-warm rounded-full w-80 h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto" />
              <p className="mt-4 text-gray-500">
                دستی که کاسه گرم غذا را نگه می‌دارد
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
