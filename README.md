# Test Cafe starter

## Instalación
1. Creamos nuestro **`package.json`** con el comando

~~~bash
npm init
~~~

2. Instalamos **`Test Cafe`** con:

 ~~~bash
 npm install testcafe
 ~~~

3. Configuramos el proyecto para usar typescript con el comando:
~~~bash
npx tsc --init
~~~

4. Creamos carpetas **`src/test`** y agregamos nuestro archivo con los tests **`users.ts`**

5. Editamos el **`package.json`** y en **`"test"`** agregamos `testcafe chrome src/test/users.ts`

6. Podemos configurar nuestro proyecto con **`.testcaferc.json`** para agregar algunas características para el runner