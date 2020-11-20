SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE `athlete`, `coach`, `coach_years`, `coaches`, `competes_plays`, `country`, `hosts_event`, `mascot_represents`, `olympics`, `participate`, `plays`, `represents_athlete`, `sponsor`, `sponsoredby`, `sport`, `summersport`, `wintersport`;
SET FOREIGN_KEY_CHECKS = 1;
CREATE TABLE olympics(
	Year		INTEGER PRIMARY KEY,
	Location 	VARCHAR(30));

CREATE TABLE mascot_represents(
	MascotID 	VARCHAR(36),
	MascotName	VARCHAR(30),
	Year		INTEGER,
	PRIMARY KEY(MascotID),
	FOREIGN KEY (Year) REFERENCES olympics(Year));
    
CREATE TABLE country(
	CountryName	VARCHAR(30),
	NumMedals	INTEGER,
	PRIMARY KEY (CountryName));
    
CREATE TABLE hosts_Event(
	Year		INTEGER NOT NULL,
	Name		VARCHAR(50) NOT NULL,
	DateTime	DATETIME NOT NULL,
	Type		VARCHAR(30),
	PRIMARY KEY(Year, Name, DateTime),
	FOREIGN KEY(Year) REFERENCES olympics(Year));

CREATE TABLE participate(
	Year		INTEGER,
	CountryName	VARCHAR(30),
	PRIMARY KEY (Year, countryName),
	FOREIGN KEY (Year) REFERENCES olympics(Year),
	FOREIGN KEY (CountryName) REFERENCES country(CountryName));
    
CREATE TABLE athlete(
	AthleteID	VARCHAR(36) PRIMARY KEY,
	Name		VARCHAR(30));
    
CREATE TABLE represents_athlete(
	AthleteID	VARCHAR(36),
	CountryName	VARCHAR(30),
	numMedalsWon	INTEGER,
	PRIMARY KEY(AthleteID, CountryName),
	FOREIGN KEY(AthleteID) REFERENCES athlete(AthleteID),
	FOREIGN KEY(CountryName) REFERENCES country(CountryName));
    
CREATE TABLE sport(
	SportName	VARCHAR(36) PRIMARY KEY,
	isActive		BOOLEAN);

CREATE TABLE summerSport(
	SportName	VARCHAR(36) PRIMARY KEY,
	openWaterReq	BOOLEAN,
	poolReq			BOOLEAN,
    FOREIGN KEY(SportName) REFERENCES sport(SportName) ON DELETE CASCADE);
 
 
CREATE TABLE winterSport(
	SportName	VARCHAR(36) PRIMARY KEY,
	snowReq		BOOLEAN,
	iceReq		BOOLEAN,
    FOREIGN KEY(SportName) REFERENCES sport(SportName) ON DELETE CASCADE);

CREATE TABLE plays(
	SportName	VARCHAR(36) NOT NULL,
	AthleteID	VARCHAR(36) NOT NULL,
	PRIMARY KEY(SportName, AthleteID),
	FOREIGN KEY(AthleteID) REFERENCES athlete(AthleteID) ON DELETE CASCADE,
	FOREIGN KEY(SportName) REFERENCES sport(SportName) ON DELETE CASCADE);
    
CREATE TABLE competes_plays(
	AthleteID	VARCHAR(36) NOT NULL,
	SportName	VARCHAR(30) NOT NULL,
	DateTime	DATETIME NOT NULL,
	EventName	VARCHAR(50) NOT NULL,
	Year		INTEGER NOT NULL,
	PRIMARY KEY(SportName, AthleteID, DateTime, EventName, Year),
	FOREIGN KEY(AthleteID) REFERENCES athlete(AthleteID),
	FOREIGN KEY(Year, EventName, DateTime) REFERENCES hosts_event(Year, Name, DateTime) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY(YEAR) REFERENCES olympics(YEAR),
    FOREIGN KEY(SportName) REFERENCES sport(SportName));
    
CREATE TABLE coach_years(
	YearsCoached	INTEGER PRIMARY KEY,
	isGoodCoach 	BOOLEAN);
    
CREATE TABLE coach(
	CoachName	VARCHAR(30) NOT NULL,
	Nationality	VARCHAR(30) NOT NULL,
	YearsCoached	INTEGER,
	PRIMARY KEY (CoachName, Nationality),
	FOREIGN KEY(YearsCoached) REFERENCES coach_years(YearsCoached));
    
