import { useAuthStore } from "../../store/AuthUser";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";

const HomePage = () => {
  const { user } = useAuthStore();

  return <div>{user ? <HomeScreen /> : <AuthScreen />}</div>;
};

export default HomePage;
