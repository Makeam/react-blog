export const items = [
    {
        id: 1,
        text: 'Blog item one',
        img:{
            alt: 'alternative text'
            , src: 'https://yandex.ru/images/today?size=200x120'
            , width: '200px'
            , height: '120px'
        },
        meta:{
            author: 'July Caesar',
            created_at: '2017-02-15',
            updated_at: '2017-02-17',
            likesCount: 15
        }
    },
    {
        id: 2,
        // text: 'Blog item two',
        img:{
            alt: 'alternative text two'
            , src: 'http://mtdata.ru/u25/photo7586/20648975464-0/original.jpg'
            , width: '200px'
            , height: '120px'
        },
        meta:{
            author: 'Pythagoras Of Samos',
            created_at: '2017-02-15',
            updated_at: '2017-02-17',
            likesCount: 25
        }
    },
    {
        id: 3,
        meta:{
            author: 'Незнайка на Луне',
            created_at: Date.now()
        }
        
    },
    {
        id: 4,
        text: 'Blog item three',
        img:{
            alt: 'alternative text three'
            , src: 'http://mashstroy.net/assets/files/2014/07/wpid-f9ea4cc2770ce7acd26ea3eedd6b6d0e.jpg'
            , width: '200px'
            , height: '120px'
        },
        meta:{
            author: 'Socrates',
            created_at: '2017-02-15',
            updated_at: '2017-02-17',
            likesCount: 10
        }
    }

];