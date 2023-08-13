const textarea = document.querySelector('.escribe');
const crearButton = document.querySelector('.crear');
const editarButton = document.querySelector('.editar');
const pendientesList = document.getElementById('pendientes');
let editingIndex = -1;

crearButton.addEventListener('click', function() {
  const tarea = textarea.value.trim();
  if (tarea !== '') {
    if (editingIndex === -1) {
      agregarPendiente(tarea);
    } else {
      editarPendiente(editingIndex, tarea);
      editarButton.style.display = 'none';
      crearButton.style.display = 'block';
      textarea.value = 'Comienza ahora...';
      editingIndex = -1;
    }
  }
});

function agregarPendiente(tarea) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${tarea}</span>
    <button class="editarTarea">Editar</button>
    <button class="borrarTarea">Borrar</button>
  `;
  pendientesList.appendChild(li);

  const editarTareaButton = li.querySelector('.editarTarea');
  const borrarTareaButton = li.querySelector('.borrarTarea');

  editarTareaButton.addEventListener('click', function() {
    editarButton.style.display = 'block';
    crearButton.style.display = 'none';
    textarea.value = tarea;
    editingIndex = Array.from(pendientesList.children).indexOf(li);
  });

  borrarTareaButton.addEventListener('click', function() {
    pendientesList.removeChild(li);
  });
}

function editarPendiente(index, nuevaTarea) {
  const li = pendientesList.children[index];
  li.querySelector('span').textContent = nuevaTarea;
}

// Evento para el botón de "Editar Tarea"
editarButton.addEventListener('click', function() {
  const nuevaTarea = textarea.value.trim();
  if (nuevaTarea !== '') {
    editarPendiente(editingIndex, nuevaTarea);
    editarButton.style.display = 'none';
    crearButton.style.display = 'block';
    textarea.value = 'Comienza ahora...';
    editingIndex = -1;
  }
});




