import React, { useContext, useEffect, useState } from "react";
import nullUser from "../../../assets/images/null.png";
import {
    Container,
    HeaderBox,
    ProfileImage,
    OptionsContainer,
    OptionBox,
    OptionText,
    CircleButton,
    NameText,
    EmailText,
    ViewEdit,
    IconEdit,
} from "./styles";
import { options } from "./consts";
import Icon from "../../components/Icon";
import { SafeAreaView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AuthContext } from "../../contexts/Auth";
import { realm } from "../../services/realm";

const Profile = () => {
    const [image, setImage] = useState<string | null>(null);

    const { user } = useContext(AuthContext);

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Permissão para acessar a biblioteca de mídia é necessária!");
          return;
        }
      
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      
        if (!result.canceled) {
          const userFromRealm = realm.objects('User').filtered(`email = "${user?.email}"`)[0];
          realm.write(() => {
            userFromRealm.image = result.assets[0].uri;
          });
          setImage(result.assets[0].uri);
        }
      };

    const renderOptions = () =>
        options.map((option) => (
            <OptionBox key={option.id}>
                <OptionText>{option.name}</OptionText>
                <Icon.SVG name="chevronRight" size={16} />
            </OptionBox>
        ));

    useEffect(() => {
        if (user?.image) {
            setImage(user.image);
        }
    }, [user?.image]);

    console.log('userImage', image);


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container>
                <HeaderBox>
                    <ProfileImage source={image ? { uri: image } : nullUser} />
                </HeaderBox>

                <OptionsContainer>
                    <CircleButton onPress={pickImage}>
                        <Icon.SVG name="camera" size={36} />
                    </CircleButton>
                    <ViewEdit>
                        <NameText>{user?.name}</NameText>
                        <IconEdit>
                            <Icon.SVG name="edit" size={40} style={{ bottom: -10 }} />
                        </IconEdit>
                    </ViewEdit>
                    <EmailText>{user?.email}</EmailText>
                    {renderOptions()}
                </OptionsContainer>
            </Container>
        </SafeAreaView>
    );
};

export default Profile;