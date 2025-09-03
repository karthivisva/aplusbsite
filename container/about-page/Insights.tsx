"use client";
import { motion } from "framer-motion";

export default function AboutAplusB() {
  const sections = [
    {
      id: 1,
      title: "Company Overview",
      description: `AplusB Consortium is an innovative firm with nearly a decade of experience in providing comprehensive, "one-roof" solutions for all construction needs. They specialize in architecture, interior design, and construction, handling projects from scratch or renovation. The company prides itself on collaboration and leveraging cutting-edge technologies like 3D printing, 3D modeling, and AR/VR.`,
    },
    {
      id: 2,
      title: "Core Values & Mission",
      description: `Mission: To interpret clients' needs and desires into tangible realities, creating spaces that are both beautiful and functional. Values: Commitment to quality, innovation, and customer satisfaction, using the best materials and professionals, the latest trends and technologies, and prioritizing open communication.`,
    },
    {
      id: 3,
      title: "Expertise & Services",
      description: `Architecture: Conceptual design, design development, construction documents, cost estimation, permit acquisition, sustainability consulting, 3D visualization. 
Interior Design: Space planning, concept development, material/finish selection, FF&E specification, lighting and custom furniture design.
Construction: Residential (homes, villas, apartments), Commercial (offices, retail, hospitality), Industrial (factories, warehouses), Institutional (schools, hospitals, government buildings). Additional services: Structural engineering, MEP design, renovations, landscape architecture, acoustic design, branding & identity.`,
    },
    {
      id: 4,
      title: "Project Portfolio",
      description: `Residential: Mr. Rajasekar's Residence (Coimbatore, 4,000 sq. ft.), Mr. Selvaraj's Villa (Salem, 5,000 sq. ft.), Dr. Elango's Residence (Salem, 5,500 sq. ft.), Mrs. Priya's Beach House (Chennai, 10,000 sq. ft.), Mr. Gokul's Residence (Salem, 2,200 sq. ft.), Singanallur Apartment (Coimbatore, 22,000 sq. ft.).
Commercial & Institutional Interiors: Airforce's Cafe (Coimbatore, 1,600 sq. ft.), Airforce's Library (Coimbatore, 1,500 sq. ft.), Kauvery Hospital (Trichy, 3,800 sq. ft.), Globus Arima Office (Coimbatore, 9,000 sq. ft.).`,
    },
  ];

  return (
    <section className="w-full bg-background py-[80px] px-[20px] sm:py-[60px] xm:py-[40px]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-[40px]">
        <h2 className="sub-heading font-NeueMontreal text-[#212121] text-[36px] sm:text-[28px] xm:text-[24px] font-medium">
          About AplusB Consortium
        </h2>

        <div className="flex flex-col gap-[30px]">
          {sections.map((sec, idx) => (
            <motion.div
              key={sec.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.15,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="bg-[#1F1F1F] text-white rounded-[15px] p-[25px] shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-NeueMontreal font-semibold text-[20px] sm:text-[18px] xm:text-[16px] mb-[10px]">
                {sec.title}
              </h3>
              <p className="font-NeueMontreal text-gray-400 text-[14px] sm:text-[13px] xm:text-[12px] leading-[22px] whitespace-pre-line">
                {sec.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
