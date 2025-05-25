
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
  const benefits = [
    "Đội ngũ chuyên gia marketing giàu kinh nghiệm",
    "Giải pháp marketing tùy chỉnh theo nhu cầu",
    "Cam kết chất lượng và kết quả rõ ràng",
    "Hỗ trợ khách hàng 24/7",
    "Cập nhật xu hướng marketing mới nhất",
    "Báo cáo chi tiết và minh bạch",
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-2xl" />
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img 
                alt="Marketing team working together"
                className="w-full h-auto"
               src="/about.jpg" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Về <span className="gradient-text">Chúng tôi</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Chúng tôi là đội ngũ chuyên gia marketing với nhiều năm kinh nghiệm trong lĩnh vực
              digital marketing. Sứ mệnh của chúng tôi là giúp các doanh nghiệp địa phương
              phát triển thông qua các giải pháp marketing hiệu quả và sáng tạo.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Với đam mê và sự tận tâm, chúng tôi cam kết mang đến những giải pháp marketing
              tốt nhất, giúp doanh nghiệp của bạn nổi bật giữa đám đông và thu hút khách hàng tiềm năng.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-start space-x-2"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-200">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
