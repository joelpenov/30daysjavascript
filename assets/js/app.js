//joel

var DRUMPS = DRUMPS || {};

(function(){

	var audioUrl = "../../JavaScript30/Day 1/media/Drumps Sounds/";
	var data = [
		{
			letter: "A",
			letterCode: 65,
			label: "CLAP",
			audio: audioUrl + "3.mp3"
		},
		{
			letter: "S",
			letterCode: 83,
			label: "Hithat",
			audio: audioUrl + "4.mp3"
		},
		{
			letter: "D",
			letterCode: 68,
			label: "Kick",
			audio: audioUrl + "5.mp3"
		},
		{
			letter: "F",
			letterCode: 70,
			label: "OpenHat",
			audio: audioUrl + "7.mp3"
		},
		{
			letter: "G",
			letterCode: 71,
			label: "boom",
			audio: audioUrl + "8.mp3"
		},
		{
			letter: "H",
			letterCode: 72,
			label: "Ride",
			audio: audioUrl + "9.mp3"
		},
		{
			letter: "J",
			letterCode: 74,
			label: "snare",
			audio: audioUrl + "33.mp3"
		},
		{
			letter: "K",
			letterCode: 75,
			label: "tom",
			audio: audioUrl + "39.mp3"
		},
		{
			letter: "L",
			letterCode: 76,
			label: "tink",
			audio: audioUrl + "34.mp3"
		}
	];


	function DrumpsViewModel (view){
		var self = this;

		self.view = view;

		self.init = function(){
			view.init(data);
		}

	};

	function DrumpsView(){
		var self = this;
		var letterTemplate = document.getElementById("letter-entry-template");
		var keysContainer = document.getElementById("keys-container");

		self.init = function(entries){
			keysContainer.innerHTML += "";
			self.renderEntries(entries);
		}

		self.renderEntries = function(entries){
			entries.forEach(function(entry){
				var currentEntry = letterTemplate.innerHTML;
				currentEntry = currentEntry.replace(/{{letter}}/g,entry.letter).replace("{{label}}",entry.label);
				keysContainer.innerHTML += currentEntry;
				self.addKeyEvent(entry);
			});	
		};

		self.addKeyEvent = function(letterObject){
			addEventListener("keydown", function(event){
				if(letterObject.letterCode === event.keyCode){
					var currentElement = document.getElementById("letter-" + letterObject.letter);
					currentElement.classList.add("playing");
					self.playAudio(letterObject.audio, currentElement);
				}
			});
		}

		self.playAudio = function(audioUrl, element){
			var soundPlaying = new Audio(audioUrl);
			soundPlaying.play();

			soundPlaying.addEventListener("ended", function() 
		     {
		          element.classList.remove("playing");
		     });
		}
	};

	document.addEventListener('DOMContentLoaded', function() {
		var viewModel = new DrumpsViewModel(new DrumpsView());
   		viewModel.init();
	});
})();