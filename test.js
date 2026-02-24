function dynamicallyLoadScript(url) { 
  const script = document.createElement("script"); 
  script.src = url; 
  script.async = true; 
  // load asynchronously 
  document.head.appendChild(script); 
}


dynamicallyLoadScript("https://js-cdn.dynatrace.com/jstag/15c157a40ab/bf95489cqg/309d5a69f212598f_complete.js");