CREATE TABLE coaches(
	AthleteID	VARCHAR(36) NOT NULL,
	CoachName	VARCHAR(30) NOT NULL,
	Nationality	VARCHAR(30) NOT NULL,
	PRIMARY KEY(AthleteID, Nationality, CoachName),
	FOREIGN KEY(CoachName, Nationality) REFERENCES coach(CoachName, Nationality),
    FOREIGN KEY(AthleteID) REFERENCES athlete(AthleteID));

CREATE TABLE sponsor(
SponsorName		VARCHAR(30) PRIMARY KEY,
BrandName		VARCHAR(30));

CREATE TABLE sponsoredBy(
	AthleteID		VARCHAR(36),
	SponsorName		VARCHAR(30),
	amountSponsored	INTEGER,
	PRIMARY KEY(AthleteID, SponsorName),
	FOREIGN KEY(AthleteID) REFERENCES athlete(AthleteID) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY(SponsorName) REFERENCES sponsor(SponsorName));


INSERT INTO `olympics` VALUES (2008,'Beijing'),(2010,'Vancouver'),(2012,'London'),(2014,'Sochi'),(2016,'Rio');

INSERT INTO `mascot_represents` VALUES 
('38031c95-8816-441c-85c7-2f4c6f88986b','YingYing',2008),
('6aff719c-aaba-444d-bed6-103c43b1c50f','HuanHuan',2008),
('a475fe0e-0f67-458a-8483-09366c7fdb32','Beibei',2008),
('b4dd9556-438c-45da-85b3-7957e1b0cc8e','Sumi',2010),
('d2b28c37-68d6-4b68-9c8c-a39c3e9bb47a','Quatchi',2010),
('ed677da6-0210-4b58-9ae7-ac0acf551cf6','Nini',2008),
('f193989a-e895-455e-ba17-2493849ab57a','JingJing',2008),
('f96c8a20-0cf1-4df6-ada9-a1c4ae02eb65','Miga',2010),
('fec4fca0-554b-43eb-bf8d-736a93635f74','MukMuk',2010);

INSERT INTO `country` VALUES ('Canada',35),('China',40),('Russia',39),('Sweden',69),('USA',187);

INSERT INTO `hosts_event` VALUES (2008,'Opening Ceremony','2008-06-16 11:30:00','Ceremony'),
(2008,'Single Mens TableTennis Finals','2008-01-29 14:30:00','Sport'),
(2008,'Womens Ice Hockey Finals','2008-06-03 13:25:00','Sport'),
(2008,'Womens Speed Skate Semi-Finals','2008-06-16 11:30:00','Sport'),
(2010,'Broadway - Robson Torch Run','2010-01-02 12:00:00','Torch Relay'),
(2010,'Mens Ice Hockey Finals','2010-01-23 16:20:30','Sport'),
(2010,'Opening Ceremony','2010-01-03 13:00:00','Ceremony'),
(2012,'Closing Ceremony','2012-07-29 13:00:00','Ceremony'),
(2012,'Opening Ceremony','2012-06-01 13:00:00','Ceremony'),
(2016,'Mens Diving Semi-Finals','2016-06-21 11:30:00','Sport'),
(2016,'Mens 100m Butterfly Finals','2016-06-29 13:00:00','Sport'),
(2016,'Mens 100m Freestyle Finals','2016-06-30 13:00:00','Sport'),
(2016,'Opening Ceremony','2016-06-11 08:30:00','Ceremony');

INSERT INTO `participate` VALUES (2008,'Canada'),(2010,'Canada'),(2010,'Russia'),(2010,'Sweden'),(2010,'USA');

INSERT INTO `athlete` VALUES 
('0475fe0e-0f67-458a-8483-09366c7fdb32','The Machine'),
('1475fe0e-0f67-458a-8483-09366c7fdb32','Nicholas Siu'),
('2775fe0e-0f67-458a-8483-09366c7fdb32','Barry Sin'),
('9475fe0e-0f67-458a-8483-09366c7fdb32','Michael Phelps'),
('b47ffe0e-0f67-458a-8483-09306c7fdb32','Felix Siu'),
('c475fe0e-0f67-458a-8483-09366c7fdb32','Tristan Lei');

INSERT INTO `sport` VALUES ('100m Butterfly',true),
('100m Freestyle',true),
('100m Sprint',true),
('Diving',true),
('Figure Skating',true),
('Hockey',true),
('Sailing',true),
('Ski jumping',true),
('Skiing',true),
('Speed Skating',true),
('Tug-of-war',false),
('Wrestling',false);


