
document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
 
    botaoDeAcessibilidade.addEventListener('click', function (){
     botaoDeAcessibilidade.classList.toggle('rotacao-botao');
     opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
 
     const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
     botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
   
    })
 
     const aumentaFonteBotao = document.getElementById('aumentar-fonte');
     const diminuiFonteBotao = document.getElementById('diminuir-fonte');
     
     const alternaContraste = document.getElementById('alterna-contraste')
 
     let tamanhoAtualFonte = 1;
     Math II (Progr II) - 3º B Manha - Médio
     ALCIDES MUNHOZ, C E C-M-EF M
     Próximas atividades
     Nenhuma atividade para a próxima semana!
     
     Escreva um aviso para sua turma
     Math II (Progr II) - 3º B Manha - Médio
     ALCIDES MUNHOZ, C E C-M-EF M
     Próximas atividades
     Nenhuma atividade para a próxima semana!
     
     Escreva um aviso para sua turma
     
     Aviso: "Código até aula 8 abram os arquivos…"
     ROMULO JORGE LEITE PENA
     Criado em: 07:2007:20
     Código até aula 8
     Math II (Progr II) - 3º B Manha - Médio
     ALCIDES MUNHOZ, C E C-M-EF M
     Próximas atividades
     Nenhuma atividade para a próxima semana!
     
     Escreva um aviso para sua turma
     
     Aviso: "Código até aula 8 abram os arquivos…"
     ROMULO JORGE LEITE PENA
     Criado em: 07:2007:20
     Código até aula 8
     Math II (Progr II) - 3º B Manha - Médio
     ALCIDES MUNHOZ, C E C-M-EF M
     Próximas atividades
     Nenhuma atividade para a próxima semana!
     
     Escreva um aviso para sua turma
     
     Aviso: "Código até aula 8 abram os arquivos…"
     ROMULO JORGE LEITE PENA
     Criado em: 07:2007:20
     Código até aula 8
     
     abram os arquivos separados e copiem os códigos e colem nos arquivos do repositorio de vocês.
     
     index.txt
     Texto
     
     script.txt
     Texto
     
     styles.txt
     Texto
     
     Adicionar comentário para a turma...
     
     
     Aviso: "CÓDIGOS DO INDEX DA AULA 3 (BAIXE O…"
     ROMULO JORGE LEITE PENA
     Criado em: 19 de mar.19 de mar.
     CÓDIGOS DO INDEX DA AULA 3
     (BAIXE O ARQUIVO E COPIE DE DENTRO DELE)
     
     ACESSIBILIDADE AULA 3.txt
     Texto
     
     Adicionar comentário para a turma...
     
     document.addEventListener('DOMContentLoaded', function(){
         const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
         const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
      
         botaoDeAcessibilidade.addEventListener('click', function (){
          botaoDeAcessibilidade.classList.toggle('rotacao-botao');
          opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
      
          const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
          botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
        
         })
      
          const aumentaFonteBotao = document.getElementById('aumentar-fonte');
          const diminuiFonteBotao = document.getElementById('diminuir-fonte');
          
          const alternaContraste = document.getElementById('alterna-contraste')
      
          let tamanhoAtualFonte = 1;
      
          aumentaFonteBotao.addEventListener('click', function(){
              tamanhoAtualFonte += 0.1;
              document.body.style.fontSize = `${tamanhoAtualFonte}rem`
      
          })
      
          diminuiFonteBotao.addEventListener('click', function(){
              tamanhoAtualFonte -= 0.1;
              document.body.style.fontSize = `${tamanhoAtualFonte}rem`
      
          })
      
          alternaContraste.addEventListener('click', function(){
              document.body.classList.toggle('alto-contraste')
          })
       
      })
     
      ScrollReveal().reveal('#inicio', { delay: 500 });
      ScrollReveal().reveal('#tropicalia', { delay: 500 });
      ScrollReveal().reveal('#galeria', { delay: 500 });
      ScrollReveal().reveal('#contato', { delay: 500 });
     
     abram os arquivos separados e copiem os códigos e colem nos arquivos do repositorio de vocês.
     
     index.txt
     Texto
     
     script.txt
     Texto
     
     styles.txt
     Texto
     
     Adicionar comentário para a turma...
     
     
     Aviso: "CÓDIGOS DO INDEX DA AULA 3 (BAIXE O…"
     ROMULO JORGE LEITE PENA
     Criado em: 19 de mar.19 de mar.
     CÓDIGOS DO INDEX DA AULA 3
     (BAIXE O ARQUIVO E COPIE DE DENTRO DELE)
     
     ACESSIBILIDADE AULA 3.txt
     Texto
     
     Adicionar comentário para a turma...
     
     document.addEventListener('DOMContentLoaded', function(){
         const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
         const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
      
         botaoDeAcessibilidade.addEventListener('click', function (){
          botaoDeAcessibilidade.classList.toggle('rotacao-botao');
          opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
      
          const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
          botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
        
         })
      
          const aumentaFonteBotao = document.getElementById('aumentar-fonte');
          const diminuiFonteBotao = document.getElementById('diminuir-fonte');
          
          const alternaContraste = document.getElementById('alterna-contraste')
      
          let tamanhoAtualFonte = 1;
      
          aumentaFonteBotao.addEventListener('click', function(){
              tamanhoAtualFonte += 0.1;
              document.body.style.fontSize = `${tamanhoAtualFonte}rem`
      
          })
      
          diminuiFonteBotao.addEventListener('click', function(){
              tamanhoAtualFonte -= 0.1;
              document.body.style.fontSize = `${tamanhoAtualFonte}rem`
      
          })
      
          alternaContraste.addEventListener('click', function(){
              document.body.classList.toggle('alto-contraste')
          })
       
      })
     
      ScrollReveal().reveal('#inicio', { delay: 500 });
      ScrollReveal().reveal('#tropicalia', { delay: 500 });
      ScrollReveal().reveal('#galeria', { delay: 500 });
      ScrollReveal().reveal('#contato', { delay: 500 });
     
     abram os arquivos separados e copiem os códigos e colem nos arquivos do repositorio de vocês.
     
     index.txt
     Texto
     
     script.txt
     Texto
     
     styles.txt
     Texto
     
     Adicionar comentário para a turma...
     
     
     Aviso: "CÓDIGOS DO INDEX DA AULA 3 (BAIXE O…"
     ROMULO JORGE LEITE PENA
     Criado em: 19 de mar.19 de mar.
     CÓDIGOS DO INDEX DA AULA 3
     (BAIXE O ARQUIVO E COPIE DE DENTRO DELE)
     
     ACESSIBILIDADE AULA 3.txt
     Texto
     
     Adicionar comentário para a turma...
     
     document.addEventListener('DOMContentLoaded', function(){
         const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
         const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
      
         botaoDeAcessibilidade.addEventListener('click', function (){
          botaoDeAcessibilidade.classList.toggle('rotacao-botao');
          opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
      
          const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
          botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
        
         })
      
          const aumentaFonteBotao = document.getElementById('aumentar-fonte');
          const diminuiFonteBotao = document.getElementById('diminuir-fonte');
          
          const alternaContraste = document.getElementById('alterna-contraste')
      
          let tamanhoAtualFonte = 1;
      
          aumentaFonteBotao.addEventListener('click', function(){
              tamanhoAtualFonte += 0.1;
              document.body.style.fontSize = `${tamanhoAtualFonte}rem`
      
          })
      
          diminuiFonteBotao.addEventListener('click', function(){
              tamanhoAtualFonte -= 0.1;
              document.body.style.fontSize = `${tamanhoAtualFonte}rem`
      
          })
      
          alternaContraste.addEventListener('click', function(){
              document.body.classList.toggle('alto-contraste')
          })
       
      })
     
      ScrollReveal().reveal('#inicio', { delay: 500 });
      ScrollReveal().reveal('#tropicalia', { delay: 500 });
      ScrollReveal().reveal('#galeria', { delay: 500 });
      ScrollReveal().reveal('#contato', { delay: 500 });
     
     Aviso: "Código até aula 8 abram os arquivos…"
     ROMULO JORGE LEITE PENA
     Criado em: 07:2007:20
     Código até aula 8
     
     abram os arquivos separados e copiem os códigos e colem nos arquivos do repositorio de vocês.
     
     index.txt
     Texto
     
     script.txt
     Texto
     
     styles.txt
     Texto
     
     Adicionar comentário para a turma...
     
     
     Aviso: "CÓDIGOS DO INDEX DA AULA 3 (BAIXE O…"
     ROMULO JORGE LEITE PENA
     Criado em: 19 de mar.19 de mar.
     CÓDIGOS DO INDEX DA AULA 3
     (BAIXE O ARQUIVO E COPIE DE DENTRO DELE)
     
     ACESSIBILIDADE AULA 3.txt
     Texto
     
     Adicionar comentário para a turma...
     
     document.addEventListener('DOMContentLoaded', function(){
         const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
         const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
      
         botaoDeAcessibilidade.addEventListener('click', function (){
          botaoDeAcessibilidade.classList.toggle('rotacao-botao');
          opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
      
          const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
          botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
        
         })
      
          const aumentaFonteBotao = document.getElementById('aumentar-fonte');
          const diminuiFonteBotao = document.getElementById('diminuir-fonte');
          
          const alternaContraste = document.getElementById('alterna-contraste')
      
          let tamanhoAtualFonte = 1;
      
          aumentaFonteBotao.addEventListener('click', function(){
              tamanhoAtualFonte += 0.1;
              document.body.style.fontSize = `${tamanhoAtualFonte}rem`
      
          })
      
          diminuiFonteBotao.addEventListener('click', function(){
              tamanhoAtualFonte -= 0.1;
              document.body.style.fontSize = `${tamanhoAtualFonte}rem`
      
          })
      
          alternaContraste.addEventListener('click', function(){
              document.body.classList.toggle('alto-contraste')
          })
       
      })
     
      ScrollReveal().reveal('#inicio', { delay: 500 });
      ScrollReveal().reveal('#tropicalia', { delay: 500 });
      ScrollReveal().reveal('#galeria', { delay: 500 });
      ScrollReveal().reveal('#contato', { delay: 500 });
 
     aumentaFonteBotao.addEventListener('click', function(){
         tamanhoAtualFonte += 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`
 
     })
 
     diminuiFonteBotao.addEventListener('click', function(){
         tamanhoAtualFonte -= 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`
 
     })
 
     alternaContraste.addEventListener('click', function(){
         document.body.classList.toggle('alto-contraste')
     })
  
 })

 ScrollReveal().reveal('#inicio', { delay: 500 });
 ScrollReveal().reveal('#tropicalia', { delay: 500 });
 ScrollReveal().reveal('#galeria', { delay: 500 });
 ScrollReveal().reveal('#contato', { delay: 500 });
