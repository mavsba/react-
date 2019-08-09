import styled from 'styled-components'


export const HomeWarpper = styled.div`
  width:960px;
  margin:0 auto;
  overflow:hidden;
`


export const LeftContent = styled.div`
  width:625px;
  float:left;
  padding:30px 0 0 15px;
  .lunbo{
    width:625px;
    height:270px;
    border-radius:2px;
  }
`

export const RightContent = styled.div`
  width:280px;
  margin:0 auto;
  float:right;
  margin-left:40px;
`

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 0 10px;
	margin-left: -14px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 14px;
	margin-bottom: 18px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		border-radius: 4px;
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`


export const ListWarpper  = styled.div`
	margin:0;
	padding:20px 0;
	overflow: hidden;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`

export const ListItem = styled.div`
	width:470px;
  float:left;
	padding: 20px 0;
`


export const ListTitle = styled.div`
		margin: -7px 0 4px;
		display: inherit;
		font-size: 18px;
		font-weight: 700;
		line-height: 1.5;
	
`
export const ListInfo = styled.div`
		margin: 0 0 8px;
		font-size: 13px;
		line-height: 24px;
		color: #999;
`

export const Loading = styled.div`
		width: 100%;
		height: 40px;
		line-height: 40px;
		margin: 30px auto 60px;
		padding: 10px 15px;
		text-align: center;
		font-size: 15px;
		border-radius: 25px;
		color: #fff;
		background-color: #a5a5a5;
		display: block;
		cursor: pointer;
`

export const Top = styled.div`
		cursor: pointer;
		position: fixed;
		width:80px;
		height:40px;
		line-height:40px;
		text-align: center;
		right:20px;
		bottom:30px;
		border:1px solid #000;
		display:'none';
`