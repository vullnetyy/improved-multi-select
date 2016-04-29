(function($){
	$.fn.improvedMultiSelect = function(){
		this.on('mousedown', 'option', function(ev){
            ev.preventDefault();

            if($(this).prop('selected')){
                $(this).prop('selected', false);
            }else{
                $(this).prop('selected', true);
            }

            $(this).parent().focus();
            $(this).parent().change();
            //TODO: there is a scrolling bug with this
        });

		return this;
	}
})(jQuery);