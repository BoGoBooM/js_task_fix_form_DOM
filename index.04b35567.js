document.querySelectorAll("form input").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id),t.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1),e.parentElement.insertBefore(t,e),e.placeholder=e.name.charAt(0).toUpperCase()+e.name.slice(1)});
//# sourceMappingURL=index.04b35567.js.map
