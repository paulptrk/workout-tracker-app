import RoutinesScreen from "./components/screens/routines-screen";
import RoutineDetailsScreen from "./components/screens/routine-details-screen";
import RoutineProgressScreen from "./components/screens/routine-progress-screen";
import { useState } from "react";
import { mockRoutines } from "./data/mockRoutines";

function App() {
  const [currentScreen, setCurrentScreen] = useState("routines");
  const [selectedRoutineId, setSelectedRoutineId] = useState(null);

  function handleNavigateToDetails(id) {
    setSelectedRoutineId(id);
    setCurrentScreen("routine-details");
  }

  function handleStartWorkout() {
    setCurrentScreen("routine-progress");
  }

  function handleNavigateBack() {
    if (currentScreen === "routine-details") {
      setCurrentScreen("routines");
    }
    if (currentScreen === "routine-progress") {
      setCurrentScreen("routine-details");
    }
  }

  const selectedRoutine = mockRoutines.find((r) => r.id === selectedRoutineId);

  return (
    <div className="mx-auto">
      {currentScreen === "routines" && (
        <RoutinesScreen
          routines={mockRoutines}
          onNavigateToDetails={handleNavigateToDetails}
        />
      )}
      {currentScreen === "routine-details" && selectedRoutine && (
        <RoutineDetailsScreen routine={selectedRoutine} onBack={handleNavigateBack} onStartWorkout={handleStartWorkout} />
      )}
      {currentScreen === "routine-progress" && selectedRoutine && (
        <RoutineProgressScreen routine={selectedRoutine} onBack={handleNavigateBack} />
      )}
    </div>
  );
}

export default App;
