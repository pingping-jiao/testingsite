function dynamicallyLoadScript(url) { const script = document.createElement("script"); script.src = url; script.async = true; // load asynchronously document.head.appendChild(script); }
