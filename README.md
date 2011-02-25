# Racecar

Racecar makes it easier to implement multiple tracking vendor libraries on websites.

We all dread it. The client always wants to implement more than one vendor's tracking library on a site. We receive huge excel spreadsheets with hundreds of distinct tags for event/page tracking. Racecar aims to releive some of the pain.


## Requirements

TODO: Decide on what is absolutely required. Keep it simple.

## Installation
    
TODO: Add this.

## Configuration

    Racecar.set('help', function() {
      Racecar.Google.track('helpTag');
      Racecar.Dart.track('floodlight', 'helpTag');
    });

    Racecar.set('about', function() {
      Racecar.Google.track('aboutTag');
      Racecar.Dart.track('floodlight', 'aboutTag');
    });
    
    $('#aboutButton').clickAndTrack(function() {
      alert('We just called the about event'); 
    }, 'about');
