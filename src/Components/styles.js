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

  button.btn.btn-warning {
    background: #fab43d;
    border-radius: 3px;
    border: 0;
    color: white;
    font-size: 16px;
    min-width: 160px;
    padding: 10px;

    i {
      margin-right: 10px;
    }
  }

  .modal label:after {
    color: red;
    content: ' *';
  }
`

export default styles
