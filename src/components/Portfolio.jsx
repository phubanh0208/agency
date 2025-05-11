
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Website Nhà hàng Fusion",
      category: "Thiết kế Website",
      description: "Thiết kế website hiện đại cho nhà hàng fusion cao cấp.",
    },
    {
      title: "Chiến dịch TikTok Shop thời trang",
      category: "TikTok Marketing",
      description: "Xây dựng kênh TikTok và chiến dịch viral cho shop thời trang.",
    },
    {
      title: "Bộ nhận diện Spa & Wellness",
      category: "Thiết kế Banner & Ảnh bìa",
      description: "Thiết kế bộ nhận diện thương hiệu cho spa cao cấp.",
    },
    {
      title: "Chiến dịch Facebook Cafe Artisan",
      category: "Quản lý Mạng xã hội",
      description: "Quản lý và phát triển fanpage cho chuỗi cafe nghệ thuật.",
    },
    {
      title: "Website Bất động sản Luxury",
      category: "Thiết kế Website",
      description: "Thiết kế website chuyên nghiệp cho công ty bất động sản cao cấp.",
    },
    {
      title: "Chiến dịch Marketing Gym Center",
      category: "Chiến lược Marketing",
      description: "Xây dựng chiến lược marketing tổng thể cho trung tâm thể hình.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dự án <span className="gradient-text">Tiêu biểu</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Khám phá các dự án marketing thành công mà chúng tôi đã thực hiện
            cho khách hàng.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="portfolio-item rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                alt={`Portfolio project: ${item.title}`}
                className="w-full h-64 object-cover"
               src="https://images.unsplash.com/photo-1670784772980-dc522f953042" />
              <div className="portfolio-item-overlay">
                <span className="text-sm font-medium text-blue-400 mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Xem chi tiết <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
