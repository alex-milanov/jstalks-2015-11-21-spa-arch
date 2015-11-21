# JSTalks 2015 - SPA Architecture

## ...life, self-improvement and martial arts

## The Story So Far

### 1996-99 Early Days
- LOGO, GWBasic, Visual Basic
- Starcraft, Quake 2
- 1st internship Alg. Pascal, C++

### 1999-2004 Creative Chaos
- 2 Game Dev Teams
- Fruity Loops
- http://gamedevbg.headoff.com
- 1st entrepreneurial experience
- 1st failure
- Martenci

### 2003-2006 Learning the trade
- Intern -> Junior -> Senior
- PHP, MySQL, Frameworks
- JavaScript Hell
- template engine -> cms -> framework
- Alan Kay & Spagethi Code

### 2006-2012 Branching Off
- Senior -> Architect
- Freelance -> Partnership (German Partner)
- Clueless about Branding
- Backend focus, Some jQuery Goodness
- couple of iterations of backend PHP framework
- simple 3d engine somewhere in there
- e-commerce, PM -> CRM, SaaS -> 3D House Configurator

### 2011-2012 Falling out -> Entrepreneurship
- I 4 Web Ltd.
- Ext.js, Web Based IDE
- final iteration of php framework
- 1st web dev course
- Big Project = Big Drama = Big Stress
- New Beginning -> Startup Weekend

### 2012-2013 Starting up, Failing Down, Starting up again
- 2nd startup, 2nd fail
- Freelancer again
- Startup Weekends, Architectural Hackathons...
- jQuery + OOP.js > Ext.js
- iOS, Bezier curves, Qt
- Applied Web Dev Course

### 2014 Open Source & Full-Stack
- Civic Hacking Roller Coaster
- MEAN Stack, REST API lib
- Full-Stack JavaScript lecture
- Mentoring at Startup Weekend
- Failing to launch
- Stress, Resistence and Remedy

### 2015 Jan-July Turning Pro
- Goals, Mastermind, Guthrie Castle
- Weekend Prototype, Node.js project
- Front-end JavaScript Course
- Hackathon Triatlon
- Full-Stack + Mobile boilerplate, gulp
- Beginnings of QooleJS
- 1 Funky React Project

### The last 4-5 months
- LiveCoding.tv
- Helped sell a domain
- Weekly Stream -> Daily Strem
- QooleJS -> JSLoops -> JSPress -> JSDraw
- MusicTechFest -> TriTune
- 3D, Music, Art, Content, Electronics ...
- gulp, sass, jade, markdown, webaudio, webgl

## META Concepts

### Iteration Loop

### But DRY

### Remove friction & Build Structures
#### Also Jeet Kune Do

### CaNI = Kaizen
#### Constant and never-ending improvement
#### Deming -> Quality Control -> Japanese Miracle -> Toyota -> Agile/Lean/SCRUM/Kanban

## Development Strategies

### Rule of thumb
- do more with less
- less code, less files
- more reusability

### Division of labour
- html/jade for structure
- css/sass for look & feel
- js for functionality
- markdown for content

### Prototyping vs Scaling

### Reinventing the wheel

### Still not a fan of TDD

## So, is OOP dead, are angular and React the way? Meteor, Polymer, ECMAScript two thousand and what? JSHell 2.0

### Keep calm and ...

### Drink from the source
- https://devchat.tv/ -> JavaScript Jabber, Adventures in Angular
- http://thewebplatform.libsyn.com/ - The Web Platform Podcast
- http://hangouts.readthesource.io/ - Read the source hangouts
- http://fb.com/groups/fullstackjs

## Lessons being learned

### OOP is alive and kicking
```js
THREE.Mesh = function ( geometry, material ) {

	THREE.Object3D.call( this );

	this.type = 'Mesh';

	this.geometry = geometry !== undefined ? geometry : new THREE.Geometry();
	this.material = material !== undefined ? material : new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff } );

	this.updateMorphTargets();

};

THREE.Mesh.prototype = Object.create( THREE.Object3D.prototype );
THREE.Mesh.prototype.constructor = THREE.Mesh;
```

### NAmespacing

### BEM & iblokz.Element
- https://en.bem.info/method/key-concepts/

### Signals & Slots

### History Pattern
```js
"use strict";

if(typeof QL === "undefined"){ var QL = {}; }
if(typeof QL.etc === "undefined"){ QL.etc = {}; }

QL.etc.History = function(){

	this.events = [];
	this.index = -1;

}

QL.etc.History.prototype = {
	add: function(undo, redo, title){
		this.index ++;

		if(this.events.length > this.index){
			this.events.splice(this.index,this.events.length-this.index);
		}

		var time = new Date().getTime();

		var lastEvent = (this.index > 0) ? this.events[this.index-1] : false;

		// if the event has the same title as last and less than 3s have passed join them
		if(lastEvent && title == lastEvent.title && (time - lastEvent.time) < 3000){
			this.index --;
			this.events[this.index].time = time;
			this.events[this.index].redo = redo;
		} else {
			this.events.push({
				undo: undo,
				redo: redo,
				title: title,
				time: time
			})
		}
	},

	undo: function () {

		if ( this.index < 0 ) return;

		this.events[ this.index -- ].undo();

	},

	redo: function () {

		if ( this.index === this.events.length-1 ) return;

		this.events[ ++ this.index ].redo();

	},

	clear: function () {

		this.events = [];
		this.index = -1;

	}

}
```

### Loading and Saving

### Scene Graph

## Examples & Case Studies

- http://qoolejs.wp.alexmilanov.com
- http://jsloops.wp.alexmilanov.com
- http://jsdraw.wp.alexmilanov.com

## Interested?
- https://twitter.com/alex_milanov_
- https://livecoding.tv/alex_milanov/
- https://github.com/alex-milanov/
- http://alexmilanov.com

### My Linux Setup
- http://alexmilanov.com/txt/my-linux-setup.html
