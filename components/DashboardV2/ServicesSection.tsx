import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Problem Solving",
    description:
      "Enhance your problem-solving skills with a variety of coding challenges.",
    pro: ProService.NO,
  },
  {
    title: "Interview Preparation",
    description:
      "Get ready for your technical interviews with curated questions and solutions.",
    pro: ProService.YES,
  },
  {
    title: "Progress Tracking",
    description: "Track your progress and see how you improve over time.",
    pro: ProService.NO,
  },
  {
    title: "Community Support",
    description: "Join a community of fellow coders and get support.",
    pro: ProService.NO,
  },
  {
    title: "AI Assistance",
    description:
      "Get personalized recommendations and insights to help you grow.",
    pro: ProService.YES,
  },
  {
    title: "Code Review",
    description: "Get feedback on your code to improve your skills.",
    pro: ProService.YES,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container mx-auto py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-indigo-500 text-center font-bold mb-4">
        Grow Your Business
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From marketing and sales to operations and strategy, we have the
        expertise to help you achieve your goals.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
