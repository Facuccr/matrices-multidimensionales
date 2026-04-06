alumnos = []

# funcion para buscar un alumno
def buscar_alumno(nombre):
    for alumno in alumnos:
        if alumno[0].lower() == nombre.lower():
            return alumno
    return None

# funcion para agregar alumno
def agregar_alumno():
    nombre = input("nombre del alumno: ")

    alumno = buscar_alumno(nombre)

    # si ya existe
    if alumno:
        print("el alumno ya existe")
        modificar_notas(alumno)
        return

    materias = []

    # cargar materias
    while True:
        materia = input("materia (fin para terminar): ")
        if materia == "fin":
            break

        nota = int(input("nota: "))
        materias.append([materia, nota])

    alumnos.append([nombre, materias])

# funcion para modificar o agregar notas
def modificar_notas(alumno):
    materia = input("materia: ")

    # buscar materia existente
    for m in alumno[1]:
        if m[0].lower() == materia.lower():
            m[1] = int(input("nueva nota: "))
            print("nota modificada")
            return

    # si no existe
    nota = int(input("nota nueva: "))
    alumno[1].append([materia, nota])
    print("materia agregada")

# funcion para mostrar alumnos
def ver_alumnos():
    for alumno in alumnos:
        print("\nalumno:", alumno[0])

        for materia in alumno[1]:
            print(materia[0], ":", materia[1])

# menu principal
while True:
    print("\n1. ver alumnos")
    print("2. agregar alumno")
    print("3. agregar o modificar notas")
    print("4. salir")

    opcion = input("opcion: ")

    if opcion == "1":
        ver_alumnos()

    elif opcion == "2":
        agregar_alumno()

    elif opcion == "3":
        nombre = input("nombre del alumno: ")
        alumno = buscar_alumno(nombre)

        if alumno:
            modificar_notas(alumno)
        else:
            print("el alumno no existe")

    elif opcion == "4":
        break