echo "Initing collections............"
mongo tutor --eval "db.categories.remove({})"

mongo tutor --eval "db.assessments.remove({})"
mongo tutor --eval "db.categories.remove({})"
mongo tutor --eval "db.assigneds.remove({})"
mongo tutor --eval "db.lessons.remove({})"
mongo tutor --eval "db.levels.remove({})"
mongo tutor --eval "db.reviews.remove({})"
mongo tutor --eval "db.roles.remove({})"
mongo tutor --eval "db.securityquestions.remove({})"
mongo tutor --eval "db.topics.remove({})"
mongo tutor --eval "db.users.remove({})"
mongo tutor --eval "db.worksheets.remove({})"

echo "importing data............"
mongoimport --db tutor --collection assessments --type json --file ./assessments.json --type=json
mongoimport --db tutor --collection assigneds --type json --file ./assigneds.json --type=json
mongoimport --db tutor --collection categories --type json --file ./categories.json --type=json
mongoimport --db tutor --collection lessons --type json --file ./lessons.json --type=json
mongoimport --db tutor --collection levels --type json --file ./levels.json --type=json
mongoimport --db tutor --collection reviews --type json --file ./reviews.json --type=json
mongoimport --db tutor --collection roles --type json --file ./roles.json --type=json
mongoimport --db tutor --collection securityquestions --type json --file ./security-questions.json --type=json
mongoimport --db tutor --collection topics --type json --file ./topics.json --type=json
mongoimport --db tutor --collection users --type json --file ./users.json --type=json
mongoimport --db tutor --collection worksheets --type json --file ./worksheets.json --type=json
