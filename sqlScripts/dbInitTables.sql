CREATE TABLE sofor (
   sorszam  INTEGER AUTO_INCREMENT,
   nev   VARCHAR(30),
   szuldatum VARCHAR(30),
   varos VARCHAR(20),
   hazsam VARCHAR(10),
   utca VARCHAR(30),
   
   PRIMARY KEY (sorszam)
  );

CREATE TABLE jarmu (
    rendszam VARCHAR(6),
    gyartasiev DECIMAL(4),
    ferohely  INTEGER,
    tipus    VARCHAR(10),
    PRIMARY KEY (rendszam)
  );

CREATE TABLE jarat (
     indulasidatum  VARCHAR(20) NOT NULL,
     jaratszam  VARCHAR(5) NOT NULL,
     sorszam INTEGER NOT NULL,
     rendszam  VARCHAR(6) NOT NULL,
    
     PRIMARY KEY (indulasidatum,jaratszam),
     FOREIGN KEY (sorszam) REFERENCES sofor(sorszam),
     FOREIGN KEY (rendszam) REFERENCES jarmu(rendszam)
);

CREATE TABLE megallo(
     megallonev  VARCHAR(20) NOT NULL,
     erkezesidatum  VARCHAR(20) NOT NULL,
     indulasidatum  VARCHAR(20) NOT NULL,
     jaratszam  VARCHAR(5) NOT NULL,
     keses INTEGER,
    
     PRIMARY KEY(megallonev,erkezesidatum),
     FOREIGN KEY (indulasidatum,jaratszam) REFERENCES jarat(indulasidatum,jaratszam) 
); 
