CREATE TABLE Professors (
  Professor_ID INT PRIMARY KEY,
  Name VARCHAR(255),
  Position VARCHAR(255),
  Email VARCHAR(255),
  Phone VARCHAR(255)
);

-- CREATE TABLE Theses (
--   Author VARCHAR(255),
--   Title VARCHAR(255),
--   Publication_Location VARCHAR(255),
--   Publication_Time VARCHAR(255),
--   Professor_ID INT,
--   FOREIGN KEY (Professor_ID) REFERENCES Professors(Professor_ID)
-- );

CREATE TABLE Projects (
  Project_Name VARCHAR(255),
  Project_Time VARCHAR(255),
  Serial_Number VARCHAR(255),
  Identity VARCHAR(255),
  Professor_ID INT,
  FOREIGN KEY (Professor_ID) REFERENCES Professors(Professor_ID)
);

CREATE TABLE Experiences (
  Professor_ID INT,
  Experience_Type VARCHAR(255),
  Content VARCHAR(255),
  FOREIGN KEY (Professor_ID) REFERENCES Professors(Professor_ID)
);

CREATE TABLE EducationAndExpertise (
  Professor_ID INT,
  Content VARCHAR(255),
  FOREIGN KEY (Professor_ID) REFERENCES Professors(Professor_ID)
);
