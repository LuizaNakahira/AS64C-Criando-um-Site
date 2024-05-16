document.addEventListener("DOMContentLoaded", function () {
  const checkListInput = document.getElementById("checkListInput");
  const adicionarModalButton = document.getElementById("adicionarModal");
  const adicionarButton = document.getElementById("adicionar");
  const deletarButton = document.getElementById("deletar");
  const checkList = document.getElementById("checkList");

  const modalAdicionar = document.getElementById("modalAdicionar");
  const modalSucesso = document.getElementById("modalSucesso");

  // Get the <span> element that closes the modal
  const closeButtons = document.getElementsByClassName("closeModal");

  // quanbdo clicar em adicionar, abre o modal
  adicionarModalButton.onclick = function () {
    modalAdicionar.style.display = "block";
  }

  // acessa todos os spans com classe "closeModal"
  for (let i = 0; i < closeButtons.length; i++) {

    closeButtons[i].onclick = function () {
      //fecha o modal em questão
      closeButtons[i].parentElement.parentElement.style.display = "none";
    }
  }

  // quando clicar fora da area efetiva de algum modal, fecha ele
  window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  }

  //observa o botão esperando por clicks
  adicionarButton.addEventListener("click", function () {
    const taskText = checkListInput.value.trim();
    if (taskText !== "") {
      //adiciona um novo li
      addTask(taskText);
      modalAdicionar.style.display = "none"
      changeModalSucessoMsg("Adicionado com sucesso", "../images/adicionadoSucesso.svg");
      modalSucesso.style.display = "block"
      //reseta o valor do input
      checkListInput.value = "";
    }
  });


  function addTask(taskText) {
    //cria um li, um label e um input
    const li = document.createElement("li");
    const label = document.createElement("label");
    const checkBox = document.createElement("input");

    //associa o label ao checkbox
    label.htmlFor = checkBox;

    //tipo input checkbox
    checkBox.setAttribute("type", "checkbox");

    //adiciona texto ao label e o checkbox como elemento filho.
    label.textContent = taskText;

    //adiciona o label e checkbox no li.
    li.appendChild(checkBox);
    li.appendChild(label);

    //adiciona o li na lista
    checkList.appendChild(li);
  }

  function removeTask() {
    // não implementado

    // seguindo o protótipo do figma, recomendo pegar todos as tasks que estão com o checkbox marcado
    // e então deletá-los
    changeModalSucessoMsg("Deletado com sucesso", "../images/deletadoSucesso.svg");
  }

  //definir mensagem e icone do modal de sucesso
  function changeModalSucessoMsg(mensagem = "Adicionado com sucesso", icon = "../images/adicionadoSucesso.svg") {
    document.getElementById('sucessoMsg').innerText = mensagem;
    document.getElementById('sucessoIcon').setAttribute("href", icon);
  }

});