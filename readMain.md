Aqui estara la lista de lo que se necesita en el proyecto.

Cada vez que una tarea este hecha, se marcara en esta misma seccion.

Todas las tareas tendran este formato:

Nombre de participante :
1. Tarea1 sin completar
2. Tarea2 sin completar
3. Tarea3 *completado*

Aclaraciones:

- Al referirme a objetos, quiero decir al tipo de dato, en este caso los clientes guardaran su informacion en objetos que pasaran luego a una lista llamada *DatosClientes* simulando una base de datos.

- Articulos se refiere al mobiliario que se va a prestar

- Los objetos van a tener el siguiente formato : {nombre, apellido, email, contraseña, edad, sexo : 'M,F o B' , ingresoAnual, *Prestamos mire informacion debajo* }
El key *prestamos* en los objetos, va a ser a su vez un objeto de esta manera {silla : cantidad en euros, mesa: cantidad en euros } y asi sucesivamente





Tareas :


1. Crea una funcion que genere un email aleatorio y una funcion que genere una contraseña aleatoria. El email debe tener un min de 6 y max de 12 letras y/o numeros y debe terminar con '@prestamos.gorrion.com' *la terminacion no cuenta en la longitud del email*. La contraseña debe tener min de 5 y max de 10 letras y/o numeros. Esto es en caso de que la persona no quiera colocar su email personal y si quiere una contraseña aleatoria 4444

2. Crear una funcion que reciba un objeto y haga un push del mismo a la lista *DatosClientes* 1111

3. Crear una funcion que reciba un objeto y haga un push del mismo a la lista *DatosMobiliario* 1111

3. Crear una funcion que reciba un parametro *mobiliario* y haga lo siguiente :
    Cree un codigo de 5 letras aleatorias
    Genere en el Dom un div con clase *componenteMobiliario*, dentro de ese div ira primero una etiqueta img referente al parametro *mobiliario* ejemplo: *mobiliriario = silla*, etiqueta img con una imagen de una silla, luego un P con el nombre referente al parametro *mobiliario* ejemplo: *mobiliario = silla* un p con innertext 'silla', y a su lado un span con el numeral '#' y el codigo que se haya generado en la funcion. Debajo un precio aleatorio de entre 5$ a 100$ *Se hace con Math* y luego un boton con innerText = 'Pedir'. Algo similar a CAFE DE ALTURA 444444

4. Necesitamos registrar a los usuarios en *DatosClientes*. Crea una funcion que reciba los parametros *formulario* y *event* y que retorne un objeto asi como se dice en las 'Aclaraciones'. Debes asumir que los imputs de *formulario* tendran los mismos nombres 2222


5. Crear una funcion que reciba los parametros *funcion* y *n* y ejecute la *funcion* *n* numero de veces.111111

6. Crear una funcion que reciba la lista *DatosClientes* y un *formulario* y que valide si el email y contraseña ingresados en el *formularios* (que sera en forma de objetos) coincide con algun objeto en *DatosClientes*

7. Crear una funcion que reciba los parametros *Orden* y *lista* y ordene la lista segun el precio, nombre o mobiliario, tanto en orden ascendiente como descendiente 

8. Crear una funcion que reciba un parametro *lista* y otro *mobiliario* y filtre la lista segun el mobiliario

9. Crear una funcion que reciba un parametro *div* y que le haga un toggle con la clase 'hidden'

10. Crear una funcion agregue 




