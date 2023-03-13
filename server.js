const express = require("express");
const bodyParser =  require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const app = express();

app.set('view engine' , 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
// mongodb://127.0.0.1:27017/work
mongoose.connect("mongodb+srv://btechcse2024:Hunny%402005@cluster0.kxvbhiu.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser : true});

const StudentSchema = {
    rollno : String,
    Name : String,
    Subjects : {
        BDA : {
            Absent : Number,
            Total : Number
        },
        CNS : {
            Absent : Number,
            Total : Number,
        }, 
        NP : {
            Absent : Number,
            Total : Number
        },
        ES : {
            Absent : Number,
            Total : Number
        },
        NLP : {
            Absent : Number,
            Total : Number
        },
        ML : {
            Absent : Number,
            Total : Number
        },
        BDA_Lab : {
            Absent : Number,
            Total : Number
        },
        MLP_Lab : {
            Absent : Number,
            Total : Number
        },
        MST_Lab : {
            Absent : Number,
            Total : Number
        },
        CNS_Lab : {
            Absent : Number,
            Total : Number
        },
    }
};

const Attend = mongoose.model("Info", StudentSchema);

var admin = [];

app.get("/",function(req,res){
    res.render("home")
})

app.get("/admin",function(req,res){
    res.render("admin");
});

app.get("/add",function(req,res){
    res.render("add")
})

app.post("/add",function(req,res){   
const one = new Attend({
        rollno : req.body.rollno,
        Name : req.body.name,
        Subjects : {
            BDA : {
                Absent : 0,
                Total : 0
            },
            CNS : {
                Absent : 0,
                Total : 0,
            }, 
            NP : {
                Absent : 0,
                Total : 0
            },
            ES : {
                Absent : 0,
                Total : 0
            },
            NLP : {
                Absent : 0,
                Total : 0
            },
            ML : {
                Absent : 0,
                Total : 0
            },
            BDA_Lab : {
                Absent : 0,
                Total : 0
            },
            MLP_Lab : {
                Absent : 0,
                Total : 0
            },
            MST_Lab : {
                Absent : 0,
                Total : 0
            },
            CNS_Lab : {
                Absent : 0,
                Total : 0
            },
        }
      });
        one.save();
        res.redirect("/add");
})

app.post("/",function(req,res){
    Attend.find({ rollno : req.body.roll},function(err,results){
        if(err){
          console.log(err);
        }else{
            if(results.length){
                res.render("attendance" , {con : results});
            }else{
                res.redirect("/");
            }
        }
      });

})

app.post("/admin",function(req,res){
    var ch = req.body.check;
    var admi = req.body.abs;
    admin = admi.split(',');
    for(var c=0;c<admin.length;c++)
    {
        var nam = "20021A05" + admin[c];
        admin[c] = nam;
    }
    switch (ch) {
        case "BDA":  admin.forEach(element => {
                        Attend.findOneAndUpdate({"rollno" : element} ,{$inc : {"Subjects.BDA.Absent" : 1}} ,function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                        }
                        })
                    });
                    Attend.updateMany({} , {$inc : {"Subjects.BDA.Total" : 1}},function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            res.redirect("/admin");
                        }
                    })
                    break;
        case "CNS":  admin.forEach(element => {
                        Attend.findOneAndUpdate({"rollno" : element} ,{$inc : {"Subjects.CNS.Absent" : 1}} ,function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            // console.log("DONE DMT");
                        }
                        })
                    });
                    Attend.updateMany({} , {$inc : {"Subjects.CNS.Total" : 1}},function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            res.redirect("/admin");
                        }
                    })
                    break;
        case "ML":  admin.forEach(element => {
                        Attend.findOneAndUpdate({"rollno" : element} ,{$inc : {"Subjects.ML.Absent" : 1}} ,function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            // console.log("DONE CD");
                        }
                        })
                    });
                    Attend.updateMany({} , {$inc : {"Subjects.ML.Total" : 1}},function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            res.redirect("/admin");
                        }
                    })
                    break;
        case "NP":  admin.forEach(element => {
                        Attend.findOneAndUpdate({"rollno" : element} ,{$inc : {"Subjects.NP.Absent" : 1}} ,function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            // console.log("DONE AI");
                        }
                        })
                    });
                    Attend.updateMany({} , {$inc : {"Subjects.NP.Total" : 1}},function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            res.redirect("/admin");
                        }
                    })
                    break;
        case "ES":  admin.forEach(element => {
                        Attend.findOneAndUpdate({"rollno" : element} ,{$inc : {"Subjects.ES.Absent" : 1}} ,function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            // console.log("DONE OT");
                        }
                        })
                    });
                    Attend.updateMany({} , {$inc : {"Subjects.ES.Total" : 1}},function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            res.redirect("/admin");
                        }
                    })
                    break;
        case "NLP":  admin.forEach(element => {
                        Attend.findOneAndUpdate({"rollno" : element} ,{$inc : {"Subjects.NLP.Absent" : 1}} ,function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            // console.log("DONE OT");
                        }
                        })
                    });
                    Attend.updateMany({} , {$inc : {"Subjects.NLP.Total" : 1}},function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            res.redirect("/admin");
                        }
                    })
                    break;
        case "BDA_Lab":  admin.forEach(element => {
                        Attend.findOneAndUpdate({"rollno" : element} ,{$inc : {"Subjects.BDA_Lab.Absent" : 1}} ,function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            // console.log("DONE OT");
                        }
                        })
                    });
                    Attend.updateMany({} , {$inc : {"Subjects.BDA_Lab.Total" : 1}},function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            res.redirect("/admin");
                        }
                    })
                    break;
        case "MLP_Lab":  admin.forEach(element => {
                        Attend.findOneAndUpdate({"rollno" : element} ,{$inc : {"Subjects.MLP_Lab.Absent" : 1}} ,function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            // console.log("DONE OT");
                        }
                        })
                    });
                    Attend.updateMany({} , {$inc : {"Subjects.MLP_Lab.Total" : 1}},function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            res.redirect("/admin");
                        }
                    })
                    break;
        case "MST_Lab":  admin.forEach(element => {
                        Attend.findOneAndUpdate({"rollno" : element} ,{$inc : {"Subjects.MST_Lab.Absent" : 1}} ,function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            // console.log("DONE OT");
                        }
                        })
                    });
                    Attend.updateMany({} , {$inc : {"Subjects.MST_Lab.Total" : 1}},function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            res.redirect("/admin");
                        }
                    })
                    break;
        case "CNS_Lab":  admin.forEach(element => {
                        Attend.findOneAndUpdate({"rollno" : element} ,{$inc : {"Subjects.CNS_Lab.Absent" : 1}} ,function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            // console.log("DONE OT");
                        }
                        })
                    });
                    Attend.updateMany({} , {$inc : {"Subjects.CNS_Lab.Total" : 1}},function(err,results){
                        if(err){
                            console.log(err);
                        }else{
                            res.redirect("/admin");
                        }
                    })
                    break;
        default : console.log("Error");
        break;

    }
})
const port = process.env.PORT || 3000;

app.listen(3000,function(){
    console.log("Server Started");
})