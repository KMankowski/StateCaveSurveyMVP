CREATE DATABASE IF NOT EXISTS state_cave_survey;

USE state_cave_survey;

CREATE TABLE IF NOT EXISTS cave (
    id SMALLINT UNSIGNED
        AUTO_INCREMENT PRIMARY KEY,
    external_id VARCHAR(10)
        NOT NULL UNIQUE,
    name VARCHAR(50)
        NOT NULL UNIQUE,
    description TEXT
        NOT NULL,
    is_open BOOLEAN,
    horizontal_length_feet INT UNSIGNED,
    vertical_depth_feet INT UNSIGNED,
    number_of_pits SMALLINT UNSIGNED,
    deepest_pit_length_feet SMALLINT UNSIGNED,
    first_submitted DATETIME
        NOT NULL
        DEFAULT CURRENT_TIMESTAMP,
    last_updated DATETIME
        NOT NULL
        DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
) ENGINE = InnoDB;
