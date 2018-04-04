var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
   
    var distance = Math.sqrt(((p2.x-p1.x)^2)+((p2.y-p1.y)^2));
    return distance;    
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){

    var distances =[]
    data.forEach((e)=>{ 
    	e.distance = exercise.distance(newPoint,e)
    	distances.push(exercise.distance(newPoint,e)); 
    });
    return data;
};

// find k closest points
exercise.findClosest = function(k,data){

    var compare = function(a,b){
    	return a.distance-b.distance;
    }

    data.sort(compare);

    return data.slice(0,k);    
};

module.exports = exercise;
