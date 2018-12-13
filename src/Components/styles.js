import { injectGlobal } from 'styled-components'

const styles = injectGlobal`
  body {
    color: #555;
    font-family: 'Roboto';
    font-size: 16px;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`

export default styles
