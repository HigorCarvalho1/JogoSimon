const primeiracor = document.querySelector('.primeiracor')
const segundacor = document.querySelector('.segundacor')
const terceiracor = document.querySelector('.terceiracor')
const quartacor = document.querySelector('.quartacor')
const caixas = document.querySelector('.caixas')
const start = document.querySelector('.button')
const imagem = document.querySelector('.imagem')
const main = document.querySelector('main')
const soundClick =  new Audio('./sounds/button.wav')
const fase =  new Audio('./sounds/fase.mp3')

let capturando = []

let image = [
    primeiracor,
    segundacor,
    terceiracor,
    quartacor
]
let sequencia = 0
let contadordeclicks = 0
let listamaquina = []
let listajogador = []

jogo()

function jogo() {
    shuffleArray(image)
    start.addEventListener('click', () => {
    soundClick.play()
      sequencia++;
      console.log(sequencia);
  
      if (sequencia === 1) {
        setTimeout(fase0,1000);
        setTimeout(fase00, 1300);
        listamaquina.push(image[0].dataset.action);
        
  
        caixas.addEventListener('click', clickHandler);
      }
  
      if (sequencia === 2) {
        setTimeout(fase0,1000);
        setTimeout(fase00, 1300);
        setTimeout(fase1, 1600);
        setTimeout(fase11, 1900);
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[1].dataset.action);
  
        caixas.addEventListener('click', clickHandler);
      }
      if (sequencia === 3) {
        setTimeout(fase0,1000);
        setTimeout(fase00, 1300);
        setTimeout(fase1, 1600);
        setTimeout(fase11, 1900);
        setTimeout(fase3, 2200)
        setTimeout(fase33, 2500)
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[1].dataset.action);
        listamaquina.push(image[3].dataset.action);
  
        caixas.addEventListener('click', clickHandler);
      }
      if (sequencia === 4) {
        setTimeout(fase0,1000);
        setTimeout(fase00, 1300);
        setTimeout(fase1, 1600);
        setTimeout(fase11, 1900);
        setTimeout(fase3, 2200)
        setTimeout(fase33, 2500)
        setTimeout(fase1, 2800)
        setTimeout(fase11, 3100);
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[1].dataset.action);
        listamaquina.push(image[3].dataset.action);
        listamaquina.push(image[1].dataset.action);
  
        caixas.addEventListener('click', clickHandler);
      }
      if (sequencia === 5) {
        setTimeout(fase0,1000);
        setTimeout(fase00, 1300);
        setTimeout(fase1, 1600);
        setTimeout(fase11, 1900);
        setTimeout(fase3, 2200)
        setTimeout(fase33, 2500)
        setTimeout(fase1, 2800)
        setTimeout(fase11, 3100);
        setTimeout(fase2,3400 )
        setTimeout(fase22, 3700)
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[1].dataset.action);
        listamaquina.push(image[3].dataset.action);
        listamaquina.push(image[1].dataset.action);
        listamaquina.push(image[2].dataset.action);
  
        caixas.addEventListener('click', clickHandler);
      }
    
      if (sequencia === 6) {
        setTimeout(fase0,1000);
        setTimeout(fase00, 1300);
        setTimeout(fase1, 1600);
        setTimeout(fase11, 1900);
        setTimeout(fase3, 2200)
        setTimeout(fase33, 2500)
        setTimeout(fase1, 2800)
        setTimeout(fase11, 3100);
        setTimeout(fase2,3400 )
        setTimeout(fase22, 3700)
        setTimeout(fase0,4000 )
        setTimeout(fase00, 4300)
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[1].dataset.action);
        listamaquina.push(image[3].dataset.action);
        listamaquina.push(image[1].dataset.action);
        listamaquina.push(image[2].dataset.action);
        listamaquina.push(image[0].dataset.action);
  
        caixas.addEventListener('click', clickHandler);
      }
      if (sequencia === 7) {
        setTimeout(fase0,1000);
        setTimeout(fase00, 1300);
        setTimeout(fase1, 1600);
        setTimeout(fase11, 1900);
        setTimeout(fase3, 2200)
        setTimeout(fase33, 2500)
        setTimeout(fase1, 2800)
        setTimeout(fase11, 3100);
        setTimeout(fase2,3400 )
        setTimeout(fase22, 3700)
        setTimeout(fase0,4000 )
        setTimeout(fase00, 4300)
        setTimeout(fase0,4600 )
        setTimeout(fase00, 4900)
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[1].dataset.action);
        listamaquina.push(image[3].dataset.action);
        listamaquina.push(image[1].dataset.action);
        listamaquina.push(image[2].dataset.action);
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[0].dataset.action);
  
        caixas.addEventListener('click', clickHandler);
      }
      if (sequencia === 8) {
        setTimeout(fase0,1000);
        setTimeout(fase00, 1300);
        setTimeout(fase1, 1600);
        setTimeout(fase11, 1900);
        setTimeout(fase3, 2200)
        setTimeout(fase33, 2500)
        setTimeout(fase1, 2800)
        setTimeout(fase11, 3100);
        setTimeout(fase2,3400 )
        setTimeout(fase22, 3700)
        setTimeout(fase0,4000 )
        setTimeout(fase00, 4300)
        setTimeout(fase0,4600 )
        setTimeout(fase00, 4900)
        setTimeout(fase3,5200 )
        setTimeout(fase33, 5500)
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[1].dataset.action);
        listamaquina.push(image[3].dataset.action);
        listamaquina.push(image[1].dataset.action);
        listamaquina.push(image[2].dataset.action);
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[3].dataset.action);
  
        caixas.addEventListener('click', clickHandler);
      }
      if (sequencia === 9) {
        setTimeout(fase0,1000);
        setTimeout(fase00, 1300);
        setTimeout(fase1, 1600);
        setTimeout(fase11, 1900);
        setTimeout(fase3, 2200)
        setTimeout(fase33, 2500)
        setTimeout(fase1, 2800)
        setTimeout(fase11, 3100);
        setTimeout(fase2,3400 )
        setTimeout(fase22, 3700)
        setTimeout(fase0,4000 )
        setTimeout(fase00, 4300)
        setTimeout(fase0,4600 )
        setTimeout(fase00, 4900)
        setTimeout(fase3,5200 )
        setTimeout(fase33, 5500)
        setTimeout(fase2,5800 )
        setTimeout(fase22, 6100)
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[1].dataset.action);
        listamaquina.push(image[3].dataset.action);
        listamaquina.push(image[1].dataset.action);
        listamaquina.push(image[2].dataset.action);
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[3].dataset.action);
        listamaquina.push(image[2].dataset.action);
        
  
        caixas.addEventListener('click', clickHandler);
      }
      if (sequencia === 10) {
        setTimeout(fase0,1000);
        setTimeout(fase00, 1300);
        setTimeout(fase1, 1600);
        setTimeout(fase11, 1900);
        setTimeout(fase3, 2200)
        setTimeout(fase33, 2500)
        setTimeout(fase1, 2800)
        setTimeout(fase11, 3100);
        setTimeout(fase2,3400 )
        setTimeout(fase22, 3700)
        setTimeout(fase0,4000 )
        setTimeout(fase00, 4300)
        setTimeout(fase0,4600 )
        setTimeout(fase00, 4900)
        setTimeout(fase3,5200 )
        setTimeout(fase33, 5500)
        setTimeout(fase2,5800 )
        setTimeout(fase22, 6100)
        setTimeout(fase2,6300 )
        setTimeout(fase22, 6600)
       
       
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[1].dataset.action);
        listamaquina.push(image[3].dataset.action);
        listamaquina.push(image[1].dataset.action);
        listamaquina.push(image[2].dataset.action);
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[3].dataset.action);
        listamaquina.push(image[2].dataset.action);
        listamaquina.push(image[2].dataset.action);
  
        caixas.addEventListener('click', clickHandler);
      }
      if (sequencia === 11) {
        setTimeout(fase0,1000);
        setTimeout(fase00, 1300);
        setTimeout(fase1, 1600);
        setTimeout(fase11, 1900);
        setTimeout(fase3, 2200)
        setTimeout(fase33, 2500)
        setTimeout(fase1, 2800)
        setTimeout(fase11, 3100);
        setTimeout(fase2,3400 )
        setTimeout(fase22, 3700)
        setTimeout(fase0,4000 )
        setTimeout(fase00, 4300)
        setTimeout(fase0,4600 )
        setTimeout(fase00, 4900)
        setTimeout(fase3,5200 )
        setTimeout(fase33, 5500)
        setTimeout(fase2,5800 )
        setTimeout(fase22, 6100)
        setTimeout(fase2,6300 )
        setTimeout(fase22, 6600)
        setTimeout(fase1,6900 )
        setTimeout(fase11, 7200)
      
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[1].dataset.action);
        listamaquina.push(image[3].dataset.action);
        listamaquina.push(image[1].dataset.action);
        listamaquina.push(image[2].dataset.action);
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[0].dataset.action);
        listamaquina.push(image[3].dataset.action);
        listamaquina.push(image[2].dataset.action);
        listamaquina.push(image[2].dataset.action);
        listamaquina.push(image[1].dataset.action);
        
  
        caixas.addEventListener('click', clickHandler);
      }
      
      if (sequencia > 11) {
        document.querySelector('.buttonImg').textContent = "Parabéns Você Finalizou o Jogo"
        sequencia = 0
      }
    })
  }
  
  function clickHandler(event) {
    contadordeclicks++;

  function checkar(){

      if (contadordeclicks <= sequencia) {
        listajogador.push(event.target.dataset.action);
        console.log(listajogador);
    
        if (listajogador.length === sequencia) {
          // Verifica se a sequência do jogador é igual à sequência da máquina
          if (
            listajogador.every((element, index) => element === listamaquina[index])
            //every é um elemento que percorre cada item de um array 
          ) {
            console.log('maravilhoso');
            returnColor()
            imagem.classList.remove('fundo')
            main.classList.add('fundo2')
            fase.playbackRate = 1.3
            fase.play()
            setTimeout(segundapagina, 1500)
            document.querySelector('.buttonImg').textContent = "INICIAR RODADA "

            
          } else {
            console.log('melhorou');
            returnColor()
            document.querySelector('.buttonImg').textContent = "Tente Novamente "
            sequencia--
          }
    
          // Limpa as listas e reinicia
          contadordeclicks = 0;
          listajogador = [];
          listamaquina = [];
        }
        
    }
}
        setTimeout(checkar, 1000)
}
  
    

        
 function fase0(){
    image[0].classList.add('light')
 }
 function fase00(){
    image[0].classList.remove('light')
}
function fase1(){
    image[1].classList.add('light')
}
function fase11(){
    image[1].classList.remove('light')
}
function fase2(){
    image[2].classList.add('light')
}
function fase22(){
    image[2].classList.remove('light')
}
function fase3(){
    image[3].classList.add('light')
}
function fase33(){
    image[3].classList.remove('light')
}
primeiracor.addEventListener('click', ()=>{
    primeiracor.classList.add('click')
    
    function removeclick(){
        primeiracor.classList.remove('click')

    }
    setTimeout(removeclick, 700)

})
segundacor.addEventListener('click', ()=>{
    segundacor.classList.add('click')
    
    function removeclick(){
        segundacor.classList.remove('click')

    }
    setTimeout(removeclick, 700)
})
terceiracor.addEventListener('click', ()=>{
    terceiracor.classList.add('click')
    
    function removeclick(){
        terceiracor.classList.remove('click')

    }
    setTimeout(removeclick, 700)
})
quartacor.addEventListener('click', ()=>{
    quartacor.classList.add('click')
    
    function removeclick(){
        quartacor.classList.remove('click')

    }
    setTimeout(removeclick, 700)
})
function returnColor(){
    primeiracor.classList.remove('click')
    quartacor.classList.remove('click')
    terceiracor.classList.remove('click')
    segundacor.classList.remove('click')
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];

    
    }
}
function segundapagina(){
    imagem.classList.add('fundo')
    main.classList.remove('fundo2')
}

