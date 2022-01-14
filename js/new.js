/*Initialize Masonry
// vanilla JS
// init with element*/

var grid = document.querySelector('.grid');

var msnry = new Masonry(grid, {
	itemSelector: '.grid-item',
	/*Osiris options*/
	columnWidth: 200,
	perspective: 3000,
	animeOpts: {
		duration: function() {
			return anime.random(500,1000)
		},
		easing: [0.2,1,0.3,1],
		delay: function(t,i) {
			return i*50;
		},
		opacity: {
			value: [0,1],
			duration: 700,
			easing: 'linear'
		},
		translateZ: {
			value: [-3000,0],
			duration: 1000
		},
		rotateY: ['-1turns',0]
	}
	});


	setTimeout(function() {
		msnry = (grid, {
    //hack for animation on load, select no items
  		  itemSelector: 'none',
		  columnWidth: 200,
		});

	grid.addClass('visible-items');

	// reset itemSelector
	grid.masonry( 'option', {
	  itemSelector: '.grid-item'
	});

	var items = grid.find('.grid-item');
	grid.masonry( 'appended', items );
  	}, 1000);


	  'Osiris': {
		perspective: 3000,
		animeOpts: {
			duration: function() {
				return anime.random(500,1000)
			},
			easing: [0.2,1,0.3,1],
			delay: function(t,i) {
				return i*50;
			},
			opacity: {
				value: [0,1],
				duration: 700,
				easing: 'linear'
			},
			translateZ: {
				value: [-3000,0],
				duration: 1000
			},
			rotateY: ['-1turns',0]
		}
