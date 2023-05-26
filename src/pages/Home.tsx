import React, { useLayoutEffect, useState } from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider, FlatList } from "native-base";
import { Card } from '../components/Card/Card';

function Home() {
	let tag: string = "PHOTOS";
	let titulo: string = "The Garden City";
	let dataDePublicacao: string = "Hoje";
	let texto: string = "Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife.";
	let tempoMedioLeitura: string = "6 mins ago";
	let imagem: string = "https://reactnative.dev/img/tiny_logo.png";
	let imagem2: string = "https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png";
	let teste = [0,1,2,3,4,5,6];
	return (
		<NativeBaseProvider >
			<Box safeArea alignItems="center">
				<Heading>Notícias</Heading>
				<FlatList
				data={teste}
				renderItem={({ item }) => (
					<Card tag={tag} titulo={titulo} dataDePublicacao={dataDePublicacao} texto={texto} tempoMedioLeitura={tempoMedioLeitura} imagem={imagem} />
				)}
				/>
			</Box>
		</NativeBaseProvider>
	);
}

export default Home;