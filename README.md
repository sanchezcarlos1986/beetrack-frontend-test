Este proyecto fue creado con [Create React App](https://github.com/facebookincubator/create-react-app).

## Beetrack FrontEnd Test 2018
Este proyecto fue realizado para la prueba de FrontEnd publicada por Beetrack en https://github.com/Beetrack/frontend-test, la cual a su vez es el Backend sobre el cual esta prueba realiza sus operaciones, por lo que ambos proyectos deben estar corriendo en paralelo para su desarrollo. 

Se recomienda clonar y ejecutar primeramente el Backend para correr dicho proyecto en el puerto 3000, y luego clonar y ejecutar este proyecto, para que React que por defecto ocupa el mismo puerto, nos ofrezca uno diferente que esté disponible, generalmente será el 3001.

### Instalación
Para hacer funcionar el proyecto una vez clonado localmente, se deben instalar las dependencias, ejecutando el comando `npm i`, `npm install` o `yarn`.
Una vez hecho esto, ejecutar el comando `npm start` o `yarn start`, lo cual abrirá el proyecto en la siguiente URL: http://localhost:3001.

### Descripción
El proyecto cuenta con una sola vista, por lo que no se utilizó ningún router en su desarrollo.

El siguiente listado nos indica las características generales del proyecto:

- Fue realizado completamente con **React**.
- Para el manejo del estado global de la aplicación, se utilizó **Redux**.
- Para los estilos, se utilizó **Styled Components**.
- Para el Modal y componentes de formulario, se utilizó **Bootstrap 4**.
- Para las peticiones HTTP, se ocupó **Axios**.

En general se utilizaron buenas prácticas de código recomendadas por AirBnb (quienes han contribuido en gran parte a la comunidad) para Javascript y React, las cuales se pueden encontrar en https://github.com/airbnb/javascript y https://github.com/airbnb/javascript/tree/master/react respectivamente.

El única vista del proyecto, llamada *Home*, integra a su vez diferentes componentes que le ayudan a realizar las diferentes tareas esperadas, y a su vez a mantener más ordenado el código de la app.

---

### Componentes
Todos los Componentes son funcionales, excepto el componente de Modal, que arma la data antes de enviársela al padre que es Home, y éste a su vez, tiene todos los métodos principales de la app.

A acontinuación se muestra un pequeño detalle de las tareas que realiza cada componente:

Componente | Descripción
--- | ---
**AwesomeIcon.js** | Se encarga de dibujar íconos de la librería Font Awesome.
**Header.js** | Dibuja el logo de Beetrack
**ModalCustom.js** | Es el Modal de Bootstrap que dentro incluye el formulario para agregar personas.
**Pagination.js** | Contiene los links de paginación de la lista.
**PeopleList.js** | Recibe el listado de personas y dibuja la tabla con el listado.
**RoundedImage.js** | Recibe una imagen y siempre la muestra en una circunferencia.
**SearchBar.js** | Permite filtrar el listado al tipear un texto. Contiene a su vez al botón que llama al modal.

---

### Métodos
Los siguientes son los métodos incluídos en la vista Home, los cuales se detallan a continuación:

Método | Descripción
--- | ---
**componentDidMount** | Es el primer método que se ejecuta, el cual a su vez, mediante la acción **getPeople** de Redux, obtiene el listado de personas desde la API, y los setea en el estado del componente.
**toggleModal** | Se encarga de mostrar u ocultar el Modal de Bootstrap.
**handleSearch** | Contiene toda la lógica de búsqueda de personas. Filtra el listado o reinicia la lista completa según la paginación en la que se encuentren al momento de buscar, mediante la acción **searchPeople** de Redux.
**handleAdd** | Recibe los datos del modal para agregar una nueva persona, mediante la acción **addPeople** de Redux.
**handleDelete** | Al contrario del anterior, se encarga de eliminar a la persona seleccionada del listado, mediante la acción **deletePeople** de Redux.
**setPagination** | Se encarga de realizar una búsqueda de personas según la página correspondiente.

---

### Redux
Para el manejo del estado global de la app, se utilizó Redux. Todas los Action Creators están trabajando con *Axios* para poder hacer las peticiones HTTP correspondientes.

A continuación se listan las *Actions* creadas para ejecutar las diferentes actualizaciones en la *Store*:

Action | Descripción
--- | ---
**getPeople** | Se encarga de hacer el GET de personas a la API. Debido a que el listado de personas debía ser paginado, este Action Creator recibe como parámetro el número de página que luego se pasará en la url del endpoint, que por defecto es la primera página. Una vez que la respuesta del endpoint está OK y devuelve datos, hacemos el *DISPATCH* hacia la *Store*, para dejar el listado de personas paginado disponible para toda la app. 
**addPeople** | Realiza el POST de cada persona nueva creada a la API. Cuando la respuesta del endpoint es *Created*, actualizamos el estado con la nueva persona creada.
**searchPeople** | Realiza un GET a la API recibiendo como parámetro una cadena de texto, con el fin de buscar coincidencias dentro del listado de personas. Si el endpoint devuelve algún dato, enviamos la información al estado global.
**deletePeople** | Este último *Action Creator* realiza un DELETE a la API. Recibe como parámetro el id de la persona a eliminar, y una vez obtenido el OK desde el endpoint, se realiza un filtro del listado de personas, restando a la persona eliminada. El resultado de este filtro es enviado vía dispatch a la store.