INSERT INTO `summersport`
VALUES
("Diving", false, true),
("100m Butterfly", false, true),
("100m Freestyle", false, true),
("Wrestling", false, false),
("100m Sprint", false, false),
("Tug-of-war", false, false),
("Sailing", true, false);

INSERT INTO `wintersport`
VALUES
("Hockey", false, true),
("Skiing", true, false),
("Figure Skating", false, true),
("Ski jumping", true, false),
("Speed Skating", false, true);


INSERT INTO `plays` VALUES 
('Speed Skating','0475fe0e-0f67-458a-8483-09366c7fdb32'),
('Hockey','1475fe0e-0f67-458a-8483-09366c7fdb32'),
('100m Butterfly','9475fe0e-0f67-458a-8483-09366c7fdb32'),
('100m Freestyle','9475fe0e-0f67-458a-8483-09366c7fdb32'),
('Ski jumping','b47ffe0e-0f67-458a-8483-09306c7fdb32'),
('Diving','c475fe0e-0f67-458a-8483-09366c7fdb32');


INSERT INTO `represents_athlete` VALUES 
('0475fe0e-0f67-458a-8483-09366c7fdb32','Russia',9),
('1475fe0e-0f67-458a-8483-09366c7fdb32','Canada',2),
('2775fe0e-0f67-458a-8483-09366c7fdb32','USA',10),
('9475fe0e-0f67-458a-8483-09366c7fdb32','USA',12),
('b47ffe0e-0f67-458a-8483-09306c7fdb32','Sweden',1),
('c475fe0e-0f67-458a-8483-09366c7fdb32','China',0);


INSERT INTO `competes_plays` VALUES 
('0475fe0e-0f67-458a-8483-09366c7fdb32','Speed Skating','2008-06-16 11:30:00','Womens Speed Skate Semi-Finals',2008),
('1475fe0e-0f67-458a-8483-09366c7fdb32','Hockey','2010-01-23 16:20:30','Mens Ice Hockey Finals',2010),
('9475fe0e-0f67-458a-8483-09366c7fdb32','100m Butterfly','2016-06-29 13:00:00','Mens 100m Butterfly Finals',2016),
('9475fe0e-0f67-458a-8483-09366c7fdb32','100m Freestyle','2016-06-30 13:00:00','Mens 100m Freestyle Finals',2016),
('c475fe0e-0f67-458a-8483-09366c7fdb32','Diving','2016-06-21 11:30:00','Mens Diving Semi-Finals',2016);

INSERT INTO `coach_years` VALUES (0,0),(4,0),(6,1),(9,1),(17,1);

INSERT INTO `coach` VALUES 
('Bing Soo','Korean',9),
('Boss Mans','Russian',4),
('Chee Ken','Chinese',6),
('Felix Siu','Brazilian',0),
('Joe Malone','American',17);

INSERT INTO `coaches` VALUES 
('1475fe0e-0f67-458a-8483-09366c7fdb32','Bing Soo','Korean'),
('b47ffe0e-0f67-458a-8483-09306c7fdb32','Boss Mans','Russian'),
('0475fe0e-0f67-458a-8483-09366c7fdb32','Chee Ken','Chinese'),
('9475fe0e-0f67-458a-8483-09366c7fdb32','Felix Siu','Brazilian'),
('c475fe0e-0f67-458a-8483-09366c7fdb32','Joe Malone','American');

INSERT INTO `sponsor` VALUES 
('Adidas','Adidas'),
('John Johnson','Pepsi'),
('Kevin Smith','Coke'),
('Nike','Nike'),
('Walter Smith','Uniqlo');

INSERT INTO `sponsoredby` VALUES 
('0475fe0e-0f67-458a-8483-09366c7fdb32','Adidas',1),
('1475fe0e-0f67-458a-8483-09366c7fdb32','Nike',594822),
('9475fe0e-0f67-458a-8483-09366c7fdb32','John Johnson',1738),
('9475fe0e-0f67-458a-8483-09366c7fdb32','Nike',3000),
('b47ffe0e-0f67-458a-8483-09306c7fdb32','Walter Smith',20000000),
('c475fe0e-0f67-458a-8483-09366c7fdb32','Kevin Smith',1777000),
('c475fe0e-0f67-458a-8483-09366c7fdb32','Nike',123546),
('c475fe0e-0f67-458a-8483-09366c7fdb32','Walter Smith',600000);