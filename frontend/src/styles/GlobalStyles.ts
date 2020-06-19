import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: var(--gray6);
    font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
  }

  :root {
    --gray1: #383737;
    --gray2: #5c5a5a;
    --gray3: #857c81;
    --gray4: #b9b9b9;
    --gray5: #e3e2e2;
    --gray6: #f7f8fa;
    --primary1: #681c41;
    --primary2: #824c67;
    --accent1: #dbb365;
    --accent2: #efd197;
  }
`;