//letter-entry-template

var DRUMPS = DRUMPS || {};

(function(){

	var audioUrl = "../media/Drumps Sounds/";
	var data = [
		{
			letter: "A",
			label: "CLAP",
			audio: audioUrl + "3.mp3"
		},
		{
			letter: "S",
			label: "Hithat",
			audio: audioUrl + "4.mp3"
		},
		{
			letter: "D",
			label: "Kick",
			audio: audioUrl + "5.mp3"
		},
		{
			letter: "F",
			label: "OpenHat",
			audio: audioUrl + "7.mp3"
		},
		{
			letter: "G",
			label: "boom",
			audio: audioUrl + "8.mp3"
		},
		{
			letter: "H",
			label: "Ride",
			audio: audioUrl + "9.mp3"
		},
		{
			letter: "J",
			label: "snare",
			audio: audioUrl + "33.mp3"
		},
		{
			letter: "K",
			label: "tom",
			audio: audioUrl + "39.mp3"
		},
		{
			letter: "L",
			label: "tink",
			audio: audioUrl + "34.mp3"
		}
	];


	function viewModel (){
		var self = this;

	};

	function view(){
		var self = this;
		var letterTemplate = document.getElementById("letter-entry-template");
		var keysContainer = document.getElementById("keys-container");

		self.init = function(entries){
			entries.forEach(function(entry){
				var entry = letterTemplate.innerHTML;

			});
		}
	};

	document.addEventListener('DOMContentLoaded', function() {
   		
	});
})();