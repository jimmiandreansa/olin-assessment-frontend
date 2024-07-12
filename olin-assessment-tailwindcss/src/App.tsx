import { Route, Routes } from "react-router-dom";
import BasicStyling from "./task-task/1.basic-styling";
import ResponsiveDesign from "./task-task/2.responsive-design";
import FlexboxLayout from "./task-task/3.flexbox-layout";
import CustomizingTailwind from "./task-task/4.customizing-tailwind";

function App() {

  return (
    <Routes>
      <Route path="/1" element={<BasicStyling />} />
      <Route path="/2" element={<ResponsiveDesign />} />
      <Route path="/3" element={<FlexboxLayout />} />
      <Route path="/4" element={<CustomizingTailwind />} />
    </Routes>
  );
}

export default App
