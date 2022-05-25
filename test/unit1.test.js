router.post('/blog',upload.array('image',12),(req, res, next)=>{
    const file = req.files;
    if (!file) {
        const error = new Error("please upload a file");
        error.httpStatusCode = 400;
        return next(error)
    }
    var images = [];
    for (let index = 0; index < file.length; index++) {
        //    images.push(file[index])
        images.push((file[index].path).slice(7,));
  
    }
    var tags = req.body.tag
   var tag =tags.split(","); 
    var myPost = {
        title:req.body.title,
        body: req.body.body,
        tags: tag,
        image:images
    };
    console.log(myPost)
  
  });

let image = ["a",2.3, 5,6,7,8,9]
let b = [1,2,3,4]

image.forEach(e => {
     if(b.find(e)){
         
     }   
});

