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
  (1, 'Function handleClick', "description", "https://media.istockphoto.com/id/1985150440/fr/photo/new-zealand-road-trip-at-lake-hawea.jpg?s=612x612&w=0&k=20&c=Y4BOM7f9_i1UNNiUEDF-dlQXLbSWpHn7sBW28pf5240=", 1);

