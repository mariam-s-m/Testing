
$(function () {
    // This is the RSS Feeds suite that tests the feeds 
    describe('RSS Feeds', function () {
    // Determines if allfeeds has been defined and that it is not empty
    it('all feeds are defined ', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

 //TODO : Determines if allFeeds have a url and that the url is not empty
        it('all feeds urls are defined and not empty ', function () {
              for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                 expect(allFeeds[i].url).toBeTruthy('');
            }
        });

//TODO : Determines if allFeeds have a name and that the name is not empty 
        it('all feeds names are defined', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).toBeTruthy('');
            }
        });
    });
// test the menu
    describe('The Menu', function () {
        it('menu item is hidden', function () {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
        it('working toggle on click', function () {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        // Tests if the loadFeed function has at least a single '.entry' within
        it('define if the feed has at least a single entry', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

     describe('New Feed Selection', function() {
        var oldFeed, newFeed;
        
        beforeEach(function(done) {
            loadFeed(1, function() {
                console.log('old feed loaded!')
                oldFeed = $('.feed').html();
                loadFeed(2, function() {
                    console.log('new feed loaded!')
                    done();
                });
            });        
         });
		
		afterEach(function() {
            loadFeed(0);
        });  
	});
}());
