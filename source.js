var SONGS = [
             { name:'ise_the_by',                           lyrics: 'ise_the_by.html',                           mp3: 'Snd_1.mp3'},
             { name:'farewell_to_nova_scotia',              lyrics: 'farewell_to_nova_scotia.html',              mp3: 'Snd_2.mp3'},
             { name:'barrets_privateers',                   lyrics: 'barrets_privateers.html',                   mp3: 'Snd_3.mp3'},
             { name:'what_do_you_do_with_a_drunken_sailor', lyrics: 'what_do_you_do_with_a_drunken_sailor.html', mp3: 'Snd_4.mp3'},
             { name:'leave_her_johnny',                     lyrics: 'leave_her_johnny.html',                     mp3: 'Snd_5.mp3'},
             { name:'haul_away_joe',                        lyrics: 'haul_away_joe.html',                        mp3: 'Snd_6.mp3'},
             { name:'sante_anno',                           lyrics: 'sante_anno.html',                           mp3: 'Snd_7.mp3'},
             { name:'lowlands',                             lyrics: 'lowlands.html',                             mp3: 'Snd_8.mp3'},
             { name:'bully_in_the_alley',                   lyrics: 'bully_in_the_alley.html',                   mp3: 'Snd_9.mp3'},
             { name:'cheerly_man',                          lyrics: 'cheerly_man.html',                          mp3: 'Snd_10.mp3'},
             { name:'storm_along',                          lyrics: 'storm_along.html',                          mp3: 'Snd_11.mp3'},
             { name:'high_barbaree',                        lyrics: 'high_barbaree.html',                        mp3: 'Snd_12.mp3'},
             { name:'the_fish_of_the_sea',                  lyrics: 'the_fish_of_the_sea.html',                  mp3: 'Snd_13.mp3'},
             { name:'spanish_ladies',                       lyrics: 'spanish_ladies.html',                       mp3: 'Snd_14.mp3'},
             { name:'beneath_the_black_flag',               lyrics: 'beneath_the_black_flag.html',               mp3: 'Snd_15.mp3'},
             { name:'running_down_to_cuba',                 lyrics: 'running_down_to_cuba.html',                 mp3: 'Snd_16.mp3'},
             { name:'st_brendans_fair_isle',               lyrics: 'st_brendans_fair_isle.html',               mp3: 'Snd_17.mp3'},
             { name:'captain_kidd',                         lyrics: 'captain_kidd.html',                         mp3: 'Snd_18.mp3'},
             { name:'marching_inland',                      lyrics: 'marching_inland.html',                      mp3: 'Snd_19.mp3'},
             { name:'yo_ho_yo_ho',                          lyrics: 'yo_ho_yo_ho.html',                          mp3: 'Snd_20.mp3'},
             { name:'hoist_the_colours',                    lyrics: 'hoist_the_colours.html',                    mp3: 'Snd_21.mp3'},
             { name:'away_away_away',                       lyrics: 'away_away_away.html',                       mp3: 'Snd_22.mp3'},
             { name:'sailing_for_adventure',                lyrics: 'sailing_for_adventure.html',                mp3: 'Snd_23.mp3'},
             { name:'farewell_shanty',                      lyrics: 'farewell_shanty.html',                      mp3: 'Snd_24.mp3'}
            ];

var styles = {
      backgroundColor : "#ddd",
      fontWeight: "64px"
    };

var cssBackgroundList   = { '-webkit-background-size' : 'cover',
                            '-moz-background-size'    : 'cover',
                            '-o-background-size'      : 'cover',
                            'background-size'         : 'cover'};

var myAudio;
var CURRENT_SONG;
var MAX_SONGS = 24;
var isPlaying = false;
var playPause = function() {
    if( isPlaying ) {
        myAudio.pause();
    } 
    else {
        myAudio.play();
    }
    isPlaying = !isPlaying;
};

var nextSong = function( el ) {
    
    if( CURRENT_SONG === MAX_SONGS ) {
        CURRENT_SONG = 1;
    } else {
        CURRENT_SONG++;
    }
    
    var newSrc = '/songs/Snd_'+CURRENT_SONG+'.mp3';
    myAudio.src = newSrc;

};

var prevSong = function( el ) {
    
    if( CURRENT_SONG === 1 ) {
        CURRENT_SONG = MAX_SONGS;
    } else {
        CURRENT_SONG--;
    }
    
    var newSrc = '/songs/Snd_'+CURRENT_SONG+'.mp3';
    myAudio.src = newSrc;
};

$( document ).ready(function() {
    // debugger;
    // var wavesurfer = WaveSurfer.create({
    //     container: '#waveform',
    //     waveColor: 'violet',
    //     progressColor: 'purple'
    // });
    // wavesurfer.load('/songs/Snd_1.mp3');
    // var slider = document.querySelector('#slider');

    // slider.oninput = function () {
    //   var zoomLevel = Number(slider.value);
    //   wavesurfer.zoom(zoomLevel);
    // };
    myAudio = document.querySelector('#myAudio');
    myAudio.src = '/songs/Snd_1.mp3';
    CURRENT_SONG = 1;
    myAudio.pause();

    $( '.activate' ).click(function( source ) {
        //debugger;

        var buttonId = source.currentTarget.id;
        console.log( 'activate hit', buttonId );

        var songToLoad = this.id;
        //$( '#'+buttonId).hide();
        $( '.activate' ).hide();
        $('#song-container').load('/lyrics/'+songToLoad+'.html', function( response, status, xhr ) {
            var img = songToLoad+'.jpg';
            //debugger;
            if ( status == "success" ) {
                $('#'+songToLoad+"_song").addClass( 'background-cover' );
                //$('#'+songToLoad+"_song").css('background-image', 'url(pictures/sunset-dancing.png)'); 
                $('#'+songToLoad+"_song").css('background-image', 'url(pictures/'+img+')'); 
            }
        });

    });
    // var MAX_HEIGHT  = $(window).height();
    // var MAX_WIDTH   = $(window).width();
});

// $( window ).load(function() {
//     console.log('hello');
//     //Create the audio tag
//     var soundFile = document.createElement("audio");
//     soundFile.preload = "auto";

//     //Load the sound file (using a source element for expandability)
//     var src = document.createElement("source");
//     src.src = "Snd_1.mp3";
//     soundFile.appendChild(src);

//     //Load the audio tag
//     //It auto plays as a fallback
//     soundFile.load();
//     soundFile.volume = 0.000000;
//     soundFile.play();

//     //Plays the sound
//     function play() {
//        //Set the current time for the audio file to the beginning
//        soundFile.currentTime = 0.01;
//        soundFile.volume = volume;

//        //Due to a bug in Firefox, the audio needs to be played after a delay
//        setTimeout(function(){soundFile.play();},1);
//     }

//     play();
// });
