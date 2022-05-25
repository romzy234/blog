const element = document.getElementById('example2');
var dddd = document.querySelector('input[name=body]');



    var editor = new Quill("#editor")
    editor.enable(false);
        dddd.value = JSON.stringify(editor.setContents(x));
