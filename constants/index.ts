import { capaybilities1, capaybilities2, capaybilities3, capaybilities4, client01, client02, client03, client04, client05, client06, client07, client08, client09, insights1, insights2, insights3, latest1, latest2, nestle, officevibe, phase1, phase2, phase3, phase4, phase5, planetly, project1, project2, project3, project4, project5, project6, project7, project8, project9, publication1, publication2, publication3 } from "@/public";

// Navbar
export const navbarItems = [
   {
      id: 1,
      title: "Services",
      href: "/services",
   },
   {
      id: 2,
      title: "Our Work",
      href: "/presentation",
   },
   {
      id: 3,
      title: "About Us",
      href: "/ochi-team",
   },
   {
      id: 4,
      title: "Insights",
      href: "/insights",
   },
   {
      id: 5,
      title: "Promoting",   // ✅ new
      href: "/promotions",
   },
{
   id: 6,
   title: "Careers",
   href: "/career", // 👈 singular
},

   {
      id: 7,
      title: "Contact Us",
      href: "/contact",
   },
];

// Footer

export const footerItems = [
   {
      id: 1,
      title: "Instagram",
      href: "https://www.instagram.com/",
   },
   {
      id: 3,
      title: "Facebook",
      href: "https://www.facebook.com/",
   },
   {
      id: 4,
      title: "Youtube",
      href: "https://www.linkedin.com/",
   },
];

// constants/index.ts
export const footernavbarItems = [
   {
      id: 1,
      title: "Home",
      href: "/",
   },
   {
      id: 2,
      title: "Services",
      href: "/services",
   },
   {
      id: 3,
      title: "Our Work",
      href: "/presentation",
   },
   {
      id: 4,
      title: "About Us",
      href: "/ochi-team",
   },
   {
      id: 5,
      title: "Insights",
      href: "/insights",
   },
   {
      id: 6,
      title: "Promotions",   // ✅ Added
      href: "/promotions",
   },
   {
      id: 7,
      title: "Careers",      // ✅ Added
      href: "/career",
   },
   
   {
      id: 8,
      title: "Contact Us",
      href: "/contact",
   },
];




export const projectItem = [
   {
      id: 1,
      title: "Annamalai Residence",
      href: "/case/",
      src: project1,
      links: [
         {
            id: 1,
            title: "Construction",
            href: "/services",
         },
         {
            id: 2,
            title: "Architecture",
            href: "/services",
         },
       
      ]
   },
   {
      id: 2,
      title: "Arunkumar Residence,Coimbatore",
      href: "/case/",
      src: project2,
      links: [
         {
            id: 1,
            title: "Construction",
            href: "/services",
         },
         {
            id: 2,
            title: "Architecture",
            href: "/services",
         },
      ]
   },
   {
      id: 3,
      title: "Balaji Residence ",
      href: "/case/",
      src: project3,
      links: [
         {
            id: 1,
            title: "Interior",
            href: "/services",
         },
         {
            id: 2,
            title: "design research",
            href: "/services",
         },
      
      ]
   },
   {
      id: 4,
      title: "Campus",
      href: "/case/",
      src: project4,
      links: [
           {
            id: 1,
            title: "Interior",
            href: "/services",
         },
         {
            id: 2,
            title: "design research",
            href: "/services",
         },
      ]
   },
];


// services page

export const serviceProcessItems = [
   {
      id: 1,
      phase: "01. Phase",
      name: "Discovery",
      src: phase1,
      review: "We define your goals, get to know your audience, and understand the context. Through a process of exploration, investigation, and research, we seek the insights that inform our future decisions.",
      button: "read"
   },
   {
      id: 2,
      phase: "02. Phase",
      name: "Storytelling",
      src: phase2,
      review: "Based on the answers, previous drafts, and additional research, we will develop a foundation of the deck — the structure of the presentation. We build a tone of voice, flow, and narrative to engage our audience. Here we will win people's minds.",
      button: "read"
   },
   {
      id: 3,
      phase: "03. Phase",
      name: "Design",
      src: phase3,
      review: "We use design to guide our audience's attention and keep them engaged. It's not only what you want them to do, but also how you make them feel. We make sure the presentation wins people's hearts and leaves a perfect long-lasting impression.",
      button: "read"
   },
   {
      id: 4,
      phase: "04. Phase",
      name: "Feedback",
      src: phase4,
      review: "We want to stay on the same page. Hence, each phase wraps up presenting the work to you to collect and implement your feedback if such appears.",
      button: "read"
   },
   {
      id: 5,
      phase: "05. Phase",
      name: "Delivery",
      src: phase5,
      review: "We will carefully collect and prepare all the project files to ensure smooth future use.",
      button: "read"
   },
];

