# ArcLib

[Arcs are in geometry a closed segment of differentiable curve.](https://en.wikipedia.org/wiki/Arc_(geometry)) 
In OpenLayers creating an arc might be a messy and confusing task, as there is no embedded way to do this.
ArcLib is a JS library that targets in making this task easier by wrapping all the functionality of creating arcs
in simple contructors.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine 
for development and testing purposes.

### Prerequisites

An existing project with OpenLayers 5 support.

### Installing

A step by step series of examples that tell you how to get a development environment running

Just copy the **arcLib.js** file to your preferred folder in you project

Mine for example is in  :

```
/js/arcLib.js
```

Then include the library in your html page , where you create the map with script tags

For Example: 
```
<script src="../js/arcLib.js"></script>
```

In case you want to test the library, before you use it, just **clone the whole project and
open index.html** from your browser. **In any other case just follow the above steps, as you 
don't need the rest of the files, to use the library.**

##How to Use it
The library consists of several methods for creating, removing and editing arcs in OpenLayers
maps.
* 2 Constructors : 
```
createArcWithAngle(rawCenter, radius, segments, direction, angle)

or

createArcwithDirectionInDegrees(rawCenter, radius, segments, degrees, angle )
```

* 1 Remover
```
removeArc(sourceVector, features)
```

* 2 Helper functions
```
getArcAllSegments(layerVector)

and

getSurfaceOfArc(layerVector)
```

##Example
This is a mouse click function, that creates arcs using the methods of the library 
and add them in the OpenLayers map.

```
map.on('click', function(evt){
    /* Uncomment the constructor of your preference to create the arc*/
    // let layer = createArcWithAngle(evt.coordinate, 3000000, 100, 'S', 60);
    let layer = createArcwithDirectionInDegrees(evt.coordinate, 3000000, 100, 270, 60);
    map.addLayer(layer);
    createPin(evt.coordinate);
});
```

## Built With

* [HTML](https://en.wikipedia.org/wiki/HTML) - Used to create the initial UI.
* [JS](https://en.wikipedia.org/wiki/JavaScript) - Scripting Language
* [OpenLayers](https://openlayers.org/) - Used to generate the map

## Contributing

Please read [CODE_OF_CONDUCT.md](https://github.com/mikopos/ArcLib/blob/master/CODE_OF_CONDUCT.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
The current version is v1.0.0 .

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/mikopos/ArcLib/tags). 

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/mikopos/ArcLib/blob/master/LICENSE.md) file for details

## Acknowledgments

* [Thaleskreis](http://gis.ibbeck.de/ginfo/apps/OLExamples/OL29/Thaleskreis/thaleskreis.asp)
* [PurpleBooth](https://gist.github.com/PurpleBooth)


