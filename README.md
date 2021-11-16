Activities.js includes componentdidmount()

Use of state and render functions did not allow me to access the value associated with the input 
Search box which was using onChange. I created an event handler function but the data from the event handler wasn't able to be accessed in my component mount. I set the search to equal 'Biking' since a variable could not access onChange data.

Another shortcoming was that I was able to create a list of park names and a list of its associated links for each activity. The issue is that I could not iterate and map one link to one park name in the render function <href>. Therefore I set all the text to equal one link for Acadia. 