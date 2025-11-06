import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function RoutineCard({ routine, onRoutineCardClick }) {
  return (
    <Card
      className="hover:bg-muted transition-colors cursor-pointer"
      onClick={onRoutineCardClick.bind(null, routine.id)}
    >
      <CardHeader>
        <CardTitle className="text-lg font-bold">{routine.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {routine.exercises.length} exercises
          <br />
          <span className="text-xs">Last: {routine.last}</span>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
