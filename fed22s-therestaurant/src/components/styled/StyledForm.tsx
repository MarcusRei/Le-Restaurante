import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 20px;
  background-color: #ffffffce;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 844px) {
    padding: 35px;
    width: 80%;
    background-color: #efeaea;
    position: relative;
    bottom: 90px;
    //justify-content: center;

    p {
      font-size: larger;
    }
  }
`;
