
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nguyễn Văn A",
      position: "Giám đốc Nhà hàng Fusion",
      content:
        "Dịch vụ thiết kế website của họ thực sự xuất sắc. Website mới đã giúp nhà hàng của chúng tôi tăng lượng đặt bàn trực tuyến lên 40% chỉ trong tháng đầu tiên.",
      rating: 5,
      image: "nguyen-van-a",
    },
    {
      name: "Trần Thị B",
      position: "Chủ Shop thời trang",
      content:
        "Chiến dịch TikTok họ xây dựng đã giúp shop của tôi tăng doanh số bán hàng gấp đôi. Đội ngũ chuyên nghiệp và luôn cập nhật xu hướng mới nhất.",
      rating: 5,
      image: "tran-thi-b",
    },
    {
      name: "Lê Văn C",
      position: "Quản lý Spa & Wellness",
      content:
        "Bộ nhận diện thương hiệu họ thiết kế đã giúp spa của chúng tôi nổi bật và thu hút nhiều khách hàng mới. Rất hài lòng với kết quả và sẽ tiếp tục hợp tác lâu dài.",
      rating: 4,
      image: "le-van-c",
    },
  ];

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
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Khách hàng <span className="gradient-text">Nói gì</span> về chúng tôi
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Những đánh giá từ khách hàng đã sử dụng dịch vụ marketing của chúng tôi.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="testimonial-card"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    alt={`${testimonial.name} avatar`}
                    className="w-full h-full object-cover"
                   src="https://images.unsplash.com/photo-1554639250-ff81ade7a6f4" />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
