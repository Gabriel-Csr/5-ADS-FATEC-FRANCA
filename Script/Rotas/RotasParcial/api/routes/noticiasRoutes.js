const controllerNoticias = require('../controllers/noticiasControllers.js')

app.get("/noticias/noticiasMenu", controllerNoticias.menuNoticiasControllers)

app.get("/noticias/noticiasEsporteMenu", controllerNoticias.menuNoticiasEsporteControllers)




