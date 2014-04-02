var inputData = [
        
        {'state' : 'al', 'fip' : '01', 'name': 'Alabama'}, 
        {'state' : 'ak', 'fip' : '02', 'name': 'Alaska'}, 
        {'state' : 'az', 'fip' : '04', 'name': 'Arizona'}, 
        {'state' : 'ar', 'fip' : '05', 'name': 'Arkansas'}, 
        {'state' : 'ca', 'fip' : '06', 'name': 'California'}, 
        {'state' : 'co', 'fip' : '08', 'name': 'Colorado'}, 
        {'state' : 'ct', 'fip' : '09', 'name': 'Connecticut'}, 
        {'state' : 'de', 'fip' : '10', 'name': 'Delaware'}, 
        {'state' : 'dc', 'fip' : '11', 'name': 'Distric of Columbia'}, 
        {'state' : 'fl', 'fip' : '12', 'name': 'Florida'}, 
        {'state' : 'ga', 'fip' : '13', 'name': 'Georgia'}, 
        {'state' : 'hi', 'fip' : '15', 'name': 'Hawaii'}, 
        {'state' : 'id', 'fip' : '16', 'name': 'Idaho'}, 
        {'state' : 'il', 'fip' : '17', 'name': 'Illinois'}, 
        {'state' : 'in', 'fip' : '18', 'name': 'Indiana'}, 
        {'state' : 'ia', 'fip' : '19', 'name': 'Iowa'}, 
        {'state' : 'ks', 'fip' : '20', 'name': 'Kansas'}, 
        {'state' : 'ky', 'fip' : '21', 'name': 'Kentucky'}, 
        {'state' : 'la', 'fip' : '22', 'name': 'Louisiana'}, 
        {'state' : 'me', 'fip' : '23', 'name': 'Maine'}, 
        {'state' : 'md', 'fip' : '24', 'name': 'Maryland'}, 
        {'state' : 'ma', 'fip' : '25', 'name': 'Massachusetts'}, 
        {'state' : 'mi', 'fip' : '26', 'name': 'Michigan'}, 
        {'state' : 'mn', 'fip' : '27', 'name': 'Minnesota'}, 
        {'state' : 'ms', 'fip' : '28', 'name': 'Mississippi'}, 

        {'state' : 'mo', 'fip' : '29', 'name': 'Missouri'},
        {'state' : 'mt', 'fip' : '30', 'name': 'Montana'},
        {'state' : 'ne', 'fip' : '31', 'name': 'Nebraska'},
        {'state' : 'nv', 'fip' : '32', 'name': 'Nevada'},
        {'state' : 'nh', 'fip' : '33', 'name': 'New Hampshire'},
        {'state' : 'nj', 'fip' : '34', 'name': 'New Jersey'},
        {'state' : 'nm', 'fip' : '35', 'name': 'New Mexico'},
        {'state' : 'ny', 'fip' : '36', 'name': 'New York'},
        {'state' : 'nc', 'fip' : '37', 'name': 'North Carolina'},
        {'state' : 'nd', 'fip' : '38', 'name': 'North Dakota'},
        {'state' : 'oh', 'fip' : '39', 'name': 'Ohio'},
        {'state' : 'ok', 'fip' : '40', 'name': 'Oklahoma'},
        {'state' : 'or', 'fip' : '41', 'name': 'Oregon'},
        {'state' : 'pa', 'fip' : '42', 'name': 'Pennsylvania'},
        {'state' : 'ri', 'fip' : '44', 'name': 'Rhode Island'},
        {'state' : 'sc', 'fip' : '45', 'name': 'South Carolina'},
        {'state' : 'sd', 'fip' : '46', 'name': 'South Dakota'},
        {'state' : 'tn', 'fip' : '47', 'name': 'Tennessee'},
        {'state' : 'tx', 'fip' : '48', 'name': 'Texas'},
        {'state' : 'ut', 'fip' : '49', 'name': 'Utah'},
        {'state' : 'vt', 'fip' : '50', 'name': 'Vermont'},
        {'state' : 'va', 'fip' : '51', 'name': 'Virginia'},
        {'state' : 'wa', 'fip' : '53', 'name': 'Washington'},
        {'state' : 'wv', 'fip' : '54', 'name': 'West Virginia'},
        {'state' : 'wi', 'fip' : '55', 'name': 'Wisconsin'},
        {'state' : 'wy', 'fip' : '56', 'name': 'Wyoming'}

];    

var minWage;
var prop;
var dmRange;


var yearWage; 



var controls = d3.select('#controls');

