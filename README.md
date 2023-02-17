# Digital House

Esta es una aplicación de React Native utilizando Expo y TypeScript, para mostrar un dashboard, lista de movimientos, filtrado, navegacion, y consumo de servicios API Rest.

## Instalación

Para instalar y ejecutar la aplicación, primero debes clonar este repositorio. Luego, dentro de la carpeta del proyecto, debes instalar las dependencias utilizando NPM:

`npm install`

Para iniciar la aplicación, puedes ejecutar:

`npm start`

Esto abrirá una ventana en tu navegador donde podrás interactuar con la aplicación y simular su ejecución en un dispositivo móvil.

## Uso

La aplicación es muy sencilla y cuenta con tres pantallas: Home, About y List. En la pantalla Home, puedes presionar el botón "Go to About" para navegar a la pantalla About. En la pantalla About, puedes ingresar texto en el campo de texto y presionar el botón "Save" para guardar el texto. En la pantalla List, puedes ver una lista de elementos y hacer búsquedas para filtrar la lista.

## Pruebas unitarias

La aplicación cuenta con pruebas unitarias para los siguientes componentes:

- `Button`
- `TextInput`
- `List`

Puedes ejecutar las pruebas utilizando el siguiente comando:

`npm test`


Este comando ejecutará las pruebas y te proporcionará una retroalimentación sobre su éxito o fracaso. Si alguna prueba falla, se te mostrará un mensaje de error con información sobre el problema. Si todas las pruebas pasan, se te mostrará un mensaje de éxito.

Para ejecutar pruebas específicas, puedes utilizar el siguiente comando:

`npm test -- <ruta al archivo de prueba>`


Por ejemplo, para ejecutar las pruebas para el componente `Button`, puedes ejecutar:

`npm test -- components/tests/Button-test.tsx`

## Tecnologías utilizadas

* React Native
* Expo
* TypeScript
* Jest
* Axios

## Contribución
Para contribuir a este proyecto, por favor sigue estos pasos:

1. Realiza un fork de este repositorio.
1. Crea una rama para tu contribución (git checkout -b feature/AmazingFeature).
1. Realiza los cambios necesarios y commitea tus cambios (git commit -m 'Add some AmazingFeature').
1. Realiza un push a la rama (git push origin feature/AmazingFeature).
1. Abre un Pull Request.

Por favor asegúrate de actualizar las pruebas unitarias según sea necesario.

## Contacto

Si tienes alguna pregunta o comentario, por favor contáctame a través de malforime@gmail.com con Alfonso Rios.