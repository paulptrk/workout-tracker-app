import RoutineCard from "@/components/custom/RoutineCard";
import Header from "@/components/ui/Header";
import { Separator } from "@/components/ui/separator";

export default function RoutinesScreen({ routines, onNavigateToDetails }) {
  return (
    <>
    <Header title="Routines" description="Your workout programs" />
    <Separator className="mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 max-w-4xl lg:max-w-6xl">
        {routines.map((routine, index) => (
          <RoutineCard key={index} routine={routine} onRoutineCardClick={onNavigateToDetails} />
        ))}
      </div>
    </>
  );
}
