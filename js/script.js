let vetor = [];

function adicionarValor() {

  const valor = Number(document.getElementById('valor').value);


  if (!isNaN(valor)) {

    vetor.push(valor);

    const tabela = document.getElementById("tabelaValores").getElementsByTagName('tbody')[0];

    const novaLinha = tabela.insertRow();
    const celula = novaLinha.insertCell(0);
    celula.textContent = valor;

    document.getElementById('valor').value = '';
    document.getElementById('valor').focus();
  }

}

/*

  function monstrarPares() {

    const tabela = document.getElementById('tabelaPares').getElementByTagName('tbody')[0];

    for (let i = 0; i < vetor.length; i++) {
      const valor = vetor [i];
      if(valor % 2 === 0) {
        const linh = tabela .insertRow();
        const celula = linha.insertCell();
        celula.textContent = valor;
      }
    }
  }
*/
