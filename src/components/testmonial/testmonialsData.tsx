import patient1 from "../../../public/asets/testmonials/patient1.jpg";
import patient2 from "../../../public/asets/testmonials/patient2.jpg";
import patient3 from "../../../public/asets/testmonials/patient3.jpg";
import patient4 from "../../../public/asets/testmonials/patient4.jpg";
import patient5 from "../../../public/asets/testmonials/patient5.jpg";

export default interface Review {
  id: number;
  name: string;
  condition: string;
  rating: number;
  review: string;
  date: string;
  image?: string;
  initials: string;
  bgColor: string;
  highlight?: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "أحمد محمد الشريف",
    condition: "مريض سكري",
    rating: 5,
    review:
      "بجد دكتور شاطر جدًا وبيتابعني خطوة بخطوة. شرح لي حالتي بطريقة بسيطة وخلا العلاج سهل ألتزم بيه. السكر بقى متظبط والحمد لله وأنا مرتاح معاه جدًا.",
    date: "منذ أسبوعين",
    image: patient1,
    initials: "أ.م",
    bgColor: "bg-primary",
    highlight: "تحسن ملحوظ في مستوى السكر",
  },
  {
    id: 2,
    name: "فاطمة عبد الرحمن",
    condition: "مريضة ضغط",
    rating: 5,
    review:
      "تجربتي مع الدكتور كانت ممتازة. ساعدني أظبط الضغط من غير ما أزود أدوية. بيهتم بكل التفاصيل والعيادة نظيفة جدًا. حقيقي حسيت بفرق كبير في صحتي.",
    date: "منذ 3 أسابيع",
    image: patient2,
    initials: "ف.ع",
    bgColor: "bg-accent",
    highlight: "ضبط الضغط بدون أدوية إضافية",
  },
  {
    id: 3,
    name: "خالد أحمد علي",
    condition: "مشاكل هضمية",
    rating: 5,
    review:
      "الدكتور عاشور شخص فاهم وشاطر جدًا. سمع مني كل الأعراض بصبر وعالج المشكلة من جذورها. دلوقتي الحمد لله بطني ارتاحت ومش بحس بأي تعب زي الأول.",
    date: "منذ شهر",
    image: patient3,
    initials: "خ.أ",
    bgColor: "bg-primary",
    highlight: "شفاء تام من مشاكل الهضم",
  },
  {
    id: 4,
    name: "مريم سعد الدين",
    condition: "متابعة دورية",
    rating: 5,
    review:
      "متابعة ممتازة ونصايح عملية. الدكتور بيشرح كل حاجة بهدوء وبيهتم بأدق التفاصيل. بحس بأمان وأنا تحت متابعته وكل مرة بلاقي نفسي بتحسن أكتر.",
    date: "منذ أسبوع",
    image: patient4,
    initials: "م.س",
    bgColor: "bg-accent",
    highlight: "رعاية شاملة ومتابعة مستمرة",
  },
  {
    id: 5,
    name: "عمر محمود",
    condition: "مريض سكري وضغط",
    rating: 5,
    review:
      "بفضل المتابعة مع الدكتور قدرت أتحكم في السكر والضغط مع بعض. أسلوبه مريح وبيتابع أدق التفاصيل. النتايج اتحسنت جدًا وبقيت حاسس إني أفضل.",
    date: "منذ 10 أيام",
    image: patient5,
    initials: "ع.م",
    bgColor: "bg-primary",
    highlight: "السيطرة على مرضين مزمنين",
  },
];
