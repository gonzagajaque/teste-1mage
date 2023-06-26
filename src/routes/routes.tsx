import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../contexts/Auth";
import { useContext } from "react";
import MainTabNavigator from "./MainTabNavigator";
import AuthScreens from "./auth.routes";

const AppRoutes = () => {
    const { user } = useContext(AuthContext);
    return (
        <NavigationContainer>
            {user ? <MainTabNavigator /> : <AuthScreens />}
        </NavigationContainer>
    );
}

export default AppRoutes;
