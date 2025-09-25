class Venda {
    constructor(id, joia_id, comprador_nome, comprador_email, data_venda) {
        this.id = id;
        this.joia_id = joia_id;
        this.comprador_nome = comprador_nome;
        this.comprador_email = comprador_email;
        this.data_venda = data_venda;
    }
}

module.exports = Venda;