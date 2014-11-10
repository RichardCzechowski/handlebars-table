(function(){
  Handlebars.registerHelper('boole', function(eng){
    if (eng){
      return new Handlebars.SafeString("<span class='glyphicon glyphicon-ok'></span>")
    }
    else{
      return new Handlebars.SafeString("<span class='glyphicon glyphicon-remove'></span>")
    }
  })

  Handlebars.registerHelper('number', function(num){
    if(accounting.unformat(num)>5000000){
      return new Handlebars.SafeString("class='text-danger'")
    }
    else  if(accounting.unformat(num)>100000){
      return new Handlebars.SafeString("class='text-success'")
    }
    else{
      return
    }

  })


})();
