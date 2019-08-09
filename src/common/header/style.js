import styled from 'styled-components'
import logo from '../../statics/logo.png'

export const  HeaderWrapper = styled.div`
  width:100%;
  height:58px;
  border-bottom:1px solid #f0f0f0;
  position:relative;
  padding:0 145px;
  box-sizing: border-box;
  display:flex;
  justify-content:center;
  align-items:center
  
`

export const  Logo = styled.div`
  width:100px;
  height:56px;
  background:url(${logo});
  background-size:100% 100%;
`
export const  Nav = styled.div`
  width:1260px;
  height:100%;
  margin:0 auto;
`

export const  NavItem = styled.div`
  cursor: pointer;
  font-size:22px;
  padding:15px;
  &.active{
    color:#ea6f5a
  }
  &.left{
    float:left
  }
  &.right{
    float:right;
    color:#969696
  }
`

export const  Search = styled.input`
  width:178px;
  height:38px;
  line-height:38px;
  border-radius:16px;
  background:#eee;
  border:none;
  outline:none;
  margin-top:10px;
  padding:0 20px;
  box-sizing:border-box;
  margin-left:10px;
  transition:.2s;
  &.focused{
    width:288px;
  }
  &::placeholder{
    color:#777;
  }
`

export const  SearchWrapper = styled.div`
  float:left;
  position:relative;
  .fade-enter {
    transition:1s ease-in;
  }
  .fade-enter-active {
    width:288px
  }
  .fade-exit {
    transition:.2s;
  }
  .fade-exit-active {
    width:178px;
  }
  .zoom{
    transition:.2s;
    fontSize:28px;
    line-height:30px;
    text-align:center;
    width:30px;
    background:#eee;
    border-radius:50%;
    position:absolute;
    right:10px;
    bottom:5px;
    &.focused{
      background:#ccc;
      right:5px;
    }
  }
`

export const InfoWrapper =styled.div`
  display:block;
  width:230px;
  padding: 20px 20px 10px;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  overflow:hidden;
  background:#fff;
  margin-top:10px;
  margin-left:15px;
  border-radius:5px;
  &::after{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    top:35px;
    bottom: 99%;
  }
  &.active{
    display:none;
  }
`
export const InfoHeader =styled.div`
  color:#969696;
  height: 20px;
  line-height:20px;
  margin-bottom: 20px;
  font-size:14px;
`


export const InfoSwitch =styled.div`
  float:right;
  font-size:12px;
  cursor: pointer;
  .spin{
    float:left
    display:block;
    font-size:12px;
    transform:rotate(0deg);
    transition: 1s;
  }
`

export const InfoItemWarpper =styled.div`
  margin-top:10px
`

export const InfoItem =styled.a`
  display:block;
  float:left;
  padding:0 5px;
  font-size:12px;
  border: 1px solid #ddd;
  color:#969696;
  border-radius:2px;
  margin-right:10px;
  margin-bottom:10px;

`

export const Addition =styled.div`
  width:300px;
  height:58px;
  overflow:hidden;
`

export const Button =styled.div`
  cursor: pointer;
  margin-top:6px;
  float:right;
  height:30px;
  line-height:30px;
  border:1px solid rgba(236,97,73,.7);
  padding: 6px 20px ;
  border-radius: 28px;
  color:#fff;
 &.reg{
    color:rgba(236,97,73,.7);
    transition:1s;
    margin-right:10px;
    &:hover{
      background:rgba(236,97,73,.05);
    }
  } 
 &.bg{
  background:rgba(236,97,73,.7);
} 

  
`