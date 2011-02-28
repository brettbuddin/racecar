(function(context) {
  var Racecar = {};
  
  Racecar.tags = {};
  Racecar.bind = function(key, fn) {
    this.tags[key] = fn; 
    $('[data-track]="' + key + '"').click(function() {
      fn.call(this);
    });
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
})(window);
