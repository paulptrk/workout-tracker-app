import RoutinesScreen from "./components/screens/routines-screen";
import RoutineDetailsScreen from "./components/screens/routine-details-screen";
import { useState } from "react";
import { mockRoutines } from "./data/mockRoutines";

function App() {
  const [currentScreen, setCurrentScreen] = useState("routines");
  const [selectedRoutineId, setSelectedRoutineId] = useState(null);

  function handleNavigateToDetails(id) {
    setSelectedRoutineId(id);
    setCurrentScreen("routine-details");
  }

  function handleNavigateBack() {
    if (currentScreen === "routine-details") {
      setCurrentScreen("routines");
    }
  }

  return (
    <div className="mx-auto">
      {currentScreen === "routines" && (
        <RoutinesScreen
          routines={mockRoutines}
          onNavigateToDetails={handleNavigateToDetails}
        />
      )}
      {currentScreen === "routine-details" && selectedRoutineId && (
        <RoutineDetailsScreen routineId={selectedRoutineId} onBack={handleNavigateBack} />
      )}
    </div>
  );
}

export default App;
