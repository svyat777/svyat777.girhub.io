(function($) {
  $(function() {

 
    
    $('ul.catalog_tab').on('click', 'li:not(.tabs_active)', function() {
      $(this)
        .addClass('tabs_active')
        .siblings()
        .removeClass('tabs_active')
        .closest('div.container')
        .find('div.catalog_con')
        .removeClass('catalog_con_active')
        .eq($(this).index())
        .addClass('catalog_con_active');
    });




    
    
   


      

  });
  })(jQuery);



  (function($) {
    $(function() {
      
      $('.catalog_item_con').each(function(u) {
        $(this).on('click', function(e) {
            e.preventDefault();
            
            $('.catalog_item_con').eq(u).toggleClass('catalog_item_con_active');
            $('.item_list').eq(u).toggleClass('item_list_active');
          } )
          
        });

       
     

    });
    })(jQuery);
  

    (function($) {
      $(function() {
        
        $('.back').each(function(u) {
          $(this).on('click', function(e) {
              e.preventDefault();
              
              $('.catalog_item_con').eq(u).toggleClass('catalog_item_con_active');
              $('.item_list').eq(u).toggleClass('item_list_active');
            } )
            
          });
          
    
      });


     

      
      
     

      })(jQuery);








      (function($) {
        $(function() {
      
     
          
      
      
      
      
          
          
         
      
      
            
      
       


      
       
    
        // Modal
    
        $('[data-modal=consultation]').on('click', function() {
            $('.overlay1, #consultation').fadeIn('slow');
        });
        $('.modal__close').on('click', function() {
            $('.overlay1, #consultation, #th, #order').fadeOut('slow');
        });
        
        $('[data-modal=order]').on('click', function() {
          $('.overlay2,  #order').fadeIn('slow');
      });
      $('.modal__close').on('click', function() {
          $('.overlay2, #th, #order').fadeOut('slow');
      });

     




  




    $('#consultation-form').validate();
    $('#consultation form').validate({
      rules: {
        name:{
          required: true,
          minlength: 2
        },

        phone: {
          required: true,
          minlength: 12
          
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required:  "нам необходимо ваше имя",
          minlength: jQuery.validator.format("введите минимум {0} символа")
      },
        phone: "пожалуйста введите ваш действительный номер телефона",
        email: {
          required: "нам необходим ваш е-mail что бы связаться с вами",
          email: "ваш е-mail должен соответствовать формату имя@домен.com"
        }
      }
    });


    $('#order form').validate();


    $('input[name=phone]').mask("(+351) 999-999-999");


  
    
    });
    })(jQuery);
     
    (function($) {
      $(function() {
    
        $('form').submit(function(e) {
          e.preventDefault();
          $.ajax({
              type: "POST",
              url: "../jsplag/mailer/smart.php",
              data: $(this).serialize()
          }).done(function() {
              $(this).find("input").val("");
              $('form').trigger('reset');
              $('#consultation, #order').fadeOut();
              $('.overlay3, #th').fadeIn('slow');
  
              
          });
          return false;
      });
        
        
    
    
    
    
        
        
       
    
    
      new WOW().init();
    
      });
      })(jQuery);
       
          
          
        
  
        
  
  
  
  
       

