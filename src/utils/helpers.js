// Desc: Helper functions for the app to use in multiple places 
// Function to validate email
export function validateEmail(email) {
  // Regex to validate email

    // Regex to validate email with <text,dots and subdomains>@<IP address in square bracket OR subdomains OR alphanumeric>.<text>
    // var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    // Regex to validate email with <text,dots and subdomains>@<alphanumeric>.<text>
    //var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@([a-zA-Z]+\.)+[a-zA-Z]{2,}$/;
    
    // Regex to validate email with <text>@<text>.<text>
    var re = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }