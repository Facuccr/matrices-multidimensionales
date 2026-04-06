const prompt = require("prompt-sync")();

let alumnos = [];

// funcion para buscar un alumno por nombre
function buscarAlumno(nombre) {
  return alumnos.find((a) => a[0].toLowerCase() === nombre.toLowerCase());
}

// funcion para agregar un alumno
function agregarAlumno() {
  let nombre = prompt("nombre del alumno: ");

  // verificar si existe
  let alumno = buscarAlumno(nombre);
  if (alumno) {
    console.log("el alumno ya existe");
    modificarNotas(alumno);
    return;
  }

  let materias = [];

  // cargar materias hasta escribir 'fin'
  while (true) {
    let materia = prompt("materia (fin para terminar): ");
    if (materia === "fin") break;

    let nota = parseInt(prompt("nota: "));
    materias.push([materia, nota]);
  }

  // agregar alumno a la lista
  alumnos.push([nombre, materias]);
}

// funcion para modificar o agregar notas
function modificarNotas(alumno) {
  let materia = prompt("materia: ");

  // buscar si la materia existe
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

    let suma = 0;

    alumno[1].forEach((m) => {
      console.log(m[0], ":", m[1]);
      suma += m[1];
    });

    // calcular promedio
    let promedio = suma / alumno[1].length;
    console.log("promedio:", promedio.toFixed(2));
  });
}

// funcion para mostrar el mejor promedio
function mejorPromedio() {
  let mejor = null;
  let mejorProm = 0;

  alumnos.forEach((alumno) => {
    let suma = alumno[1].reduce((acc, m) => acc + m[1], 0);
    let promedio = suma / alumno[1].length;

    if (promedio > mejorProm) {
      mejorProm = promedio;
      mejor = alumno[0];
    }
  });

  if (mejor) {
    console.log("mejor alumno:", mejor, "con promedio", mejorProm.toFixed(2));
  }
}

// menu principal
while (true) {
  console.log("\n1. ver alumnos");
  console.log("2. agregar alumno");
  console.log("3. agregar o modificar notas");
  console.log("4. mejor promedio");
  console.log("5. salir");

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
    mejorPromedio();
  } else if (opcion === "5") {
    break;
  }
}
