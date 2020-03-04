
CREATE TABLE "colors"
(
    id SERIAL PRIMARY KEY,
    label VARCHAR(80) NOT NULL,
    hex_code VARCHAR(6)
);

CREATE TABLE "blocks"
(
    id SERIAL PRIMARY KEY,
    color_id INT REFERENCES "colors"
);

INSERT INTO "colors"
    ("label", "hex_code")
VALUES
    ('Red', 'ff0000'),
    ('Yellow', 'ffff00'),
    ('Blue', '0000ff'),
    ('Green', '00ff00');


INSERT INTO "blocks"
    ("color_id")
VALUES
    (4),
    (3),
    (2),
    (1);