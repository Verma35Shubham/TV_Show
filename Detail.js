import { Text,View,Platform,StyleSheet, Button} from "react-native";
import WebView from "react-native-webview";

const Detail =(route)=>
{
    // console.log(route.route.params)
    return (
        
        <WebView source={{uri:route.route.params}}/>
    )
}
export default Detail;