export const serviceClientsItem = [
   {
      id: 1,
      website: "Karman Ventures",
      href: "https://www.ochi.design",
      title: "Services:",
      name: "Vigneswaran KV",
      
      review: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
      links: [
         {
            id: 1,
            title: "investor deck",
            href: "/services",
         },
         {
            id: 2,
            title: "sales deck",
            href: "services",
         },
      ]
   },
   {
      id: 2,
      website: "Planetly",
      href: "https://www.planetly.com",
      title: "Services:",
      name: "Nina Walloch",
      src: client02,
      review: "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.",
      links: [
         {
            id: 1,
            title: "agency",
            href: "/services",
         },
         {
            id: 2,
            title: "big news deck",
            href: "services",
         },
         {
            id: 3,
            title: "branded template",
            href: "services",
         },
         {
            id: 4,
            title: "investor deck",
            href: "services",
         },
         {
            id: 5,
            title: "product presentation",
            href: "services",
         },
         {
            id: 6,
            title: "sales deck",
            href: "services",
         },
         {
            id: 7,
            title: "startup pitch",
            href: "services",
         },
      ]
   },
   {
      id: 3,
      website: "Workiz Easy",
      href: "https://www.workiz.com",
      title: "Services:",
      name: "Tormer levy",
      src: client03,
      review: "OCHI brought a certain level of professionalism into our presentations that we were lacking before. When I showed our management and HR teams the presentations OCHI developed, they were amazed — the final product was exactly what we needed to create a better experience for new employees and our clients.",
      links: [
         {
            id: 1,
            title: "compony presentation",
            href: "/services",
         },
         {
            id: 2,
            title: "onboarding presentation",
            href: "services",
         },
         {
            id: 3,
            title: "policy deck and playbook",
            href: "services",
         },
         {
            id: 4,
            title: "redesign",
            href: "services",
         },
         {
            id: 5,
            title: "sales deck",
            href: "services",
         },
      ]
   },
   {
      id: 4,
      website: "Premium Blend",
      href: "https://www.premium-blend.com",
      title: "Services:",
      name: "Elien Kim",
      src: client04,
      review: "They are truly changing the landscape of presentations!! Fast, effective, and nice humans that listened to every detail of our needs. Creating a deck with their template brings so much joy and ease. We proudly showcase their design in our calls and presentations.",
      links: [
         {
            id: 1,
            title: "branded template",
            href: "/services",
         },
         {
            id: 2,
            title: "illustration",
            href: "services",
         },
      ]
   },
   {
      id: 5,
      website: "Hypercare Systems",
      href: "https://www.hypercare-systems.com",
      title: "Services:",
      name: "Brendon Goss",
      src: client05,
      review: "The service received from OCHI was absolutely first-class. Their close attention to detail, and deep thought in terms of narrative, flow, and aesthetics, completely exceeded my expectations, which were very high from the outset. Especially loved and appreciated the creation of visuals, animation, and advice around the look and feel that we are after. We will definitely continue working with Ihor and his team. I cannot recommend them highly enough.",
      links: [
         {
            id: 1,
            title: "investor deck",
            href: "/services",
         },
         {
            id: 2,
            title: "startup pitch",
            href: "services",
         },
      ]
   },
   {
      id: 6,
      website: "Officevibe",
      href: "https://www.officevibe.com",
      title: "Services:",
      name: "Raff Labri",
      src: client06,
      review: "Ochi has an impressive understanding of what’s needed to do an effective presentation. The stakeholders at work said it’s the best most complete PP template they’ve ever seen. Ochi delivered more than I was expecting and we were really surprised with the quality of his work. Will work with Ochi design again for sure!",
      links: [
         {
            id: 1,
            title: "branded template deck",
            href: "/services",
         },
      ]
   },
   {
      id: 7,
      website: "Orderlion",
      href: "https://www.orderlion.com",
      title: "Services:",
      name: "Stefan Strohmer",
      src: client07,
      review: "The result was just amazing! For me, a designer is exceptional when you are so satisfied with the result that you want to look at it the whole day like a kid with a new toy. Ihor and his team delivered exactly that! They are very talented designers who understand the real business problem we are trying to solve and iterate over many drafts to achieve the best possible outcome. We are looking for a long-lasting working relationship!",
      links: [
         {
            id: 1,
            title: "agency",
            href: "/services",
         },
         {
            id: 2,
            title: "investor deck",
            href: "services",
         },
         {
            id: 3,
            title: "product presentation",
            href: "services",
         },
         {
            id: 4,
            title: "review",
            href: "services",
         },
         {
            id: 2,
            title: "sales deck",
            href: "services",
         },
      ]
   },
   {
      id: 8,
      website: "Black Book",
      href: "https://www.blackbookapp.co",
      title: "Services:",
      name: "Jacki Smith",
      src: client08,
      review: "They nailed what our product was all about. We found their ability to workshop all the angles and take on feedback was great and it shows in the final product. Everything moved with a milestone dynamic brief via Notion which was handy to track progress. We’re very happy with the process and the final product. All was handled well and professionally.",
      links: [
         {
            id: 1,
            title: "review",
            href: "/services",
         },
         {
            id: 2,
            title: "startup pitch",
            href: "services",
         },
      ]
   },
];

