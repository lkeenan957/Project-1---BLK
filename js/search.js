var sessionId = sessionStorage.getItem('sessionId');
var sessionInfo = getSessionFromFirebase('sessionId');
//if(sessionInfo == NULL || sessionInfo.lastActiveDate < currentTime - SessionTimeout) then redirect to login page and clear local storage
// else:
$("#signInTab").html("Hi " + sessionGetUsername);
// log whatever user is doing
// update sessionInfo.lastActiveDate
