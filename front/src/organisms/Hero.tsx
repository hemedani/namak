"use client";

import Button from "@/atoms/Button";
import Heading from "@/atoms/Heading";
import Paragraph from "@/atoms/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroOrganism = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-nemak-green/20 to-nemak-warm/20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/img/Header.png"
              alt="دستی که کاسه گرم غذا را نگه می‌دارد"
              width={400}
              height={400}
              className="rounded-2xl object-cover"
              priority
            />
          </motion.div>
        </div>
        <div className="md:w-1/2 text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heading level={1} className="text-gray-800 mb-6 leading-tight">
              نمک:{" "}
              <span className="text-nemak-green">سفره‌ای از برکت حسین</span>
            </Heading>
            <Paragraph size="lg" className="text-gray-600 mb-4 leading-relaxed">
              نمک سفره‌مان از اباعبدالله باشد
            </Paragraph>
            <Paragraph size="md" className="text-gray-500 mb-8 italic">
              با یاد امیر چلویی، که تا وقتی زنده بود، هیچ‌کس در همدان گرسنه
              نخوابید
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button
                as="link"
                href="#signup"
                variant="primary"
                className="text-center hover:scale-105 transition-transform duration-200"
              >
                شروع کنید
              </Button>
              <Button
                as="link"
                href="#about"
                variant="secondary"
                className="text-center hover:scale-105 transition-transform duration-200"
              >
                بیشتر بدانید
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroOrganism;
