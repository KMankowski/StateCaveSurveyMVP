#!/bin/bash
set -e

mysql -u root -p <<EOF
DROP DATABASE IF EXISTS state_cave_survey;
SOURCE schema.sql;
SOURCE seed.sql;
EOF

echo "Database reset successfully."
