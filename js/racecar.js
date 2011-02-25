(function(context) {
  var Racecar = {};
  var Tags = {};
  

  Racecar.set = function(key, value) {
    Tags[key] = value;
  };
  Racecar.get = function(key) {
    Tags[key];
  };
  Racecar.track = function(key) {
    Tags[key]();
  };

  var Google = {
    init: function(account_id, opts) {
      this.options = $.extend({}, opts);
    },

    track: function(tag) {
      _gaq.push([]); 
    }
  };

  var Dart = {
    load: function(source, type) {
      this.options = { source: source, type: type };
    },

    randomNumber: function() {
      var axel = Math.random() + "";
      return axel * 10000000000000;
    },

    trackFloodlight: function(cat, random_number) {
      randomNumber = typeof(randomNumber) !== 'undefined' ? randomNumber : this.randomNumber();

      if($('#DCLK_FLDiv').length !== 0) {
        var div = $('#DCLK_FLDiv');
      } else {
        var div = $('<div>', {
          id: 'DCLK_FLDiv' 
        }).css({
          position: 'absolute', 
          visibility:'hidden', 
          top: '0px'
        });
        $('body').append(div);
      }
      div.html('<iframe id="DCLK_FLIframe" src="http://fls.doubleclick.net/activityi;src=' + this.options.source + ';type=' + this.options.type + ';cat=' + cat + ';ord='+ cat + '-' + random_number + '?" style="width:1px;height:1px"></iframe>'); 
    }

    trackSpotlight: function(cat, randomNumber) {
      randomNumber = typeof(randomNumber) !== 'undefined' ? randomNumber : this.randomNumber();
      
      var spotpix = new Image();
      spotpix.src = 'http://fls.doubleclick.net/activityi;src=' + this.options.source + ';type=' + this.options.type + ';cat=' + cat + ';ord=' + random_number + '?';
    }

    track: function(implem, cat, randomNumber) {
      randomNumber = typeof(randomNumber) !== 'undefined' ? randomNumber : this.randomNumber();

      if (implem === 'floodlight') {
        Dart.trackFloodlight(cat, randomNumber);
      } else if (implem === 'spotlight') {
        Dart.trackSpotlight(cat, randomNumber);
      } else {
        throw "Unknown Dart implementation method.";
      }
    }
  }; 

  Racecar.Google = Google;
  Racecar.Dart = Dart;
  context.Racecar = Racecar;

  // jQuery Plugin for quickly binding a track function to a link
  // Examples:
  //   $(SELECTOR).clickAndTrack(function() {}, Racecar.Google, '/event');
  //   $(SELECTOR).clickAndTrack(function() {}, Racecar.Dart, 'tag');

  $.fn.clickAndTrack = function(func, key) {
    $(this).click(function() {
      Racecar.track.apply(this, key);
      return func.call(this);
    });
  };
})(window);
