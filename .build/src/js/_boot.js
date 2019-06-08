/* global roadshow,chrome */

'use strict';

(function() {

  let manifest=chrome.runtime.getManifest();
  roadshow.load({
    app:{
      brand:manifest.name,
      manifest
    },
    theme:{
      primary:'red-700',
      primaryAlt:'red-a700',
      secondary:'amber-700',
      secondaryAlt:'amber-a700'
    }
  });

})();
