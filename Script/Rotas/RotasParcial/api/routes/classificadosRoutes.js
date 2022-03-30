const controllerClassificados = require('../controllers/classificadosControllers.js')

app.get('/classificados/classificadosMenu', controllerClassificados.menuClassificadosControllers)

app.get('/classificados/classificadosAutomovelMenu', controllerClassificados.menuClassificadosAutomovelControllers)

app.get('/classificados/classificadosAutomovelChevroletMenu', controllerClassificados.menuClassificadosAutomovelChevroletControllers)

app.get('/classificados/classificadosAutomovelChevroletGolMenu', controllerClassificados.menuClassificadosAutomovelChevroletGolControllers)

app.get('/classificados/classificadosAutomovelChevroletFiatMenu', controllerClassificados.menuClassificadosAutomovelChevroletFiatControllers)

app.get('/classificados/classificadosAutomovelChevroletBrasiliaMenu', controllerClassificados.menuClassificadosAutomovelChevroletBrasiliaControllers)