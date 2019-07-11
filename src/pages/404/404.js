// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
// STYLED
import Global from '../../components/Styles/Global'
import { Wrapper, PageLink } from '../../components/Styles/Components'
// COMPONENTS
import SocialMediaItem from './components/SocialMediaItem'
// FILES
import snapchatLogo from '../../images/snapchat-icon.png'
import snapchatDescription from '../../images/snapchat-d.png'
import instagramLogo from '../../images/instagram-icon.png'
import instagramDescription from '../../images/instagram-d.png'
import wow from '../../images/wow.png'


const WorkElement = styled.div`
	color: var(--color-highlighted);
	width: 100vw;
`

const WorkTitle = styled.header`
	font-size: 35px;
	font-weight: bold;
	text-align: center;
	margin: 30px 0;
	@media(min-width: 720px) {
		font-size: 50px;
	}
	@media(max-height: 600px) {
		margin: 15px 0 0 0;
		font-size: 35px;
	}
	@media(max-height: 450px) {
		margin: 30px 0;
	}
	${props =>
		props.blur &&
		css`
			filter: blur(10px);
	`};
`

const WorkImage = styled.img`
	display: block;
	height: 50vh;
	max-height: 500px;
	max-height: 90vw;

	max-width: 500px;
	max-width: 90vw;
	margin: 0 auto;
	@media(max-height: 550px) {
		height: calc(100px + 2hmin);
	}
	@media(max-height: 450px) {
		display: none;
	}
`

const WorkDescription = styled.p`
	font-size: 20px;
	text-align: center;
	margin: 30px;
	@media(max-height: 600px) {
		margin: 20px;
	}
`

const SocialMediaWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`

class Work extends Component {
	render() {
		return (
			<>
				<Global />
				<Wrapper onClick={this.exit}>
					<WorkElement>
						<WorkTitle>Strona nie istnieje!</WorkTitle>
						<WorkImage src={wow} />
						<WorkDescription>Wychodzi na to, że strona nie istnieje! <PageLink content to='/'>Wróć do strony głównej</PageLink>, albo wpadnij na moje Social Media: </WorkDescription>
						<SocialMediaWrapper>
							<SocialMediaItem srcLogo={snapchatLogo} srcDescription={snapchatDescription} link="https://www.snapchat.com/add/szulcus104" />
							<SocialMediaItem srcLogo={instagramLogo} srcDescription={instagramDescription} link="https://www.instagram.com/easyword_app/?hl=pl" />
						</SocialMediaWrapper>
					</WorkElement>
				</Wrapper>
			</>
		);
	}
}

export default Work