export const serviceCapaybilitiesItem = [
   {
      id: 1,
      src1: capaybilities1,
      title1: "RAISE FUNDS:",
      review: "We help manage investor expectations and secure financing for your business with an excellent investor deck.Having a good product or illuminating ideas is not enough anymore.Poor investor presentation may close the door to potential financing right away.In contrast, a properly made investor deck provides investors with clarity, evokes confidence, and leaves them craving for more.",
      subTitle: "Projects",
      links1: [
         {
            id: 1,
            title: "investor deck",
            href: "/"
         },
         {
            id: 2,
            title: "startup pitch",
            href: "/"
         },
      ],
      src2: capaybilities2,
      title2: "SELL PRODUCTS:",
      links2: [
         {
            id: 1,
            title: "business proposal",
            href: "/"
         },
         {
            id: 2,
            title: "company presentation",
            href: "/"
         },
         {
            id: 3,
            title: "product presentation",
            href: "/"
         },
         {
            id: 4,
            title: "sales deck",
            href: "/"
         },
         {
            id: 5,
            title: "service deck",
            href: "/"
         },
      ]
   },
   {
      id: 2,
      src1: capaybilities3,
      title1: "HIRE & MANAGE PEOPLE:",
      review: "We help manage investor expectations and secure financing for your business with an excellent investor deck.Having a good product or illuminating ideas is not enough anymore.Poor investor presentation may close the door to potential financing right away.In contrast, a properly made investor deck provides investors with clarity, evokes confidence, and leaves them craving for more.",
      subTitle: "Projects",
      links1: [
         {
            id: 1,
            title: "big news deck",
            href: "/"
         },
         {
            id: 2,
            title: "branded template",
            href: "/"
         },
         {
            id: 3,
            title: "onboarding presentation",
            href: "/"
         },
         {
            id: 4,
            title: "policy deck & playbook",
            href: "/"
         },
         {
            id: 5,
            title: "progress report",
            href: "/"
         },
      ],
      src2: capaybilities4,
      title2: "ADDITIONAL:",
      links2: [
         {
            id: 1,
            title: "agency",
            href: "/"
         },
         {
            id: 2,
            title: "branding",
            href: "/"
         },
         {
            id: 3,
            title: "corporate training",
            href: "/"
         },
         {
            id: 4,
            title: "redesign",
            href: "/"
         },
         {
            id: 5,
            title: "review",
            href: "/"
         },
      ]
   },
];

