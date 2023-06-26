import React, { useCallback, useEffect, useState } from "react";
import {
    Container,
    Title,
    CategoryContainer,
    CategoryTitle,
    MovieCard,
    MovieImage,
    MovieTitle,
    MovieReleaseYear,
} from "./styles";
import { FlatList, View, ScrollView } from "react-native";
import axios from "axios";

const API_KEY = '9994931148dcd78243ebdfbb0c024e5d';

const MovieList = () => {
    const [actionMovies, setActionMovies] = useState([]);
    const [romanceMovies, setRomanceMovies] = useState([]);
    const [animationMovies, setAnimationMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const fetchMovies = async () => {
        try {
            const actionResponse = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=28&api_key=${API_KEY}&page=${currentPage}&per_page=${pageSize}`
            );
            const romanceResponse = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=10749&api_key=${API_KEY}&page=${currentPage}&per_page=${pageSize}`
            );
            const animationResponse = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=16&api_key=${API_KEY}&page=${currentPage}&per_page=${pageSize}`
            );

            setActionMovies(actionResponse.data.results);
            setRomanceMovies(romanceResponse.data.results);
            setAnimationMovies(animationResponse.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const renderMovie = useCallback(({ item }) => (
        <MovieCard>
            <MovieImage
                source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
            />
            <View>
                <MovieTitle>{item.title}</MovieTitle>
                <MovieReleaseYear>
                    Release Year: {item.release_date.split("-")[0]}
                </MovieReleaseYear>
            </View>
        </MovieCard>
    ), []);

    return (
        <Container>
            <Title>Popular Movies</Title>
            <ScrollView removeClippedSubviews={true}>
                <CategoryContainer>
                    <CategoryTitle>Action</CategoryTitle>
                    <FlatList
                        data={actionMovies}
                        renderItem={renderMovie}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </CategoryContainer>
                <CategoryContainer>
                    <CategoryTitle>Romance</CategoryTitle>
                    <FlatList
                        data={romanceMovies}
                        renderItem={renderMovie}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </CategoryContainer>
                <CategoryContainer>
                    <CategoryTitle>Animation</CategoryTitle>
                    <FlatList
                        data={animationMovies}
                        renderItem={renderMovie}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </CategoryContainer>
            </ScrollView>
        </Container>
    );
};

export default MovieList;