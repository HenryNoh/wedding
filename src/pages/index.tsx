import React from 'react'
import { Top, Desc, Gallery, Container, Wrapper, Call, Invitaion, InvitaionDesc } from '@/pages/style'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

const index = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 4000,
		autoplaySpeed: 4000,
		cssEase: 'linear',
		pauseOnHover: true,
	}
	return (
		<Container>
			<Wrapper>
				<Top>
					<span className="desc">DATE</span>
					<span className="month">08</span>
					<span className="dash">/</span>
					<span className="date">28</span>
					<Image className="sign" src="/sign.png" width={192} height={130} alt="/sign.png" />
				</Top>
				<Image className="main1" src="/main1.jpg" width={360} height={360} alt="/main1.jpg" />
				<Desc>
					노태일 + 김유정
					<span>헤리움 웨딩홀에서 결혼합니다.</span>
				</Desc>
				<Gallery>GALLERY</Gallery>
				<Slider {...settings}>
					<div>
						<Image src="/slider/slider1.jpg" width={320} height={320} alt="/main1.jpg" />
					</div>
					<div>
						<Image src="/slider/slider2.jpg" width={320} height={320} alt="/main1.jpg" />
					</div>
					<div>
						<Image src="/slider/slider3.jpg" width={320} height={320} alt="/main1.jpg" />
					</div>
					<div>
						<Image src="/slider/slider4.jpg" width={320} height={320} alt="/main1.jpg" />
					</div>
					<div>
						<Image src="/slider/slider5.jpg" width={320} height={320} alt="/main1.jpg" />
					</div>
					<div>
						<Image src="/slider/slider6.jpg" width={320} height={320} alt="/main1.jpg" />
					</div>
					<div>
						<Image src="/slider/slider7.jpg" width={320} height={320} alt="/main1.jpg" />
					</div>
				</Slider>
				<Call>
					<div className="wrapper">
						<div className="call broom"></div>
						<div className="text">
							<div className="wrapper">
								<span style={{ color: 'dimgrey' }}>BROOM</span>
								신랑에게 전화하기
							</div>
						</div>
					</div>
					<div className="wrapper">
						<div className="call bride"></div>
						<div className="text">
							<div className="wrapper">
								<span style={{ color: 'darkgray' }}>BRIDE</span>
								신부에게 전화하기
							</div>
						</div>
					</div>
				</Call>
				<Invitaion>INVITAION</Invitaion>
				<InvitaionDesc>
					<span className="title">태일 & 유정</span>
					<span className="desc">
						두 사람이 만나
						<br />
						하나의 매듭이 되고
						<br />
						하나의 길이 되어
						<br />
						하나의 보금자리를 이루려 합니다.
						<br />
						변함없는 믿음과 사랑으로
						<br />
						축복해 주십시오
					</span>
					<span className="hall">
						2025년 8월 28일(토) 낮 11:00
						<br />
						헤리움 웨딩홀
					</span>
				</InvitaionDesc>
			</Wrapper>
		</Container>
	)
}

export default index
