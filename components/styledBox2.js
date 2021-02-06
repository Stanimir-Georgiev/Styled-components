import styled from "styled-components";

const TwoWrapper = styled.div`
  display: flex;
  align-items: center;
  backgroud: white;
`;

const TwoBoxHeading = styled.h1`
  font-size: 5em;
  color: pink;
  margin-bottom: 3em;
`;

const TwoBoxContent = styled.p`
  font-size: 3em;
  color: purple;
`;

const StyledBox2 = () => {
  return (
    <TwoWrapper>
      <TwoBoxHeading>Second Heading</TwoBoxHeading>
      <TwoBoxContent>Second Content</TwoBoxContent>
    </TwoWrapper>
  );
};

export default StyledBox2;
