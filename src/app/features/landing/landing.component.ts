// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-landing',
//   // template: `
//   //   <section id="welcome">
//   //     <div class="back-img"></div>
//   //     <div class="overlay"></div>

//   //     <nav class="nav-bar">
//   //       <ul>
//   //         <li><a href="#welcome">Welcome</a></li>
//   //         <li><a href="#buy-or-sell">Buy or Sell</a></li>
//   //         <li><a href="#business-directory">Business Directory</a></li>
//   //       </ul>
//   //     </nav>

//   //     <div class="text">
//   //       <h2>Welcome to Uptown Jackson</h2>
//   //       <button class="learn-more">
//   //         <span class="circle" aria-hidden="true">
//   //           <span class="icon arrow"></span>
//   //         </span>
//   //         <span class="button-text">Create an Account</span>
//   //       </button>
//   //     </div>
//   //   </section>

//   //   <section id="buy-or-sell">
//   //     <div class="second-img"></div>
//   //     <div class="overlay"></div>

//   //     <div class="text">
//   //       <h2>Buy or Sell</h2>
//   //       <p>
//   //         Are you interested in buying or listing your business today? Click
//   //         here to learn more
//   //       </p>
//   //       <button class="learn-more">
//   //         <span class="circle" aria-hidden="true">
//   //           <span class="icon arrow"></span>
//   //         </span>
//   //         <span class="button-text">Learn More</span>
//   //       </button>
//   //     </div>
//   //   </section>
//   //   <section id="business-directory">
//   //     <div class="third-img"></div>
//   //     <div class="overlay"></div>

//   //     <div class="text">
//   //       <h2>Business Directory</h2>
//   //       <p>Click here to find businesses located in Uptown Jackson!</p>
//   //       <div id="container">
//   //         <button class="learn-more">
//   //           <span class="circle" aria-hidden="true">
//   //             <span class="icon arrow"></span>
//   //           </span>
//   //           <span class="button-text">Explore</span>
//   //         </button>
//   //       </div>
//   //     </div>
//   //   </section>
//   // `,
//   // styles: [
//   //   `
//   //     * {
//   //       margin: 0;
//   //       padding: 0;
//   //       box-sizing: border-box;
//   //     }

//   //     ::-webkit-scrollbar {
//   //       display: none;
//   //     }

//   //     #welcome,
//   //     #buy-or-sell,
//   //     #business-directory {
//   //       height: 100vh;
//   //       width: 100%;
//   //       position: relative;
//   //     }

//   //     #welcome .back-img {
//   //       width: 100%;
//   //       height: 100%;
//   //       background-image: url('https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/326555142_490248359945032_7861899996426420084_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zLOuWuYV9q0AX96WzLw&_nc_ht=scontent-ord5-2.xx&oh=00_AfDIpdx5l5UeWjHXgy0FvycA9njaCMdhD4AF5_4wj48vMQ&oe=6454B66C');
//   //       background-position: center center;
//   //       background-repeat: no-repeat;
//   //       background-size: cover;
//   //       position: absolute;
//   //       z-index: 1;
//   //     }

//   //     .overlay {
//   //       z-index: 2;
//   //       position: absolute;
//   //       width: 100%;
//   //       height: 100%;
//   //       background: rgb(70, 69, 69);
//   //       opacity: 0.35;
//   //     }

//   //     #welcome .nav-bar {
//   //       position: fixed;
//   //       z-index: 3;
//   //       top: 0;
//   //       left: 0;
//   //       width: 100%;
//   //       margin: 0 auto;
//   //     }

//   //     .nav-bar ul {
//   //       padding: 20px;
//   //       text-align: center;
//   //     }

//   //     .nav-bar ul li {
//   //       display: inline-block;
//   //       padding: 0 14px;
//   //       font-family: helvetica;
//   //       font-size: 1.4rem;
//   //     }

//   //     .nav-bar ul li a {
//   //       text-transform: uppercase;
//   //       text-decoration: none;
//   //       color: white;
//   //     }

