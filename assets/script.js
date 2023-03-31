var currentTime = dayjs().format('dddd,MMMM D hh:mm:ss');
$('#today').text(currentTime);

var storeScheduled = []
function rememberScheduled(){
    storeScheduled = []
$(".inputs").every(function(){
var scheduledText = ($(this)[0].value);
storeScheduled.push(scheduledText);
})

localStorage.setItem("hourly",JSON.stringify(storeScheduled))
}
$("button").on("click","save")