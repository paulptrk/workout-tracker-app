import { Button } from "@/components/ui/button";
import Header from "@/components/ui/Header";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { mockRoutines } from "@/data/mockRoutines";
import { Play } from 'lucide-react';

export default function RoutineDetailsScreen({ routineId, onBack, onStartWorkout }) {
  const routine = mockRoutines.find((routine) => routine.id === routineId);
  console.log(routine);
  return (
    <>
      <Header
        title={routine.title}
        description={`${routine.exercises.length} exercises`}
        hasBackButton={true}
        onBackButtonClick={onBack}
      />
      <Separator className="mb-6" />
      <div className="max-w-sm md:max-w-xl lg:max-w-3xl">
        <div>
          {routine.exercises.map((exercise, i) => (
            <Card className="m-6 p-6 flex gap-4 w-full">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <span className="text-sm font-bold text-muted-foreground">
                  {i + 1}
                </span>
              </div>
              <div>
                <h2 className="text-lg font-bold">{exercise.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {exercise.sets} sets x {exercise.reps} reps
                </p>
              </div>
            </Card>
          ))}
        </div>
        <Button className="m-6 p-6 w-full" onClick={onStartWorkout}><Play /> Start Workout</Button>
      </div>
    </>
  );
}
