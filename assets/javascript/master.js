let h1 = document.getElementsByTagName('h1')[0]
        let _main = document.getElementsByTagName('main')[0]
        let _sec = document.getElementsByTagName('section')[0]


        // .....writing.....


        let txt = ['']
        let i = ''
        let j = ''
        let n = 0
        let k = ''
        
        function prm() {
            txt = ['Hello,there!', 'Im Elnaz Eshtiaghi', 'A Front-end Developer']
            const pics = ['1.webp', '2.webp', '3.webp']
            p = pics[n]
            k = txt[n]
            j = k.length
            i = 1;
            _main.style.backgroundImage = 'url(assets/img/' + pics[n] + ')'
            _sec.style.backgroundImage = 'url(assets/img/' + pics[n] + ')'
            

            if (n < (txt.length) - 1) {
                n++
            }
            else {
                n = 0
            }

        }

        prm()
        setInterval(() => {

            // .....writing.....

            if (i <= k.length) {
                h1.innerHTML = k.slice(0, i)
                i++
            }

            // .....return.....

            else {
                if (j >= 0) {
                    h1.innerHTML = k.slice(0, j)
                    j--
                }

                else {

                    prm()


                }

            }
        }
            , 200)

        // .....move.....

        _sec.addEventListener('mousemove', (e) => {
        let w = _sec.offsetWidth
            let ht = _sec.offsetHeight
            let x = ((e.offsetX) - (ht / 2)) / 50
            let y = ((e.offsetY) - (w / 2)) / 50
            console.log(w)
            _sec.style.transform = 'perspective(800px) rotateY(' + x + 'deg) rotateX(' + y + 'deg)'
            h1.style.transform = 'perspective(800px) rotateY(' + x + 'deg) rotateX(' + y + 'deg)'
            

        })

        // .....left.....

        
