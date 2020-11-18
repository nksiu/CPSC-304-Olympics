import styled from "styled-components";

const PageWrapperSC = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
  }
  
  .container h5 {
    text-align: center;
  }

  .queryColumn {
    padding: 10px;
    width: 30%;
    text-align: center;
    background-color: white;
    height: 100vh;
  }

  .queryColumn p {
    padding-top: 15px;
  }

  .queryColumn button {
    margin-top: 15px;
  }

  .divForm {
    display: flex;
    flex-direction: column;
  }

  .first-btn {
    margin-top: 10px;
    margin-bottom: 10px;
  }

`

export default PageWrapperSC;