import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ApiFetch from "./pages/1.api-fetch";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <ApiFetch />
      </div>
    </QueryClientProvider>
  );
}

export default App;
