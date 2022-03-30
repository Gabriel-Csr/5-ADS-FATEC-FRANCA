module.exports = {
    menuClassificadosControllers,
    menuClassificadosAutomovelControllers,
    menuClassificadosAutomovelChevroletControllers,
    menuClassificadosAutomovelChevroletGolControllers,
    menuClassificadosAutomovelChevroletFiatControllers,
    menuClassificadosAutomovelChevroletBrasiliaControllers

}

function menuClassificadosControllers(req, res) {
    res.render('classificados/frm_classificadosMenu.ejs', {
        title: 'Notícias',
        titulo: 'Classificados',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'Gabriel Cesar / 5º ADS - Programação Script - Noturno'
    })
}

function menuClassificadosAutomovelControllers(req, res) {
    res.render('classificados/frm_classificadosAutomovelMenu.ejs', {
        title: 'Notícias',
        titulo: 'Automóveis',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'Gabriel Cesar / 5º ADS - Programação Script - Noturno'
    })
}

function menuClassificadosAutomovelChevroletControllers(req, res) {
    res.render('classificados/frm_classificadosAutomovelChevroletMenu.ejs', {
        title: 'Notícias',
        titulo: 'Chevrolet',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'Gabriel Cesar / 5º ADS - Programação Script - Noturno'
    })
}

function menuClassificadosAutomovelChevroletGolControllers(req, res) {
    res.render('classificados/frm_classificadosAutomovelChevroletGolMenu.ejs', {
        title: 'Notícias',
        titulo: 'Gol',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'Gabriel Cesar / 5º ADS - Programação Script - Noturno'
    })
}

function menuClassificadosAutomovelChevroletFiatControllers(req, res) {
    res.render('classificados/frm_classificadosAutomovelChevroletFiatMenu.ejs', {
        title: 'Notícias',
        titulo: 'Fiat',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'Gabriel Cesar / 5º ADS - Programação Script - Noturno'
    })
}

function menuClassificadosAutomovelChevroletBrasiliaControllers(req, res) {
    res.render('classificados/frm_classificadosAutomovelChevroletBrasiliaMenu.ejs', {
        title: 'Notícias',
        titulo: 'Brasilia',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'Gabriel Cesar / 5º ADS - Programação Script - Noturno'
    })
}