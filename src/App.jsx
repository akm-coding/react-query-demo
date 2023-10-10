import { QueryClient, QueryClientProvider } from "react-query";
import AddUserForm from "./components/AddUserForm";
import UserLists from "./components/UserLists";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <UserLists />
        <AddUserForm />
      </QueryClientProvider>
    </div>
  );
};

export default App;
