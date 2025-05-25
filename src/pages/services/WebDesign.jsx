import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
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

import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { useInView } from "react-intersection-observer";
function useMultiInView(length, options) {
    // useMemo để giữ nguyên thứ tự hook
    return useMemo(() => (
        Array.from({ length }, () => useInView(options))
    ), []);
}
const WebDesign = () => {
    const cardRefs = useRef([]);
    const [activeIdx, setActiveIdx] = useState(0);
    const steps = [
        {
            icon: <ClipboardList className="w-6 h-6 text-white" />,
            title: "1. Tiếp nhận yêu cầu",
            desc: "Tư vấn mục tiêu & lĩnh vực, phác thảo ý tưởng ban đầu."
        },
        {
            icon: <Calendar className="w-6 h-6 text-white" />,
            title: "2. Lên kế hoạch",
            desc: "Xây dựng sitemap, chức năng & timeline dự án."
        },
        {
            icon: <PenTool className="w-6 h-6 text-white" />,
            title: "3. Thiết kế UI/UX",
            desc: "Thiết kế giao diện theo thiết kế bạn đưa ra, demo web"
        },
        {
            icon: <Code className="w-6 h-6 text-white" />,
            title: "4. Lập trình & Tích hợp",
            desc: "Code chuẩn SEO, tích hợp CMS, forms & API."
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-white" />,
            title: "5. Kiểm thử & Hoàn thiện",
            desc: "Test đa nền tảng, tối ưu tốc độ & bảo mật."
        },
        {
            icon: <UserCheck className="w-6 h-6 text-white" />,
            title: "6. Bàn giao & Hỗ trợ",
            desc: "Hướng dẫn sử dụng & bảo trì, hỗ trợ trọn đời."
        }
    ];

    const iconBgClasses = [
        "bg-purple-600",
        "bg-indigo-500",
        "bg-blue-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-pink-500"
    ];
    const featureIcons = [
        { icon: <Globe className='text-purple-600 w-8 h-8 mb-3' />, title: "Thiết kế toàn cầu", desc: "Dễ dàng mở rộng thị trường, hướng đến khách hàng quốc tế." },
        { icon: <Layout className='text-blue-600 w-8 h-8 mb-3' />, title: "Giao diện chuyên nghiệp", desc: "Tăng uy tín thương hiệu với UI/UX tối ưu." },
        { icon: <TrendingUp className='text-green-600 w-8 h-8 mb-3' />, title: "Tăng trưởng bền vững", desc: "Website là công cụ tạo khách hàng lâu dài." },
        { icon: <Video className='text-red-500 w-8 h-8 mb-3' />, title: "Hỗ trợ video/ảnh động", desc: "Thể hiện sản phẩm sinh động và trực quan." },
        { icon: <Image className='text-indigo-500 w-8 h-8 mb-3' />, title: "Hình ảnh nổi bật", desc: "Tối ưu hình ảnh, tốc độ và hiển thị." },
        { icon: <MessageSquare className='text-pink-500 w-8 h-8 mb-3' />, title: "Kết nối dễ dàng", desc: "Tích hợp chat, form liên hệ, Zalo, Messenger." }
    ];


    const reasons = [
        {
            icon: <Palette className="w-6 h-6 text-purple-500 mb-2" />,
            title: "Thiết kế độc quyền",
            desc: "Giao diện mang đậm dấu ấn thương hiệu, không đụng hàng.",
            image: "/reason1.gif",
            detail: "MT Design luôn sáng tạo, đảm bảo giao diện duy nhất cho thương hiệu của bạn.",
        },
        {
            icon: <Gauge className="w-6 h-6 text-blue-500 mb-2" />,
            title: "Chuẩn SEO & Tốc độ",
            desc: "Tối ưu từ cấu trúc HTML đến tốc độ tải trang.",
            image: "/reason2.gif",
            detail: "Website luôn đạt điểm tốc độ cao, chuẩn SEO giúp bạn lên top Google dễ dàng.",
        },
        {
            icon: <MonitorSmartphone className="w-6 h-6 text-green-500 mb-2" />,
            title: "Responsive 100%",
            desc: "Tương thích mọi thiết bị – desktop, tablet, mobile.",
            image: "/reason3.gif",
            detail: "Trải nghiệm mượt mà trên mọi màn hình và hệ điều hành.",
        },
        {
            icon: <FolderKanban className="w-6 h-6 text-yellow-500 mb-2" />,
            title: "Quản trị dễ dàng",
            desc: "Cập nhật nội dung không cần biết lập trình.",
            image: "/reason4.gif",
            detail: "Hệ thống quản trị trực quan, ai cũng có thể dùng được.",
        },
        {
            icon: <LockKeyhole className="w-6 h-6 text-red-500 mb-2" />,
            title: "Bảo mật an toàn",
            desc: "Cài đặt SSL, chống tấn công phổ biến.",
            image: "/reason5.gif",
            detail: "Website luôn an toàn, hạn chế tối đa nguy cơ bị hack.",
        },
        {
            icon: <Heart className="w-6 h-6 text-pink-500 mb-2" />,
            title: "Hỗ trợ tận tâm",
            desc: "Bảo trì 6 tháng, hỗ trợ kỹ thuật trọn đời.",
            image: "/reason6.gif",
            detail: "Đội ngũ sẵn sàng hỗ trợ, giải quyết mọi vấn đề nhanh chóng.",
        }
    ];
    const seoPlans = [
        {
            name: "SEO Audit",
            price: "2.5 triệu",
            desc: "Phân tích toàn diện website, tìm ra điểm yếu và cơ hội để cải thiện thứ hạng.",
            features: [
                "Kiểm tra kỹ thuật SEO On-page",
                "Phân tích cấu trúc website",
                "Đánh giá tốc độ tải trang",
                "Phân tích hồ sơ backlink",
                "Nghiên cứu từ khóa cơ bản",
                "Báo cáo chi tiết và đề xuất",
            ],
            badgeText: "Nền tảng", // Ví dụ badge
        },
        {
            name: "SEO Cơ Bản",
            price: "5 - 12 triệu",
            desc: "Tối ưu hóa website cho các từ khóa mục tiêu, cải thiện hiển thị trên Google.",
            features: [
                "Bao gồm gói SEO Audit",
                "Tối ưu On-page nâng cao",
                "Xây dựng nội dung chuẩn SEO (5 - 30 bài/tháng)",
                "Tối ưu Local SEO (Google Maps)",
                "Xây dựng liên kết nội bộ",
                "Xây dựng bộ key chuẩn cho website",
                "Theo dõi thứ hạng & báo cáo hàng tháng",
                "Hỗ trợ kỹ thuật SEO cơ bản",
                "Thanh toán theo KPI từ khóa ontop (Đạt cam kết mới thanh toán)",
            ],
            badgeText: "Phổ biến",
            highlight: true, // Đánh dấu gói này để có thể làm nổi bật
        },
        {
            name: "SEO Tổng Thể",
            price: "15 triệu+",
            desc: "Chiến lược SEO toàn diện, dài hạn nhằm thống lĩnh thị trường và tăng trưởng bền vững.",
            features: [
                "Bao gồm gói SEO Cơ Bản",
                "Nghiên cứu từ khóa chuyên sâu",
                "Chiến lược Content Marketing nâng cao",
                "Xây dựng backlink chất lượng cao",
                "Tối ưu Technical SEO liên tục",
                "Phân tích đối thủ cạnh tranh",
                "Báo cáo hiệu suất chi tiết & KPI",
                "Tư vấn chiến lược SEO cao cấp",
                "Hỗ trợ xây dựng social",
                "Hỗ trợ kỹ thuật SEO nâng cao",
                "Thanh toán theo KPI từ khóa ontop (Đạt cam kết mới thanh toán)",
            ],
            badgeText: "Doanh nghiệp",
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

    const additionalFeaturesData = [
        {
            id: "chatbot-ai",
            icon: <MessageCircle className="w-10 h-10 mx-auto mb-4 text-purple-500" />,
            title: "Chatbot AI Thông Minh",
            price: "Từ 3.500.000 VNĐ",
            desc: "Tự động hóa tư vấn, hỗ trợ khách hàng 24/7, tăng tỷ lệ chuyển đổi và thu thập dữ liệu hiệu quả.",
            details: [
                "Kịch bản hội thoại tùy chỉnh",
                "Tích hợp Messenger, Zalo, Website",
                "Học máy (Machine Learning) cơ bản",
                "Báo cáo & Phân tích tương tác",
                "Dễ dàng quản lý & cập nhật"
            ],
            highlight: true,
        },
        {
            id: "booking-system",
            icon: <CalendarCheck className="w-10 h-10 mx-auto mb-4 text-blue-500" />,
            title: "Hệ Thống Đặt Lịch Online",
            price: "Từ 4.000.000 VNĐ",
            desc: "Cho phép khách hàng đặt lịch hẹn, dịch vụ, sự kiện trực tuyến một cách thuận tiện và nhanh chóng.",
            details: [
                "Đồng bộ Google Calendar/Outlook",
                "Quản lý khung giờ & nhân viên",
                "Email/SMS nhắc nhở tự động",
                "Thanh toán đặt cọc trực tuyến",
                "Giao diện tùy chỉnh theo thương hiệu"
            ],
        },
        { // Mục được cập nhật và đổi tên
            id: "payment-gateways", // Đổi id cho rõ ràng hơn
            icon: <CreditCard className="w-10 h-10 mx-auto mb-4 text-yellow-500" />,
            title: "Tích Hợp Cổng Thanh Toán Đa Dạng", // Đổi tên
            price: "Từ 1.500.000 VNĐ / cổng", // Giá có thể cụ thể hơn
            desc: "Cung cấp nhiều lựa chọn thanh toán tiện lợi cho khách hàng: Momo, VNPay, ZaloPay, thẻ ngân hàng và các cổng quốc tế.", // Mô tả rõ ràng hơn
            details: [
                "Tích hợp Momo, VNPay, ZaloPay",
                "Thanh toán qua thẻ ATM/Internet Banking nội địa",
                "Hỗ trợ QR Code động",
                "Tích hợp PayPal, Stripe (cho giao dịch quốc tế)",
                "Quản lý giao dịch an toàn, bảo mật",
                "Đối soát và báo cáo giao dịch"
            ],
        },
        { // Tính năng mới
            id: "text-to-speech",
            icon: <Volume2 className="w-10 h-10 mx-auto mb-4 text-cyan-500" />, // Icon mới
            title: "Tính Năng Báo Đọc (Text-to-Speech)",
            price: "Từ 2.000.000 VNĐ",
            desc: "Nâng cao khả năng tiếp cận website cho người dùng khiếm thị hoặc những người thích nghe nội dung hơn là đọc.",
            details: [
                "Chuyển đổi văn bản thành giọng nói tự nhiên",
                "Hỗ trợ ngôn ngữ Tiếng Việt (đa dạng vùng miền nếu có)",
                "Tùy chọn giọng đọc nam/nữ",
                "Điều khiển phát (play, pause, tốc độ)",
                "Áp dụng cho bài viết, trang tĩnh"
            ],
        },
        {
            id: "multi-language",
            icon: <Languages className="w-10 h-10 mx-auto mb-4 text-green-500" />,
            title: "Website Đa Ngôn Ngữ",
            price: "Từ 2.000.000 VNĐ / ngôn ngữ",
            desc: "Mở rộng thị trường, tiếp cận khách hàng quốc tế bằng việc cung cấp nội dung đa ngôn ngữ.",
            details: [
                "Hỗ trợ bộ ký tự đa dạng",
                "Chuyển đổi ngôn ngữ mượt mà",
                "Tối ưu SEO cho từng phiên bản ngôn ngữ",
                "Quản lý nội dung tập trung",
                "Cấu trúc URL thân thiện"
            ],
        },
        {
            id: "pwa-development",
            icon: <Smartphone className="w-10 h-10 mx-auto mb-4 text-red-500" />,
            title: "Phát Triển PWA (Progressive Web App)",
            price: "Báo giá theo yêu cầu",
            desc: "Nâng tầm website thành ứng dụng cài đặt được, mang lại trải nghiệm như native app, hoạt động offline.",
            details: [
                "Cài đặt lên màn hình chính",
                "Thông báo đẩy (Push Notifications)",
                "Truy cập offline (nội dung cơ bản)",
                "Tốc độ tải trang vượt trội",
                "Tăng cường tương tác người dùng"
            ],
        },
        {
            id: "performance-optimization",
            icon: <Zap className="w-10 h-10 mx-auto mb-4 text-orange-500" />, // Đổi màu icon
            title: "Tối Ưu Tốc Độ Chuyên Sâu",
            price: "Từ 2.500.000 VNĐ",
            desc: "Cải thiện điểm PageSpeed Insights, giảm thời gian tải trang, nâng cao trải nghiệm và thứ hạng SEO.",
            details: [
                "Phân tích & tối ưu tài nguyên (ảnh, code)",
                "Caching nâng cao (Browser, Server)",
                "Sử dụng CDN (Content Delivery Network)",
                "Lazy Loading & Code Splitting",
                "Báo cáo trước và sau tối ưu"
            ],
            highlight: true,
        },
        {
            id: "custom-feature-dev",
            icon: <Puzzle className="w-10 h-10 mx-auto mb-4 text-indigo-500" />,
            title: "Phát Triển Tính Năng Đặc Thù",
            price: "Báo giá theo dự án",
            desc: "Xây dựng các chức năng độc đáo, phức tạp theo đúng quy trình nghiệp vụ và yêu cầu riêng của bạn.",
            details: [
                "Khảo sát & phân tích yêu cầu chi tiết",
                "Lên kế hoạch & thiết kế giải pháp",
                "Lập trình & kiểm thử nghiêm ngặt",
                "Tài liệu hóa & hướng dẫn sử dụng",
                "Hỗ trợ & bảo trì sau triển khai"
            ],
        }
    ];


    const [activeCategory, setActiveCategory] = useState("Tất cả");

    const filteredProjects = activeCategory === "Tất cả"
        ? projectsData
        : projectsData.filter(project => project.categories.includes(activeCategory));
    // Tự động tạo danh sách các categories từ projectsData
    const allCategories = ["Tất cả", ...new Set(projectsData.flatMap(project => project.categories))].sort();
    // Tạo mảng useInView cho từng card
    const inViewArr = reasons.map(() => useInView({ threshold: 0.35, triggerOnce: false }));
    // Effect xác định card đang inView nhất
    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    let best = 0;
                    cardRefs.current.forEach((el, i) => {
                        if (!el) return;
                        const r = el.getBoundingClientRect();
                        // Chọn card nào gần giữa màn hình nhất
                        const dist = Math.abs((r.top + r.bottom) / 2 - window.innerHeight / 2);
                        if (dist < Math.abs((cardRefs.current[best].getBoundingClientRect().top + cardRefs.current[best].getBoundingClientRect().bottom) / 2 - window.innerHeight / 2)) {
                            best = i;
                        }
                    });
                    if (best !== activeIdx) setActiveIdx(best);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll(); // init
        return () => window.removeEventListener("scroll", onScroll);
    }, [activeIdx]);


    // Container variant để stagger các card
    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15 }
        }
    };

    // Mỗi card sẽ fade-in + slide lên
    const cardVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }
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
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            {/* Hero Banner */}
            <section className="relative text-gray-900 dark:text-white px-6 animate-fade-in overflow-hidden">
                {/* Ảnh nền */}
                <img
                    src="/Untitled design.png" // GIỮ NGUYÊN ĐƯỜNG DẪN ẢNH CỦA BẠN
                    alt="Banner nền cho Thiết kế Website Chuyên Nghiệp"
                    className="absolute inset-0 w-full h-full object-cover -z-20" // z-index thấp nhất để làm nền
                    loading="lazy" // Thêm lazy loading cho ảnh nền
                />

                <div
                    className="absolute inset-0 
               bg-gradient-to-r 
               from-white-950/70 via-[#f9f9ff]/40 to-transparent 
               dark:from-gray-950/70 dark:via-gray-950/10 dark:to-transparent
               -z-10"
                >
                </div>
                {/* Điều chỉnh độ trong suốt của gradient (ví dụ: /90, /80, /70) 
        để ảnh nền hiển thị vừa đủ mà chữ vẫn dễ đọc.
        Số càng nhỏ, lớp phủ càng trong suốt (ảnh nền càng rõ).
    */}

                <div className="container mx-auto relative z-10 py-24 md:py-36 lg:py-48"> {/* Nội dung có z-index cao hơn */}
                    <div className="grid md:grid-cols-12 gap-8 items-center"> {/* Sử dụng grid 12 cột để dễ căn chỉnh */}
                        {/* Cột Nội dung Text (chiếm khoảng 7/12 hoặc 8/12 bên trái) */}
                        <div className="md:col-span-7 lg:col-span-8 text-center md:text-left">
                            <motion.h1
                                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Thiết kế <span className="gradient-text">Website<br />Chuyên Nghiệp</span> & Đột Phá
                            </motion.h1>
                            <motion.p
                                className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-xl mx-auto md:mx-0" // dark:text-gray-200 để sáng hơn trên nền tối
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Tăng cường thương hiệu, thu hút khách hàng, và gia tăng doanh thu với một website hiện đại, chuẩn SEO và tối ưu trải nghiệm người dùng.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <a
                                    href="#pricing"
                                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg" // Tăng padding cho nút
                                >
                                    Xem Bảng Giá
                                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                                </a>
                            </motion.div>
                        </div>
                        {/* Cột phải có thể để trống hoặc chứa một yếu tố đồ họa rất nhỏ, mờ nếu muốn */}
                        {/* <div className="md:col-span-5 lg:col-span-4"></div> */}
                    </div>
                </div>

                {/* Các yếu tố trang trí thêm (tùy chọn) - Đảm bảo z-index phù hợp */}
                {/* Nếu muốn chúng nằm sau lớp phủ gradient nhưng trên ảnh nền, z-index có thể là -15 */}
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-purple-500/10 dark:bg-purple-400/10 rounded-full animate-pulse filter blur-2xl -z-15"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-500/10 dark:bg-blue-400/10 rounded-full animate-pulse filter blur-2xl -z-15 animation-delay-2000"></div>
            </section>

            <div className="container mx-auto px-4 py-20">
                {/* Lý do chọn */}
                <section className="relative py-16 px-4 max-w-5xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-center mb-4 gradient-text leading-tight">
                        Vì sao chọn MT Design?
                    </h2>
                    <p className="text-center mb-12 text-gray-600">Không chỉ là làm web – là tạo dựng dấu ấn thương hiệu!</p>

                    <div className="space-y-12 md:space-y-16"> {/* Tăng khoảng cách giữa các card */}
                        <AnimatePresence initial={false}>
                            {reasons.map((item, idx) => {
                                const isActive = idx === activeIdx;
                                return (
                                    <motion.div
                                        key={idx}
                                        ref={el => (cardRefs.current[idx] = el)}
                                        layout // Quan trọng để animation mượt khi thay đổi layout
                                        initial={{ opacity: 0, y: 60, scale: 0.95 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: isActive ? 1.05 : 1, // Tăng nhẹ scale khi active
                                            zIndex: isActive ? 10 : 1,  // Đảm bảo card active nổi lên trên
                                        }}
                                        exit={{ opacity: 0, y: -60, scale: 0.95 }}
                                        transition={{
                                            duration: 0.6,
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 15,
                                            layout: { duration: 0.5 }
                                        }}
                                        className={`
                                                flex flex-col 
                                                ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} // Bố cục xen kẽ
                                                items-center gap-x-8 gap-y-6 p-6 md:p-8 rounded-xl
                                                ${isActive
                                                ? "bg-white dark:bg-gray-800 shadow-2xl ring-2 ring-purple-500 ring-offset-2 dark:ring-offset-gray-900"
                                                : "bg-white dark:bg-gray-800/60 shadow-xl"}
                                                transition-shadow duration-300
                                            `}
                                    >
                                        {/* Phần 1: Icon + Text (Ưu tiên không gian hơn cho text) */}
                                        <div className="w-full md:w-3/5 text-center md:text-left">
                                            <motion.div
                                                className={`inline-flex items-center justify-center w-16 h-16 mb-5 rounded-full
                                                                bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg
                                                                ${isActive ? 'scale-110' : 'scale-100'} transition-transform duration-300`}
                                                variants={iconVariant} // Sử dụng lại iconVariant nếu muốn
                                            >
                                                {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                                            </motion.div>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-3">
                                                <span className="gradient-text">{item.title}</span>
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-4 leading-relaxed">
                                                {item.desc}
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-200 text-sm md:text-base leading-relaxed">
                                                {item.detail}
                                            </p>
                                        </div>

                                        {/* Phần 2: Image */}
                                        <div className="w-full md:w-2/5 flex items-center justify-center mt-4 md:mt-0">
                                            <motion.img
                                                src={item.image}
                                                alt={item.title}
                                                className={`mx-auto w-auto max-h-54 md:max-h-60 object-contain rounded-lg
                                                                ${isActive ? "shadow-xl" : "shadow-md"}
                                                                transition-shadow duration-300`}
                                                whileHover={{ scale: 1.03 }} // Hiệu ứng hover nhẹ cho ảnh
                                                transition={{ type: "spring", stiffness: 300 }}
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </section>

                {/* Tính năng nổi bật với biểu tượng */}
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold gradient-text mb-2 leading-tight">
                            Tại sao bạn cần một <span className="text-purple-600">website mạnh mẽ</span>?
                        </h2>
                        <p className="text-lg text-gray-500">
                            Đầu tư vào một nền tảng chuyên nghiệp sẽ đem lại trải nghiệm và hiệu quả kinh doanh vượt trội.
                        </p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {featureIcons.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="service-card group"
                                variants={cardVariant}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center transition-all group-hover:rotate-12">
                                    {React.cloneElement(item.icon, { className: "text-white w-8 h-8" })}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
                {/* Dự án mẫu - ĐÃ CẬP NHẬT */}
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


                {/* Quy trình thiết kế */}
                <section className="relative mb-20 overflow-hidden">
                    {/* Background video */}
                    <img
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                        src="/abstract-bg.png"

                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-400 mix-blend-multiply opacity-40" />

                    <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
                        <h2 className="text-4xl font-extrabold text-center gradient-text mb-4 leading-tight">
                            Quy trình <span className="text-white">Thiết kế Website</span>
                        </h2>
                        <p className="text-center text-lg text-gray-200 mb-12">
                            Từng bước rõ ràng, đảm bảo chất lượng và tiến độ
                        </p>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative"
                        >
                            {/* Central vertical line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white bg-opacity-30 h-full" />

                            {steps.map((step, i) => {
                                const isLeft = i % 2 === 0;
                                return (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        variants={item}
                                        className={`
                  relative mb-12 flex items-start w-full
                  ${isLeft ? "justify-start" : "justify-end"}
                `}
                                    >
                                        <div className="w-1/2">
                                            <div
                                                className={`
                      flex items-center p-4 rounded-lg shadow-lg
                      ${isLeft ? "bg-blue-600" : "bg-purple-600"} 
                    `}
                                            >
                                                <div className="flex-shrink-0 mr-4">
                                                    <span
                                                        className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full ${iconBgClasses[i]}`}
                                                    >
                                                        {step.icon}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold text-white mb-1">
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-white/80">{step.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Connector dot */}
                                        <div
                                            className="
                    absolute left-1/2 top-6 w-4 h-4 bg-white rounded-full 
                    transform -translate-x-1/2 border-2 border-purple-600
                  "
                                        />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>


                {/* Bảng giá */}
                <section id="pricing" className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-10">Bảng giá dịch vụ</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Eco",
                                price: "1 triệu",
                                desc: "Phù hợp với cá nhân hoặc landing page giới thiệu",
                                features: [
                                    "1 trang web",
                                    "Responsive mọi thiết bị",
                                    "(Tặng giao diện thường 100k)",
                                    "Miễn phí thiết kế logo, banner",
                                    "1GB dung lượng SSD",
                                    "Miễn phí tên miền (1 năm)",
                                    "Thời hạn trang web (1 năm)",
                                    "Hỗ trợ kỹ thuật vĩnh viễn"
                                ]
                            },
                            {
                                name: "Basic",
                                price: "3.5–5 triệu",
                                desc: "Phù hợp với doanh nghiệp nhỏ cần cập nhật nội dung, sản phẩm",
                                features: [
                                    "1 trang web",
                                    "Responsive mọi thiết bị",
                                    "(Tặng giao diện chuyên nghiệp 300K)",
                                    "Quản trị nội dung đơn giản",
                                    "Trang bán hàng đơn giản",
                                    "Hỗ trợ thêm sản phẩm, phân loại (50 sản phẩm)",
                                    "Miễn phí thiết kế logo, banner",
                                    "25GB dung lượng SSD",
                                    "Miễn phí tên miền (1 năm)",
                                    "Thời hạn trang web (1 năm)",
                                    "Tích hợp form liên hệ",
                                    "Hỗ trợ kỹ thuật vĩnh viễn"
                                ]
                            },
                            {
                                name: "Business",
                                price: "6–9 triệu",
                                desc: "Phù hợp với doanh nghiệp vừa cần tối ưu thương hiệu, bán hàng",
                                features: [
                                    "1 trang web",
                                    "Responsive mọi thiết bị",
                                    "(Tặng giao diện chuyên nghiệp 500K)",
                                    "Giao diện tùy chọn, hỗ trợ tùy chỉnh giao diện",
                                    "Quản trị nội dung đơn giản",
                                    "Tích hợp form liên hệ",
                                    "Thiết kế theo nhận diện thương hiệu",
                                    "CMS quản trị nội dung dễ dùng",
                                    "Cửa hàng chuyên nghiệp",
                                    "Hỗ trợ thêm sản phẩm, phân loại (100 sản phẩm)",
                                    "Tích hợp chat, biểu mẫu nâng cao",
                                    "Tích hợp cổng thanh toán online (VnPay, MoMo, E-banking,...)",
                                    "Hỗ trợ quản trị trang web 3 tháng",
                                    "Miễn phí thiết kế logo, banner",
                                    "50GB dung lượng NVMe",
                                    "Miễn phí tên miền (1 năm)",
                                    "Thời hạn trang web (1 năm)",
                                    "Hỗ trợ kỹ thuật vĩnh viễn"
                                ]
                            },
                            {
                                name: "E-Commerce",
                                price: "9–15 triệu",
                                desc: "Dành cho các shop bán hàng online chuyên nghiệp",
                                features: [
                                    "1 trang web",
                                    "Responsive mọi thiết bị",
                                    "(Tặng giao diện chuyên nghiệp 1 triệu)",
                                    "Giao diện tùy chọn",
                                    "Quản trị nội dung đơn giản",
                                    "Tích hợp form liên hệ",
                                    "Thiết kế theo nhận diện thương hiệu",
                                    "CMS quản trị nội dung dễ dùng",
                                    "Tích hợp chat, biểu mẫu nâng cao",
                                    "Tính năng chat AI tự động",
                                    "Website bán hàng chuyên nghiệp",
                                    "Không giới hạn sản phẩm",
                                    "Tích hợp giỏ hàng, thanh toán",
                                    "Tích hợp cổng thanh toán online (VnPay, MoMo, E-banking,...)",
                                    "Quản lý đơn hàng, báo cáo",
                                    "Hỗ trợ quản trị trang web 6 tháng",
                                    "Miễn phí thiết kế logo, banner",
                                    "50GB dung lượng NVMe",
                                    "Miễn phí tên miền (1 năm)",
                                    "Thời hạn trang web (1 năm)",
                                    "Hỗ trợ kỹ thuật vĩnh viễn",
                                ]
                            },
                            {
                                name: "LMS",
                                price: "12–20 triệu",
                                desc: "Phù hợp trung tâm đào tạo muốn quản lý học viên & khóa học",
                                features: [
                                    "1 trang web",
                                    "Responsive mọi thiết bị",
                                    "(Tặng giao diện chuyên nghiệp 1tr)",
                                    "Giao diện tùy chọn",
                                    "Quản trị nội dung đơn giản",
                                    "Tích hợp form liên hệ",
                                    "Hỗ trợ quản trị trang 6 tháng",
                                    "Thiết kế theo nhận diện thương hiệu",
                                    "CMS quản trị nội dung dễ dùng",
                                    "Tích hợp chat, biểu mẫu nâng cao",
                                    "Website đào tạo trực tuyến",
                                    "Quản lý khóa học, học viên",
                                    "Cấp chứng chỉ, kiểm tra trắc nghiệm",
                                    "Tạo khóa học, bài học",
                                    "Bán khóa học",
                                    "Tích hợp cổng thanh toán online (VnPay, MoMo, E-banking,...)",
                                    "Giao diện tùy biến theo trung tâm",
                                    "Miễn phí thiết kế logo, banner",
                                    "50GB dung lượng NVMe",
                                    "Miễn phí tên miền (1 năm)",
                                    "Thời hạn trang web (1 năm)",
                                    "Hỗ trợ kỹ thuật vĩnh viễn"
                                ]
                            },
                            {
                                name: "Web App đặc thù",
                                price: "Liên hệ",
                                desc: "Tùy chỉnh hoàn toàn theo nghiệp vụ và chức năng riêng",
                                features: [
                                    "..... Tất cả các yêu cầu"
                                ]
                            }
                        ].map((plan, idx) => (
                            <div
                                key={idx}
                                className="relative p-6 text-center rounded-xl shadow-md transition transform hover:shadow-lg hover:-translate-y-1 bg-purple-50 dark:bg-purple-900 border border-purple-100 dark:border-purple-800"
                            >
                                {/* Badge phổ biến nhất - animate pulse */}
                                {plan.name === "Basic" && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-md uppercase tracking-wider animate-pulse">
                                        Phổ biến nhất
                                    </div>
                                )}
                                {/* Mộc giảm giá - animate bounce */}
                                <div className="inline-block mb-2 bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium animate-bounce">
                                    Giảm 20% cho khách mới
                                </div>

                                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">{plan.name}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{plan.desc}</p>
                                <p className="text-xl font-semibold mb-1">{plan.price}</p>
                                <ul className="mt-4 space-y-2 text-left text-sm">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-green-500">✔</span>
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
                {/* ====================================== */}
                {/* == Section Tính Năng Bổ Sung Mới == */}
                {/* ====================================== */}
                <section id="additional-features" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-950">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                            Mở Rộng & Nâng Cấp Với <span className="gradient-text">Tính Năng Vượt Trội</span>
                        </h2>
                        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-10 md:mb-16 max-w-2xl mx-auto">
                            Tích hợp các công cụ và giải pháp mạnh mẽ để tối ưu hóa hoạt động, tăng cường tương tác và mang lại trải nghiệm tốt nhất cho người dùng của bạn.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {additionalFeaturesData.map((feature) => (
                                <motion.div
                                    key={feature.id}
                                    className={`
                        relative p-6 rounded-xl shadow-lg h-full flex flex-col transition-all duration-300 ease-in-out
                        ${feature.highlight
                                            ? "bg-white dark:bg-purple-900/20 border-2 border-purple-500"
                                            : "bg-white dark:bg-gray-800"
                                        }
                    `}
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: feature.highlight
                                            ? "0px 15px 30px rgba(160, 141, 251, 0.4)"
                                            : "0px 10px 25px rgba(0, 0, 0, 0.1)"
                                    }}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.5 }}
                                >
                                    {feature.highlight && (
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-lg uppercase tracking-wider font-semibold">
                                            Nổi bật
                                        </div>
                                    )}
                                    <div className="flex-shrink-0 text-center pt-2"> {/* Icon */}
                                        {feature.icon}
                                    </div>
                                    <h3 className={`text-xl lg:text-2xl font-semibold text-center my-3 ${feature.highlight ? "text-purple-600 dark:text-purple-300" : "text-gray-900 dark:text-white"}`}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4 flex-grow min-h-[60px]"> {/* Mô tả */}
                                        {feature.desc}
                                    </p>
                                    <p className={`text-lg font-bold text-center mb-5 ${feature.highlight ? "text-purple-700 dark:text-purple-400" : "text-gray-800 dark:text-gray-200"}`}>
                                        {feature.price}
                                    </p>

                                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
                                        {feature.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${feature.highlight ? "text-purple-500" : "text-green-500"}`} />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        className={`w-full mt-auto rounded-lg py-3 text-base font-semibold transition-transform duration-200 ease-in-out hover:scale-[1.02]
                                    ${feature.highlight
                                                ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                                                : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white"
                                            }`}
                                    // onClick={() => { /* Xử lý sự kiện */ }}
                                    >
                                        Yêu Cầu Tư Vấn
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* ================================= */}
                {/* == Section Dịch Vụ SEO Mới == */}
                {/* ================================= */}
                <section id="seo-services" className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        Dịch vụ <span className="gradient-text">SEO Website Chuyên Sâu</span>
                    </h2>
                    <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        Đưa website của bạn lên top Google, tiếp cận hàng ngàn khách hàng tiềm năng mỗi ngày với các giải pháp SEO hiệu quả và bền vững.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {seoPlans.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`relative p-6 text-center rounded-xl shadow-md transition transform hover:shadow-xl hover:-translate-y-1.5 
                                    ${plan.highlight
                                        ? "bg-purple-50 dark:bg-purple-900 border-2 border-purple-500 animate-fade-in-up"
                                        : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                                    }`}
                            // Thêm animation nếu muốn
                            // variants={item} // Nếu bạn muốn dùng variants từ framer-motion
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-md uppercase tracking-wider animate-pulse">
                                        Khuyên dùng
                                    </div>
                                )}
                                {plan.badgeText && !plan.highlight && (
                                    <div className="inline-block mb-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs px-3 py-1 rounded-full font-medium">
                                        {plan.badgeText}
                                    </div>
                                )}

                                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-purple-600 dark:text-purple-400" : "text-gray-800 dark:text-white"}`}>{plan.name}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-300 mb-3 h-12">{plan.desc}</p>
                                <p className={`text-xl font-semibold mb-4 ${plan.highlight ? "text-purple-700 dark:text-purple-300" : "text-gray-700 dark:text-gray-100"}`}>{plan.price}</p>

                                <ul className="mt-4 space-y-2 text-left text-sm text-gray-700 dark:text-gray-300">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? "text-purple-500" : "text-green-500"}`} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className={`w-full mt-6 ${plan.highlight ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700"} text-white rounded-md py-2.5 transition-colors`}>
                                    Yêu cầu tư vấn
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>
                {/* Call to Action */}
                <section className="text-center bg-gray-100 dark:bg-gray-800 py-16 px-6 rounded-xl shadow-inner animate-fade-in">
                    <h2 className="text-3xl font-bold mb-4">
                        Bắt đầu <span className="gradient-text">dự án của bạn</span> ngay hôm nay
                    </h2>
                    <p className="mb-6 text-lg">Đừng để website của bạn chỉ là "một cái tên" trên mạng. Hãy biến nó thành công cụ bán hàng mạnh mẽ!</p>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-4 text-lg">
                        Liên hệ tư vấn miễn phí <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </section>
            </div>

            {/* Decorative animation styles */}

            <Toaster />
        </div>
    );
};

export default WebDesign;