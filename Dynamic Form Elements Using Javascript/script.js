fetch('http://kotlintpoint.com/android/data.json')
  .then(response => response.json())
  .then(data => {
      console.log(data.questions);
      data.questions.forEach(question => {
          console.log(question)
          addFields(question)
      });
      addSubmitButton();
  });

  function addSubmitButton(){
    var container = document.getElementById("container");
    container.appendChild(document.createElement("br"));
    var div=document.createElement("div");
    div.className="row";

    // for input box
    var input = document.createElement("input");
    input.type = "submit";
    div.appendChild(input);

    container.appendChild(div);
  }

  function addFields({title, name, type}){
    //var number = document.getElementById("member").value;
    var container = document.getElementById("container");
    /*while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }*/
    //for (i=0;i<number;i++){
        var div=document.createElement("div");
        div.className="row";

        // for label
        var div25=document.createElement("div");
        div25.className="col-25";
        var label=document.createElement("label");
        label.append(title);
        div25.appendChild(label);
        div.appendChild(div25);
        
        // for input box
        var div75=document.createElement("div");
        div75.className="col-75";
        var input = document.createElement("input");
        input.type = type;
        input.name=name;
        input.placeholder="Your "+title+"...";
        div75.appendChild(input);
        div.appendChild(div75);

        container.appendChild(div);
        //container.appendChild(document.createElement("br"));
        //container.appendChild(document.createElement("br"));
    //}
}