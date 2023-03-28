import imageAbs from "./images/abs.jpg";
import imageBack from "./images/back.jpg";
import imageChest from "./images/back.jpg";
import imageShoulders from "./images/shoulders.jpg";
import imageArms from "./images/arm.jpg";
import imageLeg from "./images/leg.jpg";
import imageGlutes from "./images/back.jpg"
export const posts = [
    {
        title: "Chest",
        description:
          "Chest workouts typically involve exercises such as bench press, push-ups, and chest flies. These exercises target the pectoral muscles, which are the main muscles in the chest.",
          imagePath: {imageChest},
      },
      {
        title: "Back",
        description:
          "Dead lifts: Stand with a weighted barbell on the ground and lift it up to hip level. Rows: Stand with a weight in each hand and pull the weights up towards your chest while squeezing your shoulder blades together.",
          imagePath: {imageBack},
      },
      {
        title: "Shoulders",
        description:
          "Overhead press - compound exercise that targets the shoulders, triceps, and upper back. Lateral raise - isolation exercise that targets the medial deltoids.",
          imagePath: {imageShoulders},
      },
      {
        title: "Arms (biceps and triceps)",
        description:
          "Bicep curls - isolation exercise that targets the biceps. Tricep extensions - isolation exercise that targets the triceps.",
          imagePath: {imageArms},
      },
      {
        title: "Abs (abdominals)",
        description:
          "Planks - isometric exercise that targets the entire core. Crunches - isolation exercise that targets the rectus abdominis. Russian twists - isolation exercise that targets the obliques.",
          imagePath: {imageAbs},
      },
        
      {
        title: "Legs (quadriceps, hamstrings, calves)",
        description:
          "Squats - compound exercise that targets the quadriceps, hamstrings, and glutes. Lunges - compound exercise that targets the quadriceps, hamstrings, and glutes.",
          imagePath: {imageLeg},
      },
        
      {
        title: "Glutes (buttocks)",
        description:
          "Squats - compound exercise that targets the glutes, quads, and hamstrings. Lunges - compound exercise that targets the glutes, quads, and hamstrings.",
          imagePath: {imageGlutes},
      },
        
    ]
