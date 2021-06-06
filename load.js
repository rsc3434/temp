var tabbuttons = document.querySelectorAll(".pop  button");
var tabpannel  = document.querySelectorAll(".tabpannel");


function showpannel(pannelindex , colorcode){
    tabbuttons.forEach(function(node){
         node.style.background= "";
      node.style.color="";

    });


    tabbuttons[pannelindex].style.backgroundcolor=colorcode;
    tabbuttons[pannelindex].style.color="black";
    tabpannel.forEach(function(node){
       node.style.display="none";
    });

     tabpannel[pannelindex].style.display="block";
     tabpannel[pannelindex].style.backgroundcolor=colorcode;
  

}






// $.ajax({

//    url: "https://api.covid19api.com/summary",
//    type: "GET",
//    dataType: "JSON",
//    success: function (data) {
//        console.log(data);
//        console.log(data);
//        console.log(data.Countries);


//        $.each(data.Global, function (key, value) {

//            $("#global-wise").append("<tr><td>" + key + "</td>  <td>" + value + "</td>   </tr>")
//        });


//        var sno = 1;

//        $.each(data.Countries, function (key, value) {

//            $("#Contry-wise").append("<tr>" + 
//                "<td>" +  sno  + "</td>"   +

//                              "<td>" + value.Country + "</td>"   +
//                              "<td>" + value.NewConfirmed + "</td>"   +
//                              "<td>" + value.NewDeaths + "</td>"   +
//                              "<td>" + value.NewRecovered + "</td>"   +
//                              "<td>" + value.TotalConfirmed + "</td>"   +
//                              "<td>" + value.TotalDeaths + "</td>"   +
//                              "<td>" + value.TotalRecovered + "</td>"   +

                              
//                                   "</tr>");
//                                   sno++;
//        });
//    }

// });