var crrwage =controls.append('button')
        .attr('class', 'wage-group')
        .attr('id', 'crrwage')
        .text("Current Wage: 7.25/hr");

var nwwage= controls.append('button')
        .attr('class', 'wage-group')
        .attr('id', 'nwwage')
        .text("New Wage: 10.10/hr");

var indiv = controls.append('button')
        .attr('class', 'status-group')
        .attr('id', 'indiv')
        .text("Single");


var fam = controls.append('button')
        .attr('class', 'status-group')
        .attr('id', 'fam')
        .text("Family of 4");        


  var container =  $('#vis-container');
    
  var width = (container.width()-300);

 // console.log(container.width(), width);
  var height =  width*0.520833;
   var scaleFactor = (width/960)*.95;
  var active;

  var topmargin;



 if(height<=420){
    
    container.css('height', 420);
    topmargin = (Math.abs(height-400))/2;
  }

  else{
    container.css('height', height);
    topmargin = 0;
  }
  

 

  var projection = d3.geo.albersUsa();
                    
  var path = d3.geo.path()
            .projection(projection);

  var svg = d3.select("#wage_map")
              .append("svg")
              .attr('id', 'svgcon')
              .attr('width', width)
              .attr('height', height)
              .style('margin-top', topmargin);
              

  var rect = svg.append('rect');
             
  var mainMap = d3.select("#svgcon")
              .append("g")
              .attr('id', 'mainMap');

  var tooltipDislay = d3.select('#vis-container').append("div")
                  .attr("class", "tooltip") 
                  .style("opacity", 0);     

   

     rect
              .attr('width', width)
              .attr('height', height);



var thousand = d3.format(",");
var fipstr = d3.format("05d");


var legendSvg = d3.select("#legend")
              .append("svg")
              .attr('id', 'svglegend')
              .attr('width', 300)
              .attr('height', 50);
             

var leftgrad = legendSvg.append("defs")
  .append("linearGradient")
    .attr("id", "leftGrd")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0%")
    .attr("spreadMethod", "pad");

leftgrad.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "green")
    .attr("stop-opacity", 1);

leftgrad.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", '#2EB33E' ) //"#82E37D"
    .attr("stop-opacity", 1);


var rightgrad = legendSvg.append("defs")
  .append("linearGradient")
    .attr("id", "rightGrd")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0%")
    .attr("spreadMethod", "pad");

rightgrad.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", '#F27272')
    .attr("stop-opacity", 1);

rightgrad.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", '#F00C0C' ) //"#82E37D"
    .attr("stop-opacity", 1);    





var rectRight = legendSvg.append('rect')
                        .attr('width', 98)
                        .attr('height', 20)
                        .style('fill', 'url(#rightGrd)')
                        .attr('transform', 'translate(153, 0)');

var rectLeft = legendSvg.append('rect')
                        .attr('width', 98)
                        .attr('height', 20)
                        .style('fill', 'url(#leftGrd)')
                        .attr('transform', 'translate(50, 0)');



var legendX = d3.scale
                .linear()
                .range([0, 100, 101, 102, 201]);

var legendAxis = d3.svg.axis()
                  .scale(legendX)
                  .orient("bottom");     

var xAxis; 

var formatNums;   




queue()
    .defer(d3.json, "data/usFull.json")
    .defer(d3.json, "data/stateOnly.json")
    .await(ready);


