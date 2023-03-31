var button = $("saveButton")

var currentTime = dayjs().format('dddd,MMMM D hh:mm:ss');
$('#today').text(currentTime);



var currentTime = dayjs().format('dddd,MMMM D YYYY, hh:mm:ss');
$('#today').text(currentTime);


function readProjectsFromStorage() {
    var projects = localStorage.getItem('projects');
    if (projects) {
      projects = JSON.parse(projects);
    } else {
      projects = [];
    }
    return projects;
  }
  
  // Takes an array of projects and saves them in localStorage.
  function saveProjectsToStorage(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
  }