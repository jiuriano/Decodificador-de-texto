document.addEventListener("DOMContentLoaded", () => {
  const textoInserido = document.getElementById("texto-inserido");
  const botaoCripto = document.getElementById("botao-cripto");
  const botaoDescripto = document.getElementById("botao-descripto");
  const adicionarBotao = document.getElementById("adicionar-botao");
  const campo = document.getElementById("campo");
  const textoTrocar = document.getElementById("texto-trocar");

  function normalizeString(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  function criptografar(texto) {
      const normalizedTexto = normalizeString(texto);
      return normalizedTexto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
  }

  function descriptografar(texto) {
      const normalizedTexto = normalizeString(texto);
      return normalizedTexto.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
  }

  botaoCripto.addEventListener("click", () => {
      const texto = textoInserido.value;
      const textoCripto = criptografar(texto);
      adicionarBotao.style.display = "block";
      campo.textContent = "Texto Criptografado";
      textoTrocar.textContent = textoCripto;
  });

  botaoDescripto.addEventListener("click", () => {
      const texto = textoInserido.value;
      const textoDescripto = descriptografar(texto);
      adicionarBotao.style.display = "block";
      campo.textContent = "Texto Descriptografado";
      textoTrocar.textContent = textoDescripto;
  });

  document.getElementById("botao-copiar").addEventListener("click", () => {
      navigator.clipboard.writeText(textoTrocar.textContent)
          .then(() => {
              alert("Texto copiado para a área de transferência!");
          })
          .catch(err => {
              console.error("Erro ao copiar o texto: ", err);
          });
  });
});