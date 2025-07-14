
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Leaderboard from "./pages/Leaderboard";

const qc = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={qc}>
      <Leaderboard />
    </QueryClientProvider>
  );
}
