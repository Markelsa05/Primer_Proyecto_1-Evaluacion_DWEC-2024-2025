# Primer_Proyecto_1-Evaluacion_DWEC-2024-2025
Descripción del Proyecto
Esta es una calculadora interactiva desarrollada en JavaScript que permite al usuario realizar operaciones matemáticas básicas y consultar un historial de resultados. El objetivo principal de esta aplicación es proporcionar una herramienta educativa y práctica para la manipulación de números y estructuras de datos como arrays y mapas.

Características Principales
Operaciones Matemáticas Disponibles:
Suma
Resta
Multiplicación
División
Raíz cuadrada


Gestión de Historial:

Almacena cada resultado en un array y un Map para referencia futura.
El historial incluye el orden de las operaciones y los resultados correspondientes.
Validación de Errores:
Manejo de divisiones por cero.
Verificación de entradas inválidas (datos no numéricos).
Cómo Funciona


Ingreso de Números:

El usuario ingresa dos números utilizando cuadros de diálogo (prompt).
En el caso de la raíz cuadrada, se solicita solo un número.
Selección de Operación:

Cada operación es gestionada por una función específica que realiza el cálculo y muestra el resultado en la consola.
Almacenamiento del Resultado:


Los resultados se guardan en:
Un array (array_resultados) para un registro secuencial.
Un Map (resultadosMap) para un acceso estructurado con índices únicos.
Consulta del Historial:

El historial de operaciones se puede visualizar mediante la función resultados, que muestra tanto el array como el mapa de resultados.
Requisitos del Sistema
Navegador web moderno compatible con JavaScript (Chrome, Firefox, Edge, etc.).
No se requiere instalación de dependencias externas.
Cómo Usar
Abre el archivo JavaScript en un navegador o inclúyelo en un archivo HTML.
Interactúa con la aplicación:
Ingresa números cuando se te solicite.
Elige la operación matemática que deseas realizar llamando a la función correspondiente en la consola:
suma()
resta()
multiplicacion()
division()
raiz_cuadrada()
Consulta el historial llamando a resultados().

Ejemplo de Uso
Ejecuta la función suma():

Entrada del usuario:
Primer número: 5
Segundo número: 3
Salida en la consola:
Resultado de la suma de 5 y 3 es 8
El resultado se almacena en el historial.

Llama a resultados():
Salida en la consola:
Historial de resultados (Array):
Resultados: 8
Historial de resultados (Map):
Operación 1: 8

Manejo de Errores:
Si el usuario introduce valores no numéricos, se le pedirá que intente nuevamente.
En caso de dividir por cero, se mostrará un mensaje de error en la consola y se cancelará la operación.

