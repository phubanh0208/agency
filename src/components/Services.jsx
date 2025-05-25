
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe,
  Image,
  Layout,
  TrendingUp,
  Video,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-blue-600" />,
      title: "Thiết kế Website",
      description:
        "Thiết kế website chuyên nghiệp, tối ưu trải nghiệm người dùng và tăng tỷ lệ chuyển đổi.",
      image: "/images/web-design1.jpg",
      slug: "web-design",
    },
    {
      icon: <Image className="h-10 w-10 text-purple-600" />,
      title: "Thiết kế Ảnh bìa",
      description:
        "Tạo ảnh bìa ấn tượng cho mạng xã hội và website, thu hút sự chú ý của khách hàng tiềm năng.",
      image: "/images/web-design2.jpg",
      slug: "cover-design",
    },
    {
      icon: <Layout className="h-10 w-10 text-indigo-600" />,
      title: "Thiết kế Banner",
      description:
        "Thiết kế banner quảng cáo chuyên nghiệp, bắt mắt cho các chiến dịch marketing online.",
      image: "/images/web-design3.jpg",
      slug: "banner-design",
    },
    {
      icon: <Video className="h-10 w-10 text-pink-600" />,
      title: "Xây dựng TikTok",
      description:
        "Phát triển kênh TikTok với nội dung sáng tạo, thu hút người xem và tăng lượng theo dõi.",
      image: "/images/web-design4.jpg",
      slug: "tiktok",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-green-600" />,
      title: "Quản lý Mạng xã hội",
      description:
        "Quản lý và phát triển các kênh mạng xã hội, tăng tương tác và xây dựng cộng đồng.",
      image: "/images/web-design5.jpg",
      slug: "social-media",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-orange-600" />,
      title: "Chiến lược Marketing",
      description:
        "Xây dựng chiến lược marketing toàn diện, phù hợp với mục tiêu kinh doanh của bạn.",
      image: "/images/web-design6.jpg",
      slug: "strategy",
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
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dịch vụ <span className="gradient-text">Marketing</span> tại MT Design
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Giải pháp thiết kế & truyền thông giúp bạn xây dựng thương hiệu và thu hút khách hàng
            địa phương hiệu quả.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card group"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <Link to={`/services/${service.slug}`}>
                <Button variant="ghost" className="text-blue-600 dark:text-blue-400 p-0 hover:bg-transparent group-hover:translate-x-1 transition-transform">
                  Tìm hiểu thêm <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
