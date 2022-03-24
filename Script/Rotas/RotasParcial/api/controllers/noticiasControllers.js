module.exports = {
    menuNoticiasControllers,
    menuNoticiasEsporteControllers,
    menuNoticiasEsporteFutebolControllers
}

function menuNoticiasEsporteControllers (req, res) {
    res.render('noticias/frm_noticiasEsporteMenu.ejs', {
        title: 'Noticias',
        mensagem: 'Noticias de Esporte',
        titulo: 'Menu Principal',
        autor: '5º ADS - Programação Script - Noturno'
    })
}
    function menuNoticiasControllers (req, res) {
        res.render('noticias/frm_noticiasMenu.ejs', {
            title: 'Noticias',
            mensagem: 'Noticias de Esporte',
            titulo: 'Menu Principal',
            autor: '5º ADS - Programação Script - Noturno'
        })

}
        function menuNoticiasEsporteFutebolControllers (req, res) {
            res.render('noticias/frm_noticiasEsporteFutebolMenu.ejs', {
                title: 'Noticias',
                mensagem: 'Noticias de Esporte',
                titulo: 'Menu Principal',
                autor: '5º ADS - Programação Script - Noturno'
            })
}

