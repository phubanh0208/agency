
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Trần Quang Minh",
      position: "Chủ website hocbaohiem.com",
      content:
        "MT Design đã giúp tôi xây dựng một website chuyên nghiệp, tốc độ tải nhanh và chuẩn SEO. Lượng truy cập tự nhiên tăng rõ rệt chỉ sau vài tuần.",
      rating: 5,
      image: "tran-quang-minh",
    },
    {
      name: "Nguyễn Thị Lan",
      position: "Chủ Spa Hoa Anh Đào",
      content:
        "Tôi rất ấn tượng với các mẫu banner do MT Design thiết kế — màu sắc hài hòa, truyền tải đúng thông điệp. Khách hàng phản hồi rất tích cực trên fanpage.",
      rating: 5,
      image: "nguyen-thi-lan",
    },
    {
      name: "Phạm Văn Huy",
      position: "Chủ cửa hàng điện máy Huy Phát",
      content:
        "MT Design đã giúp cửa hàng của tôi có một bộ banner khuyến mãi cực kỳ bắt mắt. Chiến dịch ra mắt sản phẩm mới rất thành công nhờ thiết kế chuyên nghiệp.",
      rating: 4,
      image: "pham-van-huy",
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
                    src={`/images/avatars/${testimonial.image}.png`}
                  />

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
                    className={`h-4 w-4 ${i < testimonial.rating
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