export const expectationsItems = [
   {
      id: 1,
      title1: "01",
      subTitle1: "Clear Communication",
      btn: "read",
      para1: "At AplusB Consortium, we believe transparent communication is the foundation of trust. From the first sketch to the final build, our team ensures clients stay informed at every stage with clarity, honesty, and regular updates."
   },
   {
      id: 2,
      title1: "02",
      subTitle1: "One Roof Solutions",
      btn: "read",
      para1: "We provide holistic services under one roof—architecture, interiors, construction, and project management. This approach eliminates confusion, improves efficiency, and guarantees seamless execution for every project."
   },
   {
      id: 3,
      title1: "03",
      subTitle1: "Sustainability First",
      btn: "read",
      para1: "Sustainable construction is at the core of our mission. We integrate eco-friendly materials, renewable energy solutions, and green building practices to deliver projects that are both future-ready and environmentally responsible."
   },
   {
      id: 4,
      title1: "04",
      subTitle1: "Technology Driven",
      btn: "read",
      para1: "We stay ahead by adopting the latest technologies—3D printing, BIM, AR/VR visualization, and advanced modelling. These innovations help clients see their vision come to life before construction even begins."
   },
   {
      id: 5,
      title1: "05",
      subTitle1: "On-Time Delivery",
      btn: "read",
      para1: "We understand the importance of deadlines. With detailed planning, digital project management tools, and an experienced team, we ensure every project is executed with precision and delivered on time."
   },
   {
      id: 6,
      title1: "06",
      subTitle1: "Client-Centric Approach",
      btn: "read",
      para1: "Every client is unique, and so are their needs. We collaborate closely to understand goals, provide personalized solutions, and dedicate full attention to ensure the outcome not only meets but exceeds expectations."
   },
];

export const achiveItems = [
   {
      id: 1,
      title1: ["10+"],
      title2: ["280+"],
      subTitle1: "Years of proven experience",
      subTitle2: "Successful projects delivered",
   },
   {
      id: 2,
      title1: ["100+"],
      title2: ["17+"],
      subTitle1: "Clients served across industries",
      subTitle2: "Countries where we operate",
   },
   {
      id: 3,
      title1: ["90%"],
      title2: ["98%"],
      subTitle1: "Client retention rate",
      subTitle2: "Customer satisfaction score",
   },
   {
      id: 4,
      title1: ["50+"],
      title2: ["20+"],
      subTitle1: "Large-scale residential & commercial projects",
      subTitle2: "Government & institutional collaborations",
   },
];



// presentation page

export const presentationProjectItem = [
   {
      id: 1,
      title: "Annamalai residence",
      src: project1,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "Artchitecture",
            href: "/services",
         },
         {
            id: 2,
            title: "Construction",
            href: "services",
         },
       
      ]
   },
   {
      id: 2,
      title: "Balaji residence",
      src: project3,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "Interior",
            href: "/services",
         },
         {
            id: 2,
            title: "design research",
            href: "services",
         },
      
      ]
   },
   {
      id: 3,
      title: "Campus",
      src: project4,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "Interior",
            href: "/services",
         },
      ]
   },
   {
      id: 4,
      title: "Commercial building",
      src: project5,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "Elivation",
            href: "/services",
         },
         {
            id: 2,
            title: "Construction",
            href: "/services",
         },
         {
            id: 3,
            title: "Artichitecture",
            href: "/services",
         },
      ]
   },
   {
      id: 5,
      title: "Meenakshi residence",
      src: project8,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "Artictecture",
            href: "/services",
         },
         {
            id: 2,
            title: "Construction",
            href: "/services",
         },
         {
            id: 3,
            title: "Elivation",
            href: "/services",
         },
      ]
   },
   {
      id: 6,
      title: "Arun Kumar residence",
      src: project2,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "Artchitecture",
            href: "/services",
         },
         {
            id: 2,
            title: "Construction",
            href: "services",
         },
      ]
   },
   {
      id: 7,
      title: "MPAC",
      src: project9,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "Elivation",
            href: "/services",
         },
         {
            id: 2,
            title: "Architecture",
            href: "/services",
         },
      ]
   },
   {
      id: 8,
      title: "Kauvery hospital",
      src: project7,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "Interior",
            href: "/services",
         },
      ]
   },
   {
      id: 9,
      title: "Kamesh Residence",
      src: project6,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "Elivation",
            href: "/services",
         },
         {
            id: 2,
            title: "Artichitecture",
            href: "/services",
         },
         {
            id: 3,
            title: "Construction",
            href: "/services",
         },
      ]
   },
];


export const publicationItems = [
   {
      id: 1,
      title: "Pollachi Plots",
      src: publication1
   },
   {
      id: 2,
      title: "Senthil Residence",
      src: publication2
   },
   {
      id: 3,
      title: "Siva Residence-Ambur",
      src: publication3
   },
];

// insights page constants

