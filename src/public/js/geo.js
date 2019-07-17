if ("geolocation" in navigator){ //check Geolocation available 
    //things to do
}else{
    console.log("Geolocation not available!");
}


if ("geolocation" in navigator){ //check geolocation available 
    //try to get user current location using getCurrentPosition() method
    
    navigator.geolocation.getCurrentPosition(function(position){ 
            // console.log("EncontradaFound your location nLat : "+position.coords.latitude+" nLang :"+ position.coords.longitude);
            $("#result").html('<p style="text-align: left; margin: 5px;">Su ubicación actual es:</p><p style="text-align: left; margin: 5px;">Latitud: '+position.coords.latitude+'</p><p style="text-align: left; margin: 5px;">Longitud:'+ position.coords.longitude)+'</p>';
            lat=position.coords.latitude;
        lon=position.coords.longitude;
        latlon=new google.maps.LatLng(lat, lon)
        mapholder=document.getElementById("mapa")
        mapholder.style.height='250px';
        mapholder.style.width='100%';
        mapholder.style.margin='auto';
        var myOptions={
            center:latlon,zoom:10,
            mapTypeId:google.maps.MapTypeId.ROADMAP,
            mapTypeControl:false,
            navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
        };
        var map=new google.maps.Map(document.getElementById("mapa"),myOptions);
        var marker=new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
        });        
}else{
    console.log("Browser doesn't support geolocation!");
}