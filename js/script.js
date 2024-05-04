let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
   menu.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

document.querySelectorAll('.view-property .details .thumb .small-images img').forEach(images =>{
   images.onclick = () =>{
      src = images.getAttribute('src');
      document.querySelector('.view-property .details .thumb .big-image img').src = src;
   }
});

document.querySelectorAll('.faq .box-container .box h3').forEach(headings => {
   headings.onclick = () => {
       const currentBox = headings.parentElement;
       if (!currentBox.classList.contains('active')) {
           // Close all other boxes
           document.querySelectorAll('.faq .box-container .box').forEach(box => {
               if (box !== currentBox && box.classList.contains('active')) {
                   box.classList.remove('active');
               }
           });

           // Open the clicked box
           currentBox.classList.add('active');
       } else {
           // If the clicked box is already open, close it
           currentBox.classList.remove('active');
       }
   };
});

document.addEventListener("DOMContentLoaded", function () {
   // Select the form
   const contactForm = document.querySelector(".contact form");

   // Add a submit event listener to the form
   contactForm.addEventListener("submit", function (event) {
     // Prevent the default form submission
     event.preventDefault();

     // Get the values from the form
     const name = contactForm.querySelector('[name="name"]').value;
     const email = contactForm.querySelector('[name="email"]').value;
     const number = contactForm.querySelector('[name="number"]').value;
     const message = contactForm.querySelector('[name="message"]').value;

     // You can replace this part with actual logic to send an email or store the form data
     // For demonstration, let's assume you're using an alert
     alert(
       `Thank you, ${name}! Your message has been received. You will receive a response within five working days.`
     );

     // Reset the form after submission
     contactForm.reset();
   });
 });

 var coll = document.getElementsByClassName("collapsible");
		var i;

		for (i = 0; i < coll.length; i++) {
		  coll[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			if (content.style.display === "block") {
			  content.style.display = "none";
			} else {
			  content.style.display = "block";
			}
		  });
		}

      document.getElementById('searchForm').addEventListener('submit', function(event) {
         event.preventDefault(); // Prevent the form from submitting
         var option = document.getElementsByName('option')[0].value;
         if (option === 'buy') {
            window.location.href = 'buy.html';
         } else if (option === 'rent') {
            window.location.href = 'rent.html';
         }
      });