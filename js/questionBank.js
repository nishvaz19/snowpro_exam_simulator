const questionBank = [

{
question:"What is Snowflake's architecture advantage?",
options:[
"Shared compute",
"Separation of compute and storage",
"Single compute node",
"Local database"
],
answer:1,
hint:"Snowflake scales compute independently."
},

{
question:"Which command loads files into a table?",
options:[
"COPY INTO",
"PUT",
"LOAD DATA",
"IMPORT FILE"
],
answer:0,
hint:"Used with stages."
},

{
question:"Which Snowflake feature tracks DML changes?",
options:[
"Streams",
"Stages",
"Tasks",
"Pipes"
],
answer:0,
hint:"Used for CDC pipelines."
},

{
question:"Result cache lifetime?",
options:[
"12 hours",
"24 hours",
"48 hours",
"7 days"
],
answer:1,
hint:"Cached results expire after one day."
}

]

while(questionBank.length < 400){
questionBank.push({...questionBank[questionBank.length % 4]})
}
