module.exports = {
    menuNoticiasControllers,
    menuNoticiasEsporteControllers
}

function menuNoticiasControllers (req, res) {
    res.render('index.ejs', {
        title: 'Re-fatorando',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        titulo: 'Menu Principal',
        autor: '5º ADS - Programação Script - Noturno'
    })
}
    function menuNoticiasEsporteControllers (req, res) {
        res.render('noticias/frm_.ejs', {
            title: 'Noticias',
            mensagem: 'Noticias de Esporte',
            titulo: 'Menu Principal',
            autor: '5º ADS - Programação Script - Noturno'
        })

}

   