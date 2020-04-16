import React from "react";
import styled from "styled-components";

const Image = styled.img`
  /* background-image: url(${(props) => props.Bgimg}); */
  height: 30px;
  background-size: cover;
  border-radius: 4px;
  :not(:last-child){
      margin-right:5px;
  }
`;

const LogoContainer = styled.div`
  padding: 10px;
`;

const StyledSpan = styled.span`
  color: black;
  font-size: 16px;
  :not(:last-child) {
    margin-right: 10px;
  }
`;

const Logo = ({ data }) => {
  console.log("logo", data);
  return (
    <LogoContainer>
      {data && data.length > 1 ? (
        data.map((img) =>
          img.logo_path !== null ? (
            <Image src={`https://image.tmdb.org/t/p/w200${img.logo_path}`} />
          ) : (
            <StyledSpan>"{img.name}"</StyledSpan>
          ),
        )
      ) : data[0].logo_path !== null ? (
        <Image src={`https://image.tmdb.org/t/p/w200${data[0].logo_path}`} />
      ) : (
        <StyledSpan>"{data[0].name}"</StyledSpan>
      )}
    </LogoContainer>
  );
};

export default Logo;