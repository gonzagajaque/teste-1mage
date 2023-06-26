import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import theme from "../../theme";
import { Platform } from "react-native";

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${theme.COLORS.BACKGROUND};
`;

export const HeaderBox = styled.View`
    height: ${RFValue(250)}px;
    background-color: ${theme.COLORS.PRIMARY};
    align-items: center;
    justify-content: center;
`;

export const ProfileImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export const OptionsContainer = styled.View`
    flex: 1;
    width: 100%;
    top: ${RFValue(-45)}px;
    padding: ${RFValue(16)}px;
    justify-content: space-between;
    background-color: ${theme.COLORS.BACKGROUND};
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
`;

export const OptionBox = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${RFValue(12)}px;
    background-color: ${theme.COLORS.WHITE};
    border-radius: 20px;
    padding: ${RFValue(16)}px;
    width: 100%;
    height: ${RFValue(60)}px;
    ${Platform.OS === "android" && "elevation: 2;"}
    ${Platform.OS === "ios" &&
    css`
    shadow-color: #000;
    shadow-offset: 0px 1px;
    shadow-opacity: 0.2;
    shadow-radius: 1.41px;
    `}
`;

export const OptionText = styled.Text`
    font-family: ${theme.FONTS.BOLD};
    font-size: ${RFValue(16)}px;
    color: ${theme.COLORS.TEXT};
`;

export const CircleButton = styled.TouchableOpacity`
    position: absolute;
    top: ${RFValue(-34)}px;
    left: 45%;
    align-self: center;
    background-color: ${theme.COLORS.BACKGROUND};
    width: ${RFValue(75)}px;
    height: ${RFValue(75)}px;
    border-radius: ${RFValue(40)}px;
    justify-content: center;
    align-items: center;
`;

export const ViewEdit = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const NameText = styled.Text`
    font-family: ${theme.FONTS.BOLD};
    font-size: ${RFValue(27)}px;
    color: ${theme.COLORS.TEXT};
    margin-top: ${RFValue(32)}px;
`;

export const EmailText = styled.Text`
    font-family: ${theme.FONTS.REGULAR};
    font-size: ${RFValue(14)}px;
    color: ${theme.COLORS.TEXT_LIGHT};
    margin-bottom: ${RFValue(10)}px;
`;

export const IconEdit = styled.TouchableOpacity`
    margin: 0 ${RFValue(8)}px;
    margin-top: ${RFValue(32)}px;
`;