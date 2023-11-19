function sendMail(){
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    const ServiceID= "service_q2gmcvn"
    const templateID="template_cn62vo6"
   
    emailjs.send(ServiceID,templateID, params)
    .then(
       (res) =>{
           document.getElementById("name").value=""
           document.getElementById("email").value=""
           document.getElementById("message").value=""
           console.log(res)
   
           alert("Message sent successfully")
       }
    )
    .catch((err) => console.log(err))
 }

 let $root = $('html, body');
 $('a[href^="#"]').click(function() {
     let href = $.attr(this, 'href');
     $root.animate({
       scrollTop: $(href).offset().top
     }, 500, function() {
       window.location.hash = href;
     });
     return false;
   });