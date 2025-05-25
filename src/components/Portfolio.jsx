
import React, { useRef, useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import {
  Globe,
  Palette,
  Image, // đổi tên để tránh trùng với thẻ <img>
  Layout,
  MonitorSmartphone,
  FolderKanban,
  LockKeyhole,
  Heart,
  TrendingUp,
  Gauge,
  Video,
  ClipboardList,
  Calendar,
  PenTool,
  Code,
  CheckCircle,
  UserCheck,
  MessageSquare,
  ArrowRight,
  MessageCircle,
  CalendarCheck,
  CreditCard,   // Đã có, dùng cho Cổng thanh toán
  Languages,
  Smartphone,
  Zap,
  Puzzle,
  Volume2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { useInView } from "react-intersection-observer";
const Portfolio = () => {
  const portfolioItems = [
    {
      title: "hocbaohiem.com",
      category: "SEO & Thiết kế Website",
      description: "Website chia sẻ kiến thức và luyện thi chứng chỉ bảo hiểm nhân thọ.",
      link: "https://hocbaohiem.com",
      image: "/images/portfolio-hocbaohiem.png",
    },
    {
      title: "suadientulimosa.com",
      category: "SEO & Thiết kế Website",
      description: "Website dịch vụ sửa chữa điện tử uy tín tại TP.HCM.",
      link: "https://suadientulimosa.com",
      image: "/images/portfolio-limosa.png",
    },
    {
      title: "acquydongkhanh.vn",
      category: "SEO & Thiết kế Website",
      description: "Website bán bình ắc quy và phụ kiện xe chính hãng.",
      link: "https://acquydongkhanh.vn",
      image: "/images/portfolio-acquy.png",
    },
  ];
  const bannerItems = [
    {
      title: "Banner Spa",
      category: "Thiết kế Banner & Ảnh bìa",
      description: "Thiết kế banner phong cách dịu nhẹ, sang trọng, phù hợp với lĩnh vực chăm sóc sắc đẹp và spa cao cấp.",
      image: "/images/banner-spa.png",
    },
    {
      title: "Banner khuyến mãi trà đào",
      category: "Thiết kế Banner & Ảnh bìa",
      description: "Thiết kế banner quảng cáo trà đào hấp dẫn với tông màu tươi sáng, thu hút giới trẻ và khách hàng quán nước.",
      image: "/images/banner-tra.png",
    },
    {
      title: "Ảnh bìa CF Mộc",
      category: "Thiết kế Banner & Ảnh bìa",
      description: "Thiết kế ảnh bìa fanpage cho quán cà phê Mộc, mang phong cách mộc mạc, gần gũi với thiên nhiên và người trẻ yêu không gian yên tĩnh.",
      image: "/images/banner-cf.png",
    },
  ];

  const PLACEHOLDER_IMAGE_URL = "/images/project-placeholder.jpg"; // Bạn cần tạo ảnh này hoặc thay thế

  const projectsData = [
    {
      id: 'xe2',
      title: "Thế Giới Xe",
      image: "/images/projects/1.png", // THAY THẾ ẢNH NÀY
      desc: "Trang web giới thiệu và mua bán các dòng xe đa dạng, cập nhật mẫu mã liên tục.",
      categories: ["Ô tô", "Bán hàng"],
      link: "https://xe2.chonmauweb.com/"
    },
    {
      id: 'xamhinh',
      title: "Xăm Hình Nghệ Thuật",
      image: "/images/projects/2.png", // THAY THẾ ẢNH NÀY
      desc: "Studio xăm hình chuyên nghiệp với các tác phẩm nghệ thuật độc đáo và ấn tượng.",
      categories: ["Làm đẹp", "Dịch vụ"],
      link: "https://xamhinh.chonmauweb.com/"
    },
    {
      id: 'gioithieu11',
      title: "Website Doanh Nghiệp Hiện Đại",
      image: "/images/projects/3.png", // THAY THẾ ẢNH NÀY
      desc: "Giải pháp website toàn diện giúp doanh nghiệp khẳng định vị thế trên thị trường số.",
      categories: ["Doanh nghiệp"],
      link: "https://gioithieu11.chonmauweb.com/"
    },
    {
      id: 'mkt',
      title: "Dịch Vụ Marketing Online",
      image: "/images/projects/4.png", // THAY THẾ ẢNH NÀY
      desc: "Cung cấp các giải pháp marketing hiệu quả, giúp doanh nghiệp tiếp cận khách hàng mục tiêu.",
      categories: ["Dịch vụ", "Marketing"],
      link: "https://mkt.chonmautheme.com/"
    },
    {
      id: 'maytinh',
      title: "Cửa Hàng Máy Tính & Linh Kiện",
      image: "/images/projects/5.png", // THAY THẾ ẢNH NÀY
      desc: "Địa chỉ tin cậy cung cấp máy tính, laptop và linh phụ kiện công nghệ chính hãng.",
      categories: ["Công nghệ", "Bán hàng"],
      link: "https://maytinh.chonmautheme.com/"
    },
    {
      id: 'bigg',
      title: "Mỹ Phẩm BIGG", // Giả định
      image: "/images/projects/6.png", // THAY THẾ ẢNH NÀY
      desc: "Thương hiệu thời trang mang phong cách trẻ trung, năng động và đa dạng mẫu mã.",
      categories: ["Làm đẹp", "Thời trang", "Bán hàng"],
      link: "https://bigg.chonmautheme.com/"
    },
    {
      id: 'spa12',
      title: "SPA Thư Giãn & Chăm Sóc Sắc Đẹp",
      image: "/images/projects/7.png", // THAY THẾ ẢNH NÀY
      desc: "Không gian spa lý tưởng để thư giãn và trải nghiệm các liệu trình chăm sóc sắc đẹp cao cấp.",
      categories: ["Làm đẹp", "Dịch vụ", "Spa"],
      link: "https://spa12.chonmautheme.com/"
    },
    {
      id: 'son',
      title: "Thế Giới Son",
      image: "/images/projects/8.png", // THAY THẾ ẢNH NÀY
      desc: "Nhà phân phối son đa dạng mẫu mã với bảng màu phong phú và chất lượng vượt trội.",
      categories: ["Làm đẹp", "Thời trang", "Bán hàng"], // "Mỹ phẩm" có vẻ không đúng với trang son này
      link: "https://son.chonmauweb.com/"
    },
    {
      id: 'hyundai',
      title: "Hyundai Chính Hãng",
      image: "/images/projects/9.png", // THAY THẾ ẢNH NÀY
      desc: "Đại lý ủy quyền chính thức của Hyundai, cung cấp các dòng xe mới nhất và dịch vụ hậu mãi.",
      categories: ["Ô tô", "Bán hàng"],
      link: "https://hyundai.chonmautheme.com/"
    },
    {
      id: 'bds38',
      title: "Thông Tin Bất Động Sản",
      image: "/images/projects/10.png", // THAY THẾ ẢNH NÀY
      desc: "Cập nhật các dự án bất động sản nổi bật, thông tin quy hoạch và cơ hội đầu tư.",
      categories: ["Bất động sản"],
      link: "https://bds38.chonmauweb.com/"
    },
    {
      id: 'taphoa2',
      title: "Tạp Hóa Online Nhanh Chóng",
      image: "/images/projects/11.png", // THAY THẾ ẢNH NÀY
      desc: "Mua sắm hàng tiêu dùng, thực phẩm và đồ dùng thiết yếu tiện lợi ngay tại nhà.",
      categories: ["Bán hàng", "Bán lẻ"],
      link: "https://taphoa2.chonmautheme.com/"
    },
    {
      id: 'vesinh',
      title: "Dịch Vụ Vệ Sinh Công Nghiệp",
      image: "/images/projects/12.png", // THAY THẾ ẢNH NÀY
      desc: "Giải pháp vệ sinh chuyên nghiệp cho văn phòng, nhà xưởng, tòa nhà và các công trình.",
      categories: ["Dịch vụ", "Vệ sinh"],
      link: "https://vesinh.chonmauweb.com/"
    },
    {
      id: 'cake',
      title: "Tiệm Bánh Ngọt Online",
      image: "/images/projects/13.png", // THAY THẾ ẢNH NÀY
      desc: "Những chiếc bánh kem, bánh ngọt được làm thủ công với tình yêu và nguyên liệu tươi ngon.",
      categories: ["Thực phẩm", "Bán hàng", "Bánh ngọt"],
      link: "https://cake.chonmauweb.com/"
    }
  ];




  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredProjects = activeCategory === "Tất cả"
    ? projectsData
    : projectsData.filter(project => project.categories.includes(activeCategory));
  //Tự động tạo danh sách các categories từ projectsData
  const allCategories = ["Tất cả", ...new Set(projectsData.flatMap(project => project.categories))].sort();
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
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };
  const iconVariant = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  const projectCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };
  return (
    <div className="container mx-auto px-4 py-20">
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
                className="portfolio-item rounded-xl overflow-hidden shadow-lg relative group"
              >
                <img
                  src={item.image}
                  alt={`Portfolio project: ${item.title}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <span className="text-sm font-medium text-blue-400 mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                  >
                    Xem chi tiết <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}

          </motion.div>
          {/* Phần hiển thị các dự án banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mt-20 mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Bộ sưu tập <span className="gradient-text">Banner & Ảnh bìa</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Một số thiết kế nổi bật cho các chiến dịch truyền thông và fanpage của khách hàng.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {bannerItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="portfolio-item rounded-xl overflow-hidden shadow-lg relative group"
              >
                <img
                  src={item.image}
                  alt={`Banner project: ${item.title}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <span className="text-sm font-medium text-blue-400 mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      <section className="mb-20 pt-10"> {/* Thêm pt-10 để không bị dính sát */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Một số <span className="gradient-text">dự án mẫu</span>
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-10 md:mb-12 max-w-xl mx-auto">
          Khám phá các mẫu website đa dạng ngành nghề mà chúng tôi đã thực hiện.
        </p>

        {/* Bộ lọc danh mục */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12 px-4">
          {allCategories.map(category => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm" // Kích thước nút nhỏ hơn
              className={`
                                rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out
                                focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                                ${activeCategory === category
                  ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-md transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600'
                }
                            `}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Danh sách dự án */}
        <motion.div
          layout // Bật layout animation cho cả container
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        >
          <AnimatePresence mode="popLayout"> {/* Hoặc mode="sync" tùy hiệu ứng bạn muốn */}
            {filteredProjects.length > 0 ? (
              filteredProjects.map((proj) => (
                <motion.div
                  key={proj.id} // Sử dụng id duy nhất
                  layout // Bật layout animation cho từng card
                  variants={projectCardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="group rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1.5"
                >
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" aria-label={`Xem dự án ${proj.title}`}>
                    <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <img
                        src={proj.image}
                        alt={`Ảnh thumbnail dự án ${proj.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400 ease-in-out"
                        loading="lazy"
                        onError={(e) => { e.currentTarget.src = PLACEHOLDER_IMAGE_URL; }} // Dự phòng nếu ảnh lỗi
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">
                        {proj.title}
                      </h3>
                      <div className="mb-3">
                        {proj.categories.map(cat => (
                          <span key={cat} className="inline-block bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 h-16 overflow-hidden"> {/* Giới hạn chiều cao mô tả */}
                        {proj.desc}
                      </p>
                      <div className="mt-auto text-right">
                        <span className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 group-hover:underline">
                          Xem chi tiết
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-10 text-gray-500 dark:text-gray-400"
              >
                <p className="text-xl">Không tìm thấy dự án nào phù hợp.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;
