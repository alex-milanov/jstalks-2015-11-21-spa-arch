"use strict";

	$(document).ready(function(){

		$(".markdown h2").each(function(){
			var $section = $("<section></section>");
			var $sectionContent = $(this).nextUntil("h2");

			var hasSubsections = false;
			$sectionContent.filter("h3").each(function(){
				console.log(this);
				hasSubsections = true;
				var $subSection = $("<section></section>");
				var $subSectionContent = $(this).nextUntil("h3, h2");
				$subSection.append($(this));
				$subSection.append($subSectionContent);
				$section.append($subSection);
			})

			if(!hasSubsections){
				$section.append($(this));
				$section.append($sectionContent);
			} else {
				var $subSection = $("<section></section>");
				var $subSectionContent = $(this).nextUntil("h3, h2");
				$subSection.append($(this));
				$subSection.append($subSectionContent);
				$section.prepend($subSection);
			}
			$(".reveal > .slides").append($section);
		})




		Reveal.initialize({
			controls: true,
			progress: true,
			history: true,
			dependencies: [
				{ src: '/lib/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
				{ src: '/lib/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
				{ src: '/lib/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
				{ src: '/lib/reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
				{ src: '/lib/reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
			]
		});	
	})