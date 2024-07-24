CREATE DATABASE IF NOT EXISTS TECHDB;
USE TECHDB;
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    password VARCHAR(255) NOT NULL
);
USE TECHDB;

INSERT INTO users (username, email, first_name, last_name, age, password)
VALUES
    ('jdoe', 'jdoe@example.com', 'John', 'Doe', 30, 'hashedpassword1'),
    ('asmith', 'asmith@example.com', 'Alice', 'Smith', 25, 'gsDFsdfnjfbFJDSFSK'),
    ('bjohnson', 'bjohnson@example.com', 'Bob', 'Johnson', 40, 'SADSADASDAJ&^@@HRH(#'),
    ('cwhite', 'cwhite@example.com', 'Carol', 'White', 35, 'ASDASKN(&@(&&#UHakdsada'),
    ('dgreen', 'dgreen@example.com', 'David', 'Green', 28, 'ncasbmhBHWK*@^#^(!U'),
    ('emiller', 'emiller@example.com', 'Eva', 'Miller', 22, 'asdasNCKAS&@&*!(#JJDja'),
    ('fscott', 'fscott@example.com', 'Frank', 'Scott', 31, 'asdsammskafn(!@&#*$('),
    ('gthomas', 'gthomas@example.com', 'Grace', 'Thomas', 27, 'vvcxm&@^^#&*KJDHSJ'),
    ('hclark', 'hclark@example.com', 'Hannah', 'Clark', 29, 'gdsdfjak&^@^*#(#Usjjskvn'),
    ('ijones', 'ijones@example.com', 'Ian', 'Jones', 33, 'jsbadkjnUDSK7&@&$(&#^');
