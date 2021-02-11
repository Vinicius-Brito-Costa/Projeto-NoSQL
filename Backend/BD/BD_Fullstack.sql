create database if not exists fullstack
default character set utf8mb4
default collate utf8mb4_general_ci;
use fullstack;
create table if not exists produtos(
	id_produto int auto_increment not null,
    categoria_produto ENUM('hardware', 'monitores', 'mouses', 'teclados', 'consoles', 'acessorios')not null,
    sub_categoria varchar(30),
	nome varchar(50) not null,
	descricao text not null,
    preco_antigo decimal(7, 2),
	preco_atual decimal(7, 2) not null,
    promocao int default 0,
	nome_imagem varchar(30) not null,
	primary key (id_produto)
) default charset utf8mb4;
-- Forma completa de adicionar dados a uma tabela
insert into produtos
(nome, categoria_produto, sub_categoria, descricao, preco_atual, preco_antigo, promocao, nome_imagem)
values
('Ryzen 3700x', 'hardware', 'cpu','Processadores AMD Ryzen de 3ª geração inclui compatibilidade com a primeira conectividade PCIe® 4.0 do mundo, para possibilitar que as placas-mãe, gráficos e tecnologias de armazenamento mais avançadas estejam disponível. Os processadores AMD Ryzen™ de 3ª geração são também compatíveis⁴ com gerações anteriores de placas-mãe, oferecendo desempenho implacável.', '2169.90', '2705.76', '20', 'ryzen3700x.jpg'),
('Memoria RAM DDR4 8GB', 'hardware', 'memoria','Módulo de memória RAM da HyperX apresenta velocidade de frequência de 2666MHz, compatível com as mais novas e recentes placas mãe Intel e AMD. Essa linha que oferece overclock automático com a tecnologia plug and play para fácil instalação e aproveitamento da frequência mais alta disponível. Os 1,2 volts desviam menos energia do seu computador e geram menos calor, com dissipador exclusivo, irá se encaixar sob coolers de CPU de tamanho grande enquanto melhora a dissipação de calor para maior confiabilidade com design assimétrico exclusivo. Otimização para diversos chipsets, entre eles, série 300 e X299 Intel. Possui capacidade de 8GB, para desfrutar de potência em seus games e aplicativos. Aproveite a garantia de vitalícia e suporte técnico local gratuito.Obtenha o máximo de desempenho e performance para seu PC com essa memória RAM Kingston HyperX FURY DDR4', '269.90', '376.35', '30', 'ramDDR48GB.jpg'),
('RTX2060 OC', 'hardware', 'gpu','As placas de vídeo Galax GeForce RTX 2060 são equipadas com a novíssima arquitetura NVIDIA Turing para oferecer a você níveis incríveis de realismo, velocidade, eficiência de energia e imersão em jogos.', '2499.00', '2872.41', '13', 'rtx2060OC.jpg'),
('RTX2070 EVO V2 OC', 'hardware', 'gpu','Recentemente projetadas para a última geração de placas de vídeo ROG de última geração, essas ventoinhas possuem um hub menor que facilita o uso de lâminas mais longas e um anel de barreira que aumenta a pressão do ar para baixo.', '2835.90 ', '3336.35', '15', 'rtx2070EVO.jpg'),
('PS4', 'consoles', 'playstation','O Console Nacional Playstation4 500GB, da Sony, é uma central de entretenimento versátil que atende o público gamer e famílias que procuram um aparelho que garante diversão por um mundo de alta resolução em imagens, som e jogabilidade imersiva. Com uma diversidade de títulos, tanto em jogos quanto os últimos lançamentos do cinema, o Playstation 4 eleva a experiência de entretenimento dos fãs hardcore de games e de cinema, devido à alta resolução que a tecnologia Blu-ray tornando as imagens mais realistas, envolventes e com qualidade cinco vezes superior a de um DVD padrão.Wi-fi Embutido. O Wi-Fi embutido no console amplia as formas de utilização do aparelho, pois permite acesso à internet, downloads de aplicativos e jogos, programas de TV, filmes e modos de competição online com outros jogadores na PlayStation Network.', '2399.90', '2799.89', '15', 'ps4.jpg'),
('PS5', 'consoles', 'playstation','Desfrute do carregamento extremamente rápido com o SSD de altíssima velocidade, uma imersão mais profunda com suporte a feedback tátil, gatilhos adaptáveis e áudio 3D, além de uma geração inédita de jogos incríveis para PlayStation 5 Domine o poder de uma CPU e GPU personalizadas e o SSD com E/S integradas que redefinem as regras do que o console PlayStation 5 pode fazer. Maximize suas sessões de jogo com tempos de carregamento praticamente instantâneos para jogos instalados. A integração personalizada dos sistemas de console PS5 permite que os criadores extraiam dados do SSD tão rápido que eles podem desenvolver jogos de formas que antes seriam impossíveis. Mergulhe em mundos com um nível inédito de realismo enquanto os raios de luz são simulados individualmente, criando sombras e reflexos realistas em jogos compatíveis do PS5.', '4274.90', '4499.89', '5', 'ps5.jpg'),
('Xbox One', 'consoles', 'xbox','Console Xbox One S de 1TB e tenha acesso a mais de 1.300 jogos que você só pode jogar no Xbox One. Este pacote inclui 14 dias grátis do Xbox Live Gold e 1 mês do Xbox Game Pass. Jogue com amigos próximos e distantes de desfrute do 4K de alta qualidade, incluindo Blu-ray ? Ultra HD 4K integrado e transmissão de vídeo em 4K. Os jogos Xbox Play Anywhere permitem que você jogue na casa de um amigo e depois continue onde parou em qualquer Xbox One Ou Windows 10. Além disso, aproveite 100 jogos adicionais de imediato com o mês grátis do Xbox Game Pass.', '2149.90', '2555.44', '20', 'xboxOne.jpg'),
('Xbox Series X', 'consoles', 'xbox','Apresentamos o Xbox Series X, o console mais rápido e poderoso de todos os tempos. Jogue milhares de títulos de quatro gerações de consoles- todos os jogos têm melhor aparência e são melhor executados no Xbox Series X. No coração do Series X está a Xbox Velocity Architecture, que combina um SSD personalizado e software integrado para diminuir significativamente os tempos de carregamento dentro e fora do jogo. Troque simultaneamente entre vários jogos em um instante com o Quick Resume. Explore novos mundos e desfrute da ação como nunca antes com 12 teraflops incomparáveis de poder de processamento gráfico.', '4749.90', '4999.89', '5', 'xboxSeriesX.jpg'),
('Cougar Minos XT Pink', 'mouses', 'com_fio','O Minos XT é um mouse para jogos ágil e poderoso, ideal para quem gosta de uma experiência de jogo ágil. Este mouse para jogos foi construído para durar. Por trás de seus dois botões principais, há dois interruptores de jogos originais, com garantia de pelo menos 20 milhões de cliques. A área retroiluminada do Minos XT permite criar a melhor atmosfera de jogo para a sua área de jogo. Escolha um dos sete maravilhosos modos predefinidos que preparamos para você e aproveite o show!', '174.46', '193.84', '10', 'cougarMinosXT.jpg'),
('Logitech G305 LIGHTSPEED', 'mouses', 'sem_fio','O G305 apresenta o sensor HERO de última geração com sensibilidade de 200 a 12.000 DPI para precisão de nível de competição. A tecnologia sem fio LIGHTSPEED oferece desempenho super rápido de 1ms. Com incrível eficiência de energia, o G305 permanece ligado e pronto para jogar por até 250 horas com uma única pilha AA inclusa.', '269.88', null, null, 'G305Lightspeed.jpg'),
('Anne Pro 2 60%', 'teclados', 'sem_fio','Especificação: Existem conexões de modo duplo, incluindo Bluetooth 4.0 e conexão de modo duplo Tipo-C, o que a torna amplamente compatível com vários sistemas, para Mac, para iOS, para Windows, para Linux e para Android.', '685.72', '979.57', '30', 'annePro260.jpg'),
('Razer BlackWidow Tournament Edition Chroma', 'teclados', 'com_fio','Apresentamos o Razer BlackWidow Tournament Edition Chroma V2 - o teclado com o desempenho mais rápido que já produzimos. Quando você está no meio de uma partida de torneio intensiva, cada milésimo de segundo conta para tentar garantir uma vantagem vencedora sobre seu oponente. Com este teclado, agora você pode tornar isso realidade.', '599.99', '699.99', '16', 'razerBlackWidowsTeChroma.jpg'),
('Samsung LCD 24 Curvo 144hz', 'monitores', 'res_1080p','- O primeiro monitor curvo do mundo com tempo de resposta super-rápido de 1 ms. Taxa de atualização da tela de 144 Hz para um jogo perfeitamente suave. Tecnologia de pontos quânticos para uma gama mais ampla de cores mais realistas. Suporte resistente e ergonômico com articulação dupla para o posicionamento preciso da tela. Melhor proporção de contraste da categoria de 3000:1 com o mínimo de fuga de luz. Imersão mais profunda, maior conforto de visualização', '2248.47', null, null, 'samsungLCD24Curvo144.jpg'),
('LG 27" LED IPS UltraHD 4K', 'monitores', 'res_4k','O monitor lg 27ul500 tem tela de 27" ips uhd 4k e entradas hdmi e display port. Tenha cores mais vibrantes e reais com o hdr10 e uma tela com mais de 1, 07 bilhão de cores em resolução 4k, ajuste de inclinação e onscreen control com screen split 2.0.', '2399.00', null, null, 'LG27LEDIPSUltraHD4K.jpg');

 create table if not exists feedback(
	id_mensagem int auto_increment,
    usuario varchar(40) not null,
    mensagem text not null,
    email varchar(50) not null,
    dia datetime,
    primary key(id_mensagem)
 );

