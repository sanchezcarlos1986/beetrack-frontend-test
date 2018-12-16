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
- Para las peticiones HTTP, se ocupó **Axios**.
