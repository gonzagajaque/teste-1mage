import styled from 'styled-components/native';
import Icon from '../../../../components/Icon';
import { RFValue } from 'react-native-responsive-fontsize';

interface StyledInputContainerProps {
    isFocused: boolean;
}

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    font-size: ${RFValue(32)}px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    margin-top: ${RFValue(200)}px;
    margin-bottom: ${RFValue(30)}px;
`;

export const IconSettings = styled(Icon.SVG).attrs(({ theme }) => ({
    name: 'setting',
    size: RFValue(24),
    color: theme.COLORS.ALL
}))``;

export const Flag = styled(Icon.SVG).attrs(({ theme }) => ({
    name: 'flag',
    color: theme.COLORS.ALL
}))`
    width: ${RFValue(375)}px;
    height: ${RFValue(500)}px;
    position: absolute;
    top: ${RFValue(-200)}px;
    left: ${RFValue(0)}px;
`;

export const Logo = styled.Image`
    position: absolute;
    top: ${RFValue(82)}px;
    width: ${RFValue(122)}px;
    height: ${RFValue(45)}px;
`;

export const InputContainer = styled.View<StyledInputContainerProps>`
    width: 80%;
    height: ${RFValue(50)}px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme, isFocused }) =>
    isFocused ? theme.COLORS.TEXT : theme.COLORS.INPUT};
    margin-bottom: ${RFValue(10)}px;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.COLORS.TEXT,
}))`
    flex: 1;
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: ${RFValue(12)}px;
    padding: 0;
`;

export const TextInputTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: ${RFValue(12)}px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    width: 80%;
    height: ${RFValue(40)}px;
    background-color: ${({ theme }) => theme.COLORS.TEXT};
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(4)}px;
    margin: ${RFValue(20)}px 0;
`;

export const ButtonText = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    font-size: ${RFValue(14)}px;
`;

export const TextOrContinue = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: ${RFValue(14)}px;
`;

export const ViewRow = styled.View`
    flex-direction: row;
    margin-top: ${RFValue(16)}px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
`;

export const CreateAccountButtonText = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    font-size: ${RFValue(14)}px;
`;
