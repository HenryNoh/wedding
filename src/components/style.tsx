import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 375px;
	height: 100%;
	padding-bottom: 50px;
	overflow-y: auto;
	overflow-x: hidden;
	background-color: rgba(255, 248, 220, 0.3);

	.slick-slide {
		padding: 20px;

		img {
			border-radius: 10px;
		}
	}
`
export const Top = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 160px;
	padding: 30px;
	color: #181441;
	margin-bottom: 20px;

	span {
		width: 34px;
		height: 24px;
		margin-bottom: 10px;
		font-size: 24px;
		color: #181441;
	}
	.desc {
		font-size: 14px;
	}
	.dash {
		margin-left: 10px;
	}
	.sign {
		position: relative;
		top: -50px;
		left: 50%;
	}
`
export const Desc = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	margin-bottom: 60px;
	width: 360px;
	font-size: 24px;

	span {
		margin-top: 20px;
		font-size: 20px;
	}
`
export const Gallery = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	border-bottom: 1px solid black;
	margin: 20px 0 0 20px;
	width: 340px;
	font-size: 16px;
	line-height: 40px;
`
export const Call = styled.div`
	margin-top: 30px;
	display: flex;
	justify-content: space-between;
	height: 100px;
	width: 100%;
	padding: 10px;
	margin-bottom: 60px;

	.wrapper {
		display: flex;
		flex-direction: row;
		height: 50px;
		width: 50%;

		.call {
			display: flex;
			width: 40px;
			height: 50px;
		}
		.broom {
			background-color: dimgrey;
		}
		.bride {
			background-color: darkgray;
		}
		.text {
			display: flex;
			width: 120px;
			height: 50px;
			background-color: ghostwhite;

			.wrapper {
				display: flex;
				flex-direction: column;
				border-top: 1px solid black;
				width: 120px;
				height: 40px;
				margin-top: 9px;
				padding-left: 10px;
				line-height: 20px;
				span {
					font-size: 11px;
					font-weight: bold;
				}
			}
		}
	}
`

export const Invitaion = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	border-bottom: 1px solid black;
	margin: 20px 0 0 20px;
	width: 340px;
	font-size: 16px;
	line-height: 40px;
`

export const InvitaionDesc = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 360px;
	height: 100%;
	margin-top: 20px;
	background-color: ghostwhite;

	.title {
		font-size: 18px;
		font-weight: bold;
		margin: 30px;
		line-height: 20px;
	}

	.desc {
		display: flex;
		text-align: center;
		font-size: 16px;
		font-weight: 500;
		margin: 0 30px 30px 30px;
		line-height: 30px;
	}
	.hall {
		display: flex;
		justify-content: center;
		text-align: center;
		background-color: #444444;
		width: 360px;
		padding: 20px;
		color: white;
		font-size: 14px;
		font-weight: 500;
		line-height: 25px;
	}
`
