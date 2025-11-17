
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/ui/Header";
import { Separator } from "@/components/ui/separator";
import { mockRoutines } from "@/data/mockRoutines";

export default function RoutineProgressScreen({ routineId, onBack }) {
    const routine = mockRoutines.find((routine) => routine.id === routineId);
    return (
        <>
            <Header
                title={routine.title}
                description='In progress'
                hasBackButton={true}
                onBackButtonClick={onBack}
            />
            <Separator className="mb-6" />
            <div className="md:max-w-xl lg:max-w-3xl">
                {routine.exercises.map((exercise, i) => (
                    <Card className='m-6 flex gap-4 w-full flex flex-col'>
                        <CardHeader>
                            <CardTitle>{exercise.name}</CardTitle>
                            <CardDescription>
                                {exercise.sets} sets x {exercise.reps} reps
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            Set {i + 1}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}