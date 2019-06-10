'use strict';

(function() {

  const SRC='src/',
        DST='../pub/';

	module.exports={
		plugins:{
      eslint:{
        pattern:/\.js$/
      },
      terser:{
        mangle:false
      }
		},
		paths:{
			public:DST,
			watched:[ SRC ]
		},
		files:{
			javascripts:{
				joinTo:{ 'js/app.min.js':[ SRC+'tags/**/*',SRC+'js/*' ] },
        order:{ after:SRC+'js/_boot.js' }
			}
		},
		modules:{
			wrapper:false,
			definition:false
		},
		conventions: {
			ignored:function() {
				return false;
			}
		},
		npm:{ enabled:false },
		notifications:false,
		optimize:true,
    sourceMaps:false
	};

})();
