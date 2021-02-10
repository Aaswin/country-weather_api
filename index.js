var colg4=document.getElementById('colg4');
var container=document.getElementById('container');
fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriesData)
{
  var countries = countriesData;
  for (var i = 0; i < countries.length; i++) 
  {
     var mycard = document.createElement("div");
      mycard.id='card';
      mycard.className='card';
      mycard.style.width='18rm';
      colg4.appendChild(mycard);
      
      
      var cardTitle = document.createElement("div");
      cardTitle.className ='card-title';
      cardTitle.style.textAlign = "center";
      cardTitle.innerHTML=countries[i].name;
      mycard.appendChild(cardTitle);
      var cardImage = document.createElement("img");
      cardImage.className ='card-img-top';
      cardImage.src=countries[i].flag;
      mycard.appendChild(cardImage);
      var cardBody = document.createElement("div");
      cardBody.className ='card-body';
      mycard.appendChild(cardBody);
      var cardText1 = document.createElement("div");
      cardText1.className ='card-body';
      cardText1.innerHTML='Capital: '+countries[i].capital;
      cardBody.appendChild(cardText1);
      var cardText2 = document.createElement("div");
      cardText2.className ='card-body';
      cardText2.innerHTML='Region: '+countries[i].region;
      cardBody.appendChild(cardText2);
      var cardText3 = document.createElement("div");
      cardText3.className ='card-body';
      cardText3.innerHTML='Country-code: '+countries[i].callingCodes;
      cardBody.appendChild(cardText3);
      var cardText4 = document.createElement("div");
      cardText4.className ='card-body';
      cardText4.innerHTML='Lat,long: '+countries[i].latlng
      cardBody.appendChild(cardText4);
      var buttonClick = document.createElement("button");
      buttonClick.className ='btn btn-primary';
      buttonClick.innerHTML = 'Click for Weather';
      cardBody.appendChild(buttonClick);
      var cap=countries[i].capital;
      buttonClick.onclick = function() {myFunction(cap)}
      function myFunction(cap)
      { 
            var key='07f4eca136bf63273527106e8dd82c93';
            var cityID=cap
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID+ '&appid=' + key)  
            .then(function(resp) { return resp.json() }) 
            .then(function(data) {
                var des=data.weather[0].description;
                var temp=Math.round(parseFloat(data.main.temp)-273.15);
                alert('temp: '+temp+' type: '+des)
                console.log(data);
            })
            .catch(function() {alert('country not found') });
      }
     
  }
}

