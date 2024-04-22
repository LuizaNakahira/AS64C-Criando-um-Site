document.addEventListener("DOMContentLoaded", function() {
    const loginInput = document.getElementById("checkListInput");
    const adicionarButton = document.getElementById("adicionar");
    const deletarButton = document.getElementById("adicionar");
    const checkList = document.getElementById("checkList");

    //observa o botão esperando por clicks
    adicionarButton.addEventListener("click", function() {
      const taskText = loginInput.value.trim();
      if (taskText !== "") {
        //adiciona um novo li
        addTask(taskText);
        //reseta o valor do input
        loginInput.value = "";
      }
    });

    function removeTask(){
      // não implementado

      // seguindo o protótipo do figma, recomendo pegar todos as tasks que estão com o checkbox marcado
      // e então deletá-los
    }

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
  });