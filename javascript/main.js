const { createApp } = Vue;

createApp({
    data() {
        return {
            currentImageIndex: 0,
            currentTitleIndex: 0,

            movie: {
                images: [
                    './img/01.jpg',
                    './img/02.jpg',
                    './img/03.jpg',
                    './img/04.jpg',
                    './img/05.jpg'

                ],
                title: [
                    `Marvel's Spiderman Miles Morale`, `Ratchet & Clank: Rift Apart`, `Fortnite`, `Stray`, `Marvel's Avengers`
                ],
                text: [
                    `Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.`,
                    `Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.`,
                    `Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.`,
                    `Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city`,
                    `Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.`,
                ]

            }
        };
    },
    methods: {
        goPrev() {
            if (this.currentImageIndex === 0) {
                this.currentImageIndex = this.movie.images.length - 1;
            } else {
                this.currentImageIndex--;
            }

        },
        goNext() {
            if (this.currentImageIndex === this.movie.images.length - 1) {
                this.currentImageIndex = 0;
            } else {
                this.currentImageIndex++;
            }
        },
        onThumbnailClick(clickedImageIndex) {
            this.currentImageIndex = clickedImageIndex;
        },
    },
}).mount("#app")
