# Racecar

Racecar makes it easier to implement multiple tracking vendor libraries on websites.

We all dread it. The client always wants to implement more than one vendor's tracking library on a site. We receive huge excel spreadsheets with hundreds of distinct tags for event/page tracking. Racecar aims to releive some of the pain.


## Requirements

TODO: Decide on what is absolutely required. Keep it simple.

## Installation
    
TODO: Add this.

## Configuration
    
    <a href="" data-track="about" data-id="123">Track Me</a>
    <a href="" data-track="contact" data-who="brett">Booddin</a>

    Racecar.bind('about', function() {
      var extra = $(this).attr('data-id');
      Racecar.Google.track('aboutTag', extra);
      Racecar.Dart.track('floodlight', 'aboutLink');
    });

    Racecar.bind('contact', function() {
      var who = $(this).attr('data-who');
      Racecar.Google.track('contactTag', who);
      Racecar.Dart.track('floodlight', 'contactLink');
    });
