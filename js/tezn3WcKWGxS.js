!function(t){"use strict";t(function(a){t(".register").formValidation({framework:"bootstrap",locale:"vi_VN",excluded:[":disabled"]}).on("success.form.fv",function(a){a.preventDefault();var e=t(a.target),o=(e.data("formValidation"),t(".submit",e).html());t(".submit",e).html('<i class="fal fa-spinner fa-spin fa-fw"></i>').prop("disabled",!0),t.ajax({url:ajaxurl,type:"POST",data:"action=contactform&"+e.serialize()+"&source="+encodeURIComponent(window.location.href),success:function(a){var e=jQuery.parseJSON(a);if(e&&1==e.status)window.location.href=thankurl;else bootbox.dialog({onEscape:!0,backdrop:!0,message:app.message.register_false,className:"popup-thanks popup-false"})},complete:function(){t(".submit",e).html(o).prop("disabled",!1)}})})})}(jQuery);