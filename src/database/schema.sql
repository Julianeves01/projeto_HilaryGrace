CREATE TABLE joias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE personalizacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    joia_id INT,
    metal VARCHAR(50),
    pedra VARCHAR(50),
    formato VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (joia_id) REFERENCES joias(id) ON DELETE CASCADE
);

INSERT INTO joias (nome, descricao, preco) VALUES
('Anel Clássico', 'Anel tradicional em ouro 18k com design minimalista', 1200.00),
('Brinco Glamour', 'Brinco elegante com pedras de safira azul', 850.00),
('Colar Elegance', 'Colar sofisticado com pingente de esmeralda', 1400.00),
('Pulseira Charm', 'Pulseira com pingentes delicados e acabamento em prata', 600.00),
('Anel Royal', 'Anel exclusivo em platina com diamantes cravejados', 2500.00),
('Brinco Lux', 'Brinco luxuoso com rubis intensos', 1800.00),
('Colar Star', 'Colar com pedras de topázio e corrente prateada', 950.00),
('Pulseira Glow', 'Pulseira moderna com toque de ouro rosé', 1300.00),
('Anel Dreams', 'Anel com pedra de opala e aro em prata', 700.00),
('Brinco Pearl', 'Brinco clássico com pérolas naturais', 1600.00),
('Colar Moon', 'Colar com quartzo rosa e design romântico', 750.00),
('Pulseira Shine', 'Pulseira com diamantes para ocasiões especiais', 2000.00),
('Anel Chic', 'Anel com safira azul e toque rosé', 1500.00),
('Brinco Deluxe', 'Brinco sofisticado em platina com rubis', 2700.00),
('Colar Love', 'Colar delicado com turmalina verde', 890.00),
('Pulseira Classic', 'Pulseira dourada com pedra esmeralda', 2100.00),
('Anel Infinity', 'Anel exclusivo com diamante central brilhante', 3000.00),
('Brinco Soft', 'Brinco rosé com pedra ametista', 1350.00),
('Colar Heart', 'Colar com pingente de coração em opala', 770.00),
('Pulseira Dream', 'Pulseira com safiras em platina', 2800.00);

INSERT INTO personalizacoes (joia_id, metal, pedra, formato) VALUES
(1, 'Ouro', 'Diamante', 'Redondo'),
(2, 'Prata', 'Safira', 'Oval'),
(3, 'Ouro Rosé', 'Esmeralda', 'Coração'),
(4, 'Prata', 'Ametista', 'Quadrado'),
(5, 'Platina', 'Diamante', 'Redondo'),
(6, 'Ouro', 'Rubi', 'Gota'),
(7, 'Prata', 'Topázio', 'Oval'),
(8, 'Ouro Rosé', 'Turmalina', 'Coração'),
(9, 'Prata', 'Opala', 'Redondo'),
(10, 'Ouro', 'Pérola', 'Redondo'),
(11, 'Prata', 'Quartzo Rosa', 'Oval'),
(12, 'Ouro', 'Diamante', 'Redondo'),
(13, 'Ouro Rosé', 'Safira', 'Quadrado'),
(14, 'Platina', 'Rubi', 'Oval'),
(15, 'Prata', 'Turmalina', 'Coração'),
(16, 'Ouro', 'Esmeralda', 'Redondo'),
(17, 'Ouro', 'Diamante', 'Redondo'),
(18, 'Ouro Rosé', 'Ametista', 'Gota'),
(19, 'Prata', 'Opala', 'Oval'),
(20, 'Platina', 'Safira', 'Coração');
