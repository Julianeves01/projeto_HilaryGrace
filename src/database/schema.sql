CREATE DATABASE joalheria02;

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
INSERT INTO joias (nome, descricao, preco, usuaria_id, status) VALUES
('Anel de Ouro 18k', 'Anel em ouro 18k com pedra de zircônia', 450.00,
1, 'disponivel'),
('Colar de Prata', 'Colar delicado em prata 925', 120.00, 1,
'disponivel'),
('Brincos de Diamante', 'Par de brincos com diamantes naturais',
890.00, 2, 'disponivel'),
('Pulseira de Ouro', 'Pulseira em ouro 18k modelo cartier', 320.00, 2,
'vendida'),
('Anel de Prata', 'Anel em prata com ametista', 85.00, 3,
'disponivel'),
('Colar de Ouro Branco', 'Colar em ouro branco 18k', 650.00, 3,
'disponivel'),
('Brincos de Pérola', 'Brincos com pérolas cultivadas', 180.00, 4,
'vendida'),
('Pingente de Esmeralda', 'Pingente em ouro com esmeralda natural',
1200.00, 4, 'disponivel'),
('Aliança de Ouro', 'Aliança tradicional em ouro 18k', 280.00, 5,
'disponivel'),
('Tornozeleira de Prata', 'Tornozeleira delicada em prata 925', 65.00,
5, 'disponivel');

-- Inserir vendas
INSERT INTO vendas (joia_id, comprador_nome, comprador_email) VALUES
(4, 'Roberto Alves', 'roberto.alves@email.com'),
(7, 'Camila Ferreira', 'camila.ferreira@email.com');