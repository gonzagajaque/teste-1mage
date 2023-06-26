import React, { useContext, useState } from 'react';
import {
    Banner,
    BannerButton,
    BannerButtonText,
    BannerImage,
    BannerTitle,
    BannerTitleGreen,
    BoxCategory,
    BoxCategoryIcon,
    BoxCategoryTitle,
    ButtonIcon,
    CampaignBox,
    CampaignButtonFavorite,
    CampaignCategoryLabel,
    CampaignDescription,
    CampaignImage,
    CampaignProgressBar,
    CampaignTitle,
    CampaignTitleContainer,
    Container,
    Header,
    ImageProfile,
    OptionsHeader,
    ProgressBar,
    ProgressText,
    SearchContainer,
    SearchIcon,
    SearchInput,
    SubTitle,
    Title,
    TitleSection,
    ViewColumn,
    ViewRow,
    ViewVertical
} from './styles';
import nullUser from '../../../assets/images/null.png';
import banner from '../../../assets/images/banner.png';
import campaign from '../../../assets/images/campaign.png';
import Emoji from 'react-native-emoji';
import { categories } from './consts';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { hexToRGBA } from '../../utils';
import Icon from '../../components/Icon';
import { ROUTES } from '../../routes/consts';
import theme from '../../theme';
import { AuthContext } from '../../contexts/Auth';

const Home = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [donationProgress, setDonationProgress] = useState(0.45);

    const { user } = useContext(AuthContext);

    const navigation = useNavigation();

    const renderCategory = ({ item }) => {
        const backgroundColor = hexToRGBA(item.color, 0.1);
        return (
            <ViewColumn>
                <BoxCategory style={{ backgroundColor }}>
                    <BoxCategoryIcon name={item.icon} color={item.color} />
                </BoxCategory>
                <BoxCategoryTitle>{item.name}</BoxCategoryTitle>
            </ViewColumn>
        )
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <Container>
                <Header>
                    <ButtonIcon>
                        <Icon.SVG name="menu" size={20} color="#fff" />
                    </ButtonIcon>
                    <OptionsHeader>
                        <ButtonIcon>
                            <Icon.SVG name="notification" size={24} color="#fff" />
                        </ButtonIcon>
                        <ButtonIcon onPress={() => navigation.navigate(ROUTES.PROFILE)} >
                        <ImageProfile source={user.image ? { uri: user.image } : nullUser} style={{ left: 16 }} />
                        </ButtonIcon>
                    </OptionsHeader>
                </Header>
                <Title>Hello, Maria <Emoji name="wave" style={{ fontSize: 24 }} />
                </Title>
                <SubTitle>What do you wanna donate today?</SubTitle>
                <SearchContainer>
                    <SearchIcon>
                        <Icon.SVG name="search" size={24} color="#999" />
                    </SearchIcon>
                    <SearchInput placeholder="Search here" />
                    <ButtonIcon style={{ right: 16 }}>
                        <Icon.SVG name="microphone" size={24} color={theme.COLORS.WHITE} />
                    </ButtonIcon>
                    <ViewVertical style={{ right: 8 }} />
                    <ButtonIcon>
                        <Icon.SVG name="filter" size={24} color={theme.COLORS.WHITE} />
                    </ButtonIcon>
                </SearchContainer>
                <Banner>
                    <BannerImage source={banner} />
                    <BannerTitle>Do you really have{'\n'}a creative <BannerTitleGreen>idea?</BannerTitleGreen></BannerTitle>
                    <BannerButton>
                        <BannerButtonText>Start Campaign</BannerButtonText>
                    </BannerButton>
                </Banner>

                <TitleSection>Categories</TitleSection>
                <FlatList
                    data={categories}
                    renderItem={renderCategory}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: RFValue(10) }}
                />

                <TitleSection>My Campaign</TitleSection>
                <CampaignBox>
                    <CampaignImage source={campaign} />
                    <CampaignTitleContainer>
                        <CampaignTitle>Help sarah to defet ...</CampaignTitle>
                        <CampaignCategoryLabel>Medical</CampaignCategoryLabel>
                    </CampaignTitleContainer>
                    <CampaignDescription>Lorem ipsum dolor sit amet,adipisci consectetur adipisci ipsum dolor.....</CampaignDescription>
                    <CampaignProgressBar>
                        <ProgressBar
                            progress={donationProgress}
                            color={theme.COLORS.PRIMARY}
                            style={{ height: 8 }}
                        />
                    </CampaignProgressBar>
                    <ViewRow>
                        <ProgressText>Raised:{`R$ ${6000}`}</ProgressText>
                        <ProgressText>45%</ProgressText>
                    </ViewRow>
                    <CampaignButtonFavorite onPress={() => setIsFavorite(!isFavorite)}>
                        <Icon.SVG
                            name="heartFull"
                            size={20}
                            color={isFavorite ? theme.COLORS.EVENTS : theme.COLORS.PRIMARY}
                        />
                    </CampaignButtonFavorite>
                </CampaignBox>

            </Container>
        </ScrollView>
    )
}

export default Home;
