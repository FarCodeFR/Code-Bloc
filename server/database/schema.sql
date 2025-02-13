CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL UNIQUE,
  pseudo VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE card (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(300) NOT NULL,
  image VARCHAR(300) NOT NULL,
  utilisateur_id INT,
  FOREIGN KEY (utilisateur_id) REFERENCES user(id) ON DELETE CASCADE
);

INSERT INTO user (id, email, pseudo, password)
VALUES
  (1, "moisuperadmin", "superAdmin", "azerty");


INSERT INTO card (id, title, description, image, utilisateur_id)
VALUES
  (1, 'Tableau', "Trois cercles blancs", "https://media.istockphoto.com/id/471197807/fr/photo/trois-cercles-blancs.jpg?s=612x612&w=0&k=20&c=tKgx3oJg93lG__2MaYD9obDStyfHkcRPbTEDdDbZ-D4=", 1),
  (2, 'Tableau', "Aquarelle Bleu Dégradé Fond abstrait", "https://media.istockphoto.com/id/1355871183/fr/vectoriel/aquarelle-bleu-d%C3%A9grad%C3%A9-fond-abstrait-%C3%A9l%C3%A9ment-de-conception-pour-le-marketing-la-publicit%C3%A9.jpg?s=612x612&w=0&k=20&c=cexnQ_7oh3KXmvp0jA4yQ-FDaRhdY_HovfUwFDDg-uI=", 1),
  (3, 'Tableau', "Cadres ronds classiques ovales ovales dorés", "https://media.istockphoto.com/id/1960307102/fr/photo/cadres-ronds-classiques-ovales-ovales-dor%C3%A9s.jpg?s=612x612&w=0&k=20&c=t7FZ8ZEskOwA5BSwsD_C-bQE0BetbOQSQrej9mP_FdE=", 1),
  (4, 'Tableau', "Dessin à la main de modèle cubiste moderne de violoncelle.", "https://media.istockphoto.com/id/1284867381/fr/vectoriel/dessin-%C3%A0-la-main-de-mod%C3%A8le-cubiste-moderne-de-violoncelle-musique-jazz-dans-le-style.jpg?s=612x612&w=0&k=20&c=-QZoU-GyBovYZp6HEDqjZC7s16zTnXye7dA2nIhmAes=", 1),
  (5, 'Tableau', "Bleu moderne Noir et gris grunge textures et motifs vectoriels", "https://media.istockphoto.com/id/1466815311/fr/vectoriel/bleu-moderne-noir-et-gris-grunge-textures-et-motifs-vectoriels.jpg?s=612x612&w=0&k=20&c=Ysx7ARH1HmmhxtJAUR5FEDhghdfFUcNS8yFLsmeHiRM=", 1);

