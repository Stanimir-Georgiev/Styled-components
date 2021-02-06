import styled from "styled-components";

const Test = styled.div`
  display: block;
`;

const TestHeading = styled.h2`
  font-size: 2em;
  color: orange;
  margin-bottom: 1em;
`;

const TestContent = styled.p`
  font-size: 1em;
  color: white;
`;

const StyledBox1 = () => (
  <Test>
    <TestHeading>Hello</TestHeading>
    <TestContent>Content</TestContent>
  </Test>
);

export default StyledBox1;
