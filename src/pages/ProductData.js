// productsData.js
import Basic from "./photos/basic.jpg"
import Intermediate from "./photos/intermediate.jpg"
import Advanced from "./photos/advanced.jpg"
import Micromouse from "./photos/micromouse.jpg"
import LineFollower from "./photos/linefollower.jpg"
const productsData = {
    kits: [
        {
            id: 1,
            name: 'MICROCONTROLLER KIT V.1(MINI)',
            inline: 'Comprehensive electronics learning kit!',
            price: '₹1299',
            description:`🚀 Introducing the Mini Microcontroller Mastery Kit!

🌟 6 Basic Sensors & ⚙ 2 Motion Controls for hands-on learning.

🔌 Plug-and-Play design for effortless experimentation.

🤖 Compatible Microcontrollers: Arduino Nano, ESP32.

Perfect for students, hobbyists, and innovators to explore electronics and robotics with ease!

💡 Pre-order now with E-Groots and start building your future!`,
            image: Basic, // Adjust the path based on your setup
        },
        {
            id: 2,
            name: 'MICROCONTROLLER MASTERY KIT V.1',
            inline: 'Comprehensive electronics learning kit!',
            price: '₹3899',
            description:`🚀 Introducing the Mini Microcontroller Mastery Kit!

🌟 6 Basic Sensors & ⚙ 2 Motion Controls for hands-on learning.

🔌 Plug-and-Play design for effortless experimentation.

🤖 Compatible Microcontrollers: Arduino Nano, ESP32, STM32, Raspberry Pi Pico.

Perfect for students, hobbyists, and innovators to explore electronics and robotics with ease!

`,
            image: Intermediate,
        },
        {
            id: 3,
            name: 'MICROCONTROLLER MASTERY KIT V.2',
            inline: 'Comprehensive electronics learning kit!',
            price: '₹8999',
            description:`🚀 Introducing the Ultimate Microcontroller Mastery Kit!

🌟 15 Advanced Sensors for cutting-edge applications.

⚙ 4 Motion Control Modules for precise robotics innovation.

🔗 4 Communication Protocols for flexible and seamless connectivity.

🖥 HMI Display Integration for enhanced user interaction.

📊 Real-Time Dashboard Access for monitoring and controlling your projects.

🔌 Plug-and-Play Design optimized for Raspberry Pi and Arduino Mega.

Perfect for those ready to explore advanced technology with real-time control and hands-on learning!

💡 Pre-order now and lead the future with E-Groots!`,
            image: Advanced,
        },
    ],
    bots: [
        {
            id: 4,
            name: 'MICROMOUSE V.1',
            inline: 'MAZE SOLVER KIT V.1',
            price: 'Customised',
            description:`Micromouse is a small, autonomous robot 🤖 designed for maze-solving competitions. 🏁 Equipped with sensors for navigation and motors for movement, it detects walls and obstacles, 🛑 plans its route, and optimizes its path to reach the maze's center. 🎯 The micromouse uses algorithms like flood-fill or dead reckoning for efficient navigation. Compact, lightweight, and agile, 🏎 it serves as an ideal platform for learning embedded systems, robotics, and algorithm design. 💡`,
            image: Micromouse,
        },
        {
            id: 5,
            name: 'LINE FOLLOWER V.1',
            inline: 'PID TUNER LFR',
            price: 'Customised',
            description:`The Line Follower Robot by E-Groots 🚀 is a smart and durable bot designed for precise line detection using advanced IR sensors 👀. With high-speed motor drivers ⚙️ and a lightweight, customizable design 💡, it’s perfect for education, competitions, and prototyping. Compatible with Arduino and Raspberry Pi 🛠️, it runs on a rechargeable battery 🔋 for extended use. Elevate your robotics journey with this powerful and innovative tool! 🌟`,
            image: LineFollower,
        },
       
    ],
};

export default productsData;
