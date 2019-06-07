/* global roadshow */

'use strict';

(function() {

  roadshow.load({
    app:{
      brand:'News Hound',
      manifest:chrome.runtime.getManifest()
    },
    theme:{
      primary:'red-700',
      primaryAlt:'red-a700',
      secondary:'amber-700',
      secondaryAlt:'amber-a700'
    }
  });

})();
