
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { mockRoutines } from "@/data/mockRoutines";

export default function RoutineProgressScreen({ routineId, onBack }) {
    const routine = mockRoutines.find((routine) => routine.id === routineId);
    return (
        <div>
            {routine.exercises.map(exercise => (
                <Card>
                    <CardHeader>
                        <CardTitle>{exercise.name}</CardTitle>
                    </CardHeader>
                </Card>
            ))}
        </div>
    )
}