//   //     .nav-bar ul li:hover a {
//   //       color: white;
//   //     }

//   //     #buy-or-sell .second-img {
//   //       width: 100%;
//   //       height: 100%;
//   //       background-image: url('https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/279889834_5048106708613436_2142232795810144282_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=g9i5_VtfrD0AX9YFXBm&_nc_ht=scontent-ord5-1.xx&oh=00_AfBt83bRBUJsqGFRWQoPJ1dXprXhdDOfr7NUPMe4MCr8nQ&oe=6455B3CD');
//   //       background-position: center center;
//   //       background-repeat: no-repeat;
//   //       background-size: cover;
//   //       position: absolute;
//   //       z-index: 1;
//   //     }

//   //     #business-directory .third-img {
//   //       width: 100%;
//   //       height: 100%;
//   //       background-image: url('https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/316296948_672739154509221_2282108460696777298_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WHnn4YsXmZYAX_XN50z&_nc_ht=scontent-ord5-1.xx&oh=00_AfDcF2bmpQep0UZxjd21_WK2mSk4J3ZKK--nRvvx7iRd6w&oe=64554858');
//   //       background-position: center center;
//   //       background-repeat: no-repeat;
//   //       background-size: cover;
//   //       position: absolute;
//   //       z-index: 1;
//   //     }
//   //     h2 {
//   //       font-size: 5rem;
//   //     }
//   //     .text {
//   //       font-size: 2rem;
//   //       display: flex;
//   //       color: white;
//   //       flex-direction: column;
//   //       align-items: center;
//   //       justify-content: center;
//   //       position: relative;
//   //       z-index: 5;
//   //       height: 100%;
//   //       width: 100%;
//   //     }

//   //     /* #welcome .title, #buy-or-sell .title, #business-directory .title .title {
//   //   position: relative;
//   //   z-index: 2;
//   //   width: 100%;
//   //   height: 100%;
//   //   text-align: center;
//   //   display: flex;
//   //   justify-content: center;
//   //   align-items: center;
//   // }
//   // #welcome .title h2, #buy-or-sell .title h2, #business-directory .title h2 .title h2 {
//   //   color: white;
//   //   font-family: helvetica;
//   //   font-weight: 700;
//   //   font-size: 70px;
//   //   letter-spacing: 2px;
//   // } */

//   //     .back-img,
//   //     .second-img,
//   //     .third-img,
//   //     .fourth-img {
//   //       background-attachment: fixed;
//   //     }

//   //     /* @import url('https://fonts.googleapis.com/css?family=Mukta:700'); */
//   //     * {
//   //       box-sizing: border-box;
//   //     }
//   //     *::before,
//   //     *::after {
//   //       box-sizing: border-box;
//   //     }

//   //     body {
//   //       font-family: 'Mukta', sans-serif;
//   //       font-size: 1rem;
//   //       line-height: 1.5;
//   //       display: flex;
//   //       align-items: center;
//   //       justify-content: center;
//   //       margin: 0;
//   //       min-height: 100vh;
//   //       background: #f3f8fa;
//   //     }