create table categorias(
	id_categoria int auto_increment,
    categoria varchar(50),
    primary key(id_categoria)
);
create table sub_categorias(
	id_sub_categoria int auto_increment,
    sub_categoria varchar(50),
    primary key(id_sub_categoria)
);
create table produtos_categorizados(
	id_produto int,
    id_categoria int,
    id_sub_categoria int,
    primary key(id_produto, id_categoria, id_sub_categoria),
	foreign key(id_categoria) references categorias(id_categoria),
    foreign key(id_sub_categoria) references sub_categorias(id_sub_categoria)
);
create table if not exists pedidos(
	id_pedido int auto_increment not null,
    cliente varchar(70) not null,
    endereco varchar(100) not null,
    numero varchar(9) not null,
    cidade varchar(100) not null,
    estado varchar(10) not null,
    cep varchar(15) not null,
    telefone varchar(16) not null,
    id_produto int not null,
    valor_unitario int not null,
    quantidade int not null default '1',
    valor_total int not null,
    primary key (id_pedido),
    foreign key(id_produto) references produtos(id_produto)
)default charset = utf8mb4;
insert into categorias (categoria) 
values("hardware"), ("monitores"), ("mouses"), ("teclados"), ("consoles"), ("acessorios");

insert into sub_categorias values
(null, "mobo"), (null, "memoria"), (null, "cpu"), (null, "gpu"),
(null, "res_1080p"), (null, "res_4k"),
(null, "com_fio"), (null, "sem_fio"), (null, "mecanico"),
(null, "playstation"), (null, "xbox"), (null, "nintendo");

insert into produtos_categorizados values( 1, 1, 3), (2, 1, 2), (3, 1, 4), (4, 1, 4), (5, 5, 10), 
(6, 5, 10), (7, 5, 11), (8, 5, 11), (9, 3, 7), (10, 3, 8), (11, 4, 8), (12, 4, 7), (13, 2, 5), (14, 2, 6);

select * from produtos 
	left outer join produtos_categorizados on produtos.id_produto = produtos_categorizados.id_produto
	left outer join categorias on produtos_categorizados.id_categoria = categorias.id_categoria
    left outer join sub_categorias on produtos_categorizados.id_sub_categoria = sub_categorias.id_sub_categoria order by produtos.id_produto asc;
