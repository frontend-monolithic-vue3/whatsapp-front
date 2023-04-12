# Whatsapp Web

<p style='text-align: justify;'> Este es un proyecto web desarrollado en vue versión 3.2.13. Su principal función es visualizar un historial de conversaciones de whatsapp. El aplicativo se encuentra en el siguiente <a href="https://lmac-whatsapp.netlify.app/" target="_blank">enlace</a>.</p>

<p align="center">
    <img src="https://hme-mf-resources.netlify.app/src/assets/hme-mf-resources/images/whatsapp-normal.png"/>
</p>

<p></p>

<p align="center">
    <img src="https://hme-mf-resources.netlify.app/src/assets/hme-mf-resources/images/whatsapp-dark.png"/>
</p>

## Storybook

<p style='text-align: justify;'> El proyecto consta de una serie de componentes los cuales pueden ser visualizados e interactuar con ellos a través de los storybooks en el siguiente enlace <a href="https://storybook-lmac-whatsapp.netlify.app">Storybook</a>.</p> 

## Servidor de desarrollo

<p style='text-align: justify;'> Primero debemos clonar el código del <a href="https://github.com/frontend-monolithic-vue3/whatsapp-front">repositorio</a> y con una terminal instalar las dependencias</p> 

```sh
npm i
```

<p style='text-align: justify;'> Luego debemos ejecutar</p> 

```sh
npm run serve
```

<p style='text-align: justify;'> Esto levantará un servidor de desarrollo localhost en el puerto 8080 </p> 


## Construcción

<p style='text-align: justify;'> Los archivos generados a través del proceso de contrucción se almacenan en la carpeta <strong>dist</strong>, para construir el proyecto debemos ejecutar el siguiente comando en una terminal</p> 


```sh
npm run build
```