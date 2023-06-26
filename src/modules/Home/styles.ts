import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from '../../components/Icon';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${RFValue(16)}px;
`;

export const OptionsHeader = styled.View`
    flex-direction: row;
    align-items: center;
    padding: ${RFValue(16)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    padding: 0 ${RFValue(16)}px;
`;

export const SubTitle = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    padding: ${RFValue(8)}px ${RFValue(16)}px;
`;

export const ImageProfile = styled.Image`
    width: ${RFValue(35)}px;
    height: ${RFValue(35)}px;
    border-radius: ${RFValue(25)}px;
`;
export const ButtonIcon = styled.TouchableOpacity`
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: ${RFValue(16)}px;
    margin: ${RFValue(16)}px;
    padding: ${RFValue(8)}px ${RFValue(16)}px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: ${RFValue(10)}px;
    border: 1px solid ${({ theme }) => '#c4c4c4'};
`;

export const SearchIcon = styled.View`
    margin-right: ${RFValue(8)}px;
`;

export const SearchInput = styled.TextInput`
    flex: 1;
    height: ${RFValue(40)}px;
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const ViewVertical = styled.View`
    width: 1px;
    height: 24px;
    background-color: '#c4c4c4';
    margin: 0 12px;
`;

export const Banner = styled.View`
    padding: ${RFValue(16)}px;
    margin-top: ${RFValue(-8)}px;
    border-radius: ${RFValue(10)}px;
    overflow: hidden;
`;

export const BannerImage = styled.Image`
    width: 100%;
    height: ${RFValue(150)}px;
    border-radius: ${RFValue(10)}px;
`;

export const BannerTitle = styled.Text`
    position: absolute;
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.SEMIBOLD};
    margin-top: ${RFValue(36)}px;
    left: ${RFValue(26)}px;
`;

export const BannerTitleGreen = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-family: ${({ theme }) => theme.FONTS.SEMIBOLD};
    margin-top: ${RFValue(8)}px;
`;

export const BannerButton = styled.TouchableOpacity`
    position: absolute;
    bottom: ${RFValue(30)}px;
    left: ${RFValue(26)}px;
    width: ${RFValue(155)}px;
    height: ${RFValue(50)}px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: ${RFValue(8)}px;
    padding: ${RFValue(8)}px ${RFValue(16)}px;
    margin-top: ${RFValue(8)}px;
    justify-content: center;
`;

export const BannerButtonText = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    text-align: center;
`;

export const TitleSection = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.SEMIBOLD};
    margin: 0 ${RFValue(16)}px;
`;

export const BoxCategory = styled.TouchableOpacity`
    width: ${RFValue(74)}px;
    height: ${RFValue(74)}px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: ${RFValue(10)}px;
    margin: ${RFValue(8)}px;
    padding: ${RFValue(8)}px;
    justify-content: center;
    align-items: center;
`;

export const BoxCategoryIcon = styled(Icon.SVG).attrs({
    width: RFValue(30),
    height: RFValue(30),
})`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const BoxCategoryTitle = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    text-align: center;
    margin-bottom: ${RFValue(16)}px;
`;

export const ViewColumn = styled.View`
    flex-direction: column;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CampaignBox = styled.View`
    width: ${RFValue(275)}px;
    height: ${RFValue(310)}px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: ${RFValue(16)}px;
    margin: ${RFValue(16)}px;
    padding: ${RFValue(20)}px;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border: 1px solid ${({ theme }) => '#f1f1f1'};
    margin-bottom: ${RFValue(40)}px;
`;

export const CampaignImage = styled.Image`
    width: ${RFValue(235)}px;
    height: ${RFValue(108)}px;
    border-radius: ${RFValue(10)}px;
`;

export const CampaignButton = styled.TouchableOpacity`
    position: absolute;
    top: ${RFValue(16)}px;
    right: ${RFValue(16)}px;
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: ${RFValue(20)}px;
    justify-content: center;
    align-items: center;
`;

export const CampaignButtonFavorite = styled.TouchableOpacity`
    position: absolute;
    top: ${RFValue(26)}px;
    right: ${RFValue(26)}px;
    padding: ${RFValue(8)}px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: ${RFValue(20)}px;
`;

export const CampaignButtonIcon = styled(Icon.SVG) <{ disabled: boolean }>`
    color: ${({ theme, disabled }) => (disabled ? theme.COLORS.WHITE : theme.COLORS.TEXT_LIGHT)};
`;

export const CampaignTitleContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: ${RFValue(6)}px;
`;

export const CampaignCategoryLabel = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-family: ${({ theme }) => theme.FONTS.SEMIBOLD};
    border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: ${RFValue(5)}px;
    padding: ${RFValue(4)}px ${RFValue(8)}px;
`;

export const CampaignTitle = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    margin-top: ${RFValue(10)}px;
    align-self: flex-start;
`;

export const CampaignCategory = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    margin-top: ${RFValue(8)}px;
    text-align: center;
`;


export const CampaignDescription = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    margin-top: ${RFValue(8)}px;
`;

export const CampaignProgressBar = styled.View`
    width: 100%;
    height: 8px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    border-radius: 4px;
    margin-top: ${RFValue(16)}px;
    overflow: hidden;
`;

export const ProgressBar = styled.View<{ progress: number; color: string }>`
flex-direction: column;
    width: ${({ progress }) => `${progress * 100}%`};
    height: 100%;
    background-color: ${({ color }) => color};
`;

export const ProgressText = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    margin-top: ${RFValue(8)}px;
    align-self: flex-start;
`;