//   //     button {
//   //       position: relative;
//   //       display: inline-block;
//   //       cursor: pointer;
//   //       outline: none;
//   //       border: 0;
//   //       vertical-align: middle;
//   //       text-decoration: none;
//   //       background: transparent;
//   //       padding: 0;
//   //       font-size: inherit;
//   //       font-family: inherit;
//   //     }
//   //     button.learn-more {
//   //       width: 12rem;
//   //       height: auto;
//   //     }
//   //     button.learn-more .circle {
//   //       transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
//   //       position: relative;
//   //       display: block;
//   //       margin: 0;
//   //       width: 3rem;
//   //       height: 3rem;
//   //       background: #282936;
//   //       border-radius: 1.625rem;
//   //     }
//   //     button.learn-more .circle .icon {
//   //       transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
//   //       position: absolute;
//   //       top: 0;
//   //       bottom: 0;
//   //       margin: auto;
//   //       background: #fff;
//   //     }
//   //     button.learn-more .circle .icon.arrow {
//   //       transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
//   //       left: 0.625rem;
//   //       width: 1.125rem;
//   //       height: 0.125rem;
//   //       background: none;
//   //     }
//   //     button.learn-more .circle .icon.arrow::before {
//   //       position: absolute;
//   //       content: '';
//   //       top: -0.25rem;
//   //       right: 0.0625rem;
//   //       width: 0.625rem;
//   //       height: 0.625rem;
//   //       border-top: 0.125rem solid #fff;
//   //       border-right: 0.125rem solid #fff;
//   //       transform: rotate(45deg);
//   //     }
//   //     button.learn-more .button-text {
//   //       transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
//   //       font-size: 16px;
//   //       position: absolute;
//   //       top: 0;
//   //       left: 0;
//   //       right: 0;
//   //       bottom: 0;
//   //       padding: 0.75rem 0;
//   //       margin: 0 0 0 1.85rem;
//   //       color: #fbfbfd;
//   //       font-weight: 700;
//   //       line-height: 1.6;
//   //       text-align: center;
//   //       text-transform: uppercase;
//   //     }
//   //     button:hover .circle {
//   //       width: 100%;
//   //     }
//   //     button:hover .circle .icon.arrow {
//   //       background: #fff;
//   //       transform: translate(1rem, 0);
//   //     }
//   //     button:hover .button-text {
//   //       color: #fff;
//   //     }

//   //     @supports (display: grid) {
//   //       body {
//   //         display: grid;
//   //         grid-template-columns: repeat(4, 1fr);
//   //         grid-gap: 0.625rem;
//   //         grid-template-areas: '. main main .' '. main main .';
//   //       }

//   //       #container {
//   //         grid-area: main;
//   //         align-self: center;
//   //         justify-self: center;
//   //       }
//   //     }
//   //   `,
//   // ],
//   template: `
//   <ng-container *ngFor="let image of landingImages">
//     <img [src]="image" alt="">
//   </ng-container>
//   `
// })
// export class LandingComponent implements OnInit {
//   public landingImages: string[] = [
//     'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/316296948_672739154509221_2282108460696777298_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WHnn4YsXmZYAX_XN50z&_nc_ht=scontent-ord5-1.xx&oh=00_AfDcF2bmpQep0UZxjd21_WK2mSk4J3ZKK--nRvvx7iRd6w&oe=64554858',
//     'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/279889834_5048106708613436_2142232795810144282_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=g9i5_VtfrD0AX9YFXBm&_nc_ht=scontent-ord5-1.xx&oh=00_AfBt83bRBUJsqGFRWQoPJ1dXprXhdDOfr7NUPMe4MCr8nQ&oe=6455B3CD',
//     'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/326555142_490248359945032_7861899996426420084_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zLOuWuYV9q0AX96WzLw&_nc_ht=scontent-ord5-2.xx&oh=00_AfDIpdx5l5UeWjHXgy0FvycA9njaCMdhD4AF5_4wj48vMQ&oe=6454B66C'
//   ]
//   constructor() {}

//   ngOnInit(): void {}
// }
import { Component, OnInit } from '@angular/core';

export interface LandingItems {
  ref: string;
  title: string;
  text: string;
  buttonText: string;
  buttonUrl: string;
  imageUrl: string;
}

