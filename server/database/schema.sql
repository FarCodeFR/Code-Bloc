create table user (
  id int primary key auto_increment,
  email varchar(100) not null unique,
  pseudo varchar(50) not null unique,
  password varchar(100) not null
);

create table card (
  id int primary key auto_increment,
  title varchar(255) not null,
  image varchar(300) not null
);

create table category (
  id int unsigned primary key auto_increment,
   outils varchar(30) not null
);

insert into user(id, email, pseudo, password)
values
  (1, "moisuperadmin", "superAdmin", "azerty");

insert into category(outils)
values
("React"),
("Express"),
("Css");

insert into card(id, title, image)
values
  (1, "Function handleClick", "http://localhost:3310/assets/images/code.png");