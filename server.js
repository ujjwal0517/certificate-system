const express = require('express');

const PORT= process.env.PORT || 3000;
let app = express();
app.use(express.urlencoded({extended: false}));
app.use( express.static( "public" ));
app.set("view engine", "ejs");



app.get('/', (req, res) =>{
    res.render('index')
});
app.get("/list",(req,res)=>{
    return res.redirect('/');
})
app.post("/list", (req, res)=>{
    const name = req.body.name;
    const cla= req.body.class;
    const marks = parseInt(req.body.marks);
    let percent = (marks / 800)* 100;
    let division;
    
    if(percent==40){
       division = "Pass";

    }
    else if((percent >= 40) && (percent< 60)){
        division = "Third division";

    }
    else if((percent >= 60) && (percent < 70)){
        division = "Second Division";

    }
    else if((percent >=70) && (percent < 80)){
        division="First Division";     
    }
    else if((percent>=80) && (percent<=100)){
       division = "distinction";
    }
    else {
        division = "fail";
    }

res.render("result", {
    name: name,
    clas: cla,
    marks: marks,
    percent: percent,
    division: division,

});
});
app.listen(PORT, ()=>{
    console.log('sucessfully running@' + PORT);
})
