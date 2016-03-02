function toggle_reply() {
    var reply_links_array = document.querySelectorAll('.reply_link');
    var reply_id = null; //will be assigned val later
    var reply_form = null;
    
    for (var i = 0; i < reply_links_array.length; i++) {
        reply_links_array[i].addEventListener("click", function () {
            reply_id = this.getAttribute("data-form_no");
            reply_form = document.getElementById(reply_id);
            if (reply_form.style.display == "none" || reply_form.style.display == "") {
                reply_form.style.display = 'block';
            }
        })                                    
    }
}

document.addEventListener("DOMContentLoaded", toggle_reply);