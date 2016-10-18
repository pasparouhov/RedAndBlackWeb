var title = document.getElementById("title");
var article = document.getElementById("article");
var submit = document.getElementById("submit");
function submitClick() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();
  var picture = "";

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
    reader.onloadend = function() {
                base64data = reader.result;                
                console.log(base64data );
                picture = base64data;
                let d = {
                  title: title.value,
                  article: article.value,
                  time: datetime,
                  picture: picture
                };
                firebase.database().ref().push().set(d);
                window.alert("Article Uploaded")
  console.log('jsn: after here');
              
    }

  }
var currentdate = new Date(); 
var datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " @ "  + currentdate.getHours() + ":"  
+ currentdate.getMinutes() + ":" + currentdate.getSeconds(); 
  console.log('jsn:got here');
  
}
function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
