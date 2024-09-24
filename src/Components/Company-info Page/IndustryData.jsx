import { ShoppingCart, Utensils, Heart, Cpu, Leaf, Diamond, Settings, BookOpen } from 'lucide-react';
import { GiMedicinePills } from 'react-icons/gi';
import { MdOutlineSportsSoccer } from 'react-icons/md';

export const IndustryData = [
    {
        Id: "Food-Beverage",
        title: "Food & Beverage",
        subtitle: "Custom Solutions for Perishable Goods",
        icon: <Utensils size={25} className='text-light' />,
        img: "https://www.shutterstock.com/image-photo/different-packages-carton-cups-on-260nw-1132674923.jpg",
        content: (
            <ul>
                <li>Innovative packaging for perishable items</li>
                <li>Eco-friendly and recyclable materials</li>
                <li>Custom designs for beverages and ready-to-eat products</li>
                <li>Maintains food safety and extends shelf life</li>
            </ul>
        ),
        para: "Our packaging solutions for the Food & Beverage industry ensure freshness, safety, and sustainability with custom, eco-friendly designs."
    },
    {
        Id: "Retail-E-Commerce",
        title: "Retail & E-Commerce",
        subtitle: "Smart Packaging for Seamless Shopping Experiences",
        icon: <ShoppingCart size={25} className='text-light' />,
        img: "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
        content: (
            <ul>
                <li>Secure packaging for shipping and returns</li>
                <li>Durable and lightweight options for cost-effective shipping</li>
                <li>Customizable branded packaging</li>
                <li>Seamless unboxing experience for customers</li>
            </ul>
        ),
        para: "We provide durable, lightweight, and customizable packaging for the Retail & E-Commerce sector, enhancing both shipping and unboxing experiences."
    },
    {
        Id: "Health-Beauty",
        title: "Health & Beauty",
        subtitle: "Premium Packaging for Personal Care Products",
        icon: <Heart size={25} className='text-light' />,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ27RPyLbU-rgS37Z8MOMBySC-LPW7zwLyFg&s",
        content: (
            <ul>
                <li>Premium packaging for luxury beauty products</li>
                <li>Protects fragile items like glass bottles</li>
                <li>Custom-fit packaging for skincare and cosmetics</li>
                <li>FDA-compliant and safe materials</li>
            </ul>
        ),
        para: "Our packaging ensures product protection and brand elegance for the Health & Beauty industry with eco-friendly designs."
    },
    {
        Id: "Electronics-Technology",
        title: "Electronics & Technology",
        subtitle: "Tech-Savvy Solutions for Delicate Devices",
        icon: <Cpu size={25} className='text-light' />,
        img: "https://images-platform.99static.com//rilGslSvrIqaO7ottCLgX7DpE0Q=/0x0:2000x2000/fit-in/500x500/99designs-contests-attachments/113/113686/attachment_113686766",
        content: (
            <ul>
                <li>Shock-resistant packaging for gadgets</li>
                <li>Anti-static solutions for electronics</li>
                <li>Eco-friendly options for tech accessories</li>
                <li>Custom inserts to secure devices during transit</li>
            </ul>
        ),
        para: "We offer shock-resistant, anti-static packaging for electronics, ensuring safety and sustainability for delicate tech products."
    },
    {
        Id: "Medical-Pharmaceutical",
        title: "Medical & Pharmaceutical",
        subtitle: "Safe & Compliant Packaging for Healthcare Products",
        icon: <GiMedicinePills size={25} className='text-light' />,
        img: "https://thumbs.dreamstime.com/b/box-medicine-as-pharmacy-delivery-box-medicine-as-pharmacy-delivery-pharmaceutical-delivery-medical-pills-concept-186896608.jpg",
        content: (
            <ul>
                <li>Sterile packaging for medical devices</li>
                <li>Maintains pharmaceutical product integrity</li>
                <li>Compliant with industry safety standards</li>
                <li>Temperature-controlled packaging solutions</li>
            </ul>
        ),
        para: "Our packaging solutions for the medical and pharmaceutical sectors ensure product safety, compliance, and integrity during transportation and storage."
    },
    {
        Id: "Automotive-Industrial",
        title: "Automotive & Industrial",
        subtitle: "Durable Solutions for Heavy-Duty Industries",
        icon: <Settings size={25} className='text-light' />,
        img: "https://networkpack.co.uk/wp-content/uploads/2018/05/GFB_2304.jpg",
        content: (
            <ul>
                <li>Heavy-duty packaging for industrial products</li>
                <li>Protection against wear and tear</li>
                <li>Customized solutions for automotive parts</li>
                <li>Eco-friendly materials for sustainability</li>
            </ul>
        ),
        para: "Our durable packaging solutions for the automotive and industrial sectors offer protection and sustainability for heavy-duty products."
    },
    {
        Id: "Agriculture",
        title: "Agriculture",
        subtitle: "Sustainable Solutions for the Agriculture Industry",
        icon: <Leaf size={25} className='text-light' />,
        img: "https://2.wlimg.com/product_images/bc-full/2022/8/5204208/agriculture-packaging-pouch-1659504834-6475077.jpeg",
        content: (
            <ul>
                <li>Biodegradable packaging solutions</li>
                <li>Moisture-resistant materials for produce</li>
                <li>Durable packaging for bulk shipping</li>
                <li>Customizable packaging for farm products</li>
            </ul>
        ),
        para: "We provide eco-friendly, biodegradable packaging solutions for agriculture, protecting farm products while maintaining sustainability."
    },
    {
        Id: "Luxury-Goods",
        title: "Luxury Goods",
        subtitle: "Elegant Packaging for High-End Brands",
        icon: <Diamond size={25} className='text-light' />,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfl-xK7KTSgGuNRC4yAN9_KeqXsaO-A7GZQ&s",
        content: (
            <ul>
                <li>Elegant and premium packaging designs</li>
                <li>Customizable branding for high-end items</li>
                <li>Specialty materials for a luxurious feel</li>
                <li>Secure packaging for delicate goods</li>
            </ul>
        ),
        para: "Our luxury packaging solutions offer premium, elegant designs that enhance the prestige and protection of high-end products."
    },
    {
        Id: "Education-Publishing",
        title: "Education & Publishing",
        subtitle: "Creative Packaging for Educational Products",
        icon: <BookOpen size={25} className='text-light' />,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26zUa3T3V0qc9z89_T8O3PCeYmxBZPWhf1w&s",
        content: (
            <ul>
                <li>Durable packaging for books and stationery</li>
                <li>Custom designs for educational kits</li>
                <li>Eco-friendly options for paper-based products</li>
                <li>Secure packaging for print media</li>
            </ul>
        ),
        para: "We provide durable, creative, and eco-friendly packaging solutions for the education and publishing sectors, ensuring product safety."
    },
    {
        Id: "Sports-Outdoors",
        title: "Sports & Outdoors",
        subtitle: "Rugged Packaging for Outdoor and Sports Gear",
        icon: <MdOutlineSportsSoccer size={25} className='text-light' />,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5seLm7NN0WQmH6fPmKQQGTsSEuR6e0En3KA&s",
        content: (
            <ul>
                <li>Weather-resistant packaging for outdoor gear</li>
                <li>Lightweight packaging for sports equipment</li>
                <li>Custom designs for athletic products</li>
                <li>Eco-friendly packaging for outdoor brands</li>
            </ul>
        ),
        para: "Our rugged, weather-resistant packaging solutions cater to the sports and outdoor industries, protecting gear while promoting sustainability."
    }
];

