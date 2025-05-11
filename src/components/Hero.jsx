
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white dark:from-gray-900 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Nâng tầm thương hiệu của bạn với{" "}
            <span className="gradient-text">giải pháp marketing</span> chuyên nghiệp
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Chúng tôi cung cấp các dịch vụ marketing toàn diện giúp doanh nghiệp địa phương của bạn
            nổi bật và thu hút khách hàng tiềm năng.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Liên hệ ngay
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 dark:border-gray-700"
            >
              Xem dịch vụ
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 md:mt-24 relative"
        >
          <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
            <img 
              alt="Marketing agency workspace"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1696041757866-f19a8e46fab1" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20 blur-2xl" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full opacity-20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
