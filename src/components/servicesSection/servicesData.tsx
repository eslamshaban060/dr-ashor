import {
  Stethoscope,
  Heart,
  Activity,
  Shield,
  Pill,
  Users,
  Calendar,
  Utensils,
  Monitor,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
}

export const primaryServices: Service[] = [
  {
    icon: <Stethoscope className="w-7 h-7" />,
    title: "كشف وتشخيص أمراض الباطنة العامة",
    description:
      "من أبسط تعب زي الصداع أو اضطرابات الهضم، لحد الحالات المزمنة زي الضغط والسكر",
    features: ["كشف شامل", "تشخيص دقيق", "متابعة مستمرة"],
  },
  {
    icon: <Pill className="w-7 h-7" />,
    title: "متابعة شاملة لمرضى السكر والضغط",
    description:
      "تحاليل دورية – نظام غذائي – أدوية مناسبة لحالتك – ومتابعة مستمرة لحمايتك من أي مضاعفات",
    features: ["تحاليل دورية", "نظام غذائي", "متابعة مضاعفات"],
  },
  {
    icon: <Activity className="w-7 h-7" />,
    title: "علاج ومتابعة أمراض الكبد",
    description:
      "دهون الكبد – التهابات الكبد – تليـف الكبـد – ومتابعة  مستمرة لــظائف الكبد",
    features: ["علاج دهون الكبد", "متابعة وظائف", "تليف الكبد"],
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "علاج أمراض الجهاز الهضمي والكبد",
    description:
      "لو بتعانى من جرثومة المعدة - او التهابات القولون مع متابعة دقيقة ومتخصصة",
    features: ["جرثومة المعدة", "التهابات القولون", "متابعة دقيقة"],
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "تشخيص وعلاج أمراض الحميات",
    description:
      "لو بتعاني من سخونية مستمرة، تعب، إرهاق، أو أي أعراض مش واضحة السبب، هنساعدك نوصل للتشخيص الصح",
    features: ["تشخيص الحميات", "علاج السخونية", "متابعة الأعراض"],
  },
  {
    icon: <Calendar className="w-7 h-7" />,
    title: "متابعة دورية لحالات ما بعد التعافي",
    description:
      "لو لسه خارج من أزمة صحية، هنتابعك خطوة بخطوة لحد ما ترجع بأفضل صحة",
    features: ["متابعة ما بعد التعافي", "خطة علاجية", "تحسن تدريجي"],
  },
];

export const additionalServices: Service[] = [
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "استشارات غذائية لحالات الباطنة والسكر والكبد",
    description:
      "نساعدك تنظم أكلك بطريقة صحية وفعالة تناسب حالتك وتقلل الأعراض",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "تشخيص وعلاج أمراض الحميات للكبار والأطفال",
    description: "خبرة أكثر من عشرين سنة مستشفى حميات الفيوم",
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "الكشف بالأشعة التلفزيونية وجهاز رسم القلب",
    description: "تشخيص دقيق باستخدام أحدث الأجهزة الطبية",
  },
];
