// se importa prompt-sync para entrada por consola
const prompt = require("prompt-sync")();

// lista principal de alumnos
// estructura: [nombre, [[materia, nota], ...]]
let alumnos = [];

// funcion para buscar alumno
function buscarAlumno(nombre) {
  return alumnos.find((a) => a[0].toLowerCase() === nombre.toLowerCase());
}

// funcion para agregar alumno
function agregarAlumno() {
  let nombre = prompt("nombre del alumno: ");

  let alumno = buscarAlumno(nombre);

  // si ya existe
  if (alumno) {
    console.log("el alumno ya existe");
    modificarNotas(alumno);
    return;
  }

  let materias = [];

  // cargar materias
  while (true) {
    let materia = prompt("materia (fin para terminar): ");
    if (materia === "fin") break;

    let nota = parseInt(prompt("nota: "));
    materias.push([materia, nota]);
  }

  alumnos.push([nombre, materias]);
}

// funcion para modificar o agregar notas
function modificarNotas(alumno) {
  let materia = prompt("materia: ");

  // buscar si existe
  let m = alumno[1].find((x) => x[0].toLowerCase() === materia.toLowerCase());

  if (m) {
    m[1] = parseInt(prompt("nueva nota: "));
    console.log("nota modificada");
  } else {
    let nota = parseInt(prompt("nota nueva: "));
    alumno[1].push([materia, nota]);
    console.log("materia agregada");
  }
}

// funcion para mostrar alumnos
function verAlumnos() {
  alumnos.forEach((alumno) => {
    console.log("\nalumno:", alumno[0]);

    alumno[1].forEach((m) => {
      console.log(m[0], ":", m[1]);
    });
  });
}

// menu principal
while (true) {
  console.log("\n1. ver alumnos");
  console.log("2. agregar alumno");
  console.log("3. agregar o modificar notas");
  console.log("4. salir");

  let opcion = prompt("opcion: ");

  if (opcion === "1") {
    verAlumnos();
  } else if (opcion === "2") {
    agregarAlumno();
  } else if (opcion === "3") {
    let nombre = prompt("nombre del alumno: ");
    let alumno = buscarAlumno(nombre);

    if (alumno) {
      modificarNotas(alumno);
    } else {
      console.log("el alumno no existe");
    }
  } else if (opcion === "4") {
    break;
  }
}
