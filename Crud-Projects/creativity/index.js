const express=require("express");
const app =express();
const port =8080;
const path = require("path");
const{v4 : uuidv4} = require("uuid");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const multer = require("multer");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "public/uploads")); 
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + "-" + file.originalname); 
    }
});

const upload = multer({ storage: storage });




app.use(express.urlencoded({extended :true}));
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let username = "graphique_soul";

let posts = [
    {  
        id: uuidv4(),
        content: "T-shirt painting &#128396;&#127912;",
        image: "/artwork_1.jpg",
        likes:41,
        views:800

    },
    {
        id: uuidv4(),
        content: "Love For Drawing &#128150;",
        image: "/artwork_2.jpg",
        likes:33,
        views:780
    },
    { 
        id: uuidv4(),
        content: "Showing my artwork until i get another commmision &#128150;&#10024;",
        image: "/artwork_3.jpg",
        likes:31,
        views:600
    },
    { 
        id: uuidv4(),
        content: "Feeling loud as thunder &#9889;,but my voice forgot how to rain &#127783;",
        image: "/artwork_4.jpg",
        likes:32,
        views:827
    }
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts,username});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts", upload.single("imageFile"), (req, res) => {
    console.log("⏺️ req.body:", req.body);
    console.log("⏺️ req.file:", req.file);

    try {
        let { content,likes,views } = req.body;
        let image = req.file ? "/uploads/" + req.file.filename : req.body.image;
        let id = uuidv4();
        posts.push({ id, content, image ,likes:parseInt(likes),views:parseInt(views) });
        res.redirect("/posts");
    } catch (err) {
        console.error("❌ Error while handling POST:", err.message);
        res.send("Upload failed: " + err.message);
    }
});


app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("show.ejs",{post});
});


app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let { content, image } = req.body;

    let post = posts.find(p => p.id === id);
    if (post) {
        post.content = content;
        post.image = image;
        post.likes = parseInt(req.body.likes);
        post.views = parseInt(req.body.views);
        res.redirect("/posts");
    } else {
        res.status(404).send("Post not found");
    }
});


app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
});

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id !== p.id);
    res.redirect("/posts");
})

app.listen(port,()=>{
    console.log("listening to the port : 8080");
}); 
