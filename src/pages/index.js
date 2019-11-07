import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Wrapper} from '../components/Styled/Global/global'
import roadSignsBookImage from '../images/road-signs-book.png'
import irregularVerbsBookImage from '../images/irregular-verbs-book.png'
import Preloader from '../components/App/Preloader'

const HelpTrigger = styled.div`
	position: absolute;
	right: 20px;
	bottom: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	background-color: var(--color-dark);
	border-radius: 100%;
	z-index: 2;
	:hover {
		cursor: pointer;
	}
`

const Help = styled(Link)`
	text-decoration: none;
	color: var(--color-decorative);
	font-weight: bold;
`

const PageHeader = styled.header`
	width: 90vw;
	font-size: 20px;
	font-weight: bold;
	letter-spacing: 2px;
	color: lightgray;
	margin: 30px 0;

	p {
		margin: 0;
		font-weight: normal;
		letter-spacing: 0;
	}
`;


const Logo = styled.span`
	display: block;
	color: snow;
	font-size: 50px;

	span {
		color: gold;
	}
`

const LogoSeparator = styled.hr`
	max-width: 1200px;
	height: 0;
	border: solid 0.5px var(--color-decorative);
`;

const Separator = styled.hr`
	display: block;
	width: calc(100vw - 100px);
	max-width: 700px;
	clip-path: polygon(10% 0, 90% 0, 100% 100%, 0 100%);
	border: none;
	border-bottom: solid 1px var(--color-decorative);
	margin-bottom: 50px;
`;

const BooksWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const Book = styled.div`
	width: 200px;
	height: calc(1.41 * 200px);
	margin: 30px;
	position: relative;
	
	::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-shadow: 0 0 30px gray;
		opacity: 0;
		transition: all .2s ease;
		z-index: -1;
	}

	:hover::before {
		opacity: 1;
	}

	img {
		width: 100%;
		height: 100%;
	}
`;
class IndexPage extends Component {
	state = {
		load: false
	}
	componentDidMount() {
		this.setState({load: true})
	}
	render() {
		return (
			<>
				<Preloader load={this.state.load}/>
				<Wrapper center scroll>
					<HelpTrigger>
						<Help to='/editor'>?</Help>
					</HelpTrigger>
					<PageHeader>
						<Logo><span>E</span>asy<span>W</span>ord</Logo>
						<LogoSeparator/>
						<p>aplikacja do nauki słówek i definicji</p>
					</PageHeader>
					<BooksWrapper>
						<Book>
							<Link to='/macmillan'>
								<img src="https://www.macmillan.pl/components/com_ssshop/cache/500x500/9788376218496.png" alt="Macmillan Education"/>
							</Link>
						</Book>
						<Book>
							<Link to='/wsip'>
								<img src="https://sklep.wsip.pl/uploads/tx_evosenk/covers/upload_temp_tF8lhB.jpg" alt="test"/>
							</Link>
						</Book>
						<Book>
							<Link to='/oxford'>
								<img src="https://www.gandalf.com.pl/o/oxford-solutions-intermediate,big,578379.jpg" alt="Oxford Solutions Intermediate"/>
							</Link>
						</Book>
					</BooksWrapper>
					<Separator/>
					<BooksWrapper>
						<Book>
							<Link to='/znaki-drogowe'>
								<img src={roadSignsBookImage} alt="Znaki drogowe. Okładka wykonana przeze mnie z pomocą pxhere"/>
							</Link>
						</Book>
						<Book>
							<Link to='/czasowniki-nieregularne'>
								<img src={irregularVerbsBookImage} alt="Czasowniki nieregularne. Okładka wykonana przeze mnie z pomocą pxhere"/>
							</Link>
						</Book>
					</BooksWrapper>
					<Separator/>
				</Wrapper>
			</>
		)
	}
}

export default IndexPage