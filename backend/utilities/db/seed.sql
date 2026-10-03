INSERT INTO cave (name) VALUES
    ('Crystal Cavern'),
    ('Moonlight Cave'),
    ('Eagle Cave'),
    ('Whispering Cave'),
    ('Hidden Hollow'),
    ('Thunder Cave'),
    ('Silver Cavern'),
    ('Raven Cave'),
    ('Emerald Grotto'),
    ('Bear Cave'),
    ('Lost Cavern'),
    ('Shadow Cave'),
    ('Sunset Cavern'),
    ('Granite Cave'),
    ('Wolf Den'),
    ('Dragon Cave'),
    ('Echo Cavern'),
    ('Mystic Cave'),
    ('Cedar Hollow'),
    ('Deep Hollow'),
    ('River Cave'),
    ('Limestone Cave'),
    ('Blackwater Cave'),
    ('Wind Cave'),
    ('Blue Grotto'),
    ('Copper Cavern'),
    ('Frost Cave'),
    ('Redstone Cave'),
    ('Pine Cave'),
    ('Coyote Cavern'),
    ('Hidden River Cave'),
    ('Grand Cavern');


INSERT INTO entrance (cave_id, name, county, location) VALUES

    -- 20 caves with exactly 1 entrance
    (1,  'Crystal Cavern',       'Hall',       ST_SRID(POINT(-84.1500, 34.2500), 4326)),
    (2,  'Moonlight Cave',       'White',      ST_SRID(POINT(-83.7500, 34.6500), 4326)),
    (3,  'Eagle Cave',           'Pickens',    ST_SRID(POINT(-84.4500, 34.5000), 4326)),
    (4,  'Whispering Cave',      'Gilmer',     ST_SRID(POINT(-84.9000, 34.7000), 4326)),
    (5,  'Hidden Hollow',        'Union',      ST_SRID(POINT(-83.9000, 34.8500), 4326)),
    (6,  'Thunder Cave',         'Fannin',     ST_SRID(POINT(-84.3000, 34.8000), 4326)),
    (7,  'Silver Cavern',        'Murray',     ST_SRID(POINT(-84.7000, 34.8000), 4326)),
    (8,  'Raven Cave',           'Whitfield',  ST_SRID(POINT(-84.9500, 34.8500), 4326)),
    (9,  'Emerald Grotto',       'Walker',     ST_SRID(POINT(-85.3000, 34.7000), 4326)),
    (10, 'Bear Cave',            'Dade',       ST_SRID(POINT(-85.5000, 34.8500), 4326)),
    (11, 'Lost Cavern',          'Catoosa',    ST_SRID(POINT(-85.1000, 34.9500), 4326)),
    (12, 'Shadow Cave',          'Gordon',     ST_SRID(POINT(-84.7500, 34.5000), 4326)),
    (13, 'Sunset Cavern',        'Bartow',     ST_SRID(POINT(-84.8000, 34.2500), 4326)),
    (14, 'Granite Cave',         'Cherokee',   ST_SRID(POINT(-84.5500, 34.2000), 4326)),
    (15, 'Wolf Den',             'Forsyth',    ST_SRID(POINT(-84.1500, 34.1500), 4326)),
    (16, 'Dragon Cave',          'Dawson',     ST_SRID(POINT(-84.1500, 34.4500), 4326)),
    (17, 'Echo Cavern',          'Lumpkin',    ST_SRID(POINT(-84.0000, 34.5500), 4326)),
    (18, 'Mystic Cave',          'Banks',      ST_SRID(POINT(-83.5000, 34.3500), 4326)),
    (19, 'Cedar Hollow',         'Habersham',  ST_SRID(POINT(-83.5000, 34.5500), 4326)),
    (20, 'Deep Hollow',          'Rabun',      ST_SRID(POINT(-83.6000, 34.9000), 4326)),


    -- 10 caves with exactly 2 entrances
    -- Each has one entrance matching the cave name exactly.
    (21, 'River Cave',           'Jackson',    ST_SRID(POINT(-83.5500, 34.1000), 4326)),
    (21, 'North Entrance',       'Jackson',    ST_SRID(POINT(-83.5600, 34.1050), 4326)),

    (22, 'Limestone Cave',       'Madison',    ST_SRID(POINT(-83.2000, 34.0500), 4326)),
    (22, 'South Entrance',       'Madison',    ST_SRID(POINT(-83.2100, 34.0450), 4326)),

    (23, 'Blackwater Cave',      'Oglethorpe', ST_SRID(POINT(-83.1000, 33.9000), 4326)),
    (23, 'Creek Entrance',       'Oglethorpe', ST_SRID(POINT(-83.1100, 33.9050), 4326)),

    (24, 'Wind Cave',            'Elbert',     ST_SRID(POINT(-82.8500, 34.1000), 4326)),
    (24, 'East Entrance',        'Elbert',     ST_SRID(POINT(-82.8400, 34.1050), 4326)),

    (25, 'Blue Grotto',          'Franklin',   ST_SRID(POINT(-83.2000, 34.4000), 4326)),
    (25, 'Lower Entrance',       'Franklin',   ST_SRID(POINT(-83.2100, 34.3950), 4326)),

    (26, 'Copper Cavern',        'Hart',       ST_SRID(POINT(-82.9000, 34.3500), 4326)),
    (26, 'Upper Entrance',       'Hart',       ST_SRID(POINT(-82.8900, 34.3550), 4326)),

    (27, 'Frost Cave',           'Stephens',   ST_SRID(POINT(-83.3000, 34.5500), 4326)),
    (27, 'Ice Entrance',         'Stephens',   ST_SRID(POINT(-83.3100, 34.5550), 4326)),

    (28, 'Redstone Cave',        'Towns',      ST_SRID(POINT(-83.7000, 34.9000), 4326)),
    (28, 'Red Entrance',         'Towns',      ST_SRID(POINT(-83.7100, 34.9050), 4326)),

    (29, 'Pine Cave',            'Macon',      ST_SRID(POINT(-83.4000, 35.0500), 4326)),
    (29, 'Forest Entrance',      'Macon',      ST_SRID(POINT(-83.4100, 35.0550), 4326)),

    (30, 'Coyote Cavern',        'Clay',       ST_SRID(POINT(-83.6000, 35.0500), 4326)),
    (30, 'Ridge Entrance',       'Clay',       ST_SRID(POINT(-83.6100, 35.0550), 4326)),


    -- 2 caves with exactly 5 entrances
    -- Each has one entrance matching the cave name exactly.
    (31, 'Hidden River Cave',    'Monroe',     ST_SRID(POINT(-80.5500, 37.5500), 4326)),
    (31, 'North Entrance',       'Monroe',     ST_SRID(POINT(-80.5600, 37.5550), 4326)),
    (31, 'South Entrance',       'Monroe',     ST_SRID(POINT(-80.5400, 37.5450), 4326)),
    (31, 'Water Entrance',       'Monroe',     ST_SRID(POINT(-80.5650, 37.5500), 4326)),
    (31, 'Ridge Entrance',       'Monroe',     ST_SRID(POINT(-80.5450, 37.5600), 4326)),

    (32, 'Grand Cavern',         'Greenbrier', ST_SRID(POINT(-80.8000, 37.9500), 4326)),
    (32, 'Main Entrance',        'Greenbrier', ST_SRID(POINT(-80.8100, 37.9550), 4326)),
    (32, 'North Entrance',       'Greenbrier', ST_SRID(POINT(-80.7900, 37.9550), 4326)),
    (32, 'South Entrance',       'Greenbrier', ST_SRID(POINT(-80.8100, 37.9450), 4326)),
    (32, 'Hidden Entrance',      'Greenbrier', ST_SRID(POINT(-80.7900, 37.9450), 4326));
