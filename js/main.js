jQuery('a[target^="_new"]').click(function() {
	var width = window.innerWidth * 0.66 ;
	// define the height in
	var height = width * window.innerHeight / window.innerWidth ;
	// Ratio the hight to the width as the user screen ratio
	window.open(this.href , 'newwindow', 'width=' + width + ', height=' + height + ', top=' + ((window.innerHeight - height) / 2) + ', left=' + ((window.innerWidth - width) / 2));

});
function sessionStart() {
	// Initialize data
	if ( sessionStorage.moduleData === undefined ) {
		console.log('reset!');
		curSession = {
			teachers : [
				{pageName: 'Lesson Exemplar', url: 'lesson-exemplar.html', isDone: false},
				{pageName: 'Notes and Tips', url: '#', isDone: false},
				{pageName: 'DC-Circuit Activities', url: 'files/DC-circuits-activities.pdf', isDone: false},
				{pageName: 'Plugins', url: '#', isDone: false, subpages: [
					{pageName: 'Java Runtime (32)', url: 'files/jre-8u231-windows-i586.exe', isDone: false},
					{pageName: 'Java Runtime (64)', url: 'files/jre-8u231-windows-x64.exe', isDone: false}
				]}
			],
			students : [
				{pageName: 'Elicit', url: 'elicit.html', isDone: false},
				{pageName: 'Engage', url: '#', isDone: false},
				{pageName: 'Explore (1)', url: '#', isDone: false},
				{pageName: 'Explain (1)', url: '#', isDone: false},
				{pageName: 'Explore (2)', url: '#', isDone: false},
				{pageName: 'Explain (2)', url: '#', isDone: false},
				{pageName: 'Explore (3)', url: '#', isDone: false},
				{pageName: 'Explain (3)', url: '#', isDone: false},
				{pageName: 'Explore (4)', url: '#', isDone: false},
				{pageName: 'Explain (4)', url: '#', isDone: false},
				{pageName: 'Evaluate', url: '#', isDone: false},
				{pageName: 'Extend', url: '#', isDone: false},
			]
		}
		console.log(JSON.stringify( curSession ));
		sessionStorage.setItem("moduleData", JSON.stringify( curSession ) );
	}

	moduleData = JSON.parse( sessionStorage.getItem( 'moduleData' ) );

	return moduleData;
}



function set( newSession ) {
	sessionStorage.setItem("moduleData", JSON.stringify( newSession ) );
}

$(document).ready(function() {
	$('.popup').animate({
	    bottom: '0px'
	}, 700);

	$('.popup-continue').click(function() {
	    $('.popup').animate({
	        bottom: '-1000px'
	    }, 700)
	})
});