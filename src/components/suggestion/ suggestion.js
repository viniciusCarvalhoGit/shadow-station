import React, { Component } from 'react';
import './suggestion.css';
import styled, { keyframes } from 'styled-components'
import Inputs from '../inputs/inputs'

const Content = styled.div`
    display:${props => props.fade ? 'flex' : 'none'};;
    padding: 1em;
    position: relative;
    width: 50%;
    bottom: 460px;
    left: 33%;    
    border-radius: 5px;
    background-color: #f6f9ff;
    flex-direction: column;
    visibility: ${props => props.fade ? 'visible' : 'hidden'};
    animation: ${props => props.fade ? fadeIn : fadeOut} 0.60s linear;
    transition: visibility 0.60s linear;
    
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const FirstSuggestion = styled.div`
  display: inline-block;
  position: relative;
  padding: 15px;
`;

const SecondSuggestion = styled.div`
display: inline-block;
    position: relative;
    padding: 15px;
`;

const FinalSuggestion = styled.div`
    display: inline-block;
    position: relative;
    padding: 15px;
`;

const InputsContext = React.createContext(); 


 class Suggestion extends Component {

  render() {
    return (
    <Content fade={this.props.fade}>

          <FirstSuggestion>
            <p>Bom dia!</p>
            <p>Tudo bem com você?</p>
            <p>Eu me chamo current.user, faço parte do suporte do RD Station CRM e vou te ajudar com essa questão, ok?</p>
          </FirstSuggestion>

          <SecondSuggestion >

            <p>{this.props.clientType}</p>
            <p>{this.props.feature }</p>
            <p>{this.props.subject}</p>
          </SecondSuggestion>

          <FinalSuggestion>

            <p>Consegui te ajudar?</p>
            <p>Caso eu não tenha sido claro ou essa não era a sua dúvida, basta me chamar por aqui novamente que eu irei te ajudar!</p>
            <p>Se surgirem novas dúvidas diferentes deste assunto, basta abrir uma nova solicitação <a href="">clicando aqui.</a> :)</p> 
            <p>Abraços,</p>       
            
          </FinalSuggestion>

        </Content>
    );
  }
}

export default Suggestion;