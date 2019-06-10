/* global roadshow,chrome */

'use strict';

(function() {

  let manifest=chrome.runtime.getManifest(),
      storage=window.localStorage;

  roadshow.load({
    app:{
      brand:manifest.name,
      manifest,
      storage
    },
    theme:storage.darkMode?
      {
        background:'gray-800',
        surface:'gray-900',
        primary:'blue-900',
        primaryAlt:'blue-200',
        secondary:'amber-700',
        secondaryAlt:'amber-a700',
        muted:'blue-gray-200'
      }:
      {
        background:'gray-200',
        primary:'red-700',
        primaryAlt:'red-a700',
        secondary:'amber-700',
        secondaryAlt:'amber-a700'
      }
  });

})();
