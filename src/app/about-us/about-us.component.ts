import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  boardOfDirectors = [
    {
      role: 'President',
      name: 'Hunter Williams',
      image: '/assets/HunterWilliams.webp',
    },
    {
      role: 'Vice President',
      name: 'Scott Givens',
      image: '/assets/ScottGivens.webp',
    },
    {
      role: ' Secretary',
      name: 'Natalie Pannier',
      image: '/assets/NataliePannier.webp',
    },
    {
      role: 'Treasure',
      name: 'Madison Boeller',
      image: '/assets/MadisonBoeller.webp',
    },
    {
      role: 'City Ex Officio',
      name: 'Paul Sander',
      image: '/assets/PaulSander.webp',
    },
    {
      role: 'Board Member',
      name: 'Mike Seabaugh',
      image: '/assets/MikeSeabaugh.webp',
    },
    {
      role: 'Board Member',
      name: 'Tina Weber',
      image: '/assets/TinaWeber.webp',
    },
    {
      role: 'Board Member',
      name: 'Brian Thompson',
      image: '/assets/BrianThompson.webp',
    },
    {
      role: 'Board Member',
      name: 'Kathy Jansen',
      image: '/assets/KathyJansen.webp',
    },
    {
      role: 'Executive Director',
      name: 'Janna Clifton',
      image: '/assets/JannaClifton.webp',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
