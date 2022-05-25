const element = document.getElementById('example2');
const example = new Choices(element);
var tags = [];
console.log('hey cyril');


element.addEventListener(
    'addItem',
    function(event) {
        // do something creative here...

        tags.push(event.detail.value)
        
        console.log(tags);
        // console.log(event.detail.id);
        // console.log(event.detail.value);
        // console.log(event.detail.label);
        // console.log(event.detail.customProperties);
        // console.log(event.detail.groupValue);
    },
    false,
 );

    var editor = new Quill("#editor", { 
        bounds: "#full-container .editor", 
        modules: { 
            toolbar: [
                [{ font: [] }, { size: [] }], 
                ["bold", "italic", "underline", "strike"], 
                [
                    { color: [] }, 
                    { background: [] }
                ], 
                [
                    { script: "super" }, 
                    { script: "sub" }
                ], 
                [
                    { list: "ordered" }, 
                    { list: "bullet" }, 
                    { indent: "-1" }, 
                    { indent: "+1" }
                ], 
                ["direction", { align: [] }], 
                ["link", "image"], 
                ["clean"]] 
            }, 
            theme: "snow" 
        })

      var form = document.querySelector('form');
      form.onsubmit = function() {
        // Populate hidden form on submit
        var body = document.querySelector('input[name=body]');
        body.value = JSON.stringify(editor.getContents());
        var tag = document.querySelector('input[name=tag]');

        tag.value = tags;
      };

//     // Set Content 
//     editor.setContents({
//     "ops":[
//         {"insert":"this is a test bit of text\n"}
//     ]
// });