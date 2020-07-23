import styled from 'styled-components/native';
export const Container = styled.View`
    margin-top:25px;
    padding:0 16px;
`;
export const Header = styled.View`
    
    
    justify-content:center;
`;
export const Title = styled.Text`

    font-size:18px;
    color:#fff;
    font-weight:bold
`;

export const Card =styled.View`
    margin-top:20px;
    border-radius:8px;
    background-color:#1e222b;
`;

export const CardHeader =styled.View`
    flex-direction:row;
    align-items:center

`;

export const Description =styled.Text`
    color:#fff;
    font-size:16px;
    padding:15px;
    margin-left:15px
`;

export const Avatar =styled.Image``;

export const Bold =styled.Text`
color:#fff;
font-weight:bold;
`;

export const CardBody =styled.View`
    margin-top:20px;
`;
export const Username =styled.Text`
    color:#fff;
    font-size:20px;
`;

export const CardFooter = styled.View`
    margin-top:15px;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;
`;
export const Details = styled.Text``;

export const Value = styled.Text`
    color:red;
    font-size:14px;
    font-weight:bold;
    margin-right:10px;  
`;
export const Divider = styled.View`
width:2px;
height:13px;
margin: 0 10px;
background:rgba(255,255,255,0.4);
margin-left:10px;  

`;
export const Date = styled.Text`
color:#fff;
margin-left:10px;              

`;
export const Actions = styled.View`
flex-direction:row;
`;

export const Option = styled.TouchableOpacity`
flex-direction:row; 
margin-left:15px;  
`;
export const OptionLabel = styled.Text`
    color:#fff;
    font-size:14px;
    margin-left:5px;
`;