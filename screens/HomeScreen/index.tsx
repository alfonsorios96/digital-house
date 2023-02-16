import {RootTabScreenProps} from "../types";
import {Text, View} from "../components/Themed";
import EditScreenInfo from "../components/EditScreenInfo";

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        </View>
    );
}