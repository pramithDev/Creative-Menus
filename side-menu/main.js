//CLICK EVENTS

 document.getElementById('toggle-btn').addEventListener(
  'click', toggleSidebar
);

function toggleSidebar(){
	var element = document.getElementById('toggle-btn');
	element.classList.toggle('active');
	
	var vSidebar = document.getElementById('sidebar');
	vSidebar.classList.toggle('active');

	var elementBg = document.querySelector('.container');
	elementBg.classList.toggle('active');
}


//MOUSE HOVER AND MOUSE LEAVE EVEN

// document.getElementById('toggle-btn').addEventListener(
//   'mouseover', toggleSidebar
// );

// document.getElementById('sidebar').addEventListener(
//   'mouseleave', toggleSidebarLeave
// );

// function toggleSidebar(){
// 	var element = document.getElementById('toggle-btn');
// 	element.classList.toggle('active');
	
// 	var vSidebar = document.getElementById('sidebar');
// 	vSidebar.classList.toggle('active');

// 	var elementBg = document.querySelector('.container');
// 	elementBg.classList.toggle('active');
// }

// function toggleSidebarLeave(){
// 	var element = document.getElementById('toggle-btn');
// 	element.classList.toggle('active');
	
// 	var vSidebar = document.getElementById('sidebar');
// 	vSidebar.classList.toggle('active');

// 	var elementBg = document.querySelector('.container');
// 	elementBg.classList.toggle('active');
// }