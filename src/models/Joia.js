class Joia {
    constructor(id, nome, descricao, preco, usuaria_id, status, created_at) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.usuaria_id = usuaria_id;
        this.status = status;
        this.created_at = created_at;
    }
}

module.exports = Joia;
