const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'lim',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crear un fichero con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}