import { CiLocationOn } from "react-icons/ci";
import { UniversityDetails } from "./types";


export const universitiesDetails: UniversityDetails[] = [
  {
    slug: "istanbul-gelisim-university",
    name: {
      ar: "جامعة اسطنبول جيليشيم",
      en: "Istanbul Gelisim University",
    },
    city: {
      ar: "اسطنبول",
      en: "Istanbul",
    },
    logo: "/logos/Gelisim.png",
    icon: CiLocationOn,
    cover: "/universities/gelisim/2.jpg",

    stats: {
      students: 25000,
      internationalStudents: 4000,
      rankLocal: 62,
      rankWorld: 2742,
    },

    gallery: [
      "/universities/gelisim/1.jpg",
      "/universities/gelisim/2.jpg",
      "/universities/gelisim/3.jpg",
    ],

    content: {
      overview: {
        ar: "جامعة اسطنبول جيليشيم هي واحدة من أكثر الجامعات التركية المفضلة بين الطلاب الدوليين. تأسست على يد مؤسسة جيليشيم للتعليم والثقافة والصحة والخدمات الاجتماعية. تضم جامعة إسطنبول جيليشيم أكثر من 30 ألف طالب وحوالي 57 برنامج جامعي لطلاب البكالوريوس والماجستير والدكتوراه.",
        en: "Istanbul Gelisim University is one of the most preferred Turkish universities among international students...",
      },

      location: {
        ar: "تقع جامعة اسطنبول جيليشيم في الجانب الأوروبي من مدينة إسطنبول بالقرب من مطار أتاتورك.",
        en: "The university is located on the European side of Istanbul near Ataturk Airport.",
      },

      goals: {
        ar: "تسعى جامعة اسطنبول جيليشيم إلى تحقيق مكانة عالية بين الجامعات العالمية من خلال إضافة قيمة تعليمية متميزة في شتى التخصصات.",
        en: "The university aims to achieve a high global ranking by providing high-quality education.",
      },

      faculties: {
        ar: [
          "كلية الهندسة والعمارة",
          "الاقتصاد والعلوم الإدارية والاجتماعية",
          "كلية العلوم التطبيقية",
          "كلية الفنون الجميلة",
          "كلية طب الأسنان",
          "كلية العلوم الصحية",
        ],
        en: [
          "Faculty of Engineering and Architecture",
          "Faculty of Economics and Administrative Sciences",
          "Faculty of Applied Sciences",
          "Faculty of Fine Arts",
          "Faculty of Dentistry",
          "Faculty of Health Sciences",
        ],
      },

      features: {
        ar: [
          "تعاون مع أكثر من 100 جامعة عالمية",
          "اللغة الرسمية هي الإنجليزية",
          "فرص تدريب متعددة",
          "أكثر من 117 مختبر وورشة عمل",
          "اعتمادات دولية مثل AQAS وABET وPEARSON",
        ],
        en: [
          "Partnerships with over 100 global universities",
          "English as the official language",
          "Multiple internship opportunities",
          "More than 117 laboratories and workshops",
          "International accreditations such as AQAS and ABET",
        ],
      },

      activities: {
        ar: [
          "نادي الموسيقى",
          "نادي المسرح",
          "نادي السياسة",
          "نادي التصوير",
          "نادي السينما",
          "نادي الرياضة",
          "نادي التكنولوجيا",
          "نادي علم النفس",
          "نادي الهندسة الصناعية",
          "نادي ريادة الأعمال",
          "نادي الخدمات الاجتماعية",
          "نادي الأدب",
          "نادي التصميم",
        ],
        en: [
          "Music Club",
          "Theater Club",
          "Politics Club",
          "Photography Club",
          "Cinema Club",
          "Sports Club",
          "Technology Club",
          "Psychology Club",
          "Industrial Engineering Club",
          "Entrepreneurship Club",
          "Social Services Club",
          "Literature Club",
          "Design Club",
        ],
      },

      campus: {
        ar: "يزخر الحرم الجامعي بأكثر من 100 مختبر وورشة عمل مجهزة بأحدث التكنولوجيا.",
        en: "The campus includes over 100 laboratories equipped with modern technology.",
      },

      facilities: {
        ar: "تتوفر قاعات تدريب حديثة ومكتب علاقات خارجية لدعم الطلاب.",
        en: "The university provides modern training halls and an international relations office.",
      },

      housing: {
        ar: "توفر الجامعة سكنًا طلابيًا من خلال مساكن متعاقدة لضمان الراحة والأمان.",
        en: "The university offers student housing through contracted residences.",
      },
    },
  },
];