function ready(err, us, stateWage){

prop = 'ad1';
minWage= 7.25;
dmRange = [1300, 1, 0, -1, -5000];

var color = d3.scale.linear()
            .range([ 'green', '#2EB33E',  '#888',  '#F27272',  '#F00C0C'])
            .domain(dmRange);

 
var idx = stateWage.map(function(d){        
        return d.name;
});

var fipidx = inputData.map(function(d){       
        return d.fip;
});

var stidx = inputData.map(function(d){      
        return d.state;
});

var stNameidx = inputData.map(function(d){       
        return d.name;
});






function convertString(data){

  if(data.indexOf(',')>=0){
    data = data.replace(',', '');
  }

  return parseFloat(data);

}


function countyData(stStr, id) {


  queue()
    
    .defer(d3.json, "data/countydata/"+ stStr +"_counties.json")
    .await(function(err, data){
    
     var dataObj = data.counties;

     

     dataObj.forEach(function(d){
      var cnt = d;
      var cntId = d.id;
      var cntData = extractData(cnt, prop, id);

      var check = fipstr(d.id).slice(0, -3);


      d3.selectAll("#mainMap #fip-" + cntId)
      .style('fill', function(){

        
        var diff = yearWage - cntData.yearlyTotal;

     
       if (cntData == undefined) { 

        return '#ddd';} 
       else{ return color(diff);}

      })
      .on('mouseover', function(d){
          d3.select('#display table').style('display', 'block');
          d3.select('#display #title').style('display', 'block');
          d3.select('#display #cnt').style('display', 'block');
          //console.log(d.id);
          renderDOM(cntData);

      })
      .on('mouseout', mouseout);

     });

   

    });


}


function reset(){
  counties.style('display', 'none');
  mapState.style('display', 'block');
}
 

  function extractData(dataObj, str, stateName){  
  var obj = dataObj[str];
  //console.log(dataObj.name, dataObj.ad1)
  var food = convertString(obj['Food']);
  var child;
  var medical = convertString(obj['Medical']);
  var housing = convertString(obj['Housing']);
  var trans = convertString(obj['Transportation']);
  var other = convertString(obj['Other']);

  if(str == 'ad1'){
      child = convertString(obj['Child Care']);
      yearWage = minWage * 2080;
      }
  else{
      child = convertString(dataObj['ad1_2ch']['Child Care']);
      yearWage =  (minWage * 2080) *2;

      }

  var monthlyTotal = food + child + medical + housing + trans + other ;
  var yearlyTotal = monthlyTotal *12 ;

  return{
    "state" : stateName,
    "county" : dataObj.name,
    "food": food, 
    "child": child,
    "medical": medical, 
    "housing": housing, 
    "trans": trans,
    "other": other,
    "monthlyTotal": monthlyTotal,
    "yearlyTotal": yearlyTotal,
    "diff":  yearWage -yearlyTotal
  }



}





function renderDOM (stateData){
      

     
      var outTxt =  d3.select('#output-txt');
    



      var diff = yearWage - stateData.yearlyTotal;
      var housing = stateData.housing;
      var food = stateData.food;
      var trans = stateData.trans;
      var medical = stateData.medical;
      var other = stateData.other;
      var child = stateData.child;
      var total = stateData.yearlyTotal;


          d3.select('#title').html(stateData.state);
          d3.select('#cnt').html(stateData.county);

          

          d3.select('#food .yearly').html( thousand(food*12));
          d3.select('#child .yearly').html(thousand(child*12));
          d3.select('#housing .yearly').html( thousand(housing*12));
          d3.select('#trans .yearly').html(thousand(trans*12));
          d3.select('#medical .yearly').html( thousand(medical*12));
          d3.select('#other .yearly').html( thousand(other*12));

          d3.select('#food .monthly').html( thousand(food));
          d3.select('#child .monthly').html( thousand(child));
          d3.select('#housing .monthly').html(thousand(housing));
          d3.select('#trans .monthly').html(thousand(trans));
          d3.select('#medical .monthly').html(thousand(medical));
          d3.select('#other .monthly').html(thousand(other));


          d3.select('#total .yearly').html(thousand(total));
          d3.select('#income .yearly').html( thousand(yearWage));
          d3.select('#diff .yearly').style('color', color(diff)).html(thousand(diff));


         

}



  function mouseover(d){

          d3.select('#display table').style('display', 'block');
          d3.select('#display #title').style('display', 'block');
          d3.select('#display #cnt').style('display', 'block');

           var state = idx.indexOf(d.id);
            var stateData;
            var dataObj;
 
          if(state>=0){

            dataObj = stateWage[state].wage;
            stateData  = extractData(dataObj, prop, d.id);


           }

          renderDOM(stateData);

        }


        function mouseout(d){
          d3.select('#display table').style('display', 'none');
          d3.select('#display #title').style('display', 'none');
          d3.select('#display #cnt')
            .html("Hover over state to see details");
          

        }

//console.log(idx);
  
 rect.on('click', resetZoom);

var stData =    topojson.feature(us, us.objects.states).features;







 



 var condition1 =false;
  var condition2 =false;
  var condition3 =false;
  var condition4 =false;



 var mapState = mainMap.selectAll(".states")
    
   .data(stData)
   .enter().append("path")
    .attr("class", "states")
    .attr("d", path)
    .style('cursor', 'pointer')
    .style('stroke', '#fff')
    .style('stroke-width', .2)
    //.attr("id", function(d){return (d.id).replace(' ', '-');})
    .attr("class", function(d){return (d.id).replace(' ', '-');})
     .on('mouseover', mouseover)
        .on('mouseout', mouseout)
        .on('click', function(d){
          //console.log(d.id);
          mapState.style('display', 'none');
          var id = (d.id).replace(' ', '-');
          var zoomState = d3.selectAll('.' + id);
          zoomState.style('display', 'block');

          var obj = d3.select(this);

          var countStr = inputData[stNameidx.indexOf(d.id)].state;

         

         countyData(countStr, d.id);


         

         clickZoom(d, obj);





        });


 xAxis = legendSvg
      .append("g")
      //.attr('width', 202)
      .attr("class", "x-axis")
      .call(legendAxis)
      .attr('transform', 'translate(50, 21)'); 



var count = 0;      

function updateState(){  
 var stPct =[];
  var diffVals =[];




   stData.forEach(  function(d, i){
          //console.log(d.id);
          var dtOb = d;
           var state = idx.indexOf(d.id);
            var stateData;
            var dataObj;

 
          if(state>=0){

            dataObj = stateWage[state].wage;
            //console.log(prop);
            stateData  = extractData(dataObj, prop, d.id);


           

        if (stateData == undefined) {
          //console.log(d.id);
         dtOb._diff = undefined;
        }        

         if (stateData != undefined) {
      dtOb._diff = stateData.diff;
          var nm =  (d.id).replace(' ', '-');

          //console.log(d.diff);

          diffVals.push(stateData.diff);

          if(stateData.diff>=0){
           
           var stOb = {'state': stateData.state, 'diff': stateData.diff};

            stPct.push(stOb);

          }



        }

      }

        });

            
function callLgd(){  

  legendX.domain(dmRange);

  legendAxis.tickValues(formatNums);
  xAxis.call(legendAxis);
  color.domain(dmRange);




 mapState.style('fill', function(d){return color(d._diff);});

}


  var btmtxt = d3.select('#bottom-txt');
          var num = stPct.length;
          var pct = (num/50)*100;
          var status = (prop == 'ad1')? 'a single adult without dependents': 'a family of 4 with two working adults and two children' ;

      
           if(prop == 'ad1' && minWage == 7.25 ) { 
          var max = d3.max(diffVals);
          var min = d3.min(diffVals);

          formatNums = [max, 0, min];
          dmRange = [max, 1, 0, -1, min];

         if(condition1 == false){
           
          condition1 = true;
          count++;

          callLgd();
        }

        else {
          if(condition1 == true){

            callLgd();
            return;

          }
        }

        };
         if(prop == 'ad1' && minWage == 10.10 ) { 

          var max = d3.max(diffVals);
          var min = d3.min(diffVals);

          formatNums = [max, 0, min];
          dmRange = [max, 1, 0, -1, min];
   
         if(condition2 == false){
           
          condition2 = true;
          count++;
          callLgd();
        }

        else {
          if(condition2 == true){

            callLgd();
            return;

          }
        }
        };

       if(prop == 'ad2_2ch' && minWage == 7.25 ){ 

        var max = d3.max(diffVals);
          var min = d3.min(diffVals);

        formatNums = [ 0, min];

        //console.log(min);

         dmRange = [max, 1, 0, -1, min];

       rectLeft.style('display', 'none');

         if(condition3 == false){
          
          condition3 = true;
          count++;
          callLgd();
        }

        else {
          if(condition3 == true){

            callLgd();
            return;

          }
        }
      };
          if(prop == 'ad2_2ch' && minWage == 10.10){ 

           var max = d3.max(diffVals);
          var min = d3.min(diffVals);

        formatNums = [max, 0, min];

        //console.log(min);

         dmRange = [max, 1, 0, -1, min];

           
           if(condition4 == false){
           
          condition4 = true;
          count++;
          callLgd();
        }

        else {
          if(condition4 == true){

            callLgd();
            return;

          }
        }
          };


  

        

      



        
        

        
}


updateState();



       
    




var counties = mainMap.selectAll(".counties")
      .data(topojson.feature(us, us.objects.counties).features)
      .enter().append("path")
      .attr("d", path)
      .attr('class', 'counties')
      .attr("class", function(d) { 
          var fip = fipstr(d.id).slice(0, -3);
          var idVal = fipidx.indexOf(fip);

          if(idVal>=0){



            return (inputData[idVal].name).replace(' ', '-');

          }

       



       })
      .attr('id', function(d){return ('fip-' + fipstr(d.id));})
     //.attr("fill-rule", "evenodd")
      .style('fill', '#ddd')
      .style('stroke', '#fff')
      .style('stroke-width', .3)
      .style('display', 'none');
      


      mainMap
      .transition().duration(750)
      .attr("transform", "scale(" + scaleFactor + ")"); 
      
     

function reSize(){

    var scaleFactor = (width/960)*.95;
    width= container.width()-300;
    height= width*0.520833;
    var topmargin;


  if(height<=420){
    
    container.css('height', 420);
    topmargin = (Math.abs(height-400))/2;
  }

  else{
    container.css('height', height);
    topmargin = 0;
  }
     

      svg
      .transition()
      .duration(750)
      .attr('width', width)
      .attr('height', height)
             .style('margin-top', topmargin);
   
    rect
      .style('cursor', 'default')
      .on('mouseover', null)
      .on('mouseout', null)
      .transition()
      .duration(750)
      .attr('width', width)
      .attr('height', height);
      


    tooltipDislay     
                  .attr("opacity", 0);
   

       if(zoomedIn){

      zoomedIn = false;
      
      projection.translate([480, 250]);
      mapState.style('display', 'block');
      counties.style('display', 'none');
      mainMap.selectAll(".active").classed("active", active = false);

      }
      else{


      
      mainMap
      .transition().duration(750)
      .attr("transform", "scale(" + scaleFactor + ")"); 
      }
      

}

d3.select(window).on("resize", reSize);



    /*Zoom*/
var zoomedIn;    

    function clickZoom(d, obj) {




     
      zoomedIn=true;


      rect
      .style('cursor', 'pointer')
      .on('mouseover', function(){

       

        tooltipDislay.html("Click background to zoom out");


       tooltipDislay.transition()        
                  .duration(200)      
                  .style("opacity", .95)
                  .style('left', 150)
                  .style("top", 100);
                  



      })
      .on('mouseout', function(){

        tooltipDislay.transition()        
                  .duration(200)      
                  .style("opacity", 0);
                  

      });


  if (active === d) return reset();
  selectedState = (d.id).replace(' ', '-');
  
  



       counties.style('display', function(){
        var obj = d3.select(this);
          
          if (obj.attr('class')=== selectedState){
              obj.style('opacity', 0).transition().duration(250).style('opacity', 1);
              return 'block';
          }
          else{
              return 'none';
          }
        });


       mapState.style('display', function(){
        var obj = d3.select(this);

          if (obj.attr('class')=== selectedState){
              return 'block';
          }
          else{
            return 'none';
          }

        });




  
  mainMap.selectAll(".active").classed("active", false);
  obj.classed("active", active = d);


    var zoomfactor = .9; 
    var b = path.bounds(d);
    var stateWidth = (b[1][0] - b[0][0]);
    var stateHeight = (b[1][1] - b[0][1]);
    var widthBounds = -(b[1][0] + b[0][0])/2;
    var heightBounds = -(b[1][1] + b[0][1])/2;
  
  projection.translate([width/2, height/2]);

  mainMap.transition().duration(750).attr("transform",
     "translate(" + projection.translate() + ")" +
     "scale(" + zoomfactor / Math.max((stateWidth) / width, (stateHeight) / height) + ")" +
    "translate(" +  widthBounds + "," +  heightBounds + ")" 
      );    
  
}//Zoom









function resetZoom() {

  
    width= container.width()-300;
    height= width*0.520833;

     var scaleFactor = (width/960)*.95;

  zoomedIn = false;

    

   rect
      .style('cursor', 'default')
      .on('mouseover', null)
      .on('mouseout', null);

  projection.translate([480, 250]);
  mapState.style('display', 'block');
  counties.style('display', 'none');
  mainMap.selectAll(".active").classed("active", active = false);

    
      mainMap
      .transition().duration(750)
      .attr("transform", "scale(" + scaleFactor + ")"); 
      
 tooltipDislay    
                  .style("opacity", 0);

}


crrwage.attr('disabled', true);
indiv.attr('disabled', true);

crrwage
  .on('click', function(){
  d3.selectAll('.wage-group').attr('disabled', null);
  d3.select(this).attr('disabled', true);
  
  if(zoomedIn){
    resetZoom();
  }

  
  minWage = 7.25;


   rectLeft.style('display', 'block');
  updateState();


});


nwwage.on('click', function(){
  d3.selectAll('.wage-group').attr('disabled', null);
  d3.select(this).attr('disabled', true);

   if(zoomedIn){
    resetZoom();
  }

  minWage = 10.10;



rectLeft.style('display', 'block');
  updateState();
});


indiv
  .on('click', function(){

  d3.selectAll('.status-group').attr('disabled', null);
  d3.select(this).attr('disabled', true);

   if(zoomedIn){
    resetZoom();
  }

   prop = 'ad1';


 rectLeft.style('display', 'block');
  updateState();

});

fam.on('click', function(){

  d3.selectAll('.status-group').attr('disabled', null);
  d3.select(this).attr('disabled', true);

   if(zoomedIn){
    resetZoom();
  }

  prop = 'ad2_2ch';



  
  updateState();

});


 







}

