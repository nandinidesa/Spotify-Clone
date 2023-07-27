import React,{img} from "react";
const Songs = [
  {
    id: 1,
    favourite: false,
    songName: "Blinding Lights",
    artist: "The Weeknd",
    song: "./Blinding Lights.mp3",
    imgSrc:"https://i.pinimg.com/originals/49/47/ea/4947ea4f2af69d22b21411506d2eddf8.jpg",
  },
  {
    id: 2,
    favourite: false,
    songName: "StarBoy",
    artist: "The Weeknd",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fbeast.mp3?alt=media&token=ebf29a01-079b-44eb-969a-57ee66a15ee8",
    imgSrc:"https://i.pinimg.com/originals/49/47/ea/4947ea4f2af69d22b21411506d2eddf8.jpg",  },
  {
    id: 3,
    favourite: false,
    songName: "Die For You-Remix",
    artist: "The Weeknd,Ariana Grande",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fjoker.mp3?alt=media&token=9e79751a-726d-4359-8a26-116db925f6ff",
    imgSrc:"https://i.pinimg.com/originals/49/47/ea/4947ea4f2af69d22b21411506d2eddf8.jpg",
  },
  {
    id: 4,
    favourite: false,
    songName: "After Hours",
    artist: "The Weeknd",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fpeaky-blinder.mp3?alt=media&token=2ddb5cfb-f4e0-4604-b77c-a7f63894d3ec",
    imgSrc:"https://i.pinimg.com/originals/49/47/ea/4947ea4f2af69d22b21411506d2eddf8.jpg",
  },
  {
    id: 5,
    favourite: false,
    songName: "Remainder",
    artist: "The Weeknd",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fvalimai.mp3?alt=media&token=97c769ab-e2fb-4562-90aa-18c73b320bde",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fvalimai.jpg?alt=media&token=e11b839d-2514-4e1a-aa3a-20db3540a837",
  },
  {
    id: 6,
    songName: "Save Your Tears",
    artist: "The Weeknd",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FWhite-Town-Your-Women.mp3?alt=media&token=91817445-98ba-4a99-a4b4-6218f2742eb3",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fwhitetown.jpg?alt=media&token=25e1ec0c-24ec-4a11-a7a7-e55ec1fc50cf",
  },
  {
    id: 7,
    favourite: false,
    songName: "Charlie",
    artist: "Gopi Sundar",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FCharlie.mp3?alt=media&token=5a129114-bb31-4a5a-95b7-1767829df21e",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fcharlie.jpg?alt=media&token=81a1dc08-a9af-4db2-b74d-1f50315f9342",
  },
  {
    id: 8,
    favourite: false,
    songName: "Mask Off",
    artist: "Future",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FFuture-Mask-Off.mp3?alt=media&token=92d8b60f-2bca-406f-914a-40bfb9a9324a",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fmask.jpg?alt=media&token=22f0d7be-74b8-4c0d-849d-b777370e9559",
  },
  {
    id: 9,
    favourite: false,
    songName: "Hey Mama",
    artist: "David Guetta",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FHeyMamaRingtone.mp3?alt=media&token=850148f5-8a15-4f87-995d-711138d5d7a0",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fheymama.jpg?alt=media&token=2d8e8632-8051-4105-9760-3c715d797802",
  },
  {
    id: 10,
    favourite: false,
    songName: "Turkish Folk Battle Song",
    artist: "CVR Toon ",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FPlevne-turkish.mp3?alt=media&token=72f7e03b-2865-4ffb-a2d1-da4c4557fb80",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fturkish.jpg?alt=media&token=1f44ad17-43a8-4e1d-b232-a78b28cb9fe0",
  },
];

export { Songs };
