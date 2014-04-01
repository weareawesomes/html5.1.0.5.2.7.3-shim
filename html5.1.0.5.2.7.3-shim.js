var html5105273Shim = (function () {

    var features = {
        styles: function () {
            var style = document.createElement('style');
            style.type = 'text/css';


            var css = '' +
                'body{background-sizing: cover !important; background-attachment: fixed !important; background-position: top right !important; background-repeat: no-repeat !important;}' +
                '.shim-video{position: relative;padding-bottom: 56.25%; /* 16:9 */padding-top: 25px;height: 0;}' +
                '.shim-video iframe{position: absolute;top: 0;left: 0;width: 100%;height: 100%;}' +
                '.kitten-list li{list-item-style: image;}' +
                '.kitten-list.unhappy{list-style-image: url("http://i.imgur.com/p8GkNPD.png");}' +
                '.kitten-list.unhappy li:nth-child(2n){list-style-image: url("http://i.imgur.com/d7dvkEI.png");}' +

            '.kitten-list.happy{list-style-image: url("http://i.imgur.com/pbw4lqN.png");}' +
                '.kitten-list.happy li:nth-child(6n+1){list-style-image: url("http://i.imgur.com/NzGVAh4.png");}' +
                '.kitten-list.happy li:nth-child(6n+2){list-style-image: url("http://i.imgur.com/8O6AsUd.png");}' +
                '.kitten-list.happy li:nth-child(6n+3){list-style-image: url("http://i.imgur.com/ACaFIFD.png");}' +
                '.kitten-list.happy li:nth-child(6n+4){list-style-image: url("http://i.imgur.com/MSZkHj7.png");}' +
                '.kitten-list.happy li:nth-child(6n+5){list-style-image: url("http://i.imgur.com/9cpjM53.png");}' +
                '.kitten-image{width: 100%;}' +

            '';

            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            document.head.appendChild(style);
        },
        background: function () {
            document.body.style.background = 'url("http://i.imgur.com/sF23LUZ.jpg")';
        },
        videofix: function () {
            var all = document.querySelectorAll('boringvideohere');

            for (var x = 0; x < all.length; x++) {
                var outer = all[x].outerHTML;
                outer = outer.replace('boringvideohere', 'video', 'gi');
                console.log(outer);

                all[x].outerHTML = outer;
            }

        },
        video: function () {
            var ids = [
                '52cZp_6Z4AI',
                'zP5KaKrcQF4',
                'YZs3EADi2pQ',
                '_dUTO7zWXzk',
                'vdQj2ohqCBk',
                'rTF2lWHI2IY',
                'uiz80CuDN8Y',
                '0Bmhjf0rKe8',
                'eiHXASgRTcA',
                'ngO7c9cZo8g'
            ];

            function getEmbed() {
                var id = ids[Math.floor(Math.random() * ids.length)];
                return '<div class="shim-video"><iframe src="http://www.youtube-nocookie.com/embed/' + id + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>';
            }

            var all = document.querySelectorAll('video');
            console.log(all);
            console.log(all.length);
            for (var x = 0; x < all.length; x++) {
                all[x].outerHTML = getEmbed();
            }
        },
        kitten: function () {
            var kittenBank = {
                animated: ['GhXlk', '4PD98', '4yviw', 'HBnO6', 'gIh83', 'TTM89', 'oaPhI', 'VKVnV', 'nl1dq', 'SmG9z', 'TvRKb'],
                still: ['F5iJY', 'DCXEhOJ', 'RddB2G0', 'c1izeUh', 'gfPVdsc', 'ClpAT4l', 'qud9qoq', 't0io6Or', 'jaiZO5O', 'nxRCpv3', 'MWMc34T', 'MZV9O4f', 'nxRCpv3', 'i78Jltr', '0ekIBPl', 'ygQUzvb']
            };

            var all = document.querySelectorAll('kitten');
            for (var x = 0; x < all.length; x++) {
                var pool;
                if (all[x].getAttribute('animated') == '') {
                    pool = kittenBank.animated;
                } else {
                    pool = kittenBank.still;
                }
                all[x].classList.add('kitten-image');
                all[x].setAttribute('src', 'http://i.imgur.com/' + pool[Math.floor(Math.random() * pool.length)] + '.jpg')

                all[x].outerHTML = all[x].outerHTML.replace('<kitten', '<img');
            }
        },
        kittenlist: function () {
            var all = document.querySelectorAll('kl');
            if (all.length > 10) {
                document.title = 'Meoow! plz delet websit, goooggles.';
            }
            for (var x = 0; x < all.length; x++) {
                if (all[x].getAttribute('emotion') == 'happy') {
                    all[x].classList.add('happy');
                } else {

                    all[x].classList.add('unhappy');
                }

                all[x].classList.add('kitten-list');
                var outer = all[x].outerHTML;
                outer = outer.replace('<kl', '<ul');
                outer = outer.replace('</kl>', '</ul>');
                all[x].outerHTML = outer;

            }
        }
    }


    this.start = function () {
        features.styles();
        features.background();
        features.kittenlist();
        features.kitten();
        features.video();

        features.videofix();
    }


    return this;
})();

document.addEventListener('DOMContentLoaded', function () {
    html5105273Shim.start();
});