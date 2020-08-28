
DROP DATABASE IF EXISTS morePlacesToStay;

CREATE DATABASE morePlacesToStay;

SELECT morePlacesToStay;

CREATE TABLE place (
  id int NOT NULL AUTO_INCREMENT,
  place_name varchar(255) NOT NULL,
  place_description varchar(255) NOT NULL,
  avgRating decimal(10, 2) NOT NULL,
  numberOfRatings int NOT NULL,
  place_image varchar(255) NOT NULL,
  rate decimal(10, 2) NOT NULL,
  wasLiked boolean NOT NULL,
  postedDate date NOT NULL,
  longitude varchar(255) NOT NULL,
  latitude varchar(255) NOT NULL,
  category varchar(255) NOT NULL,
  superhost boolean NOT NULL,
  PRIMARY KEY (ID)
);


CREATE TABLE relatedPlaces (
  id int NOT NULL AUTO_INCREMENT,
  placeID int NOT NULL,
  PRIMARY KEY (ID)
  -- foreign key(placeID) references places(id)
);

CREATE TABLE likedList (
  id int NOT NULL AUTO_INCREMENT,
  -- placeID int NOT NULL,
  listName varchar(255) NOT NULL,
  list_image varchar(255) NOT NULL,
  list_dates varchar(255) NOT NULL,
  PRIMARY KEY (ID)
  -- foreign key(placeID) references places(id)
);

CREATE TABLE listPlaceAssociation (
  listID int NOT NULL,
  placeID int NOT NULL
  -- foreign key(placeID) references places(id)
  -- foreign key(listID) references likedList(id)
);

--compund indexing for lists
-- CREATE TABLE calendar (
--   id int NOT NULL AUTO_INCREMENT,
--   date date NOT NULL,
--   rentalID int NOT NULL,
--   isBooked boolean NOT NULL,
--   year text NOT NULL,
--   month text NOT NULL,
--   day text NOT NULL,
--   PRIMARY KEY (ID)
--   foreign key(rentalID) references rentals(id),
-- );


/*  Execute this file from the command line by typing:
--  *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

/* For the record, these numbers were generated with Math.random,
 * please don't read into them. :) */


