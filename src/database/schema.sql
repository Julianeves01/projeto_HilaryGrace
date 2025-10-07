CREATE DATABASE joalheria04;

CREATE TABLE usuarias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE joias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    usuaria_id INT NOT NULL,
    status VARCHAR(20) DEFAULT 'disponivel',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foto TEXT,
    FOREIGN KEY (usuaria_id) REFERENCES usuarias(id) ON DELETE CASCADE
);

CREATE TABLE vendas (
    id SERIAL PRIMARY KEY,
    joia_id INT NOT NULL,
    comprador_nome VARCHAR(100),
    comprador_email VARCHAR(100),
    data_venda TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (joia_id) REFERENCES joias(id) ON DELETE CASCADE
);

-- Inserir usuárias
INSERT INTO usuarias (nome, email, senha) VALUES
('Ana Silva', 'ana.silva@email.com', '$2b$10$hash1'),
('Maria Santos', 'maria.santos@email.com', '$2b$10$hash2'),
('Carla Oliveira', 'carla.oliveira@email.com', '$2b$10$hash3'),
('Julia Costa', 'julia.costa@email.com', '$2b$10$hash4'),
('Fernanda Lima', 'fernanda.lima@email.com', '$2b$10$hash5');

-- Inserir joias
INSERT INTO joias (nome, descricao, preco, usuaria_id, status, foto) VALUES
('Anel de Ouro 18k', 'Anel em ouro 18k com pedra de zircônia', 450.00,
1, 'disponivel', 'https://maisejoias.bwimg.com.br/maisejoias/produtos/anel-de-chapa-tres-cores-folheado-a-ouro-18k-1730428793.3092.jpg'),

('Colar de Prata', 'Colar delicado em prata 925', 120.00, 1,
'disponivel', 'https://aquajoias.com.br/upload/produto/imagem/b_colar-feminino-de-prata-925-ponto-de-luz-cora-o-com-45cm.jpg'),

('Brincos de Diamante', 'Par de brincos com diamantes naturais',
890.00, 2, 'disponivel', 'https://www.rosalianazareth.com.br/images/Fotos/brinco-navetes-e-gotas-de-diamantes-2-87-quilates-192-654-620.webp'),

('Pulseira de Ouro', 'Pulseira em ouro 18k modelo cartier', 320.00, 2,
'vendida', 'https://cdn.sistemawbuy.com.br/arquivos/701d1e205e5dda700a710c234e87a1f5/produtos/646e0c1f60f09/2-674336c42805b.jpg'),

('Anel de Prata', 'Anel em prata com ametista', 85.00, 3,
'disponivel', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIGScNgtkANfH3lQNysL1GDtMgU0jM-00FA&s' ),

('Colar de Ouro Branco', 'Colar em ouro branco 18k', 650.00, 3,
'disponivel', 'https://joiasgold.vteximg.com.br/arquivos/ids/242672-1000-1000/gargantilha-ouro-branco-dezoito-kilates-ponto-luz-modelo-joiasgold.jpg?v=638357365053870000'),

('Brincos de Pérola', 'Brincos com pérolas cultivadas', 180.00, 4,
'vendida', 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/deluxo/media/uploads/produtos/foto/sgbnhuqn/7.jpg'),

('Pingente de Esmeralda', 'Pingente em ouro com esmeralda natural',
1200.00, 4, 'disponivel', 'https://acdn-us.mitiendanube.com/stores/001/323/632/products/img_05911-a38580950b0ea8c94916806395374557-1024-1024.jpg'),

('Aliança de Ouro', 'Aliança tradicional em ouro 18k', 280.00, 5,
'disponivel', 'https://malkobaliancas.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-06-27-at-17.35.11-e1714585847213.jpeg'),

('Tornozeleira de Prata', 'Tornozeleira delicada em prata 925', 65.00,
5, 'disponivel', 'https://ricchezzaprata.bwimg.com.br/ricchezzaprata/produtos/tornozeleira-prata-925-lua-estrela-coracao-07020047-06-20241011080956-1728647332.1616.jpg');


INSERT INTO vendas (joia_id, comprador_nome, comprador_email) VALUES
(4, 'Roberto Alves', 'roberto.alves@email.com'),
(7, 'Camila Ferreira', 'camila.ferreira@email.com');