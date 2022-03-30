module.exports = {
    menuNoticiasControllers,
    menuNoticiasEsporteControllers,
    menuNoticiasEsporteFutebolControllers
}


function menuNoticiasControllers(req, res) {
    res.render('noticias/frm_noticiasMenu.ejs', {
        title: 'Re-fatorando',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        titulo: 'Menu de Noticias',
        autor: '5º ADS - Programação Script - Noturno'
    })

}

function menuNoticiasEsporteControllers(req, res) {
    res.render('noticias/frm_noticiasEsporteMenu.ejs', {
        title: 'Re-fatorando',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        titulo: 'Menu de Esportes',
        autor: '5º ADS - Programação Script - Noturno'
    })

}

function menuNoticiasEsporteFutebolControllers(req, res) {
    res.render('noticias/frm_noticiasEsporteFutebolMenu.ejs', {
        title: 'Re-fatorando',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        titulo: 'Menu de Noticias de Futebol',
        autor: '5º ADS - Programação Script - Noturno'
    })

}

   