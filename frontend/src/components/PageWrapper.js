import styled from "styled-components";

const PageWrapperSC = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
  }

  .container div {
    border: 1px black solid;
    padding: 10px;
    height: 100vh;
    background-color: white;
  }
  
  .container h5 {
    text-align: center;
  }

  .queryColumn {
    width: 30%;
    text-align: center;
  }

  .queryColumn p {
    padding-top: 15px;
  }

  .queryColumn button {
    margin-top: 15px;
  }

`

export default PageWrapperSC;