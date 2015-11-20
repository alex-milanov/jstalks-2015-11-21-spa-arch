"use strict";

	$(document).ready(function(){
		Reveal.initialize({
			controls: true,
			progress: true,
			history: true,

		
			// Parallax scrolling
			// parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
			// parallaxBackgroundSize: '2100px 900px',

			// Optional libraries used to extend on reveal.js
			
			dependencies: [
				{ src: '/lib/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
				{ src: '/lib/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
				{ src: '/lib/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
				{ src: '/lib/reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
				{ src: '/lib/reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
			]
		});	
	})