@Component({
  selector: 'app-landing',
  template: `
    <section>
      <nav
        class="fixed top-4 left-0 right-0 z-50 flex justify-around text-white text-lg max-w-4xl mx-auto"
      >
        <h5
          role="button"
          class="  cursor-pointer"
          (click)="scrollToElement('welcome')"
        >
          <h2
            class="text-4xl font-bold dark:text-white underline-hover drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          >
            Welcome
          </h2>
        </h5>
        <h5
          role="button"
          class="  cursor-pointer"
          (click)="scrollToElement('buy_or_sell')"
        >
          <h2
            class="text-4xl font-bold dark:text-white underline-hover drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          >
            Buy or Sell
          </h2>
        </h5>
        <h5
          role="button"
          class=" cursor-pointer"
          (click)="scrollToElement('business_directory')"
        >
          <h2
            class="text-4xl font-bold dark:text-white underline-hover drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          >
            Directory
          </h2>
        </h5>
      </nav>
      <ng-container *ngFor="let item of landingItems">
        <div
          [id]="item.ref"
          class="relative flex justify-center items-center"
          [ngStyle]="{ 'background-image': 'url(' + item.imageUrl + ')' }"
          style="height: 100vh; width: 100%; background-position: center; background-repeat: no-repeat; background-size: cover;"
        >
          <div class="flex flex-col items-center text-center text-white gap-4">
            <h2
              class="text-7xl font-bold mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            >
              {{ item.title }}
            </h2>
            <p
              class="mb-4 text-3xl font-semibold drop-shadow-[0_1.9px_1.9px_rgba(0,0,0,2)]"
            >
              {{ item.text }}
            </p>
            <button [routerLink]="item.buttonUrl" class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span
                class="button-text drop-shadow-[0_1.9px_1.9px_rgba(0,0,0,1.2)]  text-white"
                >{{ item.buttonText }}
              </span>
            </button>
          </div>
        </div>
      </ng-container>
    </section>
  `,
  styles: [
    `
      button {
        position: relative;
        display: inline-block;
        cursor: pointer;
        outline: none;
        border: 0;
        vertical-align: middle;
        text-decoration: none;
        background: transparent;
        padding: 0;
        font-size: inherit;
        font-family: inherit;
      }
      button.learn-more {
        width: 12rem;
        height: auto;
      }
      button.learn-more .circle {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: relative;
        display: block;
        margin: 0;
        width: 3rem;
        height: 3rem;
        background: #282936;
        border-radius: 1.625rem;
      }
      button.learn-more .circle .icon {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        background: #fff;
      }
      button.learn-more .circle .icon.arrow {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        left: 0.625rem;
        width: 1.125rem;
        height: 0.125rem;
        background: none;
      }
      button.learn-more .circle .icon.arrow::before {
        position: absolute;
        content: '';
        top: -0.25rem;
        right: 0.0625rem;
        width: 0.625rem;
        height: 0.625rem;
        border-top: 0.125rem solid #fff;
        border-right: 0.125rem solid #fff;
        transform: rotate(45deg);
      }
      button.learn-more .button-text {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        font-size: 16px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0.75rem 0;
        margin: 0 0 0 1.85rem;
        color: white;
        font-weight: 700;
        line-height: 1.6;
        text-align: center;
        text-transform: uppercase;
      }
      button:hover .circle {
        width: 100%;
      }
      button:hover .circle .icon.arrow {
        background: #fff;
        transform: translate(1rem, 0);
      }

      @supports (display: grid) {
        body {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 0.625rem;
          grid-template-areas: '. main main .' '. main main .';
        }

        #container {
          grid-area: main;
          align-self: center;
          justify-self: center;
        }
      }
    `,
  ],
})
export class LandingComponent implements OnInit {
  public landingItems: LandingItems[] = [
    {
      ref: 'welcome',
      title: 'Welcome to Uptown Jackson',
      text: 'Are you interested in buying or listing your business? Click here to get started!',
      buttonText: 'Get Started',
      buttonUrl: 'signup',
      imageUrl: '/assets/courtHouse.jpeg',
    },
    {
      ref: 'buy_or_sell',
      title: 'Buy or Sell',
      text: 'Click here to find businesses located in Uptown Jackson!',
      buttonText: 'Listings',
      buttonUrl: 'buildings',
      imageUrl: '/assets/forSale.jpeg',
    },
    {
      ref: 'business_directory',
      title: 'Business Directory',
      text: '',
      buttonText: 'Explore',
      buttonUrl: 'about',
      imageUrl: '/assets/businessDirectory.jpeg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  scrollToElement(ref: string): void {
    const element = document.getElementById(ref);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
}