export const insightsPublicationItems = [
   {
      id: 1,
      title: "Sales calls?  Oh no!👀",
      src: insights1
   },
   {
      id: 2,
      title: "Are you trying to be the main character?",
      src: insights2
   },
   {
      id: 3,
      title: "New Top 7",
      src: insights3
   },
];

export const latestItemss = [
   {
      id: 1,
      href: "/",
      src: latest1,
      links: [
         {
            id: 1,
            title: "public speaking"
         },
         {
            id: 1,
            title: "storytelling"
         },
      ],
      title: "Presenting to an International Audience: <br/> Tips and Lessons Learned.",
      subTitle: "By Ihor Hulyahrodskyy",
      date: "26 May 2023"
   },
   {
      id: 2,
      href: "/",
      src: latest2,
      links: [
         {
            id: 1,
            title: "presentation template"
         },
      ],
      title: "Developing compony-wide presentation template for premium blend.",
      subTitle: "By Ihor Hulyahrodskyy",
      date: "07 Dec 2022"
   },
];

// workiz page constants
export const workizItem = [
   {
      id: 1,
      title: "office vibe",
      src: project7,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand template",
            href: "/services",
         },
      ]
   },
   {
      id: 2,
      title: "planetly",
      src: project5,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand template",
            href: "/services",
         },
         {
            id: 2,
            title: "big news deck",
            href: "/services",
         },
         {
            id: 3,
            title: "branded template",
            href: "/services",
         },
         {
            id: 4,
            title: "investor deck",
            href: "/services",
         },
         {
            id: 5,
            title: "policy deck & playbook",
            href: "/services",
         },
         {
            id: 6,
            title: "sales deck",
            href: "/services",
         },
      ]
   },
];


// about page constants

export const aboutPartberItems = [
   {
      id: 1,
      src: planetly,
      title: "Indian Air Force",
      para: "We had the honor of working with the Indian Air Force, designing interiors for their café and library at Coimbatore. The spaces were crafted with a modern, minimalistic approach, using high-quality materials like veneer, laminate, wallpaper, fluted panels, glass, and POP. Our goal was to create environments that balance functionality with comfort, offering Air Force personnel a place to relax, connect, and focus."
   },
   {
      id: 2,
      src: officevibe,
      title: "Kauvery Hospital",
      para: "We collaborated with Kauvery Hospital, Trichy, to design and execute a complete modern interior transformation across 3,800 sq.ft. The project focused on creating a healing, welcoming environment for patients and visitors, using premium materials like veneer, acrylic, laminate, tile, and marble flooring, complemented by gypsum and grid ceilings. The result is a space that reflects both functionality and warmth, aligned with the hospital’s commitment to quality healthcare."
   },
   {
      id: 3,
      src: nestle,
      title: "Globus Arima",
      para: "We partnered with Globus Arima, Coimbatore, to deliver a 9,000 sq.ft. modern office interior. The design emphasized openness, collaboration, and a sleek corporate aesthetic. By incorporating premium finishes like veneer, laminates, and glass, we created a workspace that is both functional and inspiring, supporting productivity while reflecting the brand’s modern identity."
   },
   // {
   //    id: 4,
   //    src: toyota,
   //    title: "Toyota",
   //    para: "Great work, great communication, and work ethic. Their skills, and understanding of project scope and subject matter - are simply unmatched. Looking very forward to working again soon."
   // },
   // {
   //    id: 5,
   //    src: lexus,
   //    title: "Lexus",
   //    para: "Thanks for your great work! The communication was excellent, the team was able to grasp in detail what we wanted and plastered it on the company presentation and sales deck. Their work is absolutely amazing."
   // },
   // {
   //    id: 6,
   //    src: aflorihtmic,
   //    title: "Aflorithmic",
   //    para: "Super responsive and quick. A charm to work with. Unfortunately, often designers are not like that and you end up losing a lot of time with briefings that don't lead anywhere. This is definitely not the case here. I'd work again with lhor and his team anytime!"
   // },
   // {
   //    id: 7,
   //    src: orderlion,
   //    title: "Orderlion",
   //    para: "The result was just amazing! For me, a designer is exceptional when you are so satisfied with the result that you want to look at it the whole day like a kid with a new toy. Ihor and his team delivered exactly that! They are very talented designers who understand the real business problem we are trying to solve and iterate over many drafts to achieve the best possible outcome. We are looking for a long-lasting working relationship!"
   // },
   // {
   //    id: 8,
   //    src: blackBox,
   //    title: "BlackBox",
   //    para: "They nailed what our product was all about. We found their ability to workshop all the angles and take on feedback was great and it shows in the final product. Everything moved with a milestone dynamic brief via Notion which was handy to track progress. We're very happy with the process and the final product. All was handled well and professionally."
   // },
];

