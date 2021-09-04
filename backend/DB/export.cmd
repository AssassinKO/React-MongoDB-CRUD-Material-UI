echo exporting......
mongoexport --collection=assessments --db=tutor --out=assessments.json 
mongoexport --collection=assigneds --db=tutor --out=assigneds.json 
mongoexport --collection=categories --db=tutor --out=categories.json 
mongoexport --collection=lessons --db=tutor --out=lessons.json 
mongoexport --collection=levels --db=tutor --out=levels.json  
mongoexport --collection=reviews --db=tutor --out=reviews.json 
mongoexport --collection=roles --db=tutor --out=roles.json 
mongoexport --collection=securityquestions --db=tutor --out=securityquestions.json 
mongoexport --collection=topics --db=tutor --out=topics.json 
mongoexport --collection=users --db=tutor --out=users.json 
mongoexport --collection=worksheets --db=tutor --out=worksheets.json 