$(function() {
    // Smallscreen nav
    var nav = responsiveNav('.nav-collapse', {
        customToggle: "#open-nav",
        closeOnNavClick: true,
    });

    // Skip links
    $('#to-top, #markdown-toc a').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 300);
                return false;
            }
        }
    });

    // Lightboxed image gallery
    $('.image-gallery').magnificPopup({
        delegate: 'a',
        gallery: {
            enabled: true,
            tCounter: '<span class="mfp-counter">%curr%/%total%</span>' // markup of counter
        },
        type: 'image'
    });

    // Lightboxed content images
    $('#content a:has(>img)').magnificPopup({
        gallery: {
            enabled: true,
            tCounter: '<span class="mfp-counter">%curr%/%total%</span>' // markup of counter
        },
        type: 'image'
    });

    // Parse RSS Feed
    $('*[data-rss*="http"]').each(function() {
        $.getFeed({
            url: $(this).attr('data-rss'),
            feedparent: $(this),
            success: function(feed) {
              this.feedparent.find('ol').empty();
              for(var i=0; i < 4; i++) {
                  if (feed.items[i]) {
                     var shortenedDescription = $.trim(feed.items[i].description).substring(0, 250).split(' ').slice(0, -1).join(' ') + "...";
                     this.feedparent.find('ol').append('<li><h3><a href="' + feed.items[i].link + '">' + feed.items[i].title + '</a></h3><p>' + shortenedDescription + '</p></li>');
                  }
              }
            }
        });
    });
});