// contact page constants

export const FaqItems = [
   {
      id: 1,
      question: "How many iterations the project includes?",
      title: "Description",
      description: "We’re committed to delighting every one of our clients and will do everything to deliver on the project fully. We iterate as much as needed to ensure the best result.",
      links: [
         {
            id: 1,
            title: 1,
            description: "Based on our experience and ways of working, no more than three revisions are needed to meet clients’ expectations and business needs."
         },
         {
            id: 2,
            title: 2,
            description: "If your project is something we are not capable of doing, we will say it right there and won’t commit. Instead, we will refer you to specialists in any field you need and we might know."
         },
      ],
      button: "read"
   },
   {
      id: 2,
      question: "Do you animate presentations?",
      title: "Description",
      description: "Movement is what attracts the eye. But not every presentation requires animation, although we do agree that animated presentations give a wow effect. We surely add transitions and animation to your presentation where we think it increases engagement, surprise, or simply delivers the message flawlessly.",
      links: [
         {
            id: 1,
            title: 1,
            description: "By the way, animated presentations can also be used for marketing purposes to promote your ideas via socials."
         },
      ],
      button: "read"
   },
   {
      id: 3,
      question: "Do you join forces with other agencies?",
      title: "Description",
      description: "Yes, we do partner with other creative agencies where we lack expertise or experience. We carefully select our partners and frequently collaborate on brand identity, web design, animation design, and other fine initiatives that benefit both us and our clients. All with the purpose to expand our creative POV and supplementing you with top-notch work.",
      links: [
         {
            id: 1,
            title: 1,
            description: "By the way, animated presentations can also be used for marketing purposes to promote your ideas via socials."
         },
      ],
      button: "read"
   },
   {
      id: 4,
      question: "I want to become a part of the team! Do you hire?",
      title: "Description",
      description: "Yes! We actively search for talent to join us in completing high-stake presentation design projects at OCHI. As a presentation agency, we always aim to create the best products and services possible. Hence, we are looking for someone who will enjoy helping us fuse design and thinking into something impactful and beautiful.",
      links: [
         {
            id: 1,
            title: 1,
            description: "If you feel like you’re on top of your creative game, whether it’s storytelling, graphic design, or animation. Send us the CV and portfolio at Ihor@ochi.design with “CREATE AND THRILL” in the subject. We will get back to you and maybe schedule a call. If there’s a potential fit here, you will meet the team. If that goes well – you’ll become a part of it."
         },
         {
            id: 2,
            title: 2,
            description: "If you think you can improve our processes, marketing, PR, and communications, or you excel at managing people, we would love to hear from you. Send your message to hello@ochi.design with “-” and we will get back to you."
         },
      ],
      button: "read"
   },
   {
      id: 5,
      question: "Can I hire you for publish speaking, or student workshop?",
      title: "Description",
      description: "The short answer is yes.",
      links: [
         {
            id: 1,
            title: 1,
            description: "Through our work, we empower brands to make a difference. But while, the presentations that raise millions help in the long run by providing resources for organizations to evolve, create new workplaces, and make things better. We also offer our corporate clients personal training. We love visiting traditional university students to share insights and expertise through masterclasses and workshops. This is how we make things better by teaching others how to make better things. And this changes the world here and now."
         },
         {
            id: 2,
            title: 2,
            description: "If you have an event coming or you are a university academic, please reach out to us with the topic, and we will see how we can help."
         },
      ],
      button: "read"
   },
   {
      id: 6,
      question: "Would you like to jump on a podcast or YouTube video?",
      title: "Description",
      description: "Yes, why not. It’s a great chance to give back to the creative community by sharing and learning. Especially if the audience is relevant to the communication design subject. Or maybe it helps our clients in some way. We can’t know until we see some details, so drop us a line with a brief explanation at kseniia@ochi.design with the “Podcast/YT Proposal”.",
      links: [
         {
            id: 1,
            title: 1,
            description: "By the way, animated presentations can also be used for marketing purposes to promote your ideas via socials."
         },
      ],
      button: "read"
   },
];
