import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    padding: 0 ${RFValue(16)}px;
    margin-top: ${RFValue(16)}px;
`;

export const CategoryContainer = styled.View`
    margin: ${RFValue(16)}px;
`;

export const CategoryTitle = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    margin-bottom: ${RFValue(8)}px;
`;

export const MovieCard = styled.View`
    width: ${RFValue(180)}px;
    padding: ${RFValue(8)}px;
    margin-right: ${RFValue(8)}px;
`;

export const MovieImage = styled.Image`
    width: 100%;
    height: ${RFValue(250)}px;
    border-radius: ${RFValue(10)}px;
    margin-bottom: ${RFValue(8)}px;
`;

export const MovieTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.SEMIBOLD};
`;

export const MovieReleaseYear = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;

export const SearchInput = styled.TextInput`
    width: 100%;
    height: ${RFValue(40)}px;
    padding: ${RFValue(8)}px;
    margin-bottom: ${RFValue(16)}px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    border-radius: ${RFValue(8)}